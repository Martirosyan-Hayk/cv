
import { LucideIcon } from 'lucide-react';

interface SectionTitleProps {
  children: React.ReactNode;
  icon?: LucideIcon;
}

const SectionTitle = ({ children, icon: Icon }: SectionTitleProps) => {
  return (
    <div className="flex items-center gap-3 mb-6">
      {Icon && (
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-xl">
          <Icon size={20} className="text-white" />
        </div>
      )}
      <h2 className="text-xl font-bold text-gradient uppercase tracking-wide">
        {children}
      </h2>
      <div className="flex-1 h-px bg-gradient-to-r from-purple-200 to-transparent"></div>
    </div>
  );
};

export default SectionTitle;
