"use client"
import React, { useEffect, useRef } from "react";
import { ButtonCustom } from "./ui/button-custom";
import { ShoppingCart, Paintbrush } from "lucide-react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      
      const scrollY = window.scrollY;
      const heroElements = heroRef.current.querySelectorAll('[data-parallax]');
      
      heroElements.forEach((element) => {
        const speed = element.getAttribute('data-parallax') || "0.1";
        const yPos = scrollY * parseFloat(speed);
        element.setAttribute('style', `transform: translateY(${yPos}px)`);
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-mesh flex flex-col items-center justify-center pt-20 pb-12"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-agentia-teal/20 rounded-full blur-[100px] animate-pulse" data-parallax="0.2"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-agentia-green/20 rounded-full blur-[100px] animate-pulse" data-parallax="0.15"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute left-16 top-48 w-20 h-20 glass-card rounded-2xl rotate-12 opacity-70 animate-float" data-parallax="0.1"></div>
      <div className="absolute right-24 top-64 w-16 h-16 glass-card rounded-xl -rotate-6 opacity-60 animate-float" style={{animationDelay: '1s'}} data-parallax="0.25"></div>
      <div className="absolute left-1/3 bottom-40 w-24 h-24 glass-card rounded-2xl rotate-45 opacity-60 animate-float" style={{animationDelay: '2s'}} data-parallax="0.2"></div>

      <div className="container mx-auto px-4 z-10 text-center">
        <div className="inline-block glass-card px-4 py-2 rounded-full animate-fade-in mt-10">
          <span className="text-xs font-medium bg-clip-text text-transparent bg-gradient-to-r from-agentia-teal-light to-agentia-green-light ">
            New: AI Agent Marketplace Launch 🚀
          </span>
        </div>
        
        <h1 className="mt-8 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white text-shadow max-w-4xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
          Empower Your Business with <span className="text-gradient-teal-green">AI – Buy, Sell & Customize</span> AI Agents!
        </h1>
        
        <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.4s'}}>
          Discover the world's first marketplace for intelligent AI agents. Transform your workflow, automate tasks, and scale your business with cutting-edge AI solutions.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{animationDelay: '0.6s'}}>
          <ButtonCustom 
            variant="primary" 
            size="lg" 
            icon={<ShoppingCart className="w-5 h-5" />}
            className="w-full sm:w-auto animate-pulse-glow"
          >
            Explore Marketplace
          </ButtonCustom>
          <ButtonCustom 
            variant="secondary" 
            size="lg" 
            icon={<Paintbrush className="w-5 h-5" />}
            className="w-full sm:w-auto"
          >
            Customize Your AI Agent
          </ButtonCustom>
        </div>
        
        <div className="mt-16 glass-card py-5 px-6 rounded-2xl max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.8s'}}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-gradient-teal-green">1000+</p>
              <p className="text-xs md:text-sm text-white/70 mt-1">AI Agents</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-gradient-teal-green">250+</p>
              <p className="text-xs md:text-sm text-white/70 mt-1">AI Experts</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-gradient-teal-green">10K+</p>
              <p className="text-xs md:text-sm text-white/70 mt-1">Happy Users</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-gradient-teal-green">99%</p>
              <p className="text-xs md:text-sm text-white/70 mt-1">Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
      
    
    </section>
  );
};

export default Hero;
