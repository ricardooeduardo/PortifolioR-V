import { Link } from 'react-router-dom';
import { ArrowRight, Code, Palette, Monitor } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

const categoryIcons = [Code, Palette, Monitor];
const categoryImages = [
  'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
];
const categoryColors = [
  'from-primary/20 to-accent/10',
  'from-accent/20 to-primary/10',
  'from-primary/10 to-accent/20',
];
const categoryIds = ['development', 'design', 'platforms'];
const projectCounts = [4, 0, 3];

export const PortfolioSection = () => {
  const { t } = useTranslation();
  const allCategories = t('portfolio.categories', { returnObjects: true }) as any[];

  // Filter out categories with 0 projects
  const activeIndices = projectCounts.map((count, i) => count > 0 ? i : -1).filter(i => i !== -1);
  const categories = activeIndices.map(i => allCategories[i]);

  return (
    <section id="portfolio" className="section-standard bg-background relative overflow-hidden">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="animate-slide-up">
            <span className="inline-block px-4 py-2 rounded-full glass text-xs font-semibold uppercase tracking-wider text-primary mb-4">
              {t('portfolio.badge')}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
              {t('portfolio.title')}
            </h2>
            <p className="text-muted-foreground max-w-xl">
              {t('portfolio.description')}
            </p>
          </div>
          <Link to="/portfolio/all" className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <Button variant="outline" className="gap-2">
              {t('portfolio.cta_all')}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {categories.map((category, currentIndex) => {
            const originalIndex = activeIndices[currentIndex];
            const Icon = categoryIcons[originalIndex];
            return (
              <Link
                key={originalIndex}
                to={`/portfolio/${categoryIds[originalIndex]}`}
                className="group block animate-slide-up"
                style={{ animationDelay: `${(currentIndex + 2) * 0.1}s` }}
              >
                <article className="glass rounded-2xl overflow-hidden border-white/5 group-hover:border-primary/20 transition-all duration-300 shadow-xl h-full">
                  <div className={`relative h-48 bg-gradient-to-br ${categoryColors[originalIndex]}`}>
                    <img
                      src={categoryImages[originalIndex]}
                      alt={`Categoria ${category.title}`}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-2xl bg-background/80 backdrop-blur flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full glass text-xs font-medium">
                      {projectCounts[originalIndex]} {t('portfolio.projects_count')}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {category.description}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-primary text-sm font-medium">
                      {t('portfolio.view_projects')}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
