import { useTranslation } from 'react-i18next';

export const AboutHero = () => {
    const { t } = useTranslation();

    return (
        <section className="relative min-h-[80vh] flex items-center pt-24 pb-16 overflow-hidden">
            {/* Background Gradient with Overlay */}
            <div
                className="absolute inset-0 z-0 bg-gradient-to-br from-background via-card/50 to-background"
            >
                <div className="absolute inset-0 bg-background/40 backdrop-blur-[1px]"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            </div>

            <div className="section-container relative z-10">
                <div className="max-w-4xl mx-auto text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 animate-slide-up tracking-tight">
                        <span className="gradient-text">
                            {t('about_page.hero.title')}
                        </span>
                    </h1>

                    <div className="space-y-6 text-lg text-muted-foreground/90 leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
                        <p>{t('about_page.hero.text_p1')}</p>
                        <p>{t('about_page.hero.text_p2')}</p>
                        <p>{t('about_page.hero.text_p3')}</p>
                    </div>

                    <div className="mt-10 p-8 glass rounded-2xl border-white/5 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                            <span className="w-8 h-px bg-primary"></span>
                            {t('about_page.hero.list_title')}
                        </h3>
                        <ul className="grid md:grid-cols-2 gap-4">
                            {[1, 2, 3, 4].map((i) => (
                                <li key={i} className="flex items-center gap-3 text-muted-foreground">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(var(--primary),0.5)]"></div>
                                    {t(`about_page.hero.list_item${i}`)}
                                </li>
                            ))}
                        </ul>
                        <p className="mt-8 font-medium text-foreground italic border-l-2 border-primary pl-4">
                            {t('about_page.hero.footer_text')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
