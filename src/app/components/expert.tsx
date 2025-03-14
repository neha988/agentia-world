"use client"
import React from "react";
import { ButtonCustom } from "./ui/button-custom";
import { Star, MessageSquare, Award, Target, Users, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

// Mock data for AI Experts
const experts = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    title: "NLP Specialist",
    experience: 8,
    rating: 4.9,
    projects: 74,
    description: "Specialized in natural language processing and conversational AI systems.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    name: "Alex Rodriguez",
    title: "ML Engineer",
    experience: 6,
    rating: 4.8,
    projects: 51,
    description: "Expert in machine learning models for predictive analytics and recommendation systems.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    name: "Maya Patel",
    title: "AI Integration Expert",
    experience: 5,
    rating: 4.7,
    projects: 42,
    description: "Specializes in integrating AI systems with existing enterprise software and workflows.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 4,
    name: "James Wilson",
    title: "Chatbot Developer",
    experience: 7,
    rating: 4.9,
    projects: 68,
    description: "Expert in developing sophisticated chatbots and virtual assistants for customer service.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  },
];

const Experts = () => {
  return (
    <section className="py-24 bg-grid" id="experts">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="flex justify-center">
          <div className="inline-block glass-card px-4 py-2 rounded-full animate-fade-in mb-4">
          <span className="text-xs font-medium bg-clip-text text-transparent bg-gradient-to-r from-agentia-teal-light to-agentia-green-light">
          Featured AI Experts
          </span>
        </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-white text-shadow">
              Connect With <span className="text-gradient-teal-green">Top AI Agent</span>
            </h2>
          <p className="text-white/70">
            Our network of vetted AI specialists can help you build custom solutions for your unique business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experts.map((expert, index) => (
            <div 
              key={expert.id} 
              className="glass-card rounded-xl overflow-hidden group hover:shadow-lg hover:shadow-agentia-purple/10 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <div className="h-48 overflow-hidden">
                  <Image 
                    src={expert.image} 
                    alt={expert.name} 
                    width={500}
                    height={500}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full overflow-hidden border-4 border-agentia-dark-800">
                  <Image 
                    src={expert.image} 
                    alt={expert.name} 
                    width={64}
                    height={64}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
              
              <div className="pt-8 pb-6 px-4 text-center">
                <h3 className="text-lg font-bold text-white mb-1">{expert.name}</h3>
                <p className="text-sm text-white/70 mb-2">{expert.title}</p>
                
                <div className="flex justify-center items-center mb-4">
                  <div className="flex items-center text-yellow-400 mr-4">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-medium ml-1 text-white">{expert.rating}</span>
                  </div>
                  <div className="text-white/70 text-sm">
                    {expert.experience} years exp.
                  </div>
                </div>
                
                <p className="text-xs text-white/70 mb-4 line-clamp-2">
                  {expert.description}
                </p>
                
                <ButtonCustom 
                  variant="primary" 
                  size="sm"
                  icon={<MessageSquare className="w-4 h-4" />}
                  className="w-full"
                >
                  Hire Now
                </ButtonCustom>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 glass-card rounded-xl p-8 bg-gradient-to-r from-agentia-blue/10 to-agentia-purple/10 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Become an AI Expert</h3>
              <p className="text-white/70">
                Join our network of AI experts and get paid for your knowledge. Build agents and earn recurring revenue.
              </p>
            </div>
            <ButtonCustom variant="primary" size="md" className="whitespace-nowrap flex-shrink-0">
              Apply as Expert
            </ButtonCustom>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experts;
