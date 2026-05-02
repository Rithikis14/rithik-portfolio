import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import { RotateCw, ChevronLeft, ChevronRight } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Java', 'Python', 'C', 'JavaScript'],
    description: 'Foundational programming languages for scalable software.'
  },
  {
    title: 'Full Stack Dev',
    skills: ['HTML5', 'CSS3', 'React', 'Node.js', 'Express.js', 'FastAPI', 'SpringBoot', 'MongoDB', 'PostgreSQL'],
    description: 'Building end-to-end web and mobile applications with modern stacks.'
  },
  {
    title: 'AI & Data Science',
    skills: ['Pandas', 'Scikit-Learn', 'YOLO', 'TensorFlow', 'LLMs', 'RAG', 'Prompt Engineering'],
    description: 'Developing intelligent solutions using Deep Learning and Generative AI.'
  },
  {
    title: 'Tools & Design',
    skills: ['Git', 'GitHub', 'AWS', 'Vercel', 'Figma', 'N8N', 'Power BI', 'Knime'],
    description: 'Utilizing professional tools for deployment, automation, and UI/UX.'
  }
];

const Skills = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const lastMoveTime = useRef(0);

  const move = useCallback((step) => {
    const now = Date.now();
    if (now - lastMoveTime.current > 400) {
      setCurrentIndex((prev) => (prev + step + skillCategories.length) % skillCategories.length);
      lastMoveTime.current = now;
    }
  }, []);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => move(1), 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, move]);

  return (
    <section 
      className="min-h-screen py-24 px-4 flex items-center justify-center relative overflow-hidden"
      id="skills"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* LEFT SIDE: Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-red-400 bg-clip-text text-transparent">
            Technical Arsenal
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            I am a **Computer Science Engineering student** with a deep passion for building intelligent systems. 
            My expertise spans from **Full-Stack Development** utilizing the MERN stack and Spring Boot 
            to cutting-edge **AI Engineering** involving Computer Vision (YOLO) and Large Language Models.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-purple-400">
              <span className="h-px w-8 bg-purple-500"></span>
              <span className="font-mono text-sm tracking-widest uppercase">Expertise focus</span>
            </div>
            <p className="text-gray-400">
              Currently maintaining a **8.32 CGPA** and having solved over **1,800+ coding problems**, 
              I combine academic excellence with hands-on project experience in dementia care AI and e-waste management platforms.
            </p>
          </div>
        </motion.div>

        {/* RIGHT SIDE: 3D Stack Carousel */}
        <div className="relative h-[500px] flex items-center justify-center" style={{ perspective: '1200px' }}>
          
          {/* Sensitive Hover Zones (Specific to the Carousel Area) */}
          <div className="absolute left-0 top-0 w-[20%] h-full z-[60] cursor-w-resize" onMouseMove={() => move(-1)} />
          <div className="absolute right-0 top-0 w-[20%] h-full z-[60] cursor-e-resize" onMouseMove={() => move(1)} />

          <div className="relative w-full h-full flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
            {skillCategories.map((category, index) => {
              let position = index - currentIndex;
              if (position > skillCategories.length / 2) position -= skillCategories.length;
              if (position < -skillCategories.length / 2) position += skillCategories.length;

              const isCenter = index === currentIndex;
              const isVisible = Math.abs(position) <= 1; // Show center and peeking neighbors

              return (
                <motion.div
                  key={index}
                  onMouseEnter={() => !isCenter && setCurrentIndex(index)}
                  className={`absolute w-[300px] md:w-[380px] h-[420px] rounded-[2rem] cursor-pointer transition-all duration-700 ease-out p-8 border
                    ${isCenter ? 'border-purple-500/50 shadow-2xl shadow-purple-500/30 bg-gray-900/95' : 'border-white/5 bg-gray-900/40 backdrop-blur-sm opacity-40'}
                  `}
                  style={{
                    transform: `
                      translateX(${position * 250}px) 
                      translateZ(${isCenter ? '100px' : '-200px'}) 
                      rotateY(${position * -35}deg)
                      scale(${isCenter ? 1.05 : 0.85})
                    `,
                    zIndex: 100 - Math.abs(position),
                    opacity: isVisible ? 1 : 0,
                    filter: isCenter ? 'none' : 'blur(2px)',
                  }}
                >
                  <div className="h-full flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6 border border-purple-500/30">
                       <span className="text-2xl">🏆</span>
                    </div>
                    <h3 className={`font-bold mb-4 ${isCenter ? 'text-2xl text-white' : 'text-lg text-gray-500'}`}>
                      {category.title}
                    </h3>
                    <p className={`text-sm text-gray-400 mb-6 transition-opacity ${isCenter ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
                      {category.description}
                    </p>
                    
                    <div className="flex flex-wrap justify-center gap-2">
                      {category.skills.map((skill, i) => (
                        <span 
                          key={i} 
                          className={`px-3 py-1 rounded-lg text-xs font-medium transition-all
                            ${isCenter ? 'bg-purple-500/10 text-purple-300 border border-purple-500/20' : 'bg-gray-800 text-gray-600'}
                          `}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Arrows (Carousel Local) */}
          <button onClick={() => move(-1)} className="absolute left-[-20px] z-[70] p-3 rounded-full bg-gray-800/80 border border-white/10 text-white hover:bg-purple-600 transition-all">
            <ChevronLeft size={20} />
          </button>
          <button onClick={() => move(1)} className="absolute right-[-20px] z-[70] p-3 rounded-full bg-gray-800/80 border border-white/10 text-white hover:bg-purple-600 transition-all">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Shared Footer Controls (Matching Projects Style) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6">
        <div className="flex gap-2">
          {skillCategories.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${i === currentIndex ? 'w-10 bg-purple-500' : 'w-2 bg-gray-700'}`}
            />
          ))}
        </div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => move(1)}
          className="p-5 bg-gradient-to-tr from-purple-600 to-red-500 rounded-full shadow-lg text-white"
        >
          <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 10, ease: "linear" }}>
            <RotateCw size={24} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
};

export default Skills;