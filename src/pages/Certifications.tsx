import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Award, ChevronDown, ChevronUp } from 'lucide-react';

const certifications = [
  { title: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional', url: 'https://drive.google.com/file/d/1mmA-kg7cW0quwhzzys_qnOQ9e6oU5TPT/view?usp=sharing', image: '/certs/Oracle.png' },
  { title: 'NPTEL: Python For Data Science Score: 85%', url: 'https://drive.google.com/file/d/1_tMQij430wv1T6i99GH5bw8anhOPim9T/view?usp=sharing', image: '/certs/Screenshot 2026-05-02 214030.png' },
  { title: 'Basic Proficiency In Knime Analytics Platform', url: 'https://www.credly.com/badges/da16315b-1362-4d71-ad71-68d8519dc9ec/public_url', image: '/certs/Screenshot 2026-05-02 214501.png' },
  { title: 'Deloitte: Data Analytics Job Simulation', url: 'https://drive.google.com/file/d/1hZwfA2ZKnUEXx_WZQOW2G0ZuIT_CSIdI/view?usp=sharing', image: '/certs/forage internship properly alligned.png' },
  { title: 'NPTEL: Programming In Java Score: 68%', url: 'https://drive.google.com/file/d/1RMwNkGBgPWuZ2wznN_NjomOWd8ggalnw/view?usp=sharing', image: '/certs/Screenshot 2026-05-02 214013.png' },
  { title: 'Kaggle: Introduction to Machine Learning', url: 'https://drive.google.com/file/d/1AcR2fMBxqj_RjgACcEGKj8wdf6DbLDjd/view?usp=sharing', image: '/certs/Rithik V Kumar - Intro to Machine Learning.png' },
  { title: 'CodingNinjas: Basics Of Machine Learning', url: 'https://drive.google.com/file/d/17SG4akWfiNORluyBEVcPGEdTd3ukHbDS/view?usp=sharing', image: '/certs/ml course rotated crctly.png' },
  { title: 'MongoDB: Introduction to MongoDB(For Students)', url: 'https://drive.google.com/file/d/1QDAfKs9asmLzWJIoOa8QZO07lq_0BfRr/view?usp=sharing', image: '/certs/Screenshot 2026-05-02 225849.png' },
  { title: 'Microsoft: Harnessing The Power Of Data With Power BI', url: 'https://coursera.org/share/daec05461445c279d9479278c1a81757', image: '/certs/Screenshot 2026-05-02 224451.png' },
  { title: 'Google: Introduction To Git & Github', url: 'https://coursera.org/share/d74f4cd5719c043d87395028da0bce37', image: '/certs/Screenshot 2026-05-02 224547.png' },
  { title: 'Microsoft: Preparing Data For Analysis With Microsoft Excel', url: 'https://coursera.org/share/ec5ab956bccd6beb82876bdcf2a979cf', image: '/certs/Screenshot 2026-05-02 225002.png' },
  { title: 'Geeksforgeeks: Python Certification', url: 'https://www.geeksforgeeks.org/certificate/77993dcaf4adbfffe213f8aa12f6ee36?utm_source=socials&utm_medium=cc_link', image: '/certs/image.png' },
  { title: 'IBMSkillsBuild: Artificial Intelligence Fundamentals', url: 'https://www.credly.com/badges/bfcb3be3-630e-4638-a85f-2fe27b9ff629/public_url', image: '/certs/Screenshot 2026-05-02 225318.png' },
  { title: 'InfosysSpringboard: Introduction To Datascience', url: 'https://drive.google.com/file/d/1YHzin42PS1vr6S1qC2Oz4F_lZJHh9TEl/view?usp=sharing', image: '/certs/Introduction To Data Science.jpg' },
  { title: 'InfosysSpringboard: Database & SQL', url: 'https://drive.google.com/file/d/1KWBBPyIptyvUvVYbCaKvbnLllVM9qL6a/view?usp=sharing', image: '/certs/Screenshot 2026-05-02 225654.png' },
  { title: 'Kaggle: Pandas Certification (DataScience)', url: 'https://drive.google.com/file/d/1Y-0ofCgEq88hCSRDE17R8pVJg_TEnUpr/view?usp=sharing', image: '/certs/Pandas.png' },
  { title: 'Scalar: Build An E-commerce Platform Using React', url: 'https://drive.google.com/file/d/1pv01UTU6KRxTztvqaSGQuXHchSrfQVuV/view?usp=sharing', image: '/certs/scalar masterclass react ecom web.png' },
  { title: 'Udemy: Build Website From Scratch Using HTML & CSS', url: 'https://drive.google.com/file/d/1thb4zWsOBRiaCATfJ1TV9t89V2FR0xH_/view?usp=sharing', image: '/certs/Build Websites from Scratch with Html and Css.jpg' },
  { title: 'Udemy: The Complete Python Bootcamp From Zero To Hero', url: 'https://drive.google.com/file/d/1MrOijjLRrdRAX-np8YTe8eWMZkIfIlEK/view?usp=sharing', image: '/certs/The Complete Python Bootcamp From Zero to Hero in Python.jpg' }
];

const Certifications = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  // Filter to show only 4 or all
  const visibleCerts = showAll ? certifications : certifications.slice(0, 4);

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-red-400 bg-clip-text text-transparent">
            Certifications
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Professional achievements in software engineering and AI.
          </p>
        </motion.div>

        {/* Grid Container */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {visibleCerts.map((cert, index) => (
              <motion.div
                key={cert.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedCert(cert)}
                className="bg-gray-800/40 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-all cursor-pointer group"
              >
                {/* Certificate Preview Image */}
                <div className="h-40 w-full relative overflow-hidden bg-gray-900">
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* <Award className="text-white/20 w-12 h-12 group-hover:scale-110 transition-transform duration-500" /> */}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-white font-semibold text-sm leading-snug line-clamp-2">
                    {cert.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Show More/Less Button */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-2 px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-full border border-gray-600 transition-all font-medium"
          >
            {showAll ? (
              <>Show Less <ChevronUp size={20} /></>
            ) : (
              <>Show More ({certifications.length - 4} More) <ChevronDown size={20} /></>
            )}
          </button>
        </div>

        {/* Enlarged Image Modal */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/90 backdrop-blur-xl"
              onClick={() => setSelectedCert(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-5xl w-full bg-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header/Close */}
                <div className="absolute top-4 right-4 z-10">
                  <button 
                    onClick={() => setSelectedCert(null)}
                    className="p-2 bg-black/50 text-white rounded-full hover:bg-red-500 transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="flex flex-col md:flex-row h-full">
                  {/* Big Image */}
                  <div className="md:w-2/3 bg-black flex items-center justify-center p-2">
                    <img 
                      src={selectedCert.image} 
                      alt={selectedCert.title} 
                      className="max-h-[70vh] object-contain rounded-lg"
                    />
                  </div>

                  {/* Sidebar Info */}
                  <div className="md:w-1/3 p-8 flex flex-col justify-center">
                    <Award className="text-purple-400 w-12 h-12 mb-4" />
                    <h2 className="text-2xl font-bold text-white mb-4 leading-tight">
                      {selectedCert.title}
                    </h2>
                    <p className="text-gray-400 mb-8 text-sm">
                      This certificate verifies the successful completion and mastery of the specific technical domain.
                    </p>
                    <a 
                      href={selectedCert.url} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold transition-all"
                    >
                      Verify Certificate <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Certifications;