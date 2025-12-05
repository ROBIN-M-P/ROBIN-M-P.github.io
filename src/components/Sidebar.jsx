import { LayoutDashboard, Layers, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'home', icon: LayoutDashboard, label: 'Overview' },
    { id: 'projects', icon: Layers, label: 'Projects' },
    { id: 'contact', icon: Send, label: 'Contact' },
  ];

  return (
    <>
      <aside className="hidden md:flex flex-col w-24 bg-card/50 backdrop-blur-xl border border-white/5 rounded-[30px] py-8 items-center gap-8 shadow-2xl shrink-0 relative z-40">
        <div className="w-12 h-12 bg-blue-600/20 text-blue-400 rounded-xl flex items-center justify-center font-bold text-xl border border-blue-500/20">R</div>
        <nav className="flex flex-col gap-6 w-full px-2">
          {menuItems.map((item) => (
            <button key={item.id} onClick={() => setActiveTab(item.id)} className="relative flex flex-col items-center gap-2 p-2 rounded-xl transition-all duration-300 group">
              {activeTab === item.id && (
                <motion.div layoutId="active-bg" className="absolute inset-0 bg-blue-500/10 rounded-xl border border-blue-500/20" initial={false} transition={{ type: "spring", stiffness: 300, damping: 30 }} />
              )}
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all relative z-10 ${activeTab === item.id ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/25' : 'text-slate-400 group-hover:text-white'}`}>
                <item.icon size={20} />
              </div>
              <span className={`text-[10px] font-medium relative z-10 ${activeTab === item.id ? 'text-white' : 'text-slate-500'}`}>{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>
      
      {/* Mobile Nav */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-[#1e293b]/95 backdrop-blur-xl border-t border-white/10 p-4 flex justify-around z-50">
        {menuItems.map((item) => (
          <button key={item.id} onClick={() => setActiveTab(item.id)} className={`flex flex-col items-center gap-1 ${activeTab === item.id ? 'text-blue-500' : 'text-slate-400'}`}>
            <item.icon size={20} />
            <span className="text-[10px]">{item.label}</span>
          </button>
        ))}
      </div>
    </>
  );
};
export default Sidebar;
