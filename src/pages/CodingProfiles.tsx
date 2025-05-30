
import React from 'react';
import { motion } from 'framer-motion';

const codingPlatforms = [
  { name: 'LeetCode', problems: 450, url: '#' },
  { name: 'HackerRank', problems: 320, url: '#' },
  { name: 'CodeChef', problems: 280, url: '#' },
  { name: 'Codeforces', problems: 150, url: '#' },
  { name: 'AtCoder', problems: 90, url: '#' },
  { name: 'TopCoder', problems: 75, url: '#' },
  { name: 'GeeksforGeeks', problems: 200, url: '#' },
  { name: 'HackerEarth', problems: 180, url: '#' },
  { name: 'Codewars', problems: 120, url: '#' },
  { name: 'Project Euler', problems: 85, url: '#' },
  { name: 'SPOJ', problems: 110, url: '#' },
  { name: 'InterviewBit', problems: 95, url: '#' },
  { name: 'Kaggle', problems: 25, url: '#' },
  { name: 'CodeSignal', problems: 160, url: '#' },
  { name: 'Exercism', problems: 140, url: '#' },
  { name: 'Coderbyte', problems: 100, url: '#' },
  { name: 'AlgoExpert', problems: 80, url: '#' },
  { name: 'Pramp', problems: 45, url: '#' },
  { name: 'CodePen', problems: 60, url: '#' },
  { name: 'GitHub', problems: 500, url: '#' }
];

const CodingProfiles = () => {
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
            Coding Profiles
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            My coding journey across various competitive programming platforms
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {codingPlatforms.map((platform, index) => (
            <motion.a
              key={index}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 group"
            >
              <div className="text-center">
                <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-purple-400 transition-colors">
                  {platform.name}
                </h3>
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-red-400 bg-clip-text text-transparent mb-2">
                  {platform.problems}
                </div>
                <p className="text-gray-400 text-sm">Problems Solved</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CodingProfiles;
