
import React from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowUp } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Frontend Of an e-commerce solution with HTML, CSS, and JavaScript',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Rithikis14/burgbuzar-website',
    //demo: '#'
  },
  {
    title: 'House Price Prediction',
    description: 'Prediciting the house prices in future',
    image: 'https://www.appliedaicourse.com/blog/wp-content/uploads/2025/01/House-Price-Prediction-Using-Machine-Learning.png',
    tech: ['Python', 'Pandas', 'ScikitLearn'],
    github: 'https://github.com/Rithikis14/House_price_prediction',
    demo: '#'
  },
  {
    title: 'Social Media Website',
    description: 'A Social Media Website Used for donating reused products',
    image: 'https://elements-resized.envatousercontent.com/elements-cover-images/d0fecae4-8ef0-4919-abe8-42d112b3429e?w=433&cf_fit=scale-down&q=85&format=auto&s=bdbc96c237e5fe41ce91439870aaa28769410ed03988a81ba294423b6c740654',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    github: 'https://github.com/Rithikis14/Charity_flow',
    demo: '#'
  },
  {
    title: 'Personal Portfolio Website',
    description: 'A personal portfolio website with particles and animations',
    image: 'https://w3layouts.b-cdn.net//wp-content/uploads/2022/12/UI-Portfolio-Website-Template-scaled.jpg',
    tech: ['Vite', 'TypeScript', 'React','TailwindCSS','FramerMotion','ParticleJs'],
    github: 'https://github.com/Rithikis14/shadow-burst-site',
    demo: '#'
  },
  {
    title: 'Churn Prediction',
    description: 'Predicting the loyality of a telecom sales company with the help of Artificial Neural Networks(ANN)',
    image: 'https://miro.medium.com/v2/resize:fit:1024/1*WZdoYPpmiIk1AcPQ1YHWug.png',
    tech: ['Python', 'TensorFlow', 'Pandas'],
    github: 'https://github.com/Rithikis14/Churn_prediction',
    demo: '#'
  },
  {
    title: 'Blinkit Sales Report',
    description: 'Dashboard Visualizing the sales of Blinkit',
    image: 'https://assets.entrepreneur.com/content/3x2/2000/1734074212-Photo-2024-12-13T124348531.png?format=pjeg&auto=webp&crop=16:9',
    tech: ['PowerBi','Copilot'],
    github: 'https://github.com/Rithikis14/Sales-Report',
    demo: '#'
  }
];

const Projects = () => {
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

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-red-400 bg-clip-text text-transparent">
            Featured Projects
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Showcase of my recent work and personal projects
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800/50 backdrop-blur-lg rounded-xl overflow-hidden border border-gray-700 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-xs border border-purple-600/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <Github size={16} />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    <ArrowUp size={16} />
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
