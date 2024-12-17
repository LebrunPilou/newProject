import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export function About() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-8"
        >
          À Propos
        </motion.h2>
        <div className="max-w-2xl mx-auto">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 mb-6"
          >
            Passionné par le développement web depuis plus de 5 ans, je crée des solutions
            numériques innovantes qui répondent aux besoins des utilisateurs. Spécialisé
            en React, Node.js et TypeScript, je m'efforce de produire un code propre et
            maintenable.
          </motion.p>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-bold mb-2">Front-end</h3>
              <p className="text-gray-600">React, TypeScript, Tailwind CSS</p>
            </motion.div>
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-bold mb-2">Back-end</h3>
              <p className="text-gray-600">Node.js, Express, PostgreSQL</p>
            </motion.div>
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-bold mb-2">Outils</h3>
              <p className="text-gray-600">Git, Docker, AWS</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}