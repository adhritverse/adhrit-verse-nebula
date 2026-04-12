"use client";

import { useState } from "react";

export default function ExpandableServiceCard({ icon, category, items, color }: { icon: string; category: string; items: string[]; color: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const colorMap: Record<string, string> = {
    'primary': 'text-primary bg-primary/10 border-primary/20',
    'secondary': 'text-secondary bg-secondary/10 border-secondary/20',
    'accent': 'text-accent bg-accent/10 border-accent/20',
    'red-400': 'text-red-400 bg-red-400/10 border-red-400/20',
    'emerald-400': 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
    'cyan-400': 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
    'rose-400': 'text-rose-400 bg-rose-400/10 border-rose-400/20',
    'blue-400': 'text-blue-400 bg-blue-400/10 border-blue-400/20',
    'violet-400': 'text-violet-400 bg-violet-400/10 border-violet-400/20',
    'orange-400': 'text-orange-400 bg-orange-400/10 border-orange-400/20',
    'indigo-400': 'text-indigo-400 bg-indigo-400/10 border-indigo-400/20',
    'yellow-400': 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
    'teal-400': 'text-teal-400 bg-teal-400/10 border-teal-400/20',
    'fuchsia-400': 'text-fuchsia-400 bg-fuchsia-400/10 border-fuchsia-400/20',
    'lime-400': 'text-lime-400 bg-lime-400/10 border-lime-400/20',
    'slate-400': 'text-slate-400 bg-slate-400/10 border-slate-400/20',
  };

  const activeColor = colorMap[color] || colorMap['primary'];

  return (
    <div
      className={`glass-card rounded-3xl p-6 sm:p-8 group relative overflow-hidden transition-all duration-500 border border-white/5 hover:border-white/20 flex flex-col hover:-translate-y-1 cursor-pointer`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>

      <div className="relative z-10 flex items-center gap-4">
        <div className={`w-14 h-14 shrink-0 rounded-2xl ${activeColor} flex items-center justify-center text-2xl transition-transform duration-500 border`}>
          <i className={icon}></i>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold font-display text-white leading-tight flex-1">{category}</h2>

        <div className={`w-8 h-8 rounded-full bg-white/5 shrink-0 flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <i className="fas fa-chevron-down text-slate-400 text-sm"></i>
        </div>
      </div>

      <div className={`transition-all duration-500 ease-in-out origin-top flex flex-col overflow-hidden ${isOpen ? 'max-h-[500px] opacity-100 mt-6' : 'max-h-0 opacity-0 mt-0'}`}>
        <ul className="space-y-3">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-slate-400 text-sm hover:text-slate-300 transition-colors">
              <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${activeColor.split(' ')[1]} shrink-0 border border-white/10`}></span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Decorative dot */}
      <div className={`absolute bottom-6 right-6 w-1 h-1 rounded-full ${activeColor.split(' ')[1]} opacity-50 group-hover:scale-[10] transition-transform duration-700 pointer-events-none ${isOpen ? 'opacity-0' : ''}`}></div>
    </div>
  );
}
