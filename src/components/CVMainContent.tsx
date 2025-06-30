
import SectionTitle from './SectionTitle';
import ExperienceItem from './ExperienceItem';
import ProjectItem from './ProjectItem';
import { User, Briefcase, FolderOpen } from 'lucide-react';

const CVMainContent = () => {
  const experiences = [
    {
      title: 'Software Engineer',
      company: 'EasyDmarc',
      period: 'May 2025 - Present',
      current: true
    },
    {
      title: 'Software Engineer',
      company: 'M-One',
      period: 'Feb 2022 - May 2025',
      current: false
    }
  ];

  const projects = [
    {
      name: 'EasyDmarc',
      description: 'Contributed to the development of a scalable, multi-tenant email security platform focused on delivering advanced threat protection and infrastructure integrity through standards like DKIM, SPF, and DMARC.',
      technologies: 'Kafka, Redis, MySQL, MongoDB, ClickHouse, NestJS, Stripe, HubSpot, Kibana, Datadog, Grafana, GitLab, GitLab CI, NX, Keycloak',
      responsibilities: [
        'Developed and maintained microservices responsible for client provisioning, event tracking, and security enforcement.',
        'Designed scalable systems for processing and analyzing large volumes of email metadata using Kafka and ClickHouse.',
        'Integrated external systems including Stripe for billing and HubSpot for CRM workflows.',
        'Implemented and monitored system performance and security via Kibana, Datadog, and Grafana.',
        'Worked on implementing and validating email authentication protocols like DKIM, SPF, and DMARC.',
        'Maintained CI/CD pipelines with GitLab CI and managed service access and authentication with Keycloak.',
        'Collaborated with cross-functional teams to ensure system reliability and compliance with industry standards.'
      ],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Hr-Drone',
      description: 'Built an HR management system to streamline recruitment and employee management processes.',
      technologies: '14 microservices, payment integration with Stripe, AWS serverless, AWS cloud, NATS, NestJS, PostgreSQL, Redis, Firebase, Meilisearch, n8n',
      responsibilities: [
        'Designed and implemented 14 microservices to handle various HR functions such as recruitment, payroll, and performance management.',
        'Integrated Stripe for secure and efficient payment processing.',
        'Utilized AWS serverless architecture to ensure scalability and reliability.',
        'Employed NATS for microservice communication, enhancing system responsiveness and reliability.',
        'Developed backend services using NestJS and PostgreSQL for robust data management.',
        'Incorporated Redis and Firebase for caching and real-time updates.',
        'Implemented search functionality with Meilisearch and automated workflows with n8n.'
      ],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'KAFD',
      description: 'Built a management system to manage King Abdullah Financial District.',
      technologies: 'NestJS, Node.js, PostgreSQL, Redis, caching, Google Cloud, Google Maps, Google Storage, air-quality service, Weather-Stack, Uber and Careem integrations, permission management system, integration with traffic and real-time cameras, AI team integration',
      responsibilities: [
        'Developed backend services using NestJS and Node.js to manage various aspects of the financial district.',
        'Designed database schemas and implemented data management with PostgreSQL and Redis.',
        'Implemented caching mechanisms to enhance system performance.',
        'Integrated Google Cloud services for scalable storage and data processing.',
        'Utilized Google Maps for geolocation and navigation features.',
        'Integrated external APIs such as air-quality services, Weather-Stack, Uber, and Careem for enhanced functionality.',
        'Developed a comprehensive permission management system to ensure secure access control.',
        'Integrated with traffic and real-time cameras to provide live monitoring capabilities.',
        'Collaborated with the AI team to integrate AI-powered features into the system.'
      ],
      gradient: 'from-green-500 to-teal-500'
    },
    {
      name: 'Frisson',
      description: 'Built a management system for event organizers and users.',
      technologies: 'Node.js, NestJS, 10 microservices, integration with Stripe Connect accounts, analytics, AWS serverless, AWS cloud, NATS, PostgreSQL, Redis, Firebase, Meilisearch, n8n, Terraform, Kubernetes, AWS Lambdas',
      responsibilities: [
        'Designed and developed 10 microservices to handle event management, ticketing, and user interactions.',
        'Integrated Stripe Connect for secure and efficient financial transactions.',
        'Implemented analytics to provide insights into user behavior and event performance.',
        'Utilized AWS serverless architecture for scalability and reliability.',
        'Employed NATS for microservice communication, ensuring seamless data flow.',
        'Developed backend services using Node.js, NestJS, PostgreSQL, and Redis for robust data management.',
        'Automated workflows with n8n and managed infrastructure with Terraform and Kubernetes.',
        'Incorporated Firebase for real-time updates and notifications.',
        'Utilized AWS Lambdas for serverless computing.'
      ],
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <main className="lg:col-span-2 p-8 space-y-10 animate-slide-in-right">
      {/* Profile Section */}
      <section className="animate-fade-in-up delay-200">
        <SectionTitle icon={User}>PROFILE</SectionTitle>
        <div className="glass-effect rounded-2xl p-6 hover:bg-white/60 transition-magical">
          <p className="text-gray-700 leading-relaxed text-lg">
            A versatile software developer with a passion for innovation and a solid background in assembly language and C++. 
            Experienced in using PostgreSQL, Typescript, Node.js, and Nest.js to create high-quality, scalable applications. 
            Skilled in multiple programming languages, including C++, Go, and C#, with the ability to quickly pick up new technologies. 
            Seeking new opportunities to put my skills to work and drive impact in the software development industry.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section className="animate-fade-in-up delay-300">
        <SectionTitle icon={Briefcase}>EXPERIENCE</SectionTitle>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} {...exp} delay={index * 0.1} />
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="animate-fade-in-up delay-400">
        <SectionTitle icon={FolderOpen}>PROJECTS</SectionTitle>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <ProjectItem key={index} {...project} delay={index * 0.1} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default CVMainContent;
