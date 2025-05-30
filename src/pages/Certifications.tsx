
import React from 'react';
import { motion } from 'framer-motion';

const certifications = [
  'AWS Certified Solutions Architect',
  'Google Cloud Professional',
  'Microsoft Azure Fundamentals',
  'React Developer Certification',
  'Node.js Certified Developer',
  'MongoDB Certified DBA',
  'Docker Certified Associate',
  'Kubernetes Certified Admin',
  'TensorFlow Developer Certificate',
  'Data Science Certification',
  'Machine Learning Specialist',
  'Python Programming Certificate',
  'JavaScript ES6+ Certification',
  'DevOps Engineer Certification',
  'Cybersecurity Fundamentals',
  'Agile Project Management',
  'UI/UX Design Certificate',
  'Full Stack Web Development',
  'Database Administration',
  'Cloud Security Certification'
];

const Certifications = () => {
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
            Certifications
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Professional certifications and achievements in various technologies
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300"
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">✓</span>
                </div>
                <h3 className="text-white font-medium text-sm leading-tight">
                  {cert}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Certifications;
