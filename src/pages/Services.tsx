
import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Web Development',
    description: 'Full-stack web applications using modern technologies like React, Node.js, and cloud services.',
    features: ['Responsive Design', 'Performance Optimization', 'SEO Friendly', 'Cross-browser Compatibility']
  },
  {
    title: 'Data Analysis',
    description: 'Transform raw data into actionable insights using statistical analysis and visualization.',
    features: ['Statistical Analysis', 'Data Visualization', 'Report Generation', 'Trend Analysis']
  },
  {
    title: 'ML Model Development',
    description: 'Custom machine learning solutions for prediction, classification, and automation.',
    features: ['Predictive Modeling', 'Neural Networks', 'Model Deployment', 'Performance Tuning']
  },
  {
    title: 'Business Intelligence',
    description: 'Comprehensive BI solutions to help businesses make data-driven decisions.',
    features: ['Dashboard Development', 'KPI Tracking', 'Data Integration', 'Real-time Analytics']
  }
];

const Services = () => {
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
            Services
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Professional services to help bring your ideas to life
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700 hover:border-purple-500 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4 text-purple-400">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-red-400 rounded-full"></div>
                    <span className="text-gray-400">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
