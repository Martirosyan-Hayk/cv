
import { Calendar, MapPin } from 'lucide-react';

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  current?: boolean;
}

const ExperienceItem = ({ title, company, period, current = false }: ExperienceItemProps) => {
  return (
    <div className="border-l-3 border-primary/20 pl-6 hover:border-primary/40 transition-elegant group">
      <div className="relative">
        <div className="absolute -left-8 top-2 w-3 h-3 bg-primary rounded-full border-4 border-white shadow-sm group-hover:scale-110 transition-elegant"></div>
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
        <p className="text-primary font-medium mb-2 flex items-center gap-2">
          <MapPin size={14} />
          {company}
          {current && <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Current</span>}
        </p>
        <p className="text-sm text-gray-500 flex items-center gap-2">
          <Calendar size={14} />
          {period}
        </p>
      </div>
    </div>
  );
};

export default ExperienceItem;
