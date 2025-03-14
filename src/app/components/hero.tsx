"use client"
import React, { useEffect, useRef } from "react";
import { ButtonCustom } from "./ui/button-custom";
import { ShoppingCart, Paintbrush } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  // Enhanced parallax effect
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Particle effect
  useEffect(() => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '0';
    canvas.style.opacity = '0.5';
    heroRef.current?.appendChild(canvas);

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    const createParticle = () => {
      let x, y, speedX, speedY;

      // Distribute particles evenly along all edges
      const totalEdgeLength = (canvas.width + canvas.height) * 2;
      const randomPoint = Math.random() * totalEdgeLength;

      if (randomPoint < canvas.width) { // Top edge
        x = randomPoint;
        y = 0;
        speedX = (Math.random() - 0.5) * 2; // -1 to 1
        speedY = Math.random() * 1.5; // 0 to 1.5 (moving down)
      } else if (randomPoint < canvas.width + canvas.height) { // Right edge
        x = canvas.width;
        y = randomPoint - canvas.width;
        speedX = -Math.random() * 1.5; // -1.5 to 0 (moving left)
        speedY = (Math.random() - 0.5) * 2; // -1 to 1
      } else if (randomPoint < canvas.width * 2 + canvas.height) { // Bottom edge
        x = randomPoint - (canvas.width + canvas.height);
        y = canvas.height;
        speedX = (Math.random() - 0.5) * 2; // -1 to 1
        speedY = -Math.random() * 1.5; // -1.5 to 0 (moving up)
      } else { // Left edge
        x = 0;
        y = randomPoint - (canvas.width * 2 + canvas.height);
        speedX = Math.random() * 1.5; // 0 to 1.5 (moving right)
        speedY = (Math.random() - 0.5) * 2; // -1 to 1
      }

      return {
        x,
        y,
        size: Math.random() * 2 + 1,
        speedX,
        speedY,
        opacity: Math.random() * 0.5 + 0.3 // Slightly reduced opacity range
      };
    };

    // Initialize particles
    for (let i = 0; i < 150; i++) {
      particles.push(createParticle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle, index) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // If particle moves out of bounds, respawn it from a random edge
        if (particle.x < 0 || particle.x > canvas.width || 
            particle.y < 0 || particle.y > canvas.height) {
          particles[index] = createParticle();
        }

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.remove();
    };
  }, []);

  return (
    <section 
      ref={heroRef} id="home"
      className="relative min-h-screen overflow-hidden bg-mesh flex flex-col items-center justify-center pt-20 pb-12"
    >
      {/* Animated background elements with enhanced movement */}
      <motion.div 
        className="absolute inset-0 overflow-hidden z-0"
        style={{ y, opacity }}
      >
        <motion.div 
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-agentia-teal/20 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          data-parallax="0.2"
        />
        <motion.div 
          className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-agentia-green/20 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          data-parallax="0.15"
        />
      </motion.div>

      {/* Enhanced floating elements with 3D effect */}
      <motion.div 
        className="absolute left-16 top-48 w-20 h-20 glass-card rounded-2xl rotate-12 opacity-70"
        animate={{
          y: [0, -20, 0],
          rotate: [12, 15, 12],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        data-parallax="0.1"
        style={{
          transformStyle: "preserve-3d",
          perspective: "1000px",
        }}
      />
      <motion.div 
        className="absolute right-24 top-64 w-16 h-16 glass-card rounded-xl -rotate-6 opacity-60"
        animate={{
          y: [0, -15, 0],
          rotate: [-6, -8, -6],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        data-parallax="0.25"
        style={{
          transformStyle: "preserve-3d",
          perspective: "1000px",
        }}
      />
      <motion.div 
        className="absolute left-1/3 bottom-40 w-24 h-24 glass-card rounded-2xl rotate-45 opacity-60"
        animate={{
          y: [0, -25, 0],
          rotate: [45, 48, 45],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        data-parallax="0.2"
        style={{
          transformStyle: "preserve-3d",
          perspective: "1000px",
        }}
      />

      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div 
          className="inline-block glass-card px-4 py-2 rounded-full mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-medium bg-clip-text text-transparent bg-gradient-to-r from-agentia-teal-light to-agentia-green-light">
            New: AI Agent Marketplace Launch 🚀
          </span>
        </motion.div>
        
        <motion.h1 
          className="mt-8 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white text-shadow max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Empower Your Business with <span className="text-gradient-teal-green">AI – Buy, Sell & Customize</span> AI Agents!
        </motion.h1>
        
        <motion.p 
          className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Discover the world&apos;s first marketplace for intelligent AI agents. Transform your workflow, automate tasks, and scale your business with cutting-edge AI solutions.
        </motion.p>
        
        <motion.div 
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <ButtonCustom 
            variant="primary" 
            size="lg" 
            icon={<ShoppingCart className="w-5 h-5" />}
            className="w-full sm:w-auto group relative overflow-hidden"
          >
            <span className="relative z-10">Explore Marketplace</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-agentia-teal to-agentia-green opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            />
          </ButtonCustom>
          <ButtonCustom 
            variant="secondary" 
            size="lg" 
            icon={<Paintbrush className="w-5 h-5" />}
            className="w-full sm:w-auto group relative overflow-hidden"
          >
            <span className="relative z-10">Customize Your AI Agent</span>
            <motion.div
              className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            />
          </ButtonCustom>
        </motion.div>
        
        <motion.div 
          className="mt-16 glass-card py-5 px-6 rounded-2xl max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className="text-2xl md:text-3xl font-bold text-gradient-teal-green">1000+</p>
              <p className="text-xs md:text-sm text-white/70 mt-1">AI Agents</p>
            </motion.div>
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className="text-2xl md:text-3xl font-bold text-gradient-teal-green">250+</p>
              <p className="text-xs md:text-sm text-white/70 mt-1">AI Experts</p>
            </motion.div>
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className="text-2xl md:text-3xl font-bold text-gradient-teal-green">10K+</p>
              <p className="text-xs md:text-sm text-white/70 mt-1">Happy Users</p>
            </motion.div>
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className="text-2xl md:text-3xl font-bold text-gradient-teal-green">99%</p>
              <p className="text-xs md:text-sm text-white/70 mt-1">Satisfaction</p>
            </motion.div>
          </div>
        </motion.div>

        <p className="text-white/80 text-lg mb-10 max-w-2xl">
          Transform your business with AI that&apos;s ready to deploy.
        </p>
      </div>
    </section>
  );
};

export default Hero;
