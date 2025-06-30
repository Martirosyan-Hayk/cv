
import { Calendar, MapPin, Zap } from 'lucide-react';

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  current?: boolean;
  delay?: number;
}

const ExperienceItem = ({ title, company, period, current = false, delay = 0 }: ExperienceItemProps) => {
  return (
    <div 
      className="group animate-fade-in-up" 
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="glass-effect rounded-2xl p-6 hover:bg-white/60 transition-magical hover:scale-105 hover:shadow-glow relative overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-magical"></div>
        
        <div className="relative z-10">
          <div className="flex items-start gap-4">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-xl group-hover:scale-110 transition-magical">
              <Zap className="text-white" size={24} />
            </div>
            
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-gradient transition-magical">
                {title}
              </h3>
              
              <div className="flex items-center gap-2 mb-2">
                <MapPin size={16} className="text-purple-500" />
                <p className="text-purple-600 font-semibold">{company}</p>
                {current && (
                  <span className="bg-gradient-to-r from-green-400 to-emerald-400 text-white text-xs px-3 py-1 rounded-full font-medium pulse-glow">
                    Current
                  </span>
                )}
              </div>
              
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar size={16} className="text-purple-500" />
                <p className="text-sm">{period}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
