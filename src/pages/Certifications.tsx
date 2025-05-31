
import React from 'react';
import { motion } from 'framer-motion';

const certifications = [
  { title: 'NPTEL: Python For Data Science Score: 85%', url: 'https://drive.google.com/file/d/1_tMQij430wv1T6i99GH5bw8anhOPim9T/view?usp=sharing'},
  { title: 'NPTEL: Programming In Java Score: 68%', url: 'https://drive.google.com/file/d/1RMwNkGBgPWuZ2wznN_NjomOWd8ggalnw/view?usp=sharing' },
  { title: 'CodeChef All Badges & Certificates', url: 'https://drive.google.com/drive/folders/1Lg985ugspTq0hjubB5OGpfJ5euV5EA-3?usp=sharing' },
  { title: 'CodingNinjas: Basics Of Machine Learning', url: 'https://drive.google.com/file/d/17SG4akWfiNORluyBEVcPGEdTd3ukHbDS/view?usp=sharing' },
  { title: 'C For Everyone Programming Fundamentals', url: 'https://coursera.org/share/6c1666d29c879911bbe693c914ecc25d' },
  { title: 'Microsoft: Harnessing The Power Of Data With Power BI', url: 'https://coursera.org/share/daec05461445c279d9479278c1a81757' },
  { title: 'Google: Introduction To Git & Github', url: 'https://coursera.org/share/d74f4cd5719c043d87395028da0bce37' },
  { title: 'Microsoft: Preparing Data For Analysis With Microsoft Excel', url: 'https://coursera.org/share/ec5ab956bccd6beb82876bdcf2a979cf' },
  { title: 'Geeksforgeeks: Python Certification', url: 'https://www.geeksforgeeks.org/certificate/77993dcaf4adbfffe213f8aa12f6ee36?utm_source=socials&utm_medium=cc_link' },
  { title: 'IBMSkillsBuild: Artificial Intelligence Fundamentals', url: 'https://www.credly.com/badges/bfcb3be3-630e-4638-a85f-2fe27b9ff629/public_url' },
  { title: 'InfosysSpringboard: Introduction To Datascience', url: 'https://drive.google.com/file/d/1YHzin42PS1vr6S1qC2Oz4F_lZJHh9TEl/view?usp=sharing' },
  { title: 'InfosysSpringboard: Database & SQL', url: 'https://drive.google.com/file/d/1KWBBPyIptyvUvVYbCaKvbnLllVM9qL6a/view?usp=sharing' },
  { title: 'Kaggle: Pandas Certification (DataScience)', url: 'https://drive.google.com/file/d/1Y-0ofCgEq88hCSRDE17R8pVJg_TEnUpr/view?usp=sharing' },
  { title: 'Linguaskill Communication Certification', url: 'https://drive.google.com/file/d/1OTHWCpOu0YV5m3lRHZlWFTRFM-d85Yat/view?usp=sharing' },
  { title: 'Microsoft Learn Achievements (Badges)', url: 'https://learn.microsoft.com/en-us/users/rithikvkumar-6434/?tab=tab-modules' },
  { title: 'Deloitte: Data Analytics Job Simulation', url: 'https://drive.google.com/file/d/1hZwfA2ZKnUEXx_WZQOW2G0ZuIT_CSIdI/view?usp=sharing' },
  { title: 'Scalar: Build An E-commerce Platform Using React', url: 'https://drive.google.com/file/d/1pv01UTU6KRxTztvqaSGQuXHchSrfQVuV/view?usp=sharing' },
  { title: 'Udemy: Build Website From Scratch Using HTML & CSS', url: 'https://drive.google.com/file/d/1thb4zWsOBRiaCATfJ1TV9t89V2FR0xH_/view?usp=sharing' },
  { title: 'Udemy: The Complete Python Bootcamp From Zero To Hero', url: 'https://drive.google.com/file/d/1MrOijjLRrdRAX-np8YTe8eWMZkIfIlEK/view?usp=sharing' },
  { title: 'Basic Proficiency In Knime Analytics Platform', url: 'https://www.credly.com/badges/da16315b-1362-4d71-ad71-68d8519dc9ec/public_url' }
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
            <a 
            key={index}
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline"
            >
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
                  {cert.title}
                </h3>
              </div>
            </motion.div>
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Certifications;
