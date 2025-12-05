import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, Github, Layers, ArrowRight, Server, Brain, Cloud } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Zomato Clone Pipeline",
    tag: "DEVOPS",
    icon: Server,
    color: "blue",
    desc: "End-to-end CI/CD pipeline ensuring zero-downtime deployments.",
    longDesc: "I removed the need for manual deployments entirely. I containerized the application using Docker, orchestrated it with Kubernetes (K8s), and set up a Jenkins pipeline that automatically tests and pushes code to AWS EC2. This resulted in a 40% reduction in deployment time.",
    stack: ["Docker", "Jenkins", "AWS EC2", "Kubernetes"],
    impact: ["40% Faster Deployments", "99.9% Uptime", "Zero Manual Intervention"],
    link: "https://github.com/robin-m-p"
  },
  {
    id: 2,
    title: "Retinal Disease AI",
    tag: "AI / ML",
    icon: Brain,
    color: "emerald",
    desc: "Diagnostic web app achieving 92% accuracy using Gemini API.",
    longDesc: "Healthcare needs speed. I built a diagnostic tool that uses Deep Learning and the Gemini 1.5 API to detect retinal diseases from scans. I wrapped the model in a React frontend so doctors can use it without touching code. The system provides results in under 2 seconds.",
    stack: ["Gemini API", "React", "Python", "Deep Learning"],
    impact: ["92.37% Accuracy", "Published in IJSREM", "< 2s Inference Time"],
    link: "https://ijsrem.com/"
  },
  {
    id: 3,
    title: "Serverless Image Processor",
    tag: "CLOUD",
    icon: Cloud,
    color: "purple",
    desc: "Event-driven architecture to handle high-volume image uploads.",
    longDesc: "To handle spikes in user uploads, I built an event-driven architecture. When a user uploads an image to S3, it triggers an AWS Lambda function to resize and optimize the file. This serverless approach scales to zero when not in use, saving 60% on infrastructure costs.",
    stack: ["AWS Lambda", "S3", "Python", "CloudWatch"],
    impact: ["Reduced costs by 60%", "Auto-scaling", "100+ images/min"],
    link: "https://github.com/robin-m-p"
  }
];

const Projects = () => {
  const [selectedId, setSelectedId] = useState(null);
  const getProject = (id) => projects.find((p) => p.id === id);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -20 }}
      className="pb-20"
    >
      <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
        <Layers className="text-blue-500" /> Featured Work
      </h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            layoutId={`card-${project.id}`}
            onClick={() => setSelectedId(project.id)}
            className="group bg-card/40 border border-white/5 rounded-3xl overflow-hidden cursor-pointer hover:border-blue-500/50 transition-all hover:shadow-2xl hover:shadow-blue-900/20"
            whileHover={{ y: -8 }}
          >
            {/* CARD HEADER WITH WATERMARK ICON */}
            <div className={`h-48 bg-gradient-to-br from-${project.color}-900/40 to-slate-950 p-6 flex flex-col justify-between relative overflow-hidden`}>
               
               {/* THE WATERMARK */}
               <div className="absolute -right-6 -bottom-6 opacity-10 transform rotate-12 group-hover:scale-110 group-hover:opacity-20 transition-all duration-500">
                  <project.icon size={140} className={`text-${project.color}-400`} />
               </div>

               <span className={`bg-${project.color}-500/20 text-${project.color}-400 border border-${project.color}-500/30 text-[10px] font-bold px-3 py-1 rounded-full self-start backdrop-blur-md relative z-10`}>
                 {project.tag}
               </span>
               <div className="absolute top-4 right-4 p-2 bg-black/40 rounded-full backdrop-blur opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 z-10">
                 <Maximize2 size={18} className="text-white" />
               </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
              <p className="text-sm text-slate-400 line-clamp-2 leading-relaxed">{project.desc}</p>
              <div className="mt-4 flex items-center gap-2 text-xs font-bold text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                View Details <ArrowRight size={14} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedId(null)}
            />
            <motion.div
              layoutId={`card-${selectedId}`}
              className="bg-[#1e293b] w-full max-w-2xl rounded-3xl border border-white/10 overflow-hidden relative shadow-2xl z-50 max-h-[90vh] overflow-y-auto custom-scroll"
            >
              <button 
                onClick={() => setSelectedId(null)} 
                className="absolute top-4 right-4 p-2 bg-black/40 rounded-full hover:bg-white/10 text-white z-20 transition-colors"
              >
                <X size={20} />
              </button>
              
              <div className={`h-32 bg-gradient-to-r from-${getProject(selectedId).color}-900/50 to-slate-900 p-8 flex items-end relative overflow-hidden`}>
                {/* Modal Watermark */}
                <div className="absolute -right-10 -top-10 opacity-10 rotate-12">
                   {(() => {
                      const Icon = getProject(selectedId).icon;
                      return <Icon size={200} className="text-white" />;
                   })()}
                </div>
                <h2 className="text-3xl font-bold text-white relative z-10">{getProject(selectedId).title}</h2>
              </div>
              
              <div className="p-8 space-y-8">
                <div>
                  <h4 className="text-sm font-bold text-blue-400 uppercase mb-3 flex items-center gap-2">
                    <Layers size={14} /> The Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {getProject(selectedId).stack.map((tech) => (
                      <span key={tech} className="text-xs bg-slate-950 border border-white/10 px-3 py-1.5 rounded-lg text-slate-300 shadow-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-bold text-slate-200 uppercase mb-3">The Engineering Challenge</h4>
                  <p className="text-slate-400 leading-relaxed text-sm border-l-2 border-blue-500/30 pl-4">
                    {getProject(selectedId).longDesc}
                  </p>
                </div>

                <div className="bg-slate-950/50 p-6 rounded-2xl border border-white/5">
                  <h4 className="text-sm font-bold text-emerald-400 uppercase mb-4">Business Impact</h4>
                  <ul className="space-y-3">
                    {getProject(selectedId).impact.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <a 
                    href={getProject(selectedId).link} 
                    target="_blank" 
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] shadow-lg shadow-blue-900/20"
                  >
                    <Github size={18} /> View Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
export default Projects;
