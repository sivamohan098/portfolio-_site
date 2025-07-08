
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Instagram, Facebook, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedBackground from '@/components/AnimatedBackground';

interface PreLoaderProps {
  onSearchClick: () => void;
}

const PreLoader = ({ onSearchClick }: PreLoaderProps) => {
  // Auto-click search button after animation completes
  useEffect(() => {
    const timer = setTimeout(() => {
      onSearchClick();
    }, 3000); // Auto-click after 3 seconds

    return () => clearTimeout(timer);
  }, [onSearchClick]);

  const socialIcons = [
    { Icon: Github, delay: 0.2, color: 'text-gray-300' },
    { Icon: Linkedin, delay: 0.4, color: 'text-blue-300' },
    { Icon: Mail, delay: 0.6, color: 'text-pink-300' },
    { Icon: Instagram, delay: 0.8, color: 'text-purple-300' },
    { Icon: Facebook, delay: 1.0, color: 'text-blue-400' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden flex items-center justify-center">
      <AnimatedBackground />
      
      <div className="relative z-10 text-center">
        {/* Floating Social Icons - Made bigger */}
        <div className="absolute inset-0 pointer-events-none">
          {socialIcons.map(({ Icon, delay, color }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                x: [0, 30, -30, 0],
                y: [0, -20, 20, 0]
              }}
              transition={{ 
                duration: 4,
                delay,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className={`absolute ${color}`}
              style={{
                left: `${20 + index * 15}%`,
                top: `${30 + (index % 2) * 40}%`,
              }}
            >
              <Icon size={64} />
            </motion.div>
          ))}
        </div>

        {/* Main Name */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            MUSIDIPALLI
          </h1>
          <h1 className="text-4xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            SIVA MOHAN
          </h1>
        </motion.div>

        {/* Search Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <Button
            onClick={onSearchClick}
            className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-12 py-6 rounded-full text-xl font-medium transition-all duration-300 shadow-2xl shadow-cyan-500/25 border-2 border-cyan-400/50 hover:scale-105"
          >
            <Search className="w-6 h-6 mr-3" />
            Search
          </Button>
        </motion.div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 0],
                x: Math.random() * 800 - 400,
                y: Math.random() * 600 - 300,
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
              style={{
                left: '50%',
                top: '50%',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PreLoader;
