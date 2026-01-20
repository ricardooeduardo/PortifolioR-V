import { useTranslation } from 'react-i18next';

const technologies = [
  { name: 'HTML5', category: 'Frontend' },
  { name: 'CSS3', category: 'Frontend' },
  { name: 'JavaScript', category: 'Frontend' },
  { name: 'TypeScript', category: 'Frontend' },
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Laravel', category: 'Backend' },
  { name: 'PHP', category: 'Backend' },
  { name: 'MySQL', category: 'Database' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'Firebase', category: 'Cloud' },
  { name: 'AWS', category: 'Cloud' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'Git', category: 'DevOps' },
  { name: 'Figma', category: 'Design' },
];

export const TechSection = () => {
  const { t } = useTranslation();

  return (
    <section id="tech" className="py-24 bg-gradient-to-b from-card/30 to-background">
      <div className="section-container">
        <div className="text-center mb-16 animate-slide-up">
          <span className="inline-block px-4 py-2 rounded-full glass text-xs font-semibold uppercase tracking-wider text-primary mb-4">
            {t('tech.badge')}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
            {t('tech.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('tech.description')}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {technologies.map((tech, index) => (
            <span
              key={tech.name}
              className="glass px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all duration-300 cursor-default animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
