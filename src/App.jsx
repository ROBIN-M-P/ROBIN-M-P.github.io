import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="flex h-screen w-full max-w-[1800px] mx-auto md:p-6 gap-6 overflow-hidden">
      <div className="fixed inset-0 z-[-1] bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 bg-card/30 backdrop-blur-sm rounded-[30px] border border-white/5 relative overflow-hidden flex flex-col">
        <div className="flex-1 overflow-y-auto p-4 md:p-8 custom-scroll">
          {activeTab === 'home' && <Home changeTab={setActiveTab} />}
          {activeTab === 'projects' && <Projects />}
          {activeTab === 'contact' && <Contact />}
        </div>
      </main>
    </div>
  );
}
export default App;
