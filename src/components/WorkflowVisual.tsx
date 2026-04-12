"use client";

import React, { useMemo } from 'react';
import { 
  FileSearch, 
  PencilRuler, 
  Code2, 
  Award, 
  Rocket, 
  Monitor,
} from 'lucide-react';

const WORKFLOW_STEPS = [
  {
    id: 'analysis',
    label: 'ANALYSIS',
    icon: FileSearch,
    color: '#3b82f6', // Blue
    position: 'top',
  },
  {
    id: 'design',
    label: 'DESIGN',
    icon: PencilRuler,
    color: '#f97316', // Orange
    position: 'bottom',
  },
  {
    id: 'implementation',
    label: 'IMPLEMENTATION',
    icon: Code2,
    color: '#d946ef', // Fuchsia
    position: 'top',
  },
  {
    id: 'qa',
    label: 'QUALITY ASSURANCE',
    icon: Award,
    color: '#06b6d4', // Cyan
    position: 'bottom',
  },
  {
    id: 'prelaunch',
    label: 'PRE-LAUNCH',
    icon: Rocket,
    color: '#22c55e', // Green
    position: 'top',
  },
  {
    id: 'deployment',
    label: 'DEPLOYMENT',
    icon: Monitor,
    color: '#6366f1', // Indigo
    position: 'bottom',
  },
];

export default function WorkflowVisual() {
  // UseMemo to ensure the same path is used across renders
  const svgPath = useMemo(() => {
    // Sharp zigzag hitting the centers of 6 items
    return "M 8.3,25 L 25,75 L 41.6,25 L 58.3,75 L 75,25 L 91.6,75";
  }, []);

  return (
    <div className="relative w-full py-24 px-4 overflow-visible">
      {/* Shared SVG Defs (Invisible) */}
      <svg className="w-0 h-0 absolute">
        <defs>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(59,130,246,0.2)" />
            <stop offset="50%" stopColor="white" />
            <stop offset="100%" stopColor="rgba(99,102,241,0.2)" />
          </linearGradient>
        </defs>
      </svg>

      {/* Background Connecting Line - Desktop Only */}
      <div className="hidden lg:block absolute inset-0 z-0 pointer-events-none">
         <svg 
           viewBox="0 0 100 100" 
           className="w-full h-full overflow-visible" 
           preserveAspectRatio="none"
         >
            <path 
               d={svgPath} 
               fill="none" 
               stroke="url(#lineGradient)" 
               strokeWidth="0.6"
               strokeLinecap="round"
               strokeLinejoin="round"
               filter="url(#glow)"
               className="opacity-50"
            />
         </svg>
      </div>

      {/* Background Connecting Line - Mobile Only */}
      <div className="lg:hidden absolute inset-0 z-0 pointer-events-none" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
         <svg 
           viewBox="0 0 100 100" 
           className="w-full h-full overflow-visible" 
           preserveAspectRatio="none"
         >
            <path 
               d="M 25,16.6 L 75,16.6 L 25,50 L 75,50 L 25,83.3 L 75,83.3"
               fill="none" 
               stroke="url(#lineGradient)" 
               strokeWidth="0.5"
               strokeLinecap="round"
               strokeLinejoin="round"
               filter="url(#glow)"
               className="opacity-60"
            />
         </svg>
      </div>

      {/* Steps Container */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-12 gap-x-6 lg:gap-0 max-w-7xl mx-auto px-4 lg:px-0">
        {WORKFLOW_STEPS.map((step, index) => {
          const Icon = step.icon;
          const isTop = step.position === 'top';
          
          return (
            <div 
              key={step.id} 
              className={`flex flex-col items-center justify-center relative group
                ${isTop ? 'lg:-translate-y-24' : 'lg:translate-y-24'} mt-4 lg:mt-0`}
            >
              {/* Card Label */}
              <div 
                className={`mb-4 lg:mb-6 text-[9px] sm:text-[10px] lg:text-[11px] font-bold tracking-[0.2em] transition-all duration-500 uppercase text-center
                  ${isTop ? 'order-1' : 'order-1 lg:order-3 lg:mt-6 lg:mb-0'}`}
                style={{ color: step.color }}
              >
                {step.label}
              </div>

              {/* 3D Isometric Card */}
              <div className="relative order-2 cursor-pointer">
                {/* Visual Glow Layer */}
                <div 
                  className="absolute inset-0 blur-[40px] opacity-20 group-hover:opacity-60 transition-opacity duration-700 rounded-full"
                  style={{ backgroundColor: step.color }}
                />
                
                {/* 3D Base / Platform */}
                <div 
                  className="absolute inset-0 translate-y-3 scale-x-[0.8] blur-xl opacity-40 group-hover:scale-x-100 transition-transform duration-500"
                  style={{ backgroundColor: step.color }}
                />

                {/* The Isometric Block */}
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-32 lg:h-32 rotate-45 transition-all duration-500 mx-auto">
                   {/* Bottom Layer (Thickness) */}
                   <div 
                     className="absolute inset-0 translate-x-1 translate-y-1 lg:translate-x-1.5 lg:translate-y-1.5 rounded-xl lg:rounded-2xl"
                     style={{ backgroundColor: step.color, opacity: 0.3 }}
                   ></div>

                   {/* Main Card */}
                   <div className="absolute inset-0 bg-slate-900 border border-white/10 rounded-xl lg:rounded-2xl group-hover:border-white/30 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-500 flex items-center justify-center overflow-hidden shadow-[5px_5px_15px_rgba(0,0,0,0.5)] lg:shadow-[10px_10px_30px_rgba(0,0,0,0.5)]">
                      {/* Gradient Inner Glow */}
                      <div 
                        className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                        style={{ background: `radial-gradient(circle at center, ${step.color}, transparent)` }}
                      />
                      
                      {/* Icon (Un-rotated) */}
                      <div className="-rotate-45 relative z-10 flex flex-col items-center justify-center">
                        <Icon 
                          className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-all duration-500"
                          strokeWidth={1.5} 
                          style={{ color: step.color }}
                        />
                      </div>
                   </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Ambient background particles */}
      <div className="absolute inset-0 pointer-events-none -z-10 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-500 rounded-full animate-float blur-[1px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-purple-500 rounded-full animate-float blur-[1px]" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-3/4 left-1/2 w-2 h-2 bg-emerald-500 rounded-full animate-float blur-[1px]" style={{ animationDelay: '4s' }}></div>
      </div>
    </div>
  );
}
