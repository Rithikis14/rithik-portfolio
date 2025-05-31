
import React from 'react';
import { motion } from 'framer-motion';

const codingPlatforms = [
  { name: 'LeetCode', problems: '120+', url: 'https://leetcode.com/u/nle_rithik/' },
  { name: 'Skillrack', problems: '1050+', url: 'https://www.skillrack.com/faces/resume.xhtml?id=447837&key=14e20a877b868277af2824a54742e30914d1ba5a' },
  { name: 'CodeChef', problems: '590+', url: 'https://www.codechef.com/users/troop_fury_53' },
  { name: 'CodingNinjas', problems: '50+', url: 'https://www.naukri.com/code360/profile/fbfd121f-429c-4965-b19c-124a5921006e' },
  { name: 'HackerRank', problems: 30, url: 'https://www.hackerrank.com/profile/23cs1165' },
  { name: 'CodeDex', problems: 10, url: 'https://www.codedex.io/@Rithik14' },
  { name: 'GeeksforGeeks', problems: '30+', url: 'https://www.geeksforgeeks.org/user/rithikvkuque1/?_gl=1*fxa8v6*_up*MQ..*_gs*MQ..&gclid=CjwKCAiA3ZC6BhBaEiwAeqfvyrQ2xNlnHjmz9HzTnqNGxyLmwRBTdCitRmtp-w_0MCHQOJiw8vO-YRoC3kkQAvD_BwE' },
  { name: 'CSSBattle', problems: 5, url: 'https://cssbattle.dev/player/dotnet_mama' },
  { name: 'Kaggle', problems: 2, url: 'https://www.kaggle.com/rithikvkumar' },
  { name: 'Github', problems: 13, url: 'https://github.com/Rithikis14' },
  { name: 'Codewars', problems: 5, url: 'https://www.codewars.com/users/Rithik1475' },
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
