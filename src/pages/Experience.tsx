
import React from 'react';
import { motion } from 'framer-motion';

const experienceData = [
  {
    category: 'Education',
    items: [
      {
        title: 'High School',
        organization: 'Springfield High School',
        details: 'GPA: 3.9/4.0',
        period: '2016 - 2020'
      },
      {
        title: 'Bachelor of Computer Science',
        organization: 'University of Technology',
        details: 'GPA: 3.8/4.0 - Magna Cum Laude',
        period: '2020 - 2024'
      }
    ]
  },
  {
    category: 'Professional Experience',
    items: [
      {
        title: 'Software Engineering Intern',
        organization: 'Tech Startup Inc.',
        details: 'Developed full-stack applications using React and Node.js',
        period: 'Summer 2023'
      },
      {
        title: 'Junior Full Stack Developer',
        organization: 'Digital Solutions Ltd.',
        details: 'Building scalable web applications and REST APIs',
        period: '2024 - Present'
      }
    ]
  }
];

const Experience = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-red-400 bg-clip-text text-transparent">
            Experience
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            My educational background and professional journey
          </p>
        </motion.div>

        <div className="space-y-12">
          {experienceData.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: sectionIndex * 0.2 }}
            >
              <h2 className="text-3xl font-semibold mb-8 text-purple-400">
                {section.category}
              </h2>
              
              <div className="space-y-6">
                {section.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: sectionIndex * 0.2 + itemIndex * 0.1 }}
                    className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-white">
                        {item.title}
                      </h3>
                      <span className="text-purple-400 font-medium">
                        {item.period}
                      </span>
                    </div>
                    
                    <p className="text-lg text-gray-300 mb-2">
                      {item.organization}
                    </p>
                    
                    <p className="text-gray-400">
                      {item.details}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
