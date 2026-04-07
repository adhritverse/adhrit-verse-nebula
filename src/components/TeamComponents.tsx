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
}

export function TeamCard({
  initials, name, role, avatarGrad, avatarRingStyle, roleBgStyle, roleHoverBorder, dotColor, textColor, description, skillClasses, skills, socialHoverClasses
}: TeamCardProps) {
  return (
    <div className="team-card p-8 group mx-auto w-full max-w-[85%] sm:max-w-none transition-all duration-500">
      <div className="relative z-10">
        {/* Avatar Container with Glow */}
        <div className="flex justify-center mb-6 sm:mb-10 relative">
          <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="avatar-ring w-24 h-24 sm:w-36 sm:h-36 group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 shadow-2xl relative z-10" style={avatarRingStyle}>
            <div className="avatar-inner w-full h-full flex items-center justify-center p-1 sm:p-1.5 bg-darker rounded-full">
              <div className={`w-full h-full rounded-full bg-gradient-to-br ${avatarGrad} flex items-center justify-center text-3xl sm:text-5xl font-bold font-display text-white shadow-inner`}>
                {initials}
              </div>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="text-center mb-6">
          <h2 className="font-display text-xl sm:text-3xl font-bold text-white group-hover:text-primary transition-colors duration-300">{name}</h2>
          <div className="mt-2 text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-[0.2em] group-hover:text-slate-400 transition-colors uppercase">{role}</div>
        </div>

        {/* Skills - uses the new pill style if appropriate */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {skills.map(skill => (
            <span key={skill} className={`text-[10px] sm:text-[11px] px-3.5 py-1 rounded-full font-medium backdrop-blur-md border border-white/5 bg-white/5 text-slate-300 group-hover:border-primary/20 transition-all ${skillClasses}`}>
              {skill}
            </span>
          ))}
        </div>

        {/* Socials */}
        <div className="flex justify-center gap-3 sm:gap-4">
          <SocialBtn icon="fab fa-linkedin-in" hoverClasses="hover:bg-blue-600 hover:border-blue-600 shadow-lg" />
          <SocialBtn icon="fab fa-github" hoverClasses="hover:bg-slate-800 hover:border-slate-800 shadow-lg" />
          <SocialBtn icon="fab fa-twitter" hoverClasses="hover:bg-sky-500 hover:border-sky-500 shadow-lg" />
          <SocialBtn icon="fas fa-envelope" link="mailto:contact@adhritverse.in" hoverClasses="hover:bg-red-500 hover:border-red-500 shadow-lg" />
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

