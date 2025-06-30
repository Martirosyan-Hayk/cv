
interface SkillTagProps {
  children: React.ReactNode;
  delay?: number;
}

const SkillTag = ({ children, delay = 0 }: SkillTagProps) => {
  const gradients = [
    'from-purple-400 to-pink-400',
    'from-blue-400 to-cyan-400',
    'from-green-400 to-blue-400',
    'from-yellow-400 to-orange-400',
    'from-pink-400 to-red-400',
    'from-indigo-400 to-purple-400'
  ];
  
  const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];

  return (
    <span 
      className={`bg-gradient-to-r ${randomGradient} text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg hover:shadow-xl hover:scale-110 transition-magical cursor-default animate-bounce-in`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </span>
  );
};

export default SkillTag;
