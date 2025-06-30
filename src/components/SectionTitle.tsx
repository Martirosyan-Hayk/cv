
interface SectionTitleProps {
  children: React.ReactNode;
}

const SectionTitle = ({ children }: SectionTitleProps) => {
  return (
    <h2 className="text-xl font-bold text-gradient mb-6 pb-2 border-b border-gray-200 uppercase tracking-wide">
      {children}
    </h2>
  );
};

export default SectionTitle;
