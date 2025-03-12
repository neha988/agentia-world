"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ButtonCustom } from "./ui/button-custom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-4 bg-agentia-dark/80 glass backdrop-blur-lg" : "py-6 bg-transparent border-b border-agentia-dark-700"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold font-space text-white">Agentia<span className="text-gradient-teal-green"> World</span></span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
              Home
            </Link>
            <div className="relative group ">
              <button className="flex items-center text-sm font-medium text-white/80 hover:text-white transition-colors">
                Marketplace
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 origin-top-left glass-card rounded-lg p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link href="/ai-agents" className="block px-4 py-2 text-sm rounded-md hover:bg-white/10 transition-colors text-white">
                  AI Agents
                </Link>
                <Link href="/templates" className="block px-4 py-2 text-sm rounded-md hover:bg-white/10 transition-colors text-white">
                  Templates
                </Link>
                <Link href="/new-arrivals" className="block px-4 py-2 text-sm rounded-md hover:bg-white/10 transition-colors text-white">
                  New Arrivals
                </Link>
              </div>
            </div>
            <Link href="/customize" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
              Customize
            </Link>
            <Link href="/experts" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
              AI Experts
            </Link>
            <Link href="/pricing" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
              Pricing
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            
            <ButtonCustom variant="ghost" size="sm">
              Sign In
            </ButtonCustom>
            <ButtonCustom variant="primary" size="sm">
              Get Started
            </ButtonCustom>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-agentia-dark-800 glass absolute left-0 right-0 top-[72px] p-4 flex flex-col space-y-4 animate-fade-in">
          <Link href="/" className="text-sm font-medium text-white/80 hover:text-white px-4 py-2 rounded-md hover:bg-white/10 transition-colors">
            Home
          </Link>
          <Link href="/marketplace" className="text-sm font-medium text-white/80 hover:text-white px-4 py-2 rounded-md hover:bg-white/10 transition-colors">
            Marketplace
          </Link>
          <Link href="/customize" className="text-sm font-medium text-white/80 hover:text-white px-4 py-2 rounded-md hover:bg-white/10 transition-colors">
            Customize
          </Link>
          <Link href="/experts" className="text-sm font-medium text-white/80 hover:text-white px-4 py-2 rounded-md hover:bg-white/10 transition-colors">
            AI Experts
          </Link>
          <Link href="/pricing" className="text-sm font-medium text-white/80 hover:text-white px-4 py-2 rounded-md hover:bg-white/10 transition-colors">
            Pricing
          </Link>
          <div className="flex flex-col space-y-2 pt-2">
            
            <ButtonCustom variant="ghost" size="sm" className="w-full">
              Sign In
            </ButtonCustom>
            <ButtonCustom variant="primary" size="sm" className="w-full">
              Get Started
            </ButtonCustom>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
