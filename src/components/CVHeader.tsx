
import { Mail, Phone, Linkedin, Github, Edit } from 'lucide-react';

const CVHeader = () => {
  return (
    <header className="gradient-primary text-white px-8 py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative z-10 text-center">
        <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/30 flex items-center justify-center overflow-hidden animate-float">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=128&h=128&fit=crop&crop=face&auto=format" 
            alt="Hayk Martirosyan" 
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <h1 className="text-5xl font-bold mb-3 tracking-tight">HAYK MARTIROSYAN</h1>
        <p className="text-xl font-light opacity-90 mb-6">SOFTWARE ENGINEER</p>
        
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <a href="tel:+37477655799" className="flex items-center gap-2 hover:text-blue-200 transition-elegant">
            <Phone size={16} />
            +374 77655799
          </a>
          <a href="mailto:haykmartirosyan10.01@gmail.com" className="flex items-center gap-2 hover:text-blue-200 transition-elegant">
            <Mail size={16} />
            haykmartirosyan10.01@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/hayk-martirosyan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-200 transition-elegant">
            <Linkedin size={16} />
            LinkedIn
          </a>
          <a href="https://github.com/Martirosyan-Hayk" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-200 transition-elegant">
            <Github size={16} />
            GitHub
          </a>
          <a href="https://medium.com/@martirosyanhayk" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-200 transition-elegant">
            <Edit size={16} />
            Medium
          </a>
        </div>
      </div>
    </header>
  );
};

export default CVHeader;
