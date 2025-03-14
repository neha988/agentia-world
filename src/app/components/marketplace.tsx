"use client"
import React, { useState } from "react";
import { ButtonCustom } from "./ui/button-custom";
import { Search, Star, ChevronDown, ArrowRight } from "lucide-react";
import { HoverBorderGradient } from "./ui/border-button";
import Image from "next/image";

// Mock data for AI Agents
const agents = [
  {
    id: 1,
    name: "Smart Sales Bot",
    description: "AI-powered sales assistant that can qualify leads, answer questions, and schedule meetings.",
    category: "Sales",
    rating: 4.9,
    price: 299,
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 2,
    name: "Content Writer Pro",
    description: "Generate high-quality blog posts, product descriptions, and social media content in seconds.",
    category: "Content",
    rating: 4.8,
    price: 199,
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 3,
    name: "Data Analyst Agent",
    description: "Analyze complex data sets and generate insightful reports with visualization.",
    category: "Analytics",
    rating: 4.7,
    price: 399,
    image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 4,
    name: "Customer Support Assistant",
    description: "24/7 customer support agent that can handle inquiries, troubleshoot issues, and escalate when needed.",
    category: "Support",
    rating: 4.6,
    price: 249,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 5,
    name: "SEO Optimizer",
    description: "Automatically optimize your content for search engines and improve your rankings.",
    category: "Marketing",
    rating: 4.8,
    price: 349,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 6,
    name: "Project Manager Bot",
    description: "Manage deadlines, coordinate teams, and track project progress efficiently.",
    category: "Management",
    rating: 4.5,
    price: 329,
    image: "https://images.unsplash.com/photo-1507099985932-87a4520ed1d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
];

// Categories for filtering
const categories = [
  "All Categories",
  "Sales",
  "Content",
  "Analytics",
  "Support",
  "Marketing",
  "Management",
];

const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  // Filter agents based on search term and category
  const filteredAgents = agents.filter((agent) => {
    const matchesSearch = agent.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          agent.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All Categories" || agent.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-24 bg-grid" id="marketplace">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="flex justify-center">
            
            <div className="inline-block glass-card px-4 py-2 rounded-full animate-fade-in mb-4 w-58">
          <span className="text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r from-agentia-teal-light to-agentia-green-light">
          AI Agent Marketplace
          </span>
        </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Discover the Perfect AI Agents for Your Business
          </h2>
          <p className="text-white/70">
            Browse our marketplace of powerful AI agents to automate tasks, enhance productivity, and scale your business operations.
          </p>
        </div>

        <div className="mb-12 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow glass-card rounded-xl overflow-hidden">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50" />
              <input
                type="text"
                placeholder="Search AI agents..."
                className="w-full py-3 pl-12 pr-4 bg-transparent text-white focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

<div className="relative w-48">
  <button
    onClick={() => document.getElementById('category-dropdown')?.classList.toggle('hidden')}
    className="w-full py-3 px-4 bg-teal-600 text-white text-left rounded-lg flex justify-between items-center border border-gray-500 focus:outline-none"
  >
    {selectedCategory}
    <ChevronDown className="w-5 h-5 text-white" />
  </button>

  <div 
    id="category-dropdown"
    className="hidden absolute left-0 right-0 mt-1 bg-black text-white rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto border border-gray-700"
  >
    {categories.map((category) => (
      <button
        key={category}
        onClick={() => {
          setSelectedCategory(category);
          document.getElementById('category-dropdown')?.classList.add('hidden');
        }}
        className="w-full text-left cursor-pointer px-4 py-2 hover:bg-teal-600 hover:text-white transition-colors"
      >
        {category}
      </button>
    ))}
  </div>
</div>

          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredAgents.map((agent) => (
            <div 
              key={agent.id} 
              className="glass-card rounded-xl overflow-hidden group transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-agentia-purple/10"
            >
              <div className="relative h-48 overflow-hidden rounded-t-xl">
                <Image 
                  src={agent.image} 
                  alt={agent.name}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white">{agent.name}</h3>
                  <div className="flex items-center text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-medium ml-1 text-white">{agent.rating}</span>
                  </div>
                </div>
                <p className="text-white/70 text-sm mb-4">{agent.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gradient-blue-purple">${agent.price}</span>
                  <ButtonCustom variant="primary" size="sm" icon={<ArrowRight className="w-4 h-4" />}>
                    View Details
                  </ButtonCustom>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex px-5">
          <HoverBorderGradient>
            View All AI Agents
          </HoverBorderGradient>
        </div>
      </div>
    </section>
  );
};

export default Marketplace;
