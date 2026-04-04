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
    <div className="team-card p-10 group">
      <div className="relative z-10">
        {/* Avatar */}
        <div className="flex justify-center mb-8">
          <div className="avatar-ring w-32 h-32 group-hover:scale-110 transition-transform duration-500" style={avatarRingStyle}>
            <div className="avatar-inner w-full h-full flex items-center justify-center p-1 bg-[#020617] rounded-full">
              <div className={`w-full h-full rounded-full bg-gradient-to-br ${avatarGrad} flex items-center justify-center text-4xl font-bold font-display text-white`}>
                {initials}
              </div>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="text-center mb-6">
          <h2 className="font-display text-2xl font-bold text-white">{name}</h2>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {skills.map(skill => (
            <span key={skill} className={`text-xs px-3 py-1 rounded-full ${skillClasses}`}>
              {skill}
            </span>
          ))}
        </div>

        {/* Socials */}
        <div className="flex justify-center gap-3">
          <SocialBtn icon="fab fa-linkedin-in" hoverClasses={socialHoverClasses} />
          <SocialBtn icon="fab fa-github" hoverClasses={socialHoverClasses} />
          <SocialBtn icon="fab fa-twitter" hoverClasses={socialHoverClasses} />
          <SocialBtn icon="fas fa-envelope" link="mailto:contact@adhritverse.in" hoverClasses={socialHoverClasses} />
        </div>
      </div>
    </div>
  );
}

export function SocialBtn({ icon, hoverClasses, link = "#" }: { icon: string; hoverClasses?: string; link?: string }) {
  return (
    <a href={link} className={`w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-all duration-300 transform hover:scale-110 ${hoverClasses || ""}`}>
      <i className={`${icon} text-sm`}></i>
    </a>
  );
}

export function StatCard({ val, label }: { val: string; label: string }) {
  return (
    <div className="glass-card rounded-2xl p-6 text-center border-white/5 hover:border-primary/30 group">
      <div className="font-display text-4xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{val}</div>
      <div className="text-slate-400 text-xs uppercase tracking-widest">{label}</div>
    </div>
  );
}
