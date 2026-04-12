"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  CheckCircle2, ArrowRight, ChevronRight, 
  Lightbulb, Globe, Smartphone, Palette, Megaphone, Mail, 
  Cpu, Shield, Cloud, ShoppingCart, Zap, Link as LinkIcon, 
  Layers, Rocket, Briefcase 
} from "lucide-react";

const IconMap: Record<string, any> = {
  lightbulb: Lightbulb,
  globe: Globe,
  smartphone: Smartphone,
  palette: Palette,
  megaphone: Megaphone,
  mail: Mail,
  cpu: Cpu,
  shield: Shield,
  cloud: Cloud,
  'shopping-cart': ShoppingCart,
  zap: Zap,
  link: LinkIcon,
  layers: Layers,
  rocket: Rocket,
  briefcase: Briefcase,
};

interface ServiceToggleCardProps {
  category: string;
  iconName: string;
  color: string;
  items: string[];
}

export default function ServiceToggleCard({ 
  category, 
  iconName, 
  color, 
  items 
}: ServiceToggleCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = IconMap[iconName] || Globe;

  const colorClasses: Record<string, string> = {
    'blue-400': 'bg-blue-400/10 border-blue-400/20 text-blue-400',
    'indigo-400': 'bg-indigo-400/10 border-indigo-400/20 text-indigo-400',
    'violet-400': 'bg-violet-400/10 border-violet-400/20 text-violet-400',
    'cyan-400': 'bg-cyan-400/10 border-cyan-400/20 text-cyan-400',
    'teal-400': 'bg-teal-400/10 border-teal-400/20 text-teal-400',
    'fuchsia-400': 'bg-fuchsia-400/10 border-fuchsia-400/20 text-fuchsia-400',
    'emerald-400': 'bg-emerald-400/10 border-emerald-400/20 text-emerald-400',
    'orange-400': 'bg-orange-400/10 border-orange-400/20 text-orange-400',
    'yellow-400': 'bg-yellow-400/10 border-yellow-400/20 text-yellow-400',
    'rose-400': 'bg-rose-400/10 border-rose-400/20 text-rose-400',
    'lime-400': 'bg-lime-400/10 border-lime-400/20 text-lime-400',
    'slate-400': 'bg-slate-400/10 border-slate-400/20 text-slate-400',
    'red-400': 'bg-red-400/10 border-red-400/20 text-red-400',
    'primary': 'bg-primary/10 border-primary/20 text-primary',
  };
  
  const activeClasses = colorClasses[color] || colorClasses['primary'];

  return (
    <div 
      className="group relative bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-3xl p-6 md:p-8 hover:border-primary/30 transition-all duration-500 flex flex-col h-full overflow-hidden cursor-pointer md:cursor-default"
      onClick={() => setIsOpen(!isOpen)}
    >
      {/* Decorative Background */}
      <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-700"></div>
      
      <div className="relative z-10 w-full">
        <div className="flex items-center justify-between md:block mb-0 md:mb-6">
          <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl ${activeClasses.split(' ').slice(0, 2).join(' ')} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
            <Icon className={`w-6 h-6 md:w-7 md:h-7 ${activeClasses.split(' ')[2]}`} />
          </div>
          
          <ChevronRight 
            className={`md:hidden transition-transform duration-300 ${isOpen ? 'rotate-90 text-primary' : 'text-slate-600'}`} 
            size={20} 
          />
        </div>
        
        <h3 className="text-lg md:text-2xl font-bold text-white mt-4 md:mt-0 mb-0 md:mb-4 group-hover:text-primary transition-colors pr-8 md:pr-0">
          {category}
        </h3>
        
        <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-[500px] mt-6 opacity-100' : 'max-h-0 md:max-h-none opacity-0 md:opacity-100'}`}>
          <ul className="space-y-3 mb-6">
            {items.map((item, iIdx) => (
              <li key={iIdx} className="flex items-center gap-3 text-slate-400 group-hover:text-slate-300 transition-colors text-xs md:text-base">
                <CheckCircle2 size={12} className="text-primary/60 shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <div className="pt-4 border-t border-white/5 relative z-10 flex justify-between items-center group-hover:border-primary/10 transition-colors">
            <Link href="/contact" className="text-xs md:text-sm font-semibold text-primary inline-flex items-center gap-2 group/btn" onClick={(e) => e.stopPropagation()}>
              Learn More <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
            </Link>
            <ChevronRight size={16} className="text-slate-600 group-hover:text-primary/40 transition-colors hidden md:block" />
          </div>
        </div>
      </div>
    </div>
  );
}
