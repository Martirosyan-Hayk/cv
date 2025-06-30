
import { Folder, Wrench, CheckCircle, Star } from 'lucide-react';

interface ProjectItemProps {
  name: string;
  description: string;
  technologies: string;
  responsibilities: string[];
  gradient?: string;
  delay?: number;
}

const ProjectItem = ({ name, description, technologies, responsibilities, gradient = 'from-purple-500 to-pink-500', delay = 0 }: ProjectItemProps) => {
  return (
    <div 
      className="group animate-fade-in-up" 
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="glass-effect rounded-2xl p-6 hover:bg-white/60 transition-magical hover:scale-105 hover:shadow-glow relative overflow-hidden">
        {/* Animated background */}
        <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-5 group-hover:opacity-10 transition-magical`}></div>
        
        <div className="relative z-10">
          <div className="flex items-start gap-4 mb-6">
            <div className={`bg-gradient-to-r ${gradient} p-3 rounded-xl group-hover:scale-110 transition-magical relative`}>
              <Folder className="text-white" size={28} />
              <Star className="absolute -top-1 -right-1 text-yellow-300" size={12} />
            </div>
            
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-gradient transition-magical">
                {name}
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">{description}</p>
            </div>
          </div>
          
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-3">
              <div className={`bg-gradient-to-r ${gradient} p-2 rounded-lg`}>
                <Wrench className="text-white" size={16} />
              </div>
              <span className="font-bold text-gray-800">Technologies Used:</span>
            </div>
            <div className="glass-effect p-4 rounded-xl">
              <p className="text-gray-700 leading-relaxed">{technologies}</p>
            </div>
          </div>
          
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className={`bg-gradient-to-r ${gradient} p-2 rounded-lg`}>
                <CheckCircle className="text-white" size={16} />
              </div>
              <span className="font-bold text-gray-800">Key Responsibilities:</span>
            </div>
            <div className="space-y-3">
              {responsibilities.map((responsibility, index) => (
                <div key={index} className="flex items-start gap-4 glass-effect p-3 rounded-xl hover:bg-white/40 transition-magical">
                  <div className={`w-2 h-2 bg-gradient-to-r ${gradient} rounded-full mt-2 flex-shrink-0`}></div>
                  <p className="text-gray-700 leading-relaxed">{responsibility}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
