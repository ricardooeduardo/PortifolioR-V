import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

export const HeroSection = () => {
  const { t, i18n } = useTranslation();
  const [currentWord, setCurrentWord] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Translate words array based on current language
  const words = t('hero.words', { returnObjects: true }) as string[] || ['Marcas', 'Negócios', 'Startups', 'Produtos', 'Equipes'];

  useEffect(() => {
    const word = words[wordIndex];
    if (!word) return;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentWord.length < word.length) {
          setCurrentWord(word.slice(0, currentWord.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentWord.length > 0) {
          setCurrentWord(currentWord.slice(0, -1));
        } else {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentWord, isDeleting, wordIndex, words]);

  return (
    <section id="hero" className="min-h-screen flex items-center pt-32 pb-24">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-10 animate-slide-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-balance">
              {t('hero.title')}{' '}
              <span className="gradient-text typing-cursor">
                {currentWord}
              </span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground/80 max-w-xl leading-relaxed">
              {t('hero.description')}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/builder">
                <Button size="lg" className="gap-2">
                  {t('hero.cta_builder')}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <a href="#portfolio">
                <Button variant="outline" size="lg">
                  {t('hero.cta_portfolio')}
                </Button>
              </a>
            </div>

            <div className="flex items-center gap-6 pt-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                {t('hero.performance')}
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                {t('hero.accessibility')}
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                {t('hero.scalability')}
              </span>
            </div>
          </div>

          {/* Mockup */}
          <div className="flex items-center justify-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="w-full max-w-lg glass rounded-2xl p-6 shadow-2xl border-white/5">
              <div className="bg-gradient-to-br from-secondary to-background rounded-xl overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/20 flex items-center justify-center">
                      <Sparkles className="w-8 h-8 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground">{t('hero.mockup_placeholder', { defaultValue: 'Seu projeto aqui' })}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg text-foreground mb-2">{t('hero.mockup_title')}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {t('hero.mockup_desc')}
                  </p>
                  <div className="flex gap-3">
                    <Link to="/builder" className="flex-1">
                      <Button className="w-full" size="sm">
                        {t('hero.mockup_start')}
                      </Button>
                    </Link>
                    <a href="#portfolio">
                      <Button variant="outline" size="sm">
                        {t('hero.mockup_projects')}
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
