"use client";

import React from "react";

export interface TeamCardProps {
  initials: string;
  name: string;
  role: string;
  avatarGrad: string;
  avatarRingStyle?: React.CSSProperties;
  roleBgStyle: React.CSSProperties;
  roleHoverBorder: string;
  dotColor: string;
  textColor: string;
  description: string;
  skillClasses: string;
  skills: string[];
  socialHoverClasses: string;
  wrapperClass?: string;
}

export function TeamCard({
  initials, name, role, avatarGrad, avatarRingStyle, roleBgStyle, roleHoverBorder, dotColor, textColor, description, skillClasses, skills, socialHoverClasses, wrapperClass = ""
}: TeamCardProps) {
  return (
    <div className={`team-card relative p-8 group mx-auto w-full max-w-[85%] sm:max-w-none transition-all duration-500 rounded-[2.5rem] bg-slate-900/30 backdrop-blur-2xl border border-white/5 hover:border-white/10 shadow-2xl hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] overflow-hidden ${wrapperClass} ${roleHoverBorder}`}>
      
      {/* Ambient glassmorphic glowing backdrop */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 -mt-32 rounded-full z-0 opacity-[0.03] group-hover:opacity-20 blur-3xl transition-opacity duration-700 bg-gradient-to-b ${avatarGrad} pointer-events-none`}></div>
      
      {/* Glassy top highlight line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      <div className="relative z-10 flex flex-col items-center">
        {/* Avatar Container with Glow */}
        <div className="flex justify-center mb-6 sm:mb-8 relative transform group-hover:-translate-y-1 group-hover:scale-105 transition-all duration-500">
          <div className="absolute inset-x-4 -bottom-4 h-8 bg-black/50 blur-xl rounded-full"></div>
          <div className="w-24 h-24 sm:w-32 sm:h-32 shadow-2xl relative z-10 rounded-full blur-[2px]" style={avatarRingStyle}></div>
          <div className="absolute inset-[3px] bg-slate-950 rounded-full flex items-center justify-center p-[2px] z-20 overflow-hidden shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]">
            <div className={`absolute inset-0 bg-gradient-to-br ${avatarGrad} opacity-30`}></div>
            <div className="w-full h-full rounded-full flex items-center justify-center text-3xl sm:text-4xl font-extrabold font-display relative z-30">
               <span className={`text-transparent bg-clip-text bg-gradient-to-br ${avatarGrad} drop-shadow-sm`}>
                 {initials}
               </span>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="text-center mb-6">
          <h2 className="font-display text-xl sm:text-2xl font-extrabold tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all duration-300">{name}</h2>
          <div className="mt-2.5 text-xs sm:text-xs font-bold text-slate-300 uppercase tracking-[0.2em] shadow-sm transition-colors duration-300 mx-auto w-fit" style={roleBgStyle && { padding: '6px 16px', borderRadius: '999px', backdropFilter: 'blur(8px)', ...roleBgStyle }}>{role}</div>
        </div>

        {/* Skills - uses the new pill style with glass logic */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {skills.map(skill => (
            <span key={skill} className={`text-[10px] sm:text-[11px] px-3.5 py-1.5 rounded-full font-medium backdrop-blur-md border border-white/10 bg-white/5 text-slate-300 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all duration-300 shadow-sm cursor-default ${skillClasses}`}>
              {skill}
            </span>
          ))}
        </div>

        {/* Socials */}
        <div className="flex justify-center gap-3 sm:gap-4">
          <SocialBtn icon="fab fa-linkedin-in" hoverClasses="hover:bg-blue-600 hover:border-blue-600 hover:shadow-[0_0_15px_rgba(37,99,235,0.5)]" />
          <SocialBtn icon="fab fa-github" hoverClasses="hover:bg-slate-700 hover:border-slate-700 hover:shadow-[0_0_15px_rgba(51,65,85,0.5)]" />
          <SocialBtn icon="fab fa-twitter" hoverClasses="hover:bg-sky-500 hover:border-sky-500 hover:shadow-[0_0_15px_rgba(14,165,233,0.5)]" />
          <SocialBtn icon="fas fa-envelope" link="mailto:contact@adhritverse.in" hoverClasses="hover:bg-red-500 hover:border-red-500 hover:shadow-[0_0_15px_rgba(239,68,68,0.5)]" />
        </div>
      </div>
    </div>
  );
}

export function SocialBtn({ icon, hoverClasses, link = "#" }: { icon: string; hoverClasses?: string; link?: string }) {
  return (
    <a href={link} className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-all duration-500 transform hover:scale-115 hover:-translate-y-1 ${hoverClasses || ""}`}>
      <i className={`${icon} text-sm sm:text-base`}></i>
    </a>
  );
}

export function StatCard({ val, label }: { val: string; label: string }) {
  return (
    <div className="glass-card rounded-3xl p-8 text-center border-white/5 hover:border-primary/40 group relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="font-display text-4xl sm:text-5xl font-bold text-white mb-3 group-hover:text-primary group-hover:scale-110 transition-all duration-500">{val}</div>
      <div className="text-slate-500 text-[10px] sm:text-xs uppercase font-bold tracking-[0.2em]">{label}</div>
    </div>
  );
}

export function SubTeamMemberCard({ initials, name, role, grad = "from-slate-600 to-slate-700", ringColor, delay = "0s", shadowGlow }: { initials: string, name: string, role: string, grad?: string, ringColor: string, delay?: string, shadowGlow: string }) {
  return (
    <div className="flex flex-col items-center group w-full hover:-translate-y-1 transition-all duration-300 relative z-10">
      
      {/* Connector Dot */}
      <div className="w-1.5 h-1.5 rounded-full mb-1" style={{ background: shadowGlow.replace('0.3', '0.8'), boxShadow: `0 0 10px ${shadowGlow}` }}></div>
      
      <div className="relative mb-2 sm:mb-3 flex justify-center">
        {/* Ambient Glow */}
        <div className={`absolute inset-0 rounded-full blur-xl opacity-30 group-hover:opacity-70 transition-opacity duration-500`} style={{ background: shadowGlow }}></div>
        
        {/* Avatar Ring */}
        <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full p-[2px] z-10 group-hover:scale-110 transition-transform duration-500">
          <div className={`absolute inset-0 rounded-full bg-gradient-to-b ${ringColor} opacity-70`}></div>
          <div className="w-full h-full rounded-full bg-slate-900 border border-white/5 flex items-center justify-center p-[2px]">
            <div className={`w-full h-full rounded-full bg-gradient-to-br ${grad} flex items-center justify-center text-sm sm:text-base font-bold font-display text-white shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]`}>
              {initials}
            </div>
          </div>
        </div>
      </div>
      
      {/* Name and Role */}
      <h4 className="text-slate-100 text-[11px] sm:text-[13px] whitespace-nowrap font-bold text-center leading-tight mb-0.5 group-hover:text-white transition-colors">{name}</h4>
      <p className="text-[9px] sm:text-[10px] whitespace-nowrap uppercase font-semibold tracking-widest text-slate-500 text-center">{role}</p>
    </div>
  );
}
