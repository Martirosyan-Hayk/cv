
import { Folder, Wrench, CheckCircle } from 'lucide-react';

interface ProjectItemProps {
  name: string;
  description: string;
  technologies: string;
  responsibilities: string[];
}

const ProjectItem = ({ name, description, technologies, responsibilities }: ProjectItemProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-elegant group">
      <div className="flex items-start gap-4 mb-4">
        <div className="bg-primary/10 p-3 rounded-xl group-hover:bg-primary/20 transition-elegant">
          <Folder className="text-primary" size={24} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
      
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <Wrench className="text-primary" size={16} />
          <span className="font-semibold text-gray-700">Technologies Used:</span>
        </div>
        <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">{technologies}</p>
      </div>
      
      <div>
        <div className="flex items-center gap-2 mb-3">
          <CheckCircle className="text-primary" size={16} />
          <span className="font-semibold text-gray-700">Key Responsibilities:</span>
        </div>
        <ul className="space-y-2">
          {responsibilities.map((responsibility, index) => (
            <li key={index} className="text-sm text-gray-600 flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              {responsibility}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectItem;
