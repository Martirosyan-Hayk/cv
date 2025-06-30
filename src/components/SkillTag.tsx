
interface SkillTagProps {
  children: React.ReactNode;
  delay?: number;
}

const SkillTag = ({ children, delay = 0 }: SkillTagProps) => {
  return (
    <span 
      className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm font-medium border border-gray-200 hover:border-primary/30 hover:bg-primary/5 transition-elegant cursor-default"
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </span>
  );
};

export default SkillTag;
