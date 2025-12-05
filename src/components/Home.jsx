import { Github, Linkedin, Mail, Download, Send, Cloud, Terminal, Database, Code2 } from 'lucide-react';

const Home = ({ changeTab }) => {
  return (
    <div className="space-y-6 pb-20">
      <div className="bg-card/40 border border-white/5 rounded-3xl p-8 md:p-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 relative z-10">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full p-1 bg-gradient-to-br from-blue-500 to-emerald-500">
             <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Robin" className="w-full h-full rounded-full bg-dark object-cover border-4 border-dark" />
          </div>
          <div className="text-center md:text-left flex-1">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-3"><span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span> DAY 1 READY ENGINEER</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Robin M P</h1>
            <p className="text-lg text-slate-400 font-medium mb-4">DevOps Engineer | Cloud Architect</p>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <a href="https://github.com/robin-m-p" target="_blank" className="p-2 bg-white/5 rounded-lg hover:bg-white/10 text-slate-400"><Github size={20} /></a>
              <a href="https://linkedin.com/in/robinmp" target="_blank" className="p-2 bg-white/5 rounded-lg hover:bg-[#0077b5] text-white hover:text-white transition-colors text-slate-400"><Linkedin size={20} /></a>
              <a href="mailto:robinpolymp@gmail.com" className="p-2 bg-white/5 rounded-lg hover:bg-red-500 hover:text-white transition-colors text-slate-400"><Mail size={20} /></a>
              <a href="resume.pdf" target="_blank" className="ml-4 text-sm font-bold text-white flex items-center gap-2 hover:text-blue-400">Download Resume <Download size={16}/></a>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-card/40 border border-white/5 rounded-3xl p-8">
            <h2 className="text-xl font-bold text-white mb-4">The Mission</h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">Bridging the gap between writing code and deploying it at scale. I am an <strong className="text-white">MCA Graduate (2025)</strong> focused on transforming manual processes into automated pipelines using AWS, Docker, and Jenkins.</p>
            <button onClick={() => changeTab('contact')} className="text-sm font-bold text-primary flex items-center gap-2 hover:text-blue-400">Hire Me <Send size={16}/></button>
        </div>

        {/* TECH STACK GRID */}
        <div className="md:col-span-1 bg-card/40 border border-white/5 rounded-3xl p-6">
             <h2 className="text-xl font-bold text-white mb-4">Tech Stack</h2>
             <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-900/50 p-3 rounded-xl border border-white/5 flex flex-col items-center gap-2 hover:border-blue-500/30 transition-colors">
                    <Cloud size={20} className="text-blue-400"/>
                    <span className="text-xs text-slate-300 font-medium">AWS</span>
                </div>
                <div className="bg-slate-900/50 p-3 rounded-xl border border-white/5 flex flex-col items-center gap-2 hover:border-blue-500/30 transition-colors">
                    <Terminal size={20} className="text-purple-400"/>
                    <span className="text-xs text-slate-300 font-medium">Docker</span>
                </div>
                <div className="bg-slate-900/50 p-3 rounded-xl border border-white/5 flex flex-col items-center gap-2 hover:border-blue-500/30 transition-colors">
                    <Code2 size={20} className="text-emerald-400"/>
                    <span className="text-xs text-slate-300 font-medium">Python</span>
                </div>
                <div className="bg-slate-900/50 p-3 rounded-xl border border-white/5 flex flex-col items-center gap-2 hover:border-blue-500/30 transition-colors">
                    <Database size={20} className="text-orange-400"/>
                    <span className="text-xs text-slate-300 font-medium">SQL</span>
                </div>
             </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
