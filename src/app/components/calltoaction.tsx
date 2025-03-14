"use client"
import React from "react";
import { ButtonCustom } from "./ui/button-custom";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-24 bg-mesh" id="cta">
      <div className="container mx-auto px-4">
        <div className="relative glass-card rounded-2xl overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-agentia-teal/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-agentia-green/20 rounded-full blur-[120px]"></div>
          
          <div className="relative z-10 py-16 px-8 md:px-16 flex flex-col items-center text-center max-w-4xl mx-auto">
            <div className="inline-block glass-card px-4 py-2 rounded-full mb-6">
              <span className="text-xs font-medium bg-clip-text text-transparent bg-gradient-to-r from-agentia-teal-light to-agentia-green-light animate-gradient-flow">
                Start Your AI Journey Today
              </span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Join the AI Revolution and <span className="text-gradient-teal-green">Transform Your Business</span>
            </h2>
            
            <p className="text-white/80 text-lg mb-10 max-w-2xl">
              Whether you&apos;re looking to buy AI agents&apos; create custom solutions&apos; or join as an AI expert&apos; Agentia has everything you need to succeed in the AI-powered future.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <ButtonCustom 
                variant="primary" 
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
                iconPosition="right"
                className="animate-pulse-glow"
              >
                Get Started for Free
              </ButtonCustom>
              
              <ButtonCustom variant="secondary" size="lg">
                Become a Seller
              </ButtonCustom>
            </div>
            
            <p className="mt-8 text-white/60 text-sm">
              No credit card required. Start with our free tier and upgrade anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
