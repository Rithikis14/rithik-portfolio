
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, X } from 'lucide-react';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const socialLinks = [
    { icon: Github, name: 'GitHub', href: 'https://github.com', color: 'hover:text-gray-400' },
    { icon: Linkedin, name: 'LinkedIn', href: 'https://linkedin.com', color: 'hover:text-blue-400' },
    { icon: Instagram, name: 'Instagram', href: 'https://instagram.com', color: 'hover:text-pink-400' },
    { icon: X, name: 'Twitter', href: 'https://twitter.com', color: 'hover:text-blue-300' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-red-400 bg-clip-text text-transparent"
          >
            Let's Connect
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            Ready to bring your ideas to life? Let's discuss how we can work together 
            to create something amazing.
          </motion.p>

          {/* Contact Information */}
          <motion.div
            variants={itemVariants}
            className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 mb-12 border border-gray-700"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-purple-400">Email</h3>
                <a
                  href="mailto:john.doe@example.com"
                  className="text-xl text-gray-300 hover:text-white transition-colors"
                >
                  john.doe@example.com
                </a>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-purple-400">Phone</h3>
                <a
                  href="tel:+1234567890"
                  className="text-xl text-gray-300 hover:text-white transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </div>
            </div>
          </motion.div>

          {/* Social Media Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-8 text-white">Follow Me</h3>
            <div className="flex justify-center space-x-8">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 transition-all duration-300 ${social.color} hover:scale-110 hover:bg-gray-700`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={itemVariants}
            className="mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-red-600 rounded-full text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            >
              Start a Conversation
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
