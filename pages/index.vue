<template>
<div class="bg-gray-900 text-white overflow-x-hidden">
    <!-- Navigation -->
    <nav class="fixed top-0 w-full z-50 glass-effect transition-all scroll-smooth">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16 gap-4 animate-fade-in">
                <!-- Logo -->
                    <div class="flex items-center gap-4 animate-fade-in">
                    <!-- Neon Logo with Glow Container -->
                    <div class="relative group w-16 h-16 flex items-center justify-center rounded-xl">
                        <img src="../public/img/logov3.png" alt="logo" class="w-14 h-14 object-contain neon-logo group-hover:scale-105 transition-transform duration-300 ease-in-out">
                        <div class="absolute inset-0 rounded-xl border-2 border-pink-500 blur-md opacity-30 animate-pulse"></div>
                    </div>
                <div class="ml-3">
                    <h1 class="text-logo text-2xl font-black neon-white">INDY LABEL</h1>
                    <p class="text-xs text-gray-400 font-inter">Creative Design Studio</p>
                </div>
                </div>

                <!-- Navigation Links -->
                <div class="hidden md:block slide-in-right">
                    <div class="flex items-center space-x-8">
                        <a href="#home" class="text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 transform">Home</a>
                        <a href="#about" class="text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 transform">About</a>
                        <a href="#services" class="text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 transform">Services</a>
                        <a href="#portfolio" class="text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 transform">Portfolio</a>
                        <a href="#contact" class="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 pulse-glow">Contact</a>
                    </div>
                </div>

                <!-- Mobile menu button -->
                <div class="md:hidden">
                    <button id="mobile-menu-btn" class="text-gray-300 hover:text-white focus:outline-none focus:text-white">
                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile menu -->
        <div id="mobile-menu" class="md:hidden hidden glass-effect">
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a href="#home" class="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-300">Home</a>
                <a href="#about" class="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-300">About</a>
                <a href="#services" class="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-300">Services</a>
                <a href="#portfolio" class="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-300">Portfolio</a>
                <a href="#contact" class="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-300">Contact</a>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="relative min-h-screen flex items-center justify-center">
        <div id="three-container"></div>
        
        <div class="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="fade-in-up">
                <h1 class="text-5xl md:text-7xl font-bold text-logo mb-6 neon-white">
                    INDY LABEL
                </h1>
                <p class="text-xl md:text-2xl text-gray-300 mb-8 floating-animation">
                    Creative Design Studio • Branding • Web Development
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <button class="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 pulse-glow">
                        Explore Our Work
                    </button>
                    <button class="glass-effect text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105">
                        Get Started
                    </button>
                </div>
            </div>
        </div>

        <!-- Floating geometric shapes -->
        <div class="absolute inset-0 pointer-events-none">
            <div class="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 floating-animation"></div>
            <div class="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-20 floating-animation" style="animation-delay: 2s;"></div>
            <div class="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full opacity-20 floating-animation" style="animation-delay: 4s;"></div>
            <div class="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg opacity-20 floating-animation" style="animation-delay: 1s;"></div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 bg-gray-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16 fade-in-up">
                <h2 class="text-head text-4xl md:text-5xl font-bold text-purple-400 drop-shadow-[0_0_10px_#60A5FA] mb-4">About We</h2>
                <p class="text-xl text-gray-300">Where creativity meets innovation</p>
            </div>
            
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div class="slide-in-left">
                    <h3 class="text-head text-3xl font-bold mb-6 text-white">We Create Digital Excellence</h3>
                    <p class="text-gray-300 mb-6 text-lg leading-relaxed">
                        INDY LABEL is a cutting-edge creative design studio specializing in modern web development, 
                        branding, and digital experiences. We combine artistic vision with technical expertise to 
                        deliver stunning results that captivate audiences and drive success.
                    </p>
                    <div class="space-y-4">
                        <div class="flex items-center">
                            <div class="w-2 h-2 bg-purple-500 rounded-full mr-4"></div>
                            <span class="text-gray-300">Innovative Design Solutions</span>
                        </div>
                        <div class="flex items-center">
                            <div class="w-2 h-2 bg-pink-500 rounded-full mr-4"></div>
                            <span class="text-gray-300">Cutting-edge Technology</span>
                        </div>
                        <div class="flex items-center">
                            <div class="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
                            <span class="text-gray-300">Client-Focused Approach</span>
                        </div>
                    </div>
                </div>
                
                <!-- 3D Logo Viewer -->
                <div class="slide-in-right">
            <div class="backdrop-blur-sm bg-gray-800/30 rounded-lg overflow-hidden shadow-xl">
                <div class="relative z-10 flex justify-center items-center rounded-3xl p-6">
                    <Logo3D />
                </div>
                </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-20 bg-gray-900 relative overflow-hidden">
        <!-- Floating Background Elements -->
        <div class="floating-bg top-20 left-10"></div>
        <div class="floating-bg top-40 right-20" style="animation-delay: -2s;"></div>
        <div class="floating-bg bottom-20 left-1/3" style="animation-delay: -1s;"></div>
        
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="text-center mb-16 fade-in-up">
                <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-purple-400 drop-shadow-[0_0_10px_#60A5FA] mb-4">
                    Our Services
                </h2>
                <p class="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                    Complete printing solutions from concept to delivery
                </p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                <!-- Create Card -->
                <div class="glass-effect1 p-8 rounded-2xl card-hover fade-in-up stagger-1 relative">
                    <!-- <div class="service-number">1</div> -->
                    <div class="progress-line" style="width: 100%;"></div>
                    
                    <div class="mb-1 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center overflow-hidden">
                    <img src="/public/GIF/create.gif" alt="Create Icon" class="w-16 h-16 object-contain mb-1" />
                    </div>

                    
                    <h3 class="text-2xl md:text-3xl font-bold mb-4 text-white">Create</h3>
                    <p class="text-gray-300 leading-relaxed text-base md:text-lg">
                        Professional product design services from concept to creation. We transform your ideas into stunning visual designs with creative layouts, typography, and graphics tailored for print media.
                    </p>
                    
                    <div class="mt-6 flex flex-wrap gap-2">
                        <span class="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Design</span>
                        <span class="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Layout</span>
                        <span class="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Concept</span>
                    </div>
                </div>
                
                <!-- Produce Card -->
                <div class="glass-effect1 p-8 rounded-2xl card-hover fade-in-up stagger-2 relative">
                    <!-- <div class="service-number">2</div> -->
                    <div class="progress-line" style="width: 100%;"></div>
                    
                    <div class="mb-1 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center overflow-hidden">
                    <img src="/public/GIF/produce.gif" alt="Create Icon" class="w-16 h-16 object-contain mb-1" />
                    </div>
                    
                    <h3 class="text-2xl md:text-3xl font-bold mb-4 text-white">Produce</h3>
                    <p class="text-gray-300 leading-relaxed text-base md:text-lg">
                        State-of-the-art printing production process using high-quality materials and advanced printing technology. We ensure every printed material meets the highest standards of quality and durability.
                    </p>
                    
                    <div class="mt-6 flex flex-wrap gap-2">
                        <span class="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Printing</span>
                        <span class="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Quality</span>
                        <span class="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Materials</span>
                    </div>
                </div>
                
                <!-- Deliver Card -->
                <div class="glass-effect1 p-8 rounded-2xl card-hover fade-in-up stagger-3 relative md:col-span-2 lg:col-span-1">
                    <!-- <div class="service-number">3</div> -->
                    <div class="progress-line" style="width: 100%;"></div>
                    
                    <div class="mb-1 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center overflow-hidden">
                    <img src="/public/GIF/deliver.gif" alt="Create Icon" class="w-16 h-16 object-contain mb-1" />
                    </div>
                    
                    <h3 class="text-2xl md:text-3xl font-bold mb-4 text-white">Deliver</h3>
                    <p class="text-gray-300 leading-relaxed text-base md:text-lg">
                        Fast and reliable delivery service to get your printed products safely to your doorstep. We provide tracking information and ensure secure packaging for all shipments nationwide.
                    </p>
                    
                    <div class="mt-6 flex flex-wrap gap-2">
                        <span class="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Shipping</span>
                        <span class="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Tracking</span>
                        <span class="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Secure</span>
                    </div>
                </div>
            </div>
            
            <!-- Process Flow Indicator -->
            <div class="mt-16 flex justify-center items-center space-x-4 fade-in-up" style="animation-delay: 0.7s;">
                <div class="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                <div class="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded"></div>
                <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
                <div class="w-16 h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded"></div>
                <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
            </div>
            
            <div class="text-center mt-8 fade-in-up" style="animation-delay: 0.9s;">
                <p class="text-gray-400 text-lg">Create → Produce → Deliver</p>
            </div>
        </div>
    </section>

    <!-- Elegant Portfolio Section -->
    <section id="portfolio" class="min-h-screen py-20 relative overflow-hidden bg-gray-900">
        
        <div class="fixed inset-0 luxury-gradient opacity-50 pointer-events-none"></div>
        

        <div class="absolute inset-0">
            <div class="absolute top-32 left-20 w-72 h-72 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-3xl float"></div>
            <div class="absolute top-64 right-32 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-2xl float-reverse"></div>
            <div class="absolute bottom-40 left-32 w-80 h-80 bg-gradient-to-br from-indigo-500/15 to-transparent rounded-full blur-3xl float"></div>
            
            
            <div class="absolute top-1/3 left-1/4 w-1 h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent rotate-12 luxury-pulse"></div>
            <div class="absolute top-1/2 right-1/3 w-1 h-24 bg-gradient-to-b from-transparent via-purple-400/30 to-transparent -rotate-12 luxury-pulse" style="animation-delay: 1s;"></div>
            <div class="absolute bottom-1/3 left-1/2 w-1 h-20 bg-gradient-to-b from-transparent via-blue-400/30 to-transparent rotate-45 luxury-pulse" style="animation-delay: 2s;"></div>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div class="text-center mb-24 reveal">
                <div class="mb-8">
                    <div class="inline-block luxury-icon diamond-spin mb-6">
                        <div class="w-8 h-8 bg-gradient-to-br from-purple-400 to-blue-400 transform rotate-45"></div>
                    </div>
                </div>
                
                <h2 class="heading-font text-7xl md:text-9xl font-bold text-shimmer mb-8 leading-tight">
                    Portfolio
                </h2>
                
                <div class="max-w-4xl mx-auto">
                    <p class="body-font text-2xl text-white/90 mb-8 leading-relaxed font-light">
                        Crafting exceptional experiences through 
                        <span class="text-purple-300 font-medium">premium design</span> and 
                        <span class="text-blue-300 font-medium">luxury partnerships</span>
                    </p>
                    
                    
                    <div class="flex flex-wrap justify-center gap-6 mb-12">
                        <div class="glass-effect px-8 py-4 rounded-full slide-up-elegant body-font font-medium text-white" style="animation-delay: 0.2s;">
                            Premium Partnerships
                        </div>
                        <div class="glass-effect px-8 py-4 rounded-full slide-up-elegant body-font font-medium text-white" style="animation-delay: 0.4s;">
                            Luxury Materials
                        </div>
                        <div class="glass-effect px-8 py-4 rounded-full slide-up-elegant body-font font-medium text-white" style="animation-delay: 0.6s;">
                            Precision Crafting
                        </div>
                    </div>
                </div>
            </div>

        
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
                <div class="card-luxury rounded-3xl elegant-glow reveal" style="animation-delay: 0.2s;">
                    <div class="p-10 h-96 flex flex-col justify-between">
                        <div class="text-center">
                            <div class="luxury-icon mx-auto mb-8 luxury-pulse">
                                <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42zM13 20.01L4 11V4h7v-.01L20.01 13 13 20.01z"/>
                                    <circle cx="6.5" cy="6.5" r="1.5"/>
                                </svg>
                            </div>
                            
                            <h3 class="heading-font text-3xl font-semibold text-white mb-4">Premium Labels</h3>
                            <p class="body-font text-white/80 text-lg mb-8 leading-relaxed">
                                Precision-cut vinyl and paper labels with superior adhesion and durability
                            </p>
                            
                            <div class="flex flex-wrap justify-center gap-3">
                                <span class="glass-effect px-4 py-2 rounded-full text-sm text-white/90 body-font">Waterproof</span>
                                <span class="glass-effect px-4 py-2 rounded-full text-sm text-white/90 body-font">UV Resistant</span>
                            </div>
                        </div>
                    </div>
                    
                
                    <div class="absolute inset-0 bg-gradient-to-br from-purple-900/95 to-black/95 opacity-0 hover:opacity-100 transition-all duration-700 flex items-center justify-center rounded-3xl">
                        <div class="text-center p-8">
                            <div class="luxury-icon mx-auto mb-6">
                                <svg class="w-12 h-12 text-purple-300" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                </svg>
                            </div>
                            <h4 class="heading-font text-2xl font-semibold text-white mb-4">Exceptional Quality</h4>
                            <p class="body-font text-white/90 mb-6">Engineered for perfection with premium materials</p>
                            <button class="glass-effect px-8 py-3 rounded-full text-white body-font font-medium hover:bg-white/20 transition-all">
                                Explore Collection
                            </button>
                        </div>
                    </div>
                </div>

            
                <div class="card-luxury rounded-3xl elegant-glow reveal" style="animation-delay: 0.4s;">
                    <div class="p-10 h-96 flex flex-col justify-between">
                        <div class="text-center">
                            <div class="luxury-icon mx-auto mb-8 luxury-pulse" style="animation-delay: 1s;">
                                <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                                </svg>
                            </div>
                            
                            <h3 class="heading-font text-3xl font-semibold text-white mb-4">Luxury Stickers</h3>
                            <p class="body-font text-white/80 text-lg mb-8 leading-relaxed">
                                Die-cut holographic stickers with prismatic effects and premium finishes
                            </p>
                            
                            <div class="flex flex-wrap justify-center gap-3">
                                <span class="glass-effect px-4 py-2 rounded-full text-sm text-white/90 body-font">Holographic</span>
                                <span class="glass-effect px-4 py-2 rounded-full text-sm text-white/90 body-font">Premium Finish</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="absolute inset-0 bg-gradient-to-br from-blue-900/95 to-black/95 opacity-0 hover:opacity-100 transition-all duration-700 flex items-center justify-center rounded-3xl">
                        <div class="text-center p-8">
                            <div class="luxury-icon mx-auto mb-6">
                                <svg class="w-12 h-12 text-blue-300" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                </svg>
                            </div>
                            <h4 class="heading-font text-2xl font-semibold text-white mb-4">Prismatic Beauty</h4>
                            <p class="body-font text-white/90 mb-6">Holographic technology that captures light magnificently</p>
                            <button class="glass-effect px-8 py-3 rounded-full text-white body-font font-medium hover:bg-white/20 transition-all">
                                View Designs
                            </button>
                        </div>
                    </div>
                </div>

                <div class="card-luxury rounded-3xl elegant-glow reveal" style="animation-delay: 0.6s;">
                    <div class="p-10 h-96 flex flex-col justify-between">
                        <div class="text-center">
                            <div class="luxury-icon mx-auto mb-8 luxury-pulse" style="animation-delay: 2s;">
                                <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/>
                                </svg>
                            </div>
                            
                            <h3 class="heading-font text-3xl font-semibold text-white mb-4">Industrial Solutions</h3>
                            <p class="body-font text-white/80 text-lg mb-8 leading-relaxed">
                                Food-grade and industrial labels engineered for extreme conditions
                            </p>
                            
                            <div class="flex flex-wrap justify-center gap-3">
                                <span class="glass-effect px-4 py-2 rounded-full text-sm text-white/90 body-font">Food Safe</span>
                                <span class="glass-effect px-4 py-2 rounded-full text-sm text-white/90 body-font">Ultra Durable</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="absolute inset-0 bg-gradient-to-br from-green-900/95 to-black/95 opacity-0 hover:opacity-100 transition-all duration-700 flex items-center justify-center rounded-3xl">
                        <div class="text-center p-8">
                            <div class="luxury-icon mx-auto mb-6">
                                <svg class="w-12 h-12 text-green-300" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z"/>
                                </svg>
                            </div>
                            <h4 class="heading-font text-2xl font-semibold text-white mb-4">Uncompromising Strength</h4>
                            <p class="body-font text-white/90 mb-6">Built to withstand the harshest environments</p>
                            <button class="glass-effect px-8 py-3 rounded-full text-white body-font font-medium hover:bg-white/20 transition-all">
                                Technical Specs
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            
            <div class="flex justify-center items-center space-x-12 mb-24 reveal" style="animation-delay: 0.8s;">
                <div class="text-center">
                    <div class="luxury-icon mx-auto mb-4 elegant-glow">
                        <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                    </div>
                    <p class="body-font text-white font-medium text-lg">Design</p>
                </div>
                
                <div class="flex-1 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                
                <div class="text-center">
                    <div class="luxury-icon mx-auto mb-4 elegant-glow" style="animation-delay: 1s;">
                        <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                        </svg>
                    </div>
                    <p class="body-font text-white font-medium text-lg">Craft</p>
                </div>
                
                <div class="flex-1 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                
                <div class="text-center">
                    <div class="luxury-icon mx-auto mb-4 elegant-glow" style="animation-delay: 2s;">
                        <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                    </div>
                    <p class="body-font text-white font-medium text-lg">Deliver</p>
                </div>
            </div>

        
            <div class="text-center reveal" style="animation-delay: 1s;">
                <div class="max-w-4xl mx-auto">
                    <h3 class="heading-font text-5xl font-semibold text-white mb-8 text-shimmer">
                        Ready to Elevate Your Brand?
                    </h3>
                    <p class="body-font text-xl text-white/80 mb-12 leading-relaxed font-light max-w-2xl mx-auto">
                        Join our distinguished clientele who trust us with their most important branding initiatives
                    </p>
                    
                    <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <button class="glass-effect px-12 py-4 rounded-full text-white body-font font-medium text-lg hover:bg-white/20 transition-all duration-500 elegant-glow">
                            Begin Your Journey
                        </button>
                        <button class="border border-white/30 px-12 py-4 rounded-full text-white body-font font-medium text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-500">
                            View Our Work
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>


<!-- Founder Profile Section -->
    <section id="founder" class="py-20 bg-gray-900 relative overflow-hidden">
        <!-- Background decorative elements -->
        <div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
        
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="text-center mb-16 fade-in-up">
                <h2 class="text-head text-4xl md:text-5xl font-bold text-purple-400 drop-shadow-[0_0_10px_#60A5FA] mb-4">
                    Meet Our Founder
                </h2>
                <p class="text-xl text-gray-300">
                    The visionary behind IndyLabel's success story
                </p>
            </div>

            <div class="max-w-4xl mx-auto">
                <div class="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 md:p-12 fade-in-up">
                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                        <!-- Profile Image -->
                        <div class="lg:col-span-1 text-center">
                            <div class="relative inline-block">
                                <div class="w-48 h-48 mx-auto bg-gradient-to-br from-purple-500 via-blue-500 to-pink-500 rounded-full p-1 morphing-shape">
                                    <div class="w-full h-full bg-gray-800 rounded-full flex items-center justify-center">
                                        <div class="text-6xl">👨‍💼</div>
                                    </div>
                                </div>
                                <div class="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center border-4 border-gray-800">
                                    <span class="text-2xl">🏆</span>
                                </div>
                            </div>
                        </div>

                        <!-- Profile Content -->
                        <div class="lg:col-span-2">
                            <div class="text-center lg:text-left">
                                <h3 class="text-3xl font-bold text-white mb-2">Jibril Ramadhan</h3>
                                <p class="text-xl text-purple-400 mb-4">Founder & CEO of IndyLabel</p>
                                
                                <div class="flex flex-wrap justify-center lg:justify-start gap-3 mb-6">
                                    <span class="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30">
                                        🎨 Creative Director
                                    </span>
                                    <span class="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30">
                                        💼 Business Strategy
                                    </span>
                                    <span class="px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm border border-green-500/30">
                                        🔥 Innovation Leader
                                    </span>
                                </div>

                                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                                    "With over 8 years of experience in the design and printing industry, I founded IndyLabel with a vision to provide affordable, high-quality label solutions. My passion is to help small businesses to enterprises look professional through attractive label designs."
                                </p>

                                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div class="bg-gray-700/30 rounded-xl p-4 border border-gray-600/30">
                                        <div class="flex items-center">
                                            <span class="text-2xl mr-3">📈</span>
                                            <div>
                                                <div class="text-white font-semibold">8+ Years</div>
                                                <div class="text-gray-400 text-sm">Industry Experience</div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="bg-gray-700/30 rounded-xl p-4 border border-gray-600/30">
                                        <div class="flex items-center">
                                            <span class="text-2xl mr-3">🎯</span>
                                            <div>
                                                <div class="text-white font-semibold">500+</div>
                                                <div class="text-gray-400 text-sm">Projects Completed</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Achievement Section -->
                    <div class="mt-12 pt-8 border-t border-gray-700/50">
                        <h4 class="text-xl font-bold text-white mb-6 text-center">Achievements & Recognition</h4>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div class="text-center">
                                <div class="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <span class="text-2xl">🏅</span>
                                </div>
                                <h5 class="text-white font-semibold mb-2">Best Design Award</h5>
                                <p class="text-gray-400 text-sm">Indonesia Print Excellence 2023</p>
                            </div>
                            
                            <div class="text-center">
                                <div class="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <span class="text-2xl">💡</span>
                                </div>
                                <h5 class="text-white font-semibold mb-2">Innovation Leader</h5>
                                <p class="text-gray-400 text-sm">Creative Industry Summit 2024</p>
                            </div>
                            
                            <div class="text-center">
                                <div class="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <span class="text-2xl">🌟</span>
                                </div>
                                <h5 class="text-white font-semibold mb-2">Top Entrepreneur</h5>
                                <p class="text-gray-400 text-sm">Young Business Leader 2024</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 bg-gray-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16 fade-in-up">
                <h2 class="text-head text-4xl md:text-5xl font-bold mb-4 text-purple-400 drop-shadow-[0_0_10px_#60A5FA]">Get In Touch</h2>
                <p class="text-xl text-gray-300">Ready to start your next project?</p>
            </div>
            
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div class="slide-in-left">
                    <h3 class="text-3xl font-bold mb-6 text-white">Let's Create Something Amazing</h3>
                    <p class="text-gray-300 mb-8 text-lg leading-relaxed">
                        We're passionate about bringing your vision to life. Whether you need a stunning website, 
                        a complete brand identity, or a digital experience that wows your audience, we're here to help.
                    </p>
                    
                    <div class="space-y-6">
                        <div class="flex items-center">
                            <div class="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                            </div>
                            <div>
                                <p class="text-white font-semibold">Email</p>
                                <p class="text-gray-300">hello@indylabel.com</p>
                            </div>
                        </div>
                        
                        <div class="flex items-center">
                            <div class="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                </svg>
                            </div>
                            <div>
                                <p class="text-white font-semibold">Phone</p>
                                <p class="text-gray-300">+1 (555) 123-4567</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="slide-in-right">
                    <form @submit.prevent="submitForm" class="glass-effect p-8 rounded-2xl">
                        <div class="mb-6">
                            <label class="block text-sm font-medium text-gray-300 mb-2">Name</label>
                            <input
                            v-model="name"
                            name="name"
                            type="text"
                            required
                            class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white transition-colors duration-300"
                            />
                        </div>

                        <div class="mb-6">
                            <label class="block text-sm font-medium text-gray-300 mb-2">Email</label>
                            <input
                            v-model="email"
                            name="email"
                            type="email"
                            required
                            class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white transition-colors duration-300"
                            />
                        </div>

                        <div class="mb-6">
                            <label class="block text-sm font-medium text-gray-300 mb-2">Message</label>
                            <textarea
                            v-model="message"
                            name="message"
                            rows="4"
                            required
                            class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white transition-colors duration-300"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            :disabled="isLoading"
                            class="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 pulse-glow"
                            >
                            {{ buttonText }}
                            </button>


                        <p v-if="isSent" class="text-green-400 mt-4">Message sent successfully!</p>
                        <p v-if="errorMessage" class="text-red-400 mt-2">{{ errorMessage }}</p>
                        </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-800 py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div class="col-span-1 md:col-span-2">
                    <div class="flex items-center mb-4">
                        <div class="relative">
                            <div class="relative group w-16 h-16 flex items-center justify-center rounded-xl">
                        <img src="../public/img/logov3.png" alt="logo" class="w-14 h-14 object-contain neon-logo group-hover:scale-105 transition-transform duration-300 ease-in-out">
                        <div class="absolute inset-0 rounded-xl border-2 border-pink-500 blur-md opacity-30 animate-pulse"></div>
                    </div>
                        </div>
                        <div class="ml-3">
                    <h1 class="text-logo text-2xl font-black neon-white">INDY LABEL</h1>
                    <p class="text-xs text-gray-400 font-inter">Creative Design Studio</p>
                </div>
                    </div>
                    <p class="text-gray-300 mb-4 max-w-md">
                        Transforming ideas into digital experiences that inspire and engage. 
                        We're passionate about creating beautiful, functional designs that drive results.
                    </p>
                    <div class="flex space-x-4">
                        <a href="#" class="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                            <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                            </svg>
                        </a>
                        <a href="#" class="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                            <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                            </svg>
                        </a>
                        <a href="#" class="w-10 h-10 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                            <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.758-1.378l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001.012.001z.017 0z"/>
                            </svg>
                        </a>
                        <a href="#" class="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                            <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                        </a>
                    </div>
                </div>
                
                <div>
                    <h4 class="text-lg font-semibold text-white mb-4">Services</h4>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-gray-300 hover:text-white transition-colors duration-300">Web Development</a></li>
                        <li><a href="#" class="text-gray-300 hover:text-white transition-colors duration-300">Brand Identity</a></li>
                        <li><a href="#" class="text-gray-300 hover:text-white transition-colors duration-300">UI/UX Design</a></li>
                        <li><a href="#" class="text-gray-300 hover:text-white transition-colors duration-300">Digital Marketing</a></li>
                        <li><a href="#" class="text-gray-300 hover:text-white transition-colors duration-300">E-commerce</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 class="text-lg font-semibold text-white mb-4">Company</h4>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-gray-300 hover:text-white transition-colors duration-300">About Us</a></li>
                        <li><a href="#" class="text-gray-300 hover:text-white transition-colors duration-300">Our Team</a></li>
                        <li><a href="#" class="text-gray-300 hover:text-white transition-colors duration-300">Careers</a></li>
                        <li><a href="#" class="text-gray-300 hover:text-white transition-colors duration-300">Blog</a></li>
                        <li><a href="#" class="text-gray-300 hover:text-white transition-colors duration-300">Contact</a></li>
                    </ul>
                </div>
            </div>
            
            <div class="border-t border-gray-700 mt-8 pt-8">
                <div class="flex flex-col md:flex-row justify-between items-center">
                    <p class="text-gray-400 text-sm">
                        © 2025 INDY LABEL. All rights reserved. Built with Nuxt 3 & Tailwind CSS.
                    </p>
                    <div class="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors duration-300">Privacy Policy</a>
                        <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors duration-300">Terms of Service</a>
                        <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors duration-300">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</div>
</template>
<style scoped>
        * {
            font-family: 'Inter', sans-serif;
        }
        .heading-font { 
            font-family: 'Playfair Display', serif; 
        }
        .text-head{
            font-family: 'Poppins', 'sans-serif';
        }
        .text-logo{
            font-family: 'Orbitron', 'sans-serif';
        }
        .textgradasi{
          background: linear-gradient(135deg, #ffffff 0%, #ffffff 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        .gradient-text {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        .glass-effect {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }        
        .floating-animation {
            animation: floating 6s ease-in-out infinite;
        }       
        @keyframes floating {
            0% { transform: translate(0, 0px); }
            50% { transform: translate(0, -20px); }
            100% { transform: translate(0, 0px); }
        }        
        .pulse-glow {
            animation: pulse-glow 2s ease-in-out infinite alternate;
        }        
        @keyframes pulse-glow {
            from { box-shadow: 0 0 20px rgba(102, 126, 234, 0.5); }
            to { box-shadow: 0 0 40px rgba(102, 126, 234, 0.8), 0 0 60px rgba(118, 75, 162, 0.5); }
        }        
        .morphing-shape {
            animation: morph 8s ease-in-out infinite;
        }        
        @keyframes morph {
            0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
            25% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
            50% { border-radius: 50% 60% 30% 60% / 30% 60% 70% 40%; }
            75% { border-radius: 60% 40% 60% 30% / 40% 50% 60% 30%; }
            100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
        }        
        .slide-in-left {
            animation: slideInLeft 0.8s ease-out;
        }        
        @keyframes slideInLeft {
            from { transform: translateX(-100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }       
        .slide-in-right {
            animation: slideInRight 0.8s ease-out;
        }        
        @keyframes slideInRight {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }        
        .fade-in-up {
            animation: fadeInUp 1s ease-out;
        }       
        @keyframes fadeInUp {
            from { transform: translateY(30px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }        
        .rotate-3d {
            animation: rotate3d 10s linear infinite;
        }        
        @keyframes rotate3d {
            from { transform: rotateX(0deg) rotateY(0deg); }
            to { transform: rotateX(360deg) rotateY(360deg); }
        }        
        .neon-glow {
            text-shadow: 0 0 5px rgba(102, 126, 234, 0.5),
                         0 0 10px rgba(102, 126, 234, 0.5),
                         0 0 15px rgba(102, 126, 234, 0.5),
                         0 0 20px rgba(102, 126, 234, 0.5);
        }
        .neon-white {
            text-shadow: 0 0 5px rgba(255, 255, 255, 0.5),
                         0 0 10px rgba(255, 255, 255, 0.5),
                         0 0 15px rgba(255, 255, 255, 0.5),
                         0 0 20px rgba(255, 255, 255, 0.5);
        }
        .particle {
            position: absolute;
            background: linear-gradient(45deg, #667eea, #764ba2);
            border-radius: 50%;
            animation: particle-float 15s linear infinite;
        }
        @keyframes particle-float {
            0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
        }
        #three-container {
            position: absolute;
            top: 0; 
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
        }
        .neon-logo {
        filter: drop-shadow(0 0 2px #fff)
                drop-shadow(0 0 6px #c084fc)
                drop-shadow(0 0 11px #ec4899)
                drop-shadow(0 0 16px #ec4899);
        }
        @keyframes glowPulse {
        0% {
            filter: drop-shadow(0 0 2px #fff) drop-shadow(0 0 4px #a855f7) drop-shadow(0 0 6px #ec4899);
        }
        100% {
            filter: drop-shadow(0 0 4px #fff) drop-shadow(0 0 8px #c084fc) drop-shadow(0 0 12px #f472b6);
        }
        }
        .neon-glow1 {
        animation: glowPulse 2s infinite alternate;
        }
        .glass-effect1 {
            background: rgba(17, 25, 40, 0.75);
            backdrop-filter: blur(16px) saturate(180%);
            border: 1px solid rgba(255, 255, 255, 0.125);
            box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        }
        .fade-in-up {
            opacity: 0;
            transform: translateY(50px);
            animation: fadeInUp 0.8s ease-out forwards;
        }
        @keyframes fadeInUp {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        .pulse-glow1 {
            animation: pulseGlow 2s ease-in-out infinite alternate;
        }
        @keyframes pulseGlow {
            from {
                box-shadow: 0 0 20px rgba(147, 51, 234, 0.5);
            }
            to {
                box-shadow: 0 0 30px rgba(147, 51, 234, 0.8), 0 0 40px rgba(147, 51, 234, 0.3);
            }
        }
        .card-hover {
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            position: relative;
            overflow: hidden;
        }
        .card-hover::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
            transition: left 0.6s;
        }
        .card-hover:hover::before {
            left: 100%;
        }
        .card-hover:hover {
            transform: translateY(-10px) scale(1.02);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
        .icon-float {
            animation: iconFloat 3s ease-in-out infinite;
        }
        @keyframes iconFloat {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            33% { transform: translateY(-10px) rotate(2deg); }
            66% { transform: translateY(-5px) rotate(-2deg); }
        }
        .text-gradient {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        .service-number {
            position: absolute;
            top: -10px;
            right: -10px;
            width: 40px;
            height: 40px;
            background: linear-gradient(135deg, #667eea, #764ba2);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            color: white;
            font-size: 18px;
            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
        }
        .progress-line {
            position: absolute;
            bottom: 0;
            left: 0;
            height: 4px;
            background: linear-gradient(90deg, #667eea, #764ba2);
            border-radius: 2px;
            transform: scaleX(0);
            transform-origin: left;
            transition: transform 0.8s ease-out;
        }
        .card-hover:hover .progress-line {
            transform: scaleX(1);
        }
        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.3s; }
        .stagger-3 { animation-delay: 0.5s; }
        @media (max-width: 768px) {
            .card-hover:hover {
                transform: translateY(-5px) scale(1.01);
            }
        }
            .floating-bg {
                position: absolute;
                width: 100px;
                height: 100px;
                background: radial-gradient(circle, rgba(147, 51, 234, 0.1) 0%, transparent 70%);
                border-radius: 50%;
                animation: floatingBg 4s ease-in-out infinite;
                pointer-events: none;
            }
            @keyframes floatingBg {
                0%, 100% { transform: translate(0, 0) scale(1); }
                25% { transform: translate(20px, -20px) scale(1.1); }
                50% { transform: translate(-10px, -30px) scale(0.9); }
                75% { transform: translate(-20px, 10px) scale(1.05); }
            }
            @keyframes glow {
            0%, 100% { text-shadow: 0 0 10px #60A5FA, 0 0 20px #60A5FA; }
            50% { text-shadow: 0 0 15px #60A5FA, 0 0 30px #60A5FA; }
            }
            .animate-glow {
            animation: glow 3s ease-in-out infinite;
            }
            @keyframes elegant-glow {
                0%, 100% { 
                    box-shadow: 0 0 30px rgba(168, 85, 247, 0.4), 
                            0 0 60px rgba(168, 85, 247, 0.2),
                            inset 0 0 30px rgba(255, 255, 255, 0.1);
                }
                50% { 
                    box-shadow: 0 0 50px rgba(168, 85, 247, 0.6), 
                            0 0 80px rgba(168, 85, 247, 0.3),
                            inset 0 0 40px rgba(255, 255, 255, 0.15);
                }
            }
            @keyframes rotate-elegant {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }
            @keyframes slide-up-elegant {
                from {
                    transform: translateY(60px);
                    opacity: 0;
                }
                to {
                    transform: translateY(0);
                    opacity: 1;
                }
            }
            @keyframes text-shimmer {
                0% { background-position: -200% center; }
                100% { background-position: 200% center; }
            }
            @keyframes luxury-pulse {
                0%, 100% { 
                    transform: scale(1);
                    opacity: 0.8;
                }
                50% { 
                    transform: scale(1.05);
                    opacity: 1;
                }
            }
            @keyframes diamond-spin {
                0% { transform: rotate(0deg) scale(1); }
                50% { transform: rotate(180deg) scale(1.1); }
                100% { transform: rotate(360deg) scale(1); }
            }
            .text-shimmer {
                background: linear-gradient(90deg, #fff 0%, #a855f7 25%, #3b82f6 50%, #a855f7 75%, #fff 100%);
                background-size: 200% auto;
                -webkit-background-clip: text;
                background-clip: text;
                -webkit-text-fill-color: transparent;
                animation: text-shimmer 3s linear infinite;
            }
            .float { animation: float 8s ease-in-out infinite; }
            .float-reverse { animation: floatReverse 10s ease-in-out infinite; }
            .elegant-glow { animation: elegant-glow 4s ease-in-out infinite; }
            .rotate-elegant { animation: rotate-elegant 25s linear infinite; }
            .slide-up-elegant { animation: slide-up-elegant 1s ease-out forwards; }
            .luxury-pulse { animation: luxury-pulse 3s ease-in-out infinite; }
            .diamond-spin { animation: diamond-spin 6s ease-in-out infinite; }
            .card-luxury {
                backdrop-filter: blur(20px);
                background: rgba(0, 0, 0, 0.3);
                border: 1px solid rgba(255, 255, 255, 0.2);
                transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                position: relative;
                overflow: hidden;
            }
            .card-luxury::before {
                content: '';
                position: absolute;
                top: -50%;
                left: -50%;
                width: 200%;
                height: 200%;
                background: conic-gradient(from 0deg, transparent, rgba(168, 85, 247, 0.1), transparent);
                animation: rotate-elegant 8s linear infinite;
                z-index: -1;
            }
            .card-luxury:hover {
                transform: translateY(-20px) scale(1.05);
                background: rgba(0, 0, 0, 0.5);
                border-color: rgba(168, 85, 247, 0.5);
            }
            .glass-effect {
                background: rgba(255, 255, 255, 0.1);
                backdrop-filter: blur(15px);
                border: 1px solid rgba(255, 255, 255, 0.2);
            }
            .luxury-icon {
                width: 80px;
                height: 80px;
                background: linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(59, 130, 246, 0.2));
                border: 2px solid rgba(255, 255, 255, 0.3);
                border-radius: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;
                overflow: hidden;
            }
            .luxury-icon::before {
                content: '';
                position: absolute;
                top: -50%;
                left: -50%;
                width: 200%;
                height: 200%;
                background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
                transform: rotate(45deg);
                transition: all 0.6s ease;
            }
            .luxury-icon:hover::before {
                animation: shimmer-sweep 1.5s ease-in-out;
            }
            @keyframes shimmer-sweep {
                0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
                100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
            }
            @keyframes float {
                0%, 100% { transform: translateY(0px) rotate(0deg); }
                50% { transform: translateY(-15px) rotate(2deg); }
            }
            @keyframes floatReverse {
                0%, 100% { transform: translateY(0px) rotate(0deg); }
                50% { transform: translateY(15px) rotate(-2deg); }
            } 
    </style>
    
<script setup>
// ✅ Script setup Nuxt 3 + Vue 3
import { onMounted } from 'vue'
import * as THREE from 'three'
import Logo3D from '../component/logo3D.vue'
import emailjs from '@emailjs/browser'

onMounted(() => {
  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn')
  const mobileMenu = document.getElementById('mobile-menu')

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden')
    })
  }

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute('href'))
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
      if (mobileMenu) mobileMenu.classList.add('hidden')
    })
  })

  // Initialize Three.js
  const container = document.getElementById('three-container')
  if (!container) return

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  const renderer = new THREE.WebGLRenderer({ alpha: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setClearColor(0x000000, 0)
  container.appendChild(renderer.domElement)

  const shapes = []

  const createMesh = (geometry, color, pos, opacity) => {
    const material = new THREE.MeshBasicMaterial({ color, wireframe: true, transparent: true, opacity })
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(...pos)
    scene.add(mesh)
    shapes.push(mesh)
  }

  createMesh(new THREE.TorusGeometry(1, 0.3, 16, 100), 0x667eea, [-3, 2, -5], 0.6)
  createMesh(new THREE.OctahedronGeometry(1), 0x764ba2, [3, -2, -8], 0.5)
  createMesh(new THREE.DodecahedronGeometry(0.8), 0x9f7aea, [0, 3, -6], 0.4)
  createMesh(new THREE.TetrahedronGeometry(1.2), 0xf093fb, [-2, -3, -10], 0.3)

  camera.position.z = 5

  function animate() {
    requestAnimationFrame(animate)
    shapes.forEach((shape, index) => {
      shape.rotation.x += 0.005 + index * 0.002
      shape.rotation.y += 0.008 + index * 0.001
      shape.rotation.z += 0.003 + index * 0.0015
      shape.position.y += Math.sin(Date.now() * 0.001 + index) * 0.002
    })
    renderer.render(scene, camera)
  }

  animate()

  // Resize
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  })

  // Intersection Observer animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1'
        entry.target.style.transform = 'translateY(0)'
      }
    })
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })
  
  const animatedElements = document.querySelectorAll('.fade-in-up, .slide-in-left, .slide-in-right')
  animatedElements.forEach(el => {
    el.style.opacity = '0'
    el.style.transform = 'translateY(30px)'
    el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out'
    observer.observe(el)
  })

  // Add click interaction for cards
  document.querySelectorAll('.card-hover').forEach(card => {
    card.addEventListener('click', () => {
      card.style.transform = 'scale(0.95)'
      setTimeout(() => {
        card.style.transform = ''
      }, 150)
    })
  })
  
  // Parallax scroll effect
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset
    document.querySelectorAll('.floating-animation').forEach((el, i) => {
      const speed = 0.5 + i * 0.1
      el.style.transform = `translateY(${scrolled * speed}px)`
    })
  })

  // Particle animation
  function createParticle() {
    const p = document.createElement('div')
    p.className = 'particle'
    p.style.width = p.style.height = `${Math.random() * 4 + 1}px`
    p.style.left = `${Math.random() * 100}%`
    p.style.animationDuration = `${Math.random() * 10 + 10}s`
    p.style.animationDelay = `${Math.random() * 5}s`
    document.querySelector('.fixed.inset-0.pointer-events-none')?.appendChild(p)
    setTimeout(() => p.remove(), 20000)
  }
  setInterval(createParticle, 3000)

  // Hover effect
  document.querySelectorAll('.glass-effect').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = ''
      card.style.boxShadow = '0 20px 40px rgba(102, 126, 234, 0.3)'
    })
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'scale(1) rotateY(0deg)'
      card.style.boxShadow = 'none'
    })
  })

  // Enhanced hover effects for mobile
  if ('ontouchstart' in window) {
    document.querySelectorAll('.card-hover').forEach(card => {
      card.addEventListener('touchstart', () => {
        card.classList.add('touch-active')
      })
      card.addEventListener('touchend', () => {
        setTimeout(() => {
          card.classList.remove('touch-active')
        }, 300)
      })
    })
  }

  // Form submit effect
  document.querySelector('form')?.addEventListener('submit', (e) => {
    e.preventDefault()
    const button = e.target.querySelector('button[type="submit"]')
    const original = button.textContent
    button.textContent = 'Sending...'
    button.disabled = true
    setTimeout(() => {
      button.textContent = 'Message Sent!'
      button.style.background = 'linear-gradient(to right, #10b981, #059669)'
      setTimeout(() => {
        button.textContent = original
        button.disabled = false
        button.style.background = 'linear-gradient(to right, #8b5cf6, #ec4899)'
        e.target.reset()
      }, 2000)
    }, 1500)
  })

  // Typing effect
  function typeWriter(el, text, speed = 100) {
    let i = 0
    el.innerHTML = ''
    const type = () => {
      if (i < text.length) {
        el.innerHTML += text.charAt(i++)
        setTimeout(type, speed)
      }
    }
    type()
  }
  const heading = document.querySelector('h1.gradient-text')
  if (heading) setTimeout(() => typeWriter(heading, 'INDY LABEL', 150), 1000)

  // Elegant parallax effect for background elements
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.3;
        
        document.querySelectorAll('.float').forEach((element, index) => {
            element.style.transform = `translateY(${rate + index * 20}px) rotate(${rate * 0.1}deg)`;
        });
        
        document.querySelectorAll('.float-reverse').forEach((element, index) => {
            element.style.transform = `translateY(${-rate + index * 15}px) rotate(${-rate * 0.1}deg)`;
        });
    });

    // Sophisticated hover effects
    document.querySelectorAll('.card-luxury').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-20px) scale(1.05)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)';
        });
    });

  // Loading screen
  const loader = document.createElement('div')
  loader.id = 'loader'
  loader.innerHTML = `
    <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: #1f2937; display: flex; align-items: center; justify-content: center; z-index: 10000;">
      <div style="text-align: center;">
        <div style="width: 60px; height: 60px; border: 3px solid rgba(102, 126, 234, 0.3); border-top: 3px solid #667eea; border-radius: 50%; animation: spin 1s linear infinite; margin: 0 auto 20px;"></div>
        <h2 style="color: white; font-size: 24px; margin: 0;">INDY LABEL</h2>
        <p style="color: #9ca3af; margin: 5px 0 0;">Loading Amazing Experience...</p>
      </div>
    </div>
    <style>@keyframes spin {0% {transform: rotate(0deg);} 100% {transform: rotate(360deg);}}</style>
  `
  document.body.appendChild(loader)
  setTimeout(() => {
    loader.style.opacity = '0'
    loader.style.transition = 'opacity 0.5s ease-out'
    setTimeout(() => loader.remove(), 500)
  }, 2000)
})

const name = ref('')
const email = ref('')
const message = ref('')
const isSent = ref(false)
const isLoading = ref(false)
const errorMessage = ref('')
const buttonText = ref('Send Message')

const submitForm = async () => {
  if (!name.value || !email.value || !message.value) {
    errorMessage.value = 'Please fill in all fields.'
    buttonText.value = 'Send Message'
    isLoading.value = false

    // Hilangkan errorMessage setelah 3 detik
    setTimeout(() => {
      errorMessage.value = ''
    }, 3000)
    return
  }

  isLoading.value = true
  buttonText.value = 'Sending...'
  errorMessage.value = ''

  const templateParams = {
    name: name.value,
    email: email.value,
    message: message.value
  }

  try {
    await emailjs.send(
      'service_ensuye8',
      'template_ewywqwi',
      templateParams,
      '6-F0TVfDkUXzb-b3t'
    )

    isSent.value = true
    buttonText.value = 'Message Sent'

    // Reset form
    name.value = ''
    email.value = ''
    message.value = ''

    // Setelah 3 detik, hilangkan pesan sukses dan kembalikan tombol ke "Send Message"
    setTimeout(() => {
      isSent.value = false
      buttonText.value = 'Send Message'
    }, 3000)

  } catch (error) {
    errorMessage.value = 'Failed to send message. Please try again.'
    buttonText.value = 'Send Message'

    // Hilangkan pesan error setelah 3 detik
    setTimeout(() => {
      errorMessage.value = ''
    }, 3000)
  } finally {
    isLoading.value = false
  }
}
</script>