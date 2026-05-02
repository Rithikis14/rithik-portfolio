import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowDown, Github, Linkedin, Instagram, X, FileText, Send } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-20 px-6 lg:px-12">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
      >
        
        {/* LEFT SIDE: Content */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <motion.div variants={itemVariants} className="inline-block px-4 py-1.5 mb-6 rounded-full bg-purple-500/10 border border-purple-500/20">
            <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent uppercase tracking-widest">
              Available for Freelance
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6 text-white leading-[1.1]"
          >
            I'm <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">Rithik V Kumar</span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl font-light mb-8 text-gray-300"
          >
            AI Engineer/Full Stack Developer
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            Expert in building and optimizing end-to-end solutions using web technologies, AI, and data science. Focused on applying cutting-edge analytics to solve real-world problems.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
          >
            <a href="/Rithik Resume.pdf">
              <button className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-red-600 rounded-2xl text-white font-bold hover:shadow-[0_10px_30px_rgba(168,85,247,0.3)] transition-all duration-300 transform hover:-translate-y-1">
                Download Resume <FileText size={18} className="group-hover:rotate-12 transition-transform" />
              </button>
            </a>
            <Link
              to="/contact"
              className="group flex items-center gap-2 px-8 py-4 border border-gray-700 rounded-2xl text-white font-bold hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1"
            >
              Get In Touch <Send size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-start space-x-4"
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
                className="w-12 h-12 bg-gray-900 border border-gray-800 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* RIGHT SIDE: Large Rectangular Image */}
        <motion.div 
          variants={itemVariants} 
          className="order-1 lg:order-2 relative"
        >
          <div className="relative h-[500px] w-full max-w-[500px] aspect-[4/5] mx-auto">
            {/* Background Decorative Glow */}
            {/* <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-red-600 rounded-[3rem] blur-2xl opacity-20 animate-pulse"></div> */}
            
            {/* Image Container */}
            <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden border-2 border-gray-800 shadow-2xl">
              <img
                src="/20250913_091656.jpg"
                alt="Rithik V Kumar"
                className="w-full h-full object-cover hover:grayscale-0 transition-all duration-700 scale-105 hover:scale-100"
              />
              {/* Subtle Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent opacity-60"></div>
            </div>

            {/* Floating Experience Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-gray-900 border border-gray-800 p-4 rounded-2xl shadow-xl backdrop-blur-md hidden md:block"
            >
              <div className="text-3xl font-bold text-white"></div>
              <div className="text-xs text-gray-400 uppercase tracking-tighter font-bold">Multi‑Domain Developer</div>
            </motion.div>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default Hero;