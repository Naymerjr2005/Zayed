/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Trophy, TrendingUp, BarChart3, Users, Gift, Calendar, ExternalLink, Menu } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-500/30">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-purple-900/50 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-indigo-800 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/20">
            <span className="font-bold text-lg tracking-tighter">V</span>
          </div>
          <span className="text-xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">
            VERSE
          </span>
        </div>
        <button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-500 transition-colors px-4 py-2 rounded-full text-sm font-bold shadow-lg shadow-purple-600/20">
          <Menu size={18} />
          <span>Menu</span>
        </button>
      </header>

      <main className="max-w-2xl mx-auto p-6 space-y-6">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {/* Monthly Role Models */}
          <motion.section variants={itemVariants} className="bg-zinc-900/50 border border-purple-900/30 rounded-2xl p-6 shadow-xl backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <Trophy className="text-purple-400" size={24} />
              <h2 className="text-lg font-bold text-purple-100 italic">Monthly Role Models</h2>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-purple-900/20 border border-purple-500/20 rounded-xl">
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-purple-200">🥇 RM Accountant</span>
                  <span className="text-xs text-purple-400/70">High Impact User</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="font-bold text-purple-300">150 USDT</span>
                  <span className="text-[10px] uppercase tracking-wider bg-yellow-500/20 text-yellow-400 px-2 py-0.5 rounded-full border border-yellow-500/30">Gold</span>
                </div>
              </div>
              <div className="flex justify-between items-center p-4 bg-zinc-800/30 border border-zinc-700/30 rounded-xl">
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-zinc-200">🥈 Other High Impact Users</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="font-bold text-zinc-300">5-20 USDT</span>
                  <span className="text-[10px] uppercase tracking-wider bg-zinc-500/20 text-zinc-400 px-2 py-0.5 rounded-full border border-zinc-500/30">Silver</span>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Prize Pool Tracker */}
          <motion.section variants={itemVariants} className="bg-zinc-900/50 border border-purple-900/30 rounded-2xl p-6 shadow-xl backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="text-purple-400" size={24} />
              <h2 className="text-lg font-bold text-purple-100 italic">Monthly Prize Pool Tracker</h2>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-zinc-400">Total USDT for the month</span>
                <span className="text-purple-300 font-mono">2000$ - 3500$</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-zinc-400">Distributed amount</span>
                <span className="text-zinc-300 italic">Varies</span>
              </div>
              <a 
                href="https://t.me/GetVerse/486213/507384" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-purple-400 hover:text-purple-300 transition-colors group"
              >
                <ExternalLink size={14} />
                <span>See the developers reward list</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </a>
              <div className="mt-4">
                <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '60%' }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-purple-600 to-indigo-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                  />
                </div>
                <div className="flex justify-between mt-2 text-[10px] uppercase tracking-widest text-zinc-500 font-bold">
                  <span>Progress</span>
                  <span>60%</span>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Performance Stats */}
          <motion.section variants={itemVariants} className="grid grid-cols-3 gap-4">
            <div className="bg-zinc-900/50 border border-purple-900/30 rounded-2xl p-4 flex flex-col items-center justify-center text-center">
              <BarChart3 className="text-purple-400 mb-2" size={20} />
              <span className="text-[10px] uppercase tracking-tighter text-zinc-500 font-bold">Tasks</span>
              <span className="text-xl font-black text-purple-100">120</span>
            </div>
            <div className="bg-zinc-900/50 border border-purple-900/30 rounded-2xl p-4 flex flex-col items-center justify-center text-center">
              <Users className="text-purple-400 mb-2" size={20} />
              <span className="text-[10px] uppercase tracking-tighter text-zinc-500 font-bold">Referrals</span>
              <span className="text-xl font-black text-purple-100">35</span>
            </div>
            <div className="bg-zinc-900/50 border border-purple-900/30 rounded-2xl p-4 flex flex-col items-center justify-center text-center">
              <div className="relative w-10 h-10 mb-2 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="20" cy="20" r="18" fill="transparent" stroke="currentColor" strokeWidth="2" className="text-zinc-800" />
                  <circle cx="20" cy="20" r="18" fill="transparent" stroke="currentColor" strokeWidth="2" strokeDasharray={113} strokeDashoffset={113 * (1 - 0.89)} className="text-purple-500" />
                </svg>
                <span className="absolute text-[8px] font-bold">89%</span>
              </div>
              <span className="text-[10px] uppercase tracking-tighter text-zinc-500 font-bold">Activity</span>
            </div>
          </motion.section>

          {/* Leaderboard */}
          <motion.section variants={itemVariants} className="bg-zinc-900/50 border border-purple-900/30 rounded-2xl p-6 shadow-xl backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <Users className="text-purple-400" size={24} />
              <h2 className="text-lg font-bold text-purple-100 italic">RM Leaderboard</h2>
            </div>
            <div className="space-y-2">
              {[
                { rank: 1, label: "Max Reward", amount: "150 USDT" },
                { rank: 2, label: "Mid Reward", amount: "50 USDT" },
                { rank: 3, label: "Minimum Reward", amount: "5-50 USDT" }
              ].map((item) => (
                <div key={item.rank} className="flex justify-between items-center py-3 border-b border-zinc-800/50 last:border-0">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-purple-500 font-bold">0{item.rank}</span>
                    <span className="text-sm text-zinc-300">{item.label}</span>
                  </div>
                  <span className="text-sm font-bold text-purple-200">{item.amount}</span>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Vibe Coding Winners */}
          <motion.section variants={itemVariants} className="bg-gradient-to-br from-purple-900/40 to-indigo-900/40 border border-purple-500/30 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Gift size={80} />
            </div>
            <div className="flex items-center gap-3 mb-4">
              <Gift className="text-purple-300" size={24} />
              <h2 className="text-lg font-bold text-white italic">March Vibe Coding Winners</h2>
            </div>
            <div className="space-y-4 relative z-10">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                  <p className="text-[10px] uppercase text-purple-300 font-bold mb-1">Top 4 Users</p>
                  <p className="text-lg font-black">500 USDT <span className="text-[10px] font-normal text-zinc-400">each</span></p>
                </div>
                <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                  <p className="text-[10px] uppercase text-purple-300 font-bold mb-1">1st 8 Users</p>
                  <p className="text-lg font-black">100 USDT <span className="text-[10px] font-normal text-zinc-400">each</span></p>
                </div>
              </div>
              <div className="bg-white/5 p-3 rounded-xl border border-white/10 flex justify-between items-center">
                <div>
                  <p className="text-[10px] uppercase text-purple-300 font-bold mb-1">Total 102 Builders</p>
                  <p className="text-lg font-black">20 USDT <span className="text-[10px] font-normal text-zinc-400">each</span></p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-zinc-400">Distribution</p>
                  <p className="text-xs font-bold text-purple-200">April, Week 1</p>
                </div>
              </div>
              <a 
                href="https://t.me/GetVerse/486213/507384" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-white text-black py-3 rounded-xl font-bold text-sm hover:bg-purple-100 transition-colors"
              >
                <ExternalLink size={16} />
                See Details
              </a>
            </div>
          </motion.section>

          {/* Reset System */}
          <motion.section variants={itemVariants} className="bg-zinc-900/50 border border-purple-900/30 rounded-2xl p-6 flex items-center gap-4">
            <div className="w-12 h-12 bg-purple-900/30 rounded-full flex items-center justify-center text-purple-400">
              <Calendar size={24} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-purple-100">Monthly Reset System</h3>
              <p className="text-xs text-zinc-500">Data resets every month. New competition starts!</p>
            </div>
          </motion.section>

          {/* Community Links */}
          <motion.section variants={itemVariants} className="bg-zinc-900/50 border border-purple-900/30 rounded-2xl p-6">
            <h2 className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-black mb-6 text-center">Community Hub</h2>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Main Channel", link: "https://t.me/GetVerse/177601" },
                { label: "Newbies", link: "https://t.me/GetVerse/387150" },
                { label: "Vibe Coding", link: "https://t.me/GetVerse/486213" },
                { label: "Verse Research", link: "https://t.me/GetVerse/476423" }
              ].map((item) => (
                <a 
                  key={item.label}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-zinc-800/50 hover:bg-purple-900/20 border border-zinc-700/30 hover:border-purple-500/30 rounded-xl transition-all group"
                >
                  <span className="text-xs font-medium text-zinc-300 group-hover:text-purple-200">{item.label}</span>
                  <ExternalLink size={12} className="text-zinc-600 group-hover:text-purple-400" />
                </a>
              ))}
            </div>
          </motion.section>

          {/* Credits */}
          <motion.footer variants={itemVariants} className="pt-8 pb-12 text-center space-y-4">
            <div className="h-px w-12 bg-purple-900/50 mx-auto" />
            <div className="space-y-1">
              <p className="text-[10px] uppercase tracking-widest text-zinc-600 font-bold">Chief Commander</p>
              <p className="text-sm font-serif italic text-purple-300">JT @stone_brb</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] uppercase tracking-widest text-zinc-600 font-bold">Built By</p>
              <p className="text-xs text-zinc-400">@zayed999R</p>
            </div>
          </motion.footer>
        </motion.div>
      </main>
    </div>
  );
}
