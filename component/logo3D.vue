<template>
  <div
    ref="containerRef"
    class="relative w-full max-w-lg aspect-[5/4] mx-auto bg-gray-800 rounded-lg overflow-hidden z-0"
  >
    <div
      v-if="isLoading"
      class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10 pointer-events-none"
    >
      <span class="text-white text-sm animate-pulse">Loading 3D...</span>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, nextTick } from 'vue'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass'

const containerRef = ref(null)
const isLoading = ref(true)

onMounted(async () => {
  await nextTick()
  const container = containerRef.value
  if (!container) return

  const width = container.clientWidth || 500
  const height = container.clientHeight || 400

  const scene = new THREE.Scene()
  const bgColor = new THREE.Color('#111827')
  scene.background = bgColor

  const camera = new THREE.PerspectiveCamera(70, width / height, 0.01, 1000)
  camera.position.set(0, 0.4, 0.2)

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false })
  renderer.setClearColor(bgColor, 1)
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(width, height)
  container.appendChild(renderer.domElement)

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
  scene.add(ambientLight)

  const pointLight = new THREE.PointLight(0xffffff, 2, 10)
  pointLight.position.set(0, 1, 1)
  scene.add(pointLight)

  const composer = new EffectComposer(renderer)
  composer.addPass(new RenderPass(scene, camera))

  const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(width, height),
    0.6,
    0.2,
    0.8
  )
  composer.addPass(bloomPass)

  const controls = new OrbitControls(camera, renderer.domElement)
  controls.target.set(0, 0, 0)
  controls.enableDamping = true
  controls.enableZoom = true
  controls.enableRotate = true
  controls.enablePan = true
  controls.autoRotate = true
  controls.autoRotateSpeed = 2
  controls.update()

  const loader = new GLTFLoader()
  loader.load(
    '/models/untitled.glb',
    (gltf) => {
      const model = gltf.scene
      isLoading.value = false

      const box = new THREE.Box3().setFromObject(model)
      const center = box.getCenter(new THREE.Vector3())
      model.position.sub(center)

      model.scale.set(1.5, 1.5, 1.5)
      model.rotation.y = -Math.PI / 2

      model.traverse((child) => {
        if (child.isMesh) {
          child.material.emissive = new THREE.Color(0xffffff)
          child.material.emissiveIntensity = 0.5
        }
      })

      scene.add(model)

      const animate = () => {
        requestAnimationFrame(animate)
        controls.update()
        composer.render()
      }

      animate()
    },
    (xhr) => console.log(`${(xhr.loaded / xhr.total * 100).toFixed(0)}% loaded`),
    (error) => {
      isLoading.value = false
      console.error('Model failed to load:', error)
    }
  )

  window.addEventListener('resize', () => {
    const newWidth = container.clientWidth || 500
    const newHeight = container.clientHeight || 400
    camera.aspect = newWidth / newHeight
    camera.updateProjectionMatrix()
    renderer.setSize(newWidth, newHeight)
    composer.setSize(newWidth, newHeight)
  })
})
</script>

<style scoped>
canvas {
  touch-action: auto;
}
</style>
