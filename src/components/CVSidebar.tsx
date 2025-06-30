
import SectionTitle from './SectionTitle';
import SkillTag from './SkillTag';
import { GraduationCap, Globe, Code } from 'lucide-react';

const CVSidebar = () => {
  const skills = [
    'Node.js', 'Nest.js', 'TypeScript', 'JavaScript', 'PostgreSQL', 'MongoDB', 'Redis',
    'Go', 'Microservices', 'AWS', 'Google Cloud', 'Firebase', 'ElasticSearch',
    'ClickHouse', 'Serverless', 'Stripe', 'Linux', 'C++', 'Assembly', 'Algorithms'
  ];

  const languages = [
    { name: 'Armenian', level: 'Native', color: 'from-red-400 to-orange-400' },
    { name: 'English', level: 'Fluent', color: 'from-blue-400 to-cyan-400' },
    { name: 'Russian', level: 'Advanced', color: 'from-purple-400 to-pink-400' }
  ];

  const education = [
    {
      period: '2021-2022',
      course: 'Computer Science and Programming Fundamentals with C++',
      institution: 'Picsart Academy'
    },
    {
      period: '2021-2022',
      course: 'Core JavaScript. A thorough knowledge of how JavaScript operates',
      institution: 'Picsart Academy'
    }
  ];

  return (
    <aside className="lg:col-span-1 bg-gradient-to-br from-gray-50/80 to-white/80 backdrop-blur-sm p-8 space-y-8 animate-slide-in-left">
      {/* Skills Section */}
      <section className="animate-fade-in-up delay-200">
        <SectionTitle icon={Code}>SKILLS</SectionTitle>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <SkillTag key={index} delay={index * 0.05}>{skill}</SkillTag>
          ))}
        </div>
      </section>

      {/* Languages Section */}
      <section className="animate-fade-in-up delay-300">
        <SectionTitle icon={Globe}>LANGUAGES</SectionTitle>
        <div className="space-y-4">
          {languages.map((lang, index) => (
            <div key={index} className="group">
              <div className="glass-effect rounded-2xl p-4 hover:bg-white/60 transition-magical hover:scale-105 hover:shadow-glow">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-800">{lang.name}</span>
                  <span className={`text-sm bg-gradient-to-r ${lang.color} text-white px-3 py-1 rounded-full font-medium`}>
                    {lang.level}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="animate-fade-in-up delay-400">
        <SectionTitle icon={GraduationCap}>EDUCATION</SectionTitle>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="group">
              <div className="glass-effect rounded-2xl p-4 border-l-4 border-gradient-to-b from-purple-400 to-pink-400 hover:bg-white/60 transition-magical hover:scale-105 hover:shadow-glow">
                <p className="text-xs font-semibold text-purple-600 mb-2 bg-purple-100 px-2 py-1 rounded-full inline-block">
                  {edu.period}
                </p>
                <h3 className="font-bold text-gray-800 text-sm leading-tight mb-2">
                  {edu.course}
                </h3>
                <p className="text-sm text-gray-600 font-medium">{edu.institution}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </aside>
  );
};

export default CVSidebar;
