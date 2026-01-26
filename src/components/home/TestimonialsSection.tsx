import { Quote, Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const TestimonialsSection = () => {
  const { t } = useTranslation();
  const testimonials = t('testimonials.items', { returnObjects: true }) as any[];

  return (
    <section id="testimonials" className="section-standard bg-leaf-section border-y border-border/50 relative overflow-hidden">
      <div className="section-container">
        <div className="text-center mb-12 animate-slide-up">
          <span className="inline-block px-4 py-2 rounded-full glass text-xs font-semibold uppercase tracking-wider text-primary mb-4">
            {t('testimonials.badge')}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
            {t('testimonials.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('testimonials.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <blockquote
              key={testimonial.name}
              className="glass rounded-2xl p-8 border-white/5 hover:border-primary/20 transition-all duration-300 shadow-xl animate-slide-up"
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
            >
              <Quote className="w-10 h-10 text-primary/30 mb-4" />

              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 italic">
                "{testimonial.content}"
              </p>

              <footer className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">{testimonial.name}</div>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};
