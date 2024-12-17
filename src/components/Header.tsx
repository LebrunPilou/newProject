import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <motion.img
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 1 }}
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80"
          alt="Photo de profil"
          className="rounded-full w-32 h-32 mx-auto mb-6 border-4 border-white shadow-lg"
        />
        <motion.h1 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold mb-4"
        >
          Jean Dupont
        </motion.h1>
        <motion.p 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl mb-6"
        >
          Développeur Full Stack
        </motion.p>
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center space-x-4"
        >
          <motion.a 
            whileHover={{ scale: 1.2 }}
            href="#" 
            className="hover:text-blue-200 transition-colors"
          >
            <Github className="w-6 h-6" />
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.2 }}
            href="#" 
            className="hover:text-blue-200 transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.2 }}
            href="#" 
            className="hover:text-blue-200 transition-colors"
          >
            <Mail className="w-6 h-6" />
          </motion.a>
        </motion.div>
      </div>
    </header>
  );
}