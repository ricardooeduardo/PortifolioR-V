import {
  Monitor,
  Keyboard,
  Settings,
  Smartphone,
  Palette,
  Code,
  Database,
  Shield,
  Zap,
  Layers
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const iconMap: Record<string, any> = {
  'Sites Profissionais': Monitor,
  'Landing Pages': Keyboard,
  'Sistemas Web': Settings,
  'Aplicações Mobile-First': Smartphone,
  'Design UI/UX': Palette,
  'Backend & APIs': Database,
  'Segurança & Performance': Shield,
  'Manutenção & Suporte': Layers,
  // Fallbacks for other languages if keys differ, but I'll use index-based mapping instead
};

const icons = [Monitor, Keyboard, Settings, Smartphone, Palette, Database, Shield, Layers];

export const ServicesSection = () => {
  const { t } = useTranslation();
  const servicesData = t('services.items', { returnObjects: true }) as any[];

  return (
    <section id="services" className="section-standard bg-leaf-section border-y border-border/50">
      <div className="section-container">
        <div className="text-center mb-16 animate-slide-up">
          <span className="inline-block px-4 py-2 rounded-full glass text-xs font-semibold uppercase tracking-wider text-primary mb-4">
            {t('services.badge')}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
            {t('services.title')}
          </h2>
          <p className="text-muted-foreground/80 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            {t('services.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => {
            const Icon = icons[index] || Code;
            return (
              <article
                key={index}
                className="group glass rounded-2xl p-7 border-white/5 hover:border-primary/20 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                tabIndex={0}
              >
                <div className="w-14 h-14 mb-6 flex items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Icon className="w-7 h-7" />
                </div>

                <h3 className="font-semibold text-lg text-foreground mb-3">
                  {service.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature: string) => (
                    <li key={feature} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Zap className="w-3 h-3 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
