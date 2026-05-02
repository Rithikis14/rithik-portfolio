import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Code2, Terminal, Target, ExternalLink } from 'lucide-react';

const codingPlatforms = [
  { 
    name: 'Skillrack', 
    problems: '1070+', 
    url: 'https://www.skillrack.com/faces/resume.xhtml?id=447837&key=14e20a877b868277af2824a54742e30914d1ba5a',
    logo: 'https://cdn.simpleicons.org/codeforces/white', // Fallback icon
    glow: 'shadow-blue-500/20'
  },
  { 
    name: 'CodeChef', 
    problems: '750+', 
    url: 'https://www.codechef.com/users/rithik_14',
    logo: 'https://cdn.simpleicons.org/codechef/white',
    glow: 'shadow-amber-800/20'
  },
  { 
    name: 'LeetCode', 
    problems: '350+', 
    url: 'https://leetcode.com/u/nle_rithik/',
    logo: 'https://cdn.simpleicons.org/leetcode/FFA116', // Brand Orange
    glow: 'shadow-orange-500/20'
  },
  { 
    name: 'CodingNinjas', 
    problems: '60+', 
    url: 'https://www.naukri.com/code360/profile/Rithikvk',
    logo: 'https://dl.svgcdn.com/svg/simple-icons/codingninjas.svg', // Brand Orange
    glow: 'shadow-orange-500/20'
  },
  { 
    name: 'GeeksforGeeks', 
    problems: '30+', 
    url: 'https://www.geeksforgeeks.org/user/rithikvkuque1/',
    logo: 'https://cdn.simpleicons.org/geeksforgeeks/298D46', // Brand Green
    glow: 'shadow-green-500/20'
  },
];

const mainAchievements = [
  {
    title: "AIRA 2k26 Symposium",
    status: "Runner-up (Debugging)",
    desc: "Won at SRM Institute of Science and Technology.",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "YESIST24 & Hacksagon2026",
    status: "Finalist",
    desc: "International and National level hackathon organized by IIT Madras.",
    color: "from-blue-500 to-purple-600"
  },
  {
    title: "Patents",
    status: "GAN-Augmented Attention Network for Real-Time Underwater Mine and Anomaly Detection",
    desc: "Filed: (Application No: 202641042567)",
    color: "from-orange-500 to-red-500"
  }
];

const Achievements = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-red-400 bg-clip-text text-transparent">
            Milestones & Achievements
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Combining competitive programming excellence with hackathon success.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[180px]">
          
          {/* LARGE TILE: Total Impact */}
          <motion.div 
            whileHover={{ scale: 0.98 }}
            className="md:col-span-2 lg:col-span-3 row-span-2 bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
               <Terminal size={180} />
            </div>
            <h2 className="text-gray-400 font-mono text-sm uppercase tracking-widest mb-2">Total Problems Solved</h2>
            <div className="text-7xl md:text-8xl font-black text-white mb-4">2000+</div>
            <p className="text-gray-400 max-w-xs">Consistently solving complex algorithmic challenges across 5+ global platforms.</p>
          </motion.div>

          {/* HACKATHON TILES */}
          {mainAchievements.map((ach, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className={`md:col-span-2 lg:col-span-3 row-span-1 bg-gradient-to-br ${ach.color} p-[1px] rounded-3xl`}
            >
              <div className="bg-gray-950 w-full h-full rounded-[23px] p-6 flex items-center gap-6">
                <div className="bg-white/10 p-4 rounded-2xl">
                  <Trophy className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg leading-tight">{ach.title}</h3>
                  <p className="text-purple-400 text-sm font-semibold mb-1">{ach.status}</p>
                  <p className="text-gray-500 text-xs hidden md:block">{ach.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* CODING PLATFORM TILES (Small) */}
          {codingPlatforms.map((platform, i) => (
            <motion.a 
              key={i}
              href={platform.url}
              target="_blank"
              whileHover={{ scale: 1.05 }}
              className="md:col-span-1 lg:col-span-1 row-span-1 bg-gray-800/30 border border-gray-700/50 rounded-3xl p-6 flex flex-col justify-between group hover:border-purple-500/50 transition-colors"
            >
              <div className="flex justify-between items-start">
                {/* Brand Logo Replacement */}
                <div className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-xl group-hover:bg-white/10 transition-colors">
                  <img 
                    src={platform.logo} 
                    alt={platform.name} 
                    className="w-6 h-6 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <ExternalLink size={14} className="text-gray-600 group-hover:text-white transition-colors" />
              </div>

              <div>
                <div className="text-2xl font-bold text-white group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-red-400 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                  {platform.problems}
                </div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold group-hover:text-gray-300">
                  {platform.name}
                </div>
              </div>
            </motion.a>
          ))}

          {/* EXTRA: Codeforces/AtCoder Badge Style Tile */}
          <motion.a 
  href="https://www.kaggle.com/rithikvkumar" 
  target="_blank"
  whileHover={{ scale: 1.02, y: -5 }}
  className="md:col-span-2 lg:col-span-2 row-span-1 bg-gray-900/80 border border-purple-500/20 rounded-3xl p-6 flex items-center justify-between group cursor-pointer hover:border-purple-500/50 transition-all"
>
  <div>
    <div className="text-purple-400 font-bold text-xl group-hover:text-purple-300 transition-colors">Kaggle</div>
    <div className="text-xs text-gray-500 font-mono">Data Science Competitions and Badges</div>
  </div>
  <div className="relative">
    <img 
      src="https://images.icon-icons.com/2699/PNG/512/kaggle_logo_icon_168473.png" 
      className="w-12 h-12 opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" 
      alt="Kaggle" 
    />
    <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity">
      <ExternalLink size={12} className="text-purple-400" />
    </div>
  </div>
</motion.a>
<motion.a 
  href="https://codeforces.com/profile/rithik_14" 
  target="_blank"
  whileHover={{ scale: 1.02, y: -5 }}
  className="md:col-span-2 lg:col-span-2 row-span-1 bg-gray-900/80 border border-purple-500/20 rounded-3xl p-6 flex items-center justify-between group cursor-pointer hover:border-purple-500/50 transition-all"
>
  <div>
    <div className="text-purple-400 font-bold text-xl group-hover:text-purple-300 transition-colors">Newbie</div>
    <div className="text-xs text-gray-500 font-mono">Codeforces (360+)</div>
  </div>
  <div className="relative">
    <img 
      src="https://cdn.simpleicons.org/codeforces/white" 
      className="w-12 h-12 opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" 
      alt="Codeforces" 
    />
    <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity">
      <ExternalLink size={12} className="text-purple-400" />
    </div>
  </div>
</motion.a>

        </div>
      </div>
    </div>
  );
};

export default Achievements;