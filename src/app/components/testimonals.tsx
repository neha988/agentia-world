"use client"
import React, { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Jessica Martinez",
    title: "Marketing Director",
    company: "GrowthWave",
    quote: "The AI content agent we purchased has completely revolutionized our content production. We're creating 5x more content with the same team size. The ROI has been incredible!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "CEO",
    company: "TechFlow Solutions",
    quote: "We worked with an AI expert from Agentia to develop a custom customer service AI. It's handling 70% of our support tickets automatically, which has drastically improved our response times.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    rating: 5,
  },
  {
    id: 3,
    name: "Sophia Williams",
    title: "Sales Director",
    company: "Elevate Retail",
    quote: "The sales qualification AI agent has transformed our lead management process. Our sales team now focuses only on high-quality leads, resulting in a 40% increase in conversion rate.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    rating: 4,
  },
  {
    id: 4,
    name: "David Rodriguez",
    title: "HR Manager",
    company: "Global Enterprises",
    quote: "Our HR AI assistant handles all initial candidate screening, scheduling, and basic Q&A. It's like having an extra team member who works 24/7. The quality of candidates reaching our human team has improved significantly.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    rating: 5,
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoplay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 6000);
  };

  useEffect(() => {
    startAutoplay();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [activeIndex]);

  const pauseAutoplay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const resumeAutoplay = () => {
    startAutoplay();
  };

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 600);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 600);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-agentia-dark to-agentia-dark-800" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="flex justify-center">
            <div className="inline-block glass-card px-4 py-2 rounded-full mb-4">
              <span className="text-xs font-medium text-gradient-blue-purple">
                Success Stories
              </span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Customers Say
          </h2>
          <p className="text-white/70">
            Discover how businesses are transforming their operations with our AI agents.
          </p>
        </div>

        <div 
          className="relative max-w-5xl mx-auto overflow-hidden"
          onMouseEnter={pauseAutoplay}
          onMouseLeave={resumeAutoplay}
        >
          <div className="relative overflow-hidden glass-card rounded-2xl p-8 md:p-12 min-h-[400px]">
            {/* Animated background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-agentia-blue/10 rounded-full blur-[80px]"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-agentia-purple/10 rounded-full blur-[80px]"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <div className="relative">
                    <div className="w-24 h-24 md:w-32 md:h-32 mx-auto overflow-hidden rounded-full border-4 border-white/10">
                      <img 
                        src={testimonials[activeIndex].image} 
                        alt={testimonials[activeIndex].name} 
                        className="w-full h-full object-cover object-center animate-fade-in"
                        key={testimonials[activeIndex].id}
                      />
                    </div>
                    <div className="flex justify-center mt-4 space-x-1">
                      {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      ))}
                      {[...Array(5 - testimonials[activeIndex].rating)].map((_, i) => (
                        <Star key={i + testimonials[activeIndex].rating} className="w-4 h-4 text-white/20" />
                      ))}
                    </div>
                    <div className="text-center mt-4">
                      <h3 className="text-lg font-bold text-white">{testimonials[activeIndex].name}</h3>
                      <p className="text-sm text-white/70">{testimonials[activeIndex].title}</p>
                      <p className="text-xs text-agentia-blue-light">{testimonials[activeIndex].company}</p>
                    </div>
                  </div>
                </div>
                
                <div className="w-full md:w-2/3">
                  <div className="relative">
                    <div className="text-3xl text-agentia-purple opacity-50 absolute -top-6 -left-4">"</div>
                    <p className="text-white/90 text-lg leading-relaxed italic animate-fade-in">
                      {testimonials[activeIndex].quote}
                    </p>
                    <div className="text-3xl text-agentia-purple opacity-50 absolute -bottom-10 -right-4">"</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "bg-agentia-purple w-8" : "bg-white/30 hover:bg-white/50"
                }`}
                onClick={() => setActiveIndex(index)}
              ></button>
            ))}
          </div>
          
          <button 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-white/15 transition-all duration-300"
            onClick={prevSlide}
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          
          <button 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-white/15 transition-all duration-300"
            onClick={nextSlide}
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
        
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card rounded-xl p-8 text-center">
            <div className="text-4xl font-bold text-gradient-blue-purple mb-2">89%</div>
            <p className="text-white/70">Reduction in customer response time</p>
          </div>
          
          <div className="glass-card rounded-xl p-8 text-center">
            <div className="text-4xl font-bold text-gradient-blue-purple mb-2">3.5x</div>
            <p className="text-white/70">Increase in sales team productivity</p>
          </div>
          
          <div className="glass-card rounded-xl p-8 text-center">
            <div className="text-4xl font-bold text-gradient-blue-purple mb-2">$1.2M</div>
            <p className="text-white/70">Average annual savings for enterprise clients</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
