
import React from 'react';
import { motion } from 'framer-motion';
import { Progress } from '@/components/ui/progress';

const experienceData = [
  {
    category: 'Education',
    items: [
      {
        title: 'University',
        organization: 'St. Josephs Institute Of Technology',
        details: 'CGPA: 8.42',
        period: '2023-2027',
        progress: 50
      },
      {
        title: 'High School',
        organization: 'Bharath Senior Secondary School',
        details: 'Percentage: 68%',
        period: '2008 - 2023',
        progress: 100
      }
    ]
  },
  {
    category: 'Professional Experience',
    items: [
      {
        title: 'Frontend Intern',
        organization: 'Cetas Information Technology Pvt Ltd',
        details: 'Developed Frontend Interfaces using HTML, CSS, JavaScript, ReactJs, Bootstrap, JQuery',
        period: 'Summer 2025',
        progress: 15
      },
      {
        title: 'Data Scientist',
        organization: 'Prodigy Infotech',
        details: 'Prepare, modify, analyse and predicting data',
        period: '2024 Dec - 2025 Jan',
        progress: 100
      }
    ]
  },
  
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
            My educational background and professional journey with progress tracking
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
                    
                    <p className="text-gray-400 mb-4">
                      {item.details}
                    </p>

                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-400">Progress</span>
                        <span className="text-sm font-medium text-purple-400">{item.progress}%</span>
                      </div>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ delay: sectionIndex * 0.3 + itemIndex * 0.2, duration: 0.8 }}
                      >
                        <Progress 
                          value={item.progress} 
                          className="h-2 bg-gray-700"
                        />
                      </motion.div>
                    </div>
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
