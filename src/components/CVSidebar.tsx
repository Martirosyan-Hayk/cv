
import SectionTitle from './SectionTitle';
import SkillTag from './SkillTag';

const CVSidebar = () => {
  const skills = [
    'Node.js', 'Nest.js', 'TypeScript', 'JavaScript', 'PostgreSQL', 'MongoDB', 'Redis',
    'Go', 'Microservices', 'AWS', 'Google Cloud', 'Firebase', 'ElasticSearch',
    'ClickHouse', 'Serverless', 'Stripe', 'Linux', 'C++', 'Assembly', 'Algorithms'
  ];

  const languages = [
    { name: 'Armenian', level: 'Native' },
    { name: 'English', level: 'Fluent' },
    { name: 'Russian', level: 'Advanced' }
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
    <aside className="lg:col-span-1 bg-gray-50/50 p-8 space-y-8">
      {/* Skills Section */}
      <section className="animate-slide-up">
        <SectionTitle>SKILLS</SectionTitle>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <SkillTag key={index} delay={index * 0.1}>{skill}</SkillTag>
          ))}
        </div>
      </section>

      {/* Languages Section */}
      <section className="animate-slide-up">
        <SectionTitle>LANGUAGES</SectionTitle>
        <div className="space-y-3">
          {languages.map((lang, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="font-medium text-gray-700">{lang.name}</span>
              <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full">
                {lang.level}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="animate-slide-up">
        <SectionTitle>EDUCATION</SectionTitle>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="border-l-3 border-primary/20 pl-4 hover:border-primary/40 transition-elegant">
              <p className="text-xs text-gray-500 mb-1">{edu.period}</p>
              <h3 className="font-semibold text-gray-800 text-sm leading-tight mb-2">
                {edu.course}
              </h3>
              <p className="text-sm text-gray-600">{edu.institution}</p>
            </div>
          ))}
        </div>
      </section>
    </aside>
  );
};

export default CVSidebar;
