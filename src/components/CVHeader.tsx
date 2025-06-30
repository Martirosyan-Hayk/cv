
import { Mail, Phone, Linkedin, Github, Edit, Star, Sparkles } from 'lucide-react';

const CVHeader = () => {
  return (
    <header className="relative bg-animated text-white px-8 py-16 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-white/20">
        <Star size={20} className="floating-animation delay-100" />
      </div>
      <div className="absolute top-20 right-20 text-white/20">
        <Sparkles size={24} className="floating-animation delay-300" />
      </div>
      <div className="absolute bottom-10 left-20 text-white/20">
        <Star size={16} className="floating-animation delay-500" />
      </div>
      <div className="absolute bottom-20 right-10 text-white/20">
        <Sparkles size={18} className="floating-animation delay-200" />
      </div>
      
      <div className="relative z-10 text-center">
        <div className="w-40 h-40 mx-auto mb-8 rounded-full glass-effect border-4 border-white/30 flex items-center justify-center overflow-hidden floating-animation pulse-glow">
          {/* Image temporarily commented out for GitHub Pages compatibility */}
          {/* <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&h=160&fit=crop&crop=face&auto=format" 
            alt="Hayk Martirosyan" 
            className="w-36 h-36 object-cover rounded-full"
          /> */}
          
          {/* Placeholder initials instead of image */}
          <div className="w-36 h-36 bg-gradient-to-br from-white/20 to-white/10 rounded-full flex items-center justify-center text-6xl font-bold text-white">
            HM
          </div>
        </div>
        
        <div className="animate-bounce-in delay-200">
          <h1 className="text-6xl font-bold mb-4 tracking-tight drop-shadow-lg">
            HAYK MARTIROSYAN
          </h1>
          <div className="inline-block glass-effect px-6 py-3 rounded-full mb-8">
            <p className="text-2xl font-light tracking-wide">SOFTWARE ENGINEER</p>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 text-sm animate-fade-in-up delay-500">
          {[
            { icon: Phone, text: '+374 77655799', href: 'tel:+37477655799' },
            { icon: Mail, text: 'haykmartirosyan10.01@gmail.com', href: 'mailto:haykmartirosyan10.01@gmail.com' },
            { icon: Linkedin, text: 'LinkedIn', href: 'https://www.linkedin.com/in/hayk-martirosyan' },
            { icon: Github, text: 'GitHub', href: 'https://github.com/Martirosyan-Hayk' },
            { icon: Edit, text: 'Medium', href: 'https://medium.com/@martirosyanhayk' }
          ].map((contact, index) => (
            <a 
              key={index}
              href={contact.href} 
              target={contact.href.startsWith('http') ? '_blank' : undefined}
              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-2 glass-effect px-4 py-2 rounded-full hover:bg-white/20 transition-magical hover:scale-105 hover:shadow-glow"
            >
              <contact.icon size={16} />
              {contact.text}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default CVHeader;
