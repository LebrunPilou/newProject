import React from 'react';
import { motion } from 'framer-motion';
import { Header } from './components/Header';
import { About } from './components/About';
import { Contact } from './components/Contact';

function App() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50"
    >
      <Header />
      <About />
      <Contact />
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-gray-800 text-white py-6 text-center"
      >
        <p>&copy; 2024 Jean Dupont. Tous droits réservés.</p>
      </motion.footer>
    </motion.div>
  );
}

export default App;