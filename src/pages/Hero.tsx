
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowDown, Github, Linkedin, Instagram, X } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
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

  return (
    <div className="min-h-screen flex items-center justify-center pt-16 px-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center"
      >
        {/* Profile Image */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="relative w-48 h-48 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-red-400 rounded-full blur-lg opacity-30"></div>
            <img
              src="\public\IMG-20250412-WA0015.jpg"
              alt="Profile"
              className="relative w-full h-full rounded-full object-cover border-4 border-gray-700"
            />
          </div>
        </motion.div>

        {/* Name and Title */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent"
        >
          Rithik V Kumar
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-2xl md:text-3xl font-light mb-8 text-gray-300"
        >
          Data Scientist & Frontend Developer
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Passionate about creating innovative solutions through cutting-edge technology. 
          Specializing in web development, machine learning, and data analysis to bring 
          ideas to life and solve complex problems.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
        >
          <a href="/public/rithik resume main.pdf"><button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-red-600 rounded-full text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
            Download Resume
          </button></a>
          <Link
            to="/contact"
            className="px-8 py-4 border border-gray-600 rounded-full text-white font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </Link>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center space-x-6 mb-16"
        >
          {[
            { icon: Github, href: 'https://github.com/Rithikis14' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/rithikvkumar14' },
            { icon: Instagram, href: 'https://www.instagram.com/rithikvk_14/' },
            { icon: X, href: 'https://x.com/rithikk63135723' },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-red-600 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <social.icon size={20} />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="animate-bounce"
        >
          <ArrowDown className="w-6 h-6 mx-auto text-gray-500" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
