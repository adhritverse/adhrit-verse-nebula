"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TeamCard, StatCard } from "@/components/TeamComponents";

export default function TeamPage() {
  return (
    <main className="relative z-10 min-h-screen">
      <Navbar />
      
      {/* Background blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="blob" style={{top:'15%',left:'-15%',width:'55vw',height:'55vw',background:'radial-gradient(circle,rgba(59,130,246,0.2) 0%,transparent 70%)'}}></div>
          <div className="blob" style={{top:'50%',right:'-10%',width:'50vw',height:'50vw',background:'radial-gradient(circle,rgba(139,92,246,0.2) 0%,transparent 70%)'}}></div>
          <div className="blob" style={{bottom:'-10%',left:'30%',width:'60vw',height:'60vw',background:'radial-gradient(circle,rgba(236,72,153,0.1) 0%,transparent 70%)'}}></div>
      </div>

      <div className="pt-20">
        {/* Hero */}
        <section className="pt-10 sm:pt-16 pb-10 sm:pb-16 text-left sm:text-center px-6">
            <div className="max-w-3xl mx-0 sm:mx-auto">
                <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4 sm:mb-6">
                    <i className="fas fa-users text-primary text-[10px] sm:text-xs"></i>
                    <span className="text-[10px] sm:text-xs font-medium text-slate-300 tracking-wide uppercase">Our Founders</span>
                </div>
                <h1 className="font-display text-[1.75rem] leading-[1.2] sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 sm:leading-tight">
                    The <span className="text-gradient block sm:inline">Visionaries</span> Behind AdhritVerse
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-slate-400 max-w-xl mx-0 sm:mx-auto leading-relaxed px-0">
                    Driven by a shared passion for technology and a commitment to building secure, innovative digital solutions.
                </p>
            </div>
        </section>

        {/* Founder Cards */}
        <section className="py-16 px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                <TeamCard
                  initials="HJ"
                  name="Hritik Jaiswal"
                  role="Founder & CEO"
                  avatarGrad="from-blue-600 to-violet-700"
                  roleBgStyle={{ background: 'rgba(59,130,246,0.15)', border: '1px solid rgba(59,130,246,0.3)' }}
                  roleHoverBorder="group-hover:border-blue-500/50"
                  dotColor="bg-primary"
                  textColor="text-primary"
                  description="Visionary entrepreneur and tech strategist leading AdhritVerse's mission to deliver cutting-edge cybersecurity and digital transformation solutions to businesses worldwide."
                  skillClasses="bg-blue-500/10 border-blue-500/20 text-blue-400"
                  skills={['Strategy', 'Business Dev', 'Cybersecurity', 'Leadership']}
                  socialHoverClasses="hover:bg-blue-500/20 hover:border-blue-500/40"
                />

                <TeamCard
                  initials="RK"
                  name="Rishabh Kushwah"
                  role="Co-Founder & CTO"
                  avatarGrad="from-violet-600 to-pink-600"
                  avatarRingStyle={{ animationDirection: 'reverse' }}
                  roleBgStyle={{ background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.3)' }}
                  roleHoverBorder="group-hover:border-violet-500/50"
                  dotColor="bg-secondary"
                  textColor="text-secondary"
                  description="Technical architect and full-stack innovator driving AdhritVerse's engineering excellence. Expert in cloud infrastructure, AI integrations, and building scalable digital systems."
                  skillClasses="bg-violet-500/10 border-violet-500/20 text-violet-400"
                  skills={['Full-Stack', 'Cloud & DevOps', 'AI/ML', 'Architecture']}
                  socialHoverClasses="hover:bg-violet-500/20 hover:border-violet-500/40"
                />

                <TeamCard
                  initials="AM"
                  name="Anmol Malviya"
                  role="Co-Founder & Lead Developer"
                  avatarGrad="from-emerald-500 to-cyan-600"
                  avatarRingStyle={{ background: 'conic-gradient(from 0deg,#10b981,#06b6d4,#3b82f6,#10b981)', animationDelay: '-2s' }}
                  roleBgStyle={{ background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)' }}
                  roleHoverBorder="group-hover:border-emerald-500/50"
                  dotColor="bg-emerald-400"
                  textColor="text-emerald-400"
                  description="Creative full-stack developer and UI/UX specialist shaping AdhritVerse's product experience. Passionate about building intuitive, high-performance web solutions with a focus on design excellence."
                  skillClasses="bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                  skills={['Web Dev', 'UI/UX', 'React', 'Next.js']}
                  socialHoverClasses="hover:bg-emerald-500/20 hover:border-emerald-500/40"
                />

                <TeamCard
                  initials="PJ"
                  name="Pratik Jaishwal"
                  role="Developer"
                  avatarGrad="from-amber-500 to-orange-600"
                  roleBgStyle={{ background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.3)' }}
                  roleHoverBorder="group-hover:border-amber-500/50"
                  dotColor="bg-amber-400"
                  textColor="text-amber-400"
                  description="Passionate developer dedicated to engineering robust solutions and driving technical innovation at AdhritVerse."
                  skillClasses="bg-amber-500/10 border-amber-500/20 text-amber-400"
                  skills={['Software Dev', 'Algorithms', 'Innovation']}
                  socialHoverClasses="hover:bg-amber-500/20 hover:border-amber-500/40"
                />

            </div>
        </section>


        {/* Stats */}
        <section className="py-10 sm:py-16 px-6 max-w-4xl mx-auto">
            <div className="grid grid-cols-2 gap-3 sm:gap-6">
                <div className="stat-card bg-slate-900/50 border border-white/5 rounded-2xl p-4 sm:p-6 text-center hover:border-primary/30 transition-colors">
                    <div className="font-display text-2xl sm:text-4xl font-bold text-white mb-1 sm:mb-2" data-count="40">40+</div>
                    <div className="text-slate-400 text-[10px] sm:text-sm">Projects Delivered</div>
                </div>
                <div className="stat-card bg-slate-900/50 border border-white/5 rounded-2xl p-4 sm:p-6 text-center hover:border-primary/30 transition-colors">
                    <div className="font-display text-2xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">∞</div>
                    <div className="text-slate-400 text-[10px] sm:text-sm">Ambition</div>
                </div>
            </div>
        </section>

        {/* Company Values */}
        <section className="py-10 sm:py-16 px-6 max-w-5xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">Our Core Values</h2>
                <p className="text-sm sm:text-base text-slate-400">The principles that guide everything we build.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                <div className="value-card bg-slate-900/50 border border-white/5 hover:border-violet-500/30 hover:bg-violet-500/5 transition-all rounded-2xl p-6 sm:p-8 text-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-primary text-xl sm:text-2xl mx-auto mb-4 sm:mb-5">
                        <i className="fas fa-lock"></i>
                    </div>
                    <h3 className="text-white font-bold text-base sm:text-lg mb-2 sm:mb-3">Security First</h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">Every solution we build is designed with security as a foundational principle, not an afterthought.</p>
                </div>
                <div className="value-card bg-slate-900/50 border border-white/5 hover:border-violet-500/30 hover:bg-violet-500/5 transition-all rounded-2xl p-6 sm:p-8 text-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-secondary text-xl sm:text-2xl mx-auto mb-4 sm:mb-5">
                        <i className="fas fa-lightbulb"></i>
                    </div>
                    <h3 className="text-white font-bold text-base sm:text-lg mb-2 sm:mb-3">Innovation</h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">We embrace emerging technologies and creative problem-solving to deliver forward-thinking digital solutions.</p>
                </div>
                <div className="value-card bg-slate-900/50 border border-white/5 hover:border-violet-500/30 hover:bg-violet-500/5 transition-all rounded-2xl p-6 sm:p-8 text-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-accent text-xl sm:text-2xl mx-auto mb-4 sm:mb-5">
                        <i className="fas fa-handshake"></i>
                    </div>
                    <h3 className="text-white font-bold text-base sm:text-lg mb-2 sm:mb-3">Partnership</h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">We treat every client as a long-term partner, aligning our success with theirs throughout the journey.</p>
                </div>
            </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-24 px-6">
            <div className="max-w-3xl mx-auto text-center">
                <div className="relative p-8 sm:p-12 rounded-3xl overflow-hidden" style={{background:'rgba(15,23,42,0.6)',border:'1px solid rgba(255,255,255,0.05)'}}>
                    <div className="absolute inset-0 opacity-20" style={{background:'radial-gradient(circle at 50% 50%,rgba(139,92,246,0.5),transparent 70%)'}}></div>
                    <div className="relative z-10">
                        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">Work With Our Team</h2>
                        <p className="text-sm sm:text-base md:text-lg text-slate-400 mb-6 sm:mb-8">Have a project in mind? Let's build something remarkable together.</p>
                        <a href="/contact" className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:px-10 sm:py-4 rounded-full text-white font-medium text-sm sm:text-lg w-full sm:w-auto">
                            Get In Touch <i className="fas fa-arrow-right text-xs sm:text-sm"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}


