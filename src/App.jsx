import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';


const ProgressBar = ({ label, percentage, color }) => (
  <div className="mb-4">
    <div className="flex justify-between text-xs text-slate-400 mb-1">
      <span>{label}</span>
      <span>{percentage}%</span>
    </div>
    <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
      <div className={`h-full ${color}`} style={{ width: `${percentage}%` }}></div>
    </div>
  </div>
);

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full bg-blue-500/20 blur-xl pointer-events-none z-[9999]"
      animate={{ x: position.x - 16, y: position.y - 16 }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    />
  );
};

const NexLevrLanding = () => {
  return (
    <div className="min-h-screen bg-[#050508] text-white p-10 font-sans">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" 
           style={{backgroundImage: 'linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)', backgroundSize: '40px 40px'}}>
      </div>

     <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Side: Content */}
        <div className="flex-1">
          <div className="inline-block border border-blue-500/50 rounded-full px-4 py-1 mb-6 bg-blue-500/10 text-blue-300 text-sm">
            Now accepting new cohorts
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight text-center lg:text-left">
            Master Skills Through <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Execution.</span>
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-lg">
            The ecosystem for students to bridge the gap between theory and industry. Build, verify, and showcase your Proof of Work with NexLevr.
          </p>
          <div className="flex gap-4">
            <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="border border-blue-500 px-8 py-3 rounded-lg hover:bg-blue-500/20 transition"
>
  Explore Roadmaps
</motion.button>
          <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="border border-purple-500 px-8 py-3 rounded-lg hover:bg-purple-500/20 transition"
>
  Join the Community
</motion.button>
          </div>
        </div>

        {/* Right Side: Dashboard Visualization */}
         <div className="flex-1 relative">
  <div className="bg-slate-900/50 border border-slate-700 p-6 rounded-2xl backdrop-blur-md shadow-2xl">
    <h2 className="text-xl font-bold mb-4">Data Dashboard</h2>
    <div className="h-32 bg-slate-800 rounded-lg mb-4"></div>
            <div className="space-y-4">
      <ProgressBar label="System Design" percentage={90} color="bg-blue-500" />
      <ProgressBar label="Cybersecurity" percentage={75} color="bg-purple-500" />
    </div>
  </div>

          {/* Floating Cards */}
          <div className="absolute -bottom-10 -left-10 bg-slate-900 border border-slate-700 p-4 rounded-xl shadow-xl">Leaderboard Stats</div>
        </div>
      </div>
    </div>
  );
};


const BentoGrid = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-white mb-12">Built for Doers.</h2>
      
      {/* Container: Grid is correctly applied here */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
        
        {/* Item 1: Spans 2 cols */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-2 bg-slate-900/40 border border-slate-700 p-8 rounded-3xl backdrop-blur-md flex flex-col justify-end hover:border-blue-500/50 transition-colors"
        >
          <h3 className="text-2xl font-bold mb-2">Real-World Internships</h3>
          <p className="text-slate-400 text-sm">Apply theory to practice with companies looking for builders.</p>
        </motion.div>
        
        {/* Item 2: Spans 1 col */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-slate-900/40 border border-slate-700 p-8 rounded-3xl backdrop-blur-md flex flex-col justify-end hover:border-purple-500/50 transition-colors"
        >
          <h3 className="text-xl font-bold mb-2">Verified Proof</h3>
          <p className="text-slate-400 text-sm">Blockchain-backed badges for every project.</p>
        </motion.div>

        {/* Item 3: Spans 1 col */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-slate-900/40 border border-slate-700 p-8 rounded-3xl backdrop-blur-md flex flex-col justify-end hover:border-emerald-500/50 transition-colors"
        >
          <h3 className="text-xl font-bold mb-2">Skill Roadmaps</h3>
          <p className="text-slate-400 text-sm">Curated paths from industry experts.</p>
        </motion.div>

        {/* Item 4: Spans 2 cols */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="md:col-span-2 bg-slate-900/40 border border-slate-700 p-8 rounded-3xl backdrop-blur-md flex flex-col justify-end hover:border-orange-500/50 transition-colors"
        >
          <h3 className="text-2xl font-bold mb-2">Community Leaderboard</h3>
          <p className="text-slate-400 text-sm">Compete with top builders and climb the ranks.</p>
        </motion.div>
      </div>
    </section>
  );
};
export default function App() {
  return (
    <main className="bg-[#050508]">
      <CustomCursor />
      <NexLevrLanding />
      <BentoGrid />
    </main>
  );
}


