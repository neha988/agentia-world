"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ButtonCustom } from "./ui/button-custom";
import { Menu, X, ChevronDown, Sparkles, Layout, Zap, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Calculate scroll progress
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const progress = (window.scrollY / documentHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-4 bg-agentia-dark/80 glass backdrop-blur-lg" : "py-6 bg-transparent border-b border-agentia-dark-700"
      }`}
    >
      {/* Scroll Progress Indicator */}
      <motion.div 
        className="absolute top-0 left-0 h-0.5 bg-gradient-to-r from-agentia-teal to-agentia-green"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrollProgress / 100 }}
        transition={{ duration: 0.1 }}
      />

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <motion.div 
            onClick={() => scrollToSection("home")} 
            className="flex items-center gap-2 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-2xl font-bold font-space text-white">Agentia<span className="text-gradient-teal-green"> World</span></span>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            <motion.button 
              onClick={() => scrollToSection("home")} 
              className="text-sm font-medium text-white/80 hover:text-white transition-colors relative group"
              whileHover={{ y: -2 }}
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-agentia-teal to-agentia-green group-hover:w-full transition-all duration-300" />
            </motion.button>

            <div className="relative">
              <motion.button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)  }
                className="flex items-center text-sm font-medium text-white/80 hover:text-white transition-colors relative group"
                whileHover={{ y: -2 }}
              >
                Marketplace
                <motion.div
                  animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="ml-1 h-4 w-4" />
                </motion.div>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-agentia-teal to-agentia-green group-hover:w-full transition-all duration-300" />
              </motion.button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-64 origin-top-left glass-card rounded-lg p-2"
                  >
                    <motion.button 
                      onClick={() => scrollToSection("ai-agents")} 
                      className="flex items-center w-full text-left px-4 py-2 text-sm rounded-md hover:bg-white/10 transition-colors text-white group"
                      whileHover={{ x: 5 }}
                    >
                      <Sparkles className="mr-3 h-4 w-4 text-agentia-teal" />
                      AI Agents
                    </motion.button>
                    <motion.button 
                      onClick={() => scrollToSection("templates")} 
                      className="flex items-center w-full text-left px-4 py-2 text-sm rounded-md hover:bg-white/10 transition-colors text-white group"
                      whileHover={{ x: 5 }}
                    >
                      <Layout className="mr-3 h-4 w-4 text-agentia-teal" />
                      Templates
                    </motion.button>
                    <motion.button 
                      onClick={() => scrollToSection("new-arrivals")} 
                      className="flex items-center w-full text-left px-4 py-2 text-sm rounded-md hover:bg-white/10 transition-colors text-white group"
                      whileHover={{ x: 5 }}
                    >
                      <Zap className="mr-3 h-4 w-4 text-agentia-teal" />
                      New Arrivals
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.button 
              onClick={() => scrollToSection("customize")} 
              className="text-sm font-medium text-white/80 hover:text-white transition-colors relative group"
              whileHover={{ y: -2 }}
            >
              Customize
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-agentia-teal to-agentia-green group-hover:w-full transition-all duration-300" />
            </motion.button>

            <motion.button 
              onClick={() => scrollToSection("experts")} 
              className="text-sm font-medium text-white/80 hover:text-white transition-colors relative group"
              whileHover={{ y: -2 }}
            >
              AI Experts
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-agentia-teal to-agentia-green group-hover:w-full transition-all duration-300" />
            </motion.button>

            <motion.button 
              onClick={() => scrollToSection("testimonials")} 
              className="text-sm font-medium text-white/80 hover:text-white transition-colors relative group"
              whileHover={{ y: -2 }}
            >
              Testimonials
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-agentia-teal to-agentia-green group-hover:w-full transition-all duration-300" />
            </motion.button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <ButtonCustom variant="ghost" size="sm">
                Sign In
              </ButtonCustom>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <ButtonCustom variant="primary" size="sm">
                Get Started
              </ButtonCustom>
            </motion.div>
          </div>

          <motion.button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-agentia-dark-800 absolute left-0 right-0 top-[72px] p-4 flex flex-col space-y-4"
          >
            <motion.button 
              onClick={() => scrollToSection("home")} 
              className="text-left text-sm font-medium text-white/80 hover:text-white px-4 py-2 rounded-md hover:bg-white/10 transition-colors"
              whileHover={{ x: 5 }}
            >
              Home
            </motion.button>
            <motion.button 
              onClick={() => scrollToSection("marketplace")} 
              className="text-left text-sm font-medium text-white/80 hover:text-white px-4 py-2 rounded-md hover:bg-white/10 transition-colors"
              whileHover={{ x: 5 }}
            >
              Marketplace
            </motion.button>
            <motion.button 
              onClick={() => scrollToSection("customize")} 
              className="text-left text-sm font-medium text-white/80 hover:text-white px-4 py-2 rounded-md hover:bg-white/10 transition-colors"
              whileHover={{ x: 5 }}
            >
              Customize
            </motion.button>
            <motion.button 
              onClick={() => scrollToSection("experts")} 
              className="text-left text-sm font-medium text-white/80 hover:text-white px-4 py-2 rounded-md hover:bg-white/10 transition-colors"
              whileHover={{ x: 5 }}
            >
              AI Experts
            </motion.button>
            <motion.button 
              onClick={() => scrollToSection("testimonials")} 
              className="text-left text-sm font-medium text-white/80 hover:text-white px-4 py-2 rounded-md hover:bg-white/10 transition-colors"
              whileHover={{ x: 5 }}
            >
              Testimonials
            </motion.button>
            <div className="flex flex-col space-y-2 pt-2">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <ButtonCustom variant="ghost" size="sm" className="w-full">
                  Sign In
                </ButtonCustom>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <ButtonCustom variant="primary" size="sm" className="w-full">
                  Get Started
                </ButtonCustom>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
