import { useTranslation } from 'react-i18next';

export const WhoWeAre = () => {
    const { t } = useTranslation();
    const partners = t('about_page.who_we_are.partners', { returnObjects: true }) as any[];

    return (
        <section className="section-standard relative overflow-hidden bg-card/30">
            <div className="section-container">
                <div className="text-center mb-16 animate-slide-up">
                    <span className="inline-block px-4 py-2 rounded-full glass text-xs font-semibold uppercase tracking-wider text-primary mb-4">
                        {t('about_page.who_we_are.badge')}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
                        {t('about_page.who_we_are.title')}
                    </h2>
                    <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
                        {t('about_page.who_we_are.description')}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {partners.map((partner, index) => (
                        <div
                            key={partner.name}
                            className="group glass rounded-3xl p-8 border-white/5 hover:border-primary/20 transition-all duration-500 shadow-2xl animate-slide-up"
                            style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                        >
                            <div className="relative mb-8 aspect-square overflow-hidden rounded-2xl bg-muted">
                                <img
                                    src={`/${index === 0 ? 'img/Ricardo.jpg' : 'img/Vinicius.jpg'}`}
                                    alt={partner.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>

                            <div className="space-y-4">
                                <div className="inline-block px-3 py-1 rounded-lg bg-primary/10 text-primary text-xs font-medium mb-2 border border-primary/20">
                                    {partner.role}
                                </div>
                                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                                    {partner.name}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {partner.description}
                                </p>
                            </div>

                            <div className="mt-8 pt-8 border-t border-white/5 flex gap-4">
                                {/* Social links placeholder or contact info if needed */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
