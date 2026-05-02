import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
const projects = [
  {
    title: 'Reminisence AI',
    description: 'Personal voice assistant for dementia patients to recall memories and connect with loved ones by cloning their voice',
    image: 'https://png.pngtree.com/thumb_back/fh260/background/20251009/pngtree-robotic-nurse-caring-for-patients-in-future-hospitals-image_19807379.webp',
    tech: ['React', 'Whisper','Ollama','Coqui-TTS'],
    github: 'https://github.com/Rithikis14/Reminisence_AI',
    demo: 'https://github.com/Rithikis14/Reminisence_AI'
  },
  {
    title: 'AquaThreat',
    description: 'Underwater mine detection using computer vision and deep learning along with gan based data augmentation to enhance training dataset',
    image: 'https://www.mdpi.com/sensors/sensors-22-09536/article_deploy/html/images/sensors-22-09536-g021.png',
    tech: ['Pytorch', 'GANs', 'YOLOv8','CBAM'],
    github: 'https://github.com/Rithikis14/AquaThreat',
    demo: 'https://github.com/Rithikis14/AquaThreat'
  },
  {
    title: 'FinSight',
    description: 'Overall investment analysis for user portfolio with AI Integration',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/006/654/402/small/digital-stock-market-or-forex-trading-graph-and-candlestick-chart-suitable-for-financial-investment-financial-investment-trends-for-business-background-concept-photo.jpg',
    tech: ['ReactJS', 'Springboot', 'Ollama','PostgreSQL'],
    github: 'https://github.com/Rithikis14/FinSight',
    demo: 'https://github.com/Rithikis14/FinSight'
  },
  {
    title: 'EcoLearn',
    description: 'Gamified educational environmental learning platform for children to promote sustainability awareness and eco-friendly habits',
    image: 'https://media.licdn.com/dms/image/v2/D5612AQGoJn7_m6ZnjA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1721655629923?e=2147483647&v=beta&t=eSTxNoPoRU_d-aQPzYE4WVXWdbJX_TKU97V7pRoQp_k',
    tech: ['Vite','TypeScript', 'Express', 'MongoDB'],
    github: 'https://github.com/Rithikis14/EcoLearn',
    demo: 'https://github.com/Rithikis14/EcoLearn'
  },
  {
    title: 'Cold Email Generator',
    description: 'Extracts job listings from career pages and generates personalized emails with portfolio links from a vector database',
    image: 'https://www.autobound.ai/generated/blog-cold-email-templates-hero.webp',
    tech: ['Python', 'LangChain', 'RAG','ChromaDB'],
    github: 'https://github.com/Rithikis14/cold_email_generator',
    demo: 'https://github.com/Rithikis14/cold_email_generator'
  },
  {
    title: 'Prediction Materials Construction Site',
    description: 'Predicting daily sales for various heavy machinery types and optimizing inventory allocation using machine learning techniques.',
    image: 'https://blog.cyberstockroom.com/wp-content/uploads/2025/11/forecasting-material-needs-in-construction-projects-staying-ahead-of-demand.373z.png?w=1024',
    tech: ['Python','Pandas','Scikit-learn', 'XGBoost'],
    github: 'https://github.com/Rithikis14/Prediction_Materials_Constructionsite',
    demo: 'https://github.com/Rithikis14/Prediction_Materials_Constructionsite'
  },
  {
    title: 'Content Creation Automation',
    description: 'Automated content generation for social media marketing using AI to create engaging videos based on trending topics.',
    image: 'https://digital4africa.com/wp-content/uploads/2025/12/Digital4Africa-AI-Course-Registration-1024x576.webp',
    tech: ['Python','N8N','Json'],
    github: 'https://github.com/Rithikis14/content_creation_automamtion',
    demo: 'https://github.com/Rithikis14/content_creation_automamtion'
  }
  // {
  //   title: 'Burg Bazzar',
  //   description: 'Dashboard Visualizing the sales of Blinkit',
  //   image: 'https://assets.entrepreneur.com/content/3x2/2000/1734074212-Photo-2024-12-13T124348531.png?format=pjeg&auto=webp&crop=16:9',
  //   tech: ['PowerBi','Copilot'],
  //   github: 'https://github.com/Rithikis14/Sales-Report',
  //   demo: '#'
  // },
  // {
  //   title: 'Charity Flow',
  //   description: 'Dashboard Visualizing the sales of Blinkit',
  //   image: 'https://assets.entrepreneur.com/content/3x2/2000/1734074212-Photo-2024-12-13T124348531.png?format=pjeg&auto=webp&crop=16:9',
  //   tech: ['PowerBi','Copilot'],
  //   github: 'https://github.com/Rithikis14/Sales-Report',
  //   demo: '#'
  // },
  // {
  //   title: 'Spotify Clone',
  //   description: 'Dashboard Visualizing the sales of Blinkit',
  //   image: 'https://assets.entrepreneur.com/content/3x2/2000/1734074212-Photo-2024-12-13T124348531.png?format=pjeg&auto=webp&crop=16:9',
  //   tech: ['PowerBi','Copilot'],
  //   github: 'https://github.com/Rithikis14/Sales-Report',
  //   demo: '#'
  // },
  // {
  //   title: 'Twitter Clone',
  //   description: 'Dashboard Visualizing the sales of Blinkit',
  //   image: 'https://assets.entrepreneur.com/content/3x2/2000/1734074212-Photo-2024-12-13T124348531.png?format=pjeg&auto=webp&crop=16:9',
  //   tech: ['PowerBi','Copilot'],
  //   github: 'https://github.com/Rithikis14/Sales-Report',
  //   demo: '#'
  // },
  // {
  //   title: 'Personal Voice Agent',
  //   description: 'Dashboard Visualizing the sales of Blinkit',
  //   image: 'https://assets.entrepreneur.com/content/3x2/2000/1734074212-Photo-2024-12-13T124348531.png?format=pjeg&auto=webp&crop=16:9',
  //   tech: ['PowerBi','Copilot'],
  //   github: 'https://github.com/Rithikis14/Sales-Report',
  //   demo: '#'
  // },
  // {
  //   title: 'Personal Management System',
  //   description: 'Dashboard Visualizing the sales of Blinkit',
  //   image: 'https://assets.entrepreneur.com/content/3x2/2000/1734074212-Photo-2024-12-13T124348531.png?format=pjeg&auto=webp&crop=16:9',
  //   tech: ['PowerBi','Copilot'],
  //   github: 'https://github.com/Rithikis14/Sales-Report',
  //   demo: '#'
  // }
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  // Logic to show only 3 or all projects
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="min-h-screen pt-24 pb-16 px-4 antialiased" id="projects">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-red-400 bg-clip-text text-transparent">
            Featured Projects
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work in AI, Full Stack, and Data Science.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-gray-800/40 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-700/50 group transform-gpu shadow-xl"
              >
                <div className="relative h-48 overflow-hidden bg-gray-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                     <span className="text-white text-xs font-mono">View Details</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-purple-500/10 text-purple-300 rounded-lg text-[10px] font-bold uppercase tracking-wider border border-purple-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between border-t border-gray-700/50 pt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-semibold"
                    >
                      <Github size={18} />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm font-bold"
                    >
                      Live Demo
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show More / Show Less Button */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-16 flex justify-center"
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="group flex items-center gap-3 px-8 py-3.5 bg-gray-900 border border-gray-700 rounded-full text-white font-bold hover:border-purple-500 hover:bg-purple-500/5 transition-all shadow-lg"
          >
            {showAll ? (
              <>Show Less <ChevronUp size={20} className="group-hover:-translate-y-1 transition-transform" /></>
            ) : (
              <>Show More Projects <ChevronDown size={20} className="group-hover:translate-y-1 transition-transform" /></>
            )}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;