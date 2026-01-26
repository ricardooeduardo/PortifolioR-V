import React from 'react';
import { SectionVariation, SectionType } from './constants';
import { CheckCircle2, Star, Target, Shield, Zap, Layout, Plus, Minus, ArrowRight, Instagram, Facebook, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

import { cn } from '@/lib/utils';

interface TemplateProps {
    type: SectionType;
    variationId: string;
    config: {
        primaryColor: string;
        textColor: string;
        bgColor: string;
        fontFamily: string;
    };
    content: Record<string, string>;
    viewMode?: 'desktop' | 'mobile';
}

export const TemplateRenderer: React.FC<TemplateProps> = ({ type, variationId, config, content, viewMode }) => {
    const isMobile = viewMode === 'mobile';

    // Helper to strip desktop classes when in mobile view
    // desktopClasses must include the prefix (e.g. "md:flex")
    const resp = (base: string, desktopClasses: string) => cn(base, isMobile ? "" : desktopClasses);
    const style = {
        '--primary': config.primaryColor,
        '--text': config.textColor,
        '--bg': config.bgColor,
    } as React.CSSProperties;

    const getFontClass = () => config.fontFamily;

    const renderHeader = () => {
        switch (variationId) {
            case 'ph1':
                return (
                    <div className="bg-white shadow-sm font-sans" style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
                        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                            {/* Logo */}
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 bg-gray-200 rounded flex items-center justify-center text-xs font-bold text-gray-500">Logo</div>
                                <span className="font-bold text-lg" style={{ color: 'var(--primary)' }}>{content.brand || 'Nome da Empresa'}</span>
                            </div>

                            {/* Menu - Hidden on Mobile */}
                            <nav className={resp("hidden gap-8 text-sm font-medium", "md:flex")}>
                                <a href="#" className="hover:opacity-70 transition-opacity">Início</a>
                                <a href="#" className="hover:opacity-70 transition-opacity">Serviços</a>
                                <a href="#" className="hover:opacity-70 transition-opacity">Sobre</a>
                                <a href="#" className="hover:opacity-70 transition-opacity">Contato</a>
                            </nav>

                            {/* Icons */}
                            <div className="flex gap-4">
                                <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded hover:bg-gray-200 transition-colors">
                                    <Phone className="w-4 h-4 text-gray-600" />
                                </a>
                                <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded hover:bg-gray-200 transition-colors">
                                    <Instagram className="w-4 h-4 text-gray-600" />
                                </a>
                            </div>
                        </div>
                    </div>
                );
            case 'h1':
                return (
                    <div className="flex justify-between items-center py-4 px-6 border-b border-white/10" style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
                        <div className="font-bold text-xl" style={{ color: 'var(--primary)' }}>{content.brand || 'Brand'}</div>
                        <div className="flex gap-4 items-center">
                            <span className="hidden md:inline">Home</span>
                            <span className="hidden md:inline">Serviços</span>
                            <button className="px-4 py-2 rounded-lg text-sm font-medium" style={{ backgroundColor: 'var(--primary)', color: 'white' }}>Contato</button>
                        </div>
                    </div>
                );
            case 'h2':
                return (
                    <div className="flex flex-col md:flex-row justify-between items-center py-6 px-6 border-b border-white/10" style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
                        <div className="hidden md:flex gap-6 text-sm">
                            <span>Início</span>
                            <span>Sobre</span>
                        </div>
                        <div className="font-bold text-2xl my-2 md:my-0" style={{ color: 'var(--primary)' }}>{content.brand || 'Brand'}</div>
                        <div className="flex gap-6 text-sm items-center">
                            <span className="hidden md:inline">Contato</span>
                            <button className="px-4 py-2 rounded-lg text-sm font-medium border" style={{ borderColor: 'var(--primary)', color: 'var(--primary)' }}>WhatsApp</button>
                        </div>
                    </div>
                );
            case 'h3':
                return (
                    <div className="flex justify-between items-center py-4 px-6" style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
                        <div className="font-bold text-lg">{content.brand || 'Brand'}</div>
                        <div className="w-8 h-8 rounded-md glass flex items-center justify-center">
                            <div className="w-5 h-0.5 bg-current relative after:content-[''] after:absolute after:top-1.5 after:left-0 after:w-5 after:h-0.5 after:bg-current before:content-[''] before:absolute before:-top-1.5 before:left-0 before:w-5 before:h-0.5 before:bg-current"></div>
                        </div>
                    </div>
                );
            case 'h4':
                return (
                    <div className="flex justify-between items-center py-4 px-8" style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
                        <div className="font-bold text-xl" style={{ color: 'var(--primary)' }}>{content.brand || 'Brand'}</div>
                        <button className="px-6 py-2 rounded-full font-bold shadow-lg" style={{ backgroundColor: 'var(--primary)', color: 'white' }}>COMEÇAR AGORA</button>
                    </div>
                );
            default: return null;
        }
    };

    const renderHero = () => {
        switch (variationId) {
            case 'ph1':
                return (
                    <div className={resp("max-w-7xl mx-auto px-6 gap-12 items-center font-sans grid", "md:grid-cols-2 py-16")} style={{ paddingTop: isMobile ? '3rem' : '4rem', paddingBottom: isMobile ? '3rem' : '4rem', backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
                        {/* Texto */}
                        <div>
                            <h1 className={resp("font-extrabold mb-6 leading-tight", "text-4xl md:text-5xl")}>
                                {content.title || 'O Slogan\nDa sua empresa'}
                            </h1>
                            <p className="text-lg opacity-70 mb-8 max-w-lg">
                                {content.subtitle || 'O subtítulo da sua empresa com uma breve descrição do que vocês oferecem de melhor.'}
                            </p>
                            <a href="#" className="inline-block px-8 py-3 rounded-full text-sm font-bold shadow-lg transform transition hover:scale-105" style={{ backgroundColor: 'var(--primary)', color: 'white' }}>
                                {content.cta || 'Saiba mais'}
                            </a>
                        </div>

                        {/* Imagem Hero */}
                        <div className={resp("w-full bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400 border border-gray-200 shadow-inner overflow-hidden relative", "h-64 md:h-96")}>
                            {content.image ? (
                                <img src={content.image} alt="Hero" className="w-full h-full object-cover" />
                            ) : (
                                <div className="flex flex-col items-center gap-2">
                                    <Layout className="w-12 h-12 opacity-20" />
                                    <span className="text-sm opacity-50">Imagem do produto</span>
                                </div>
                            )}
                        </div>
                    </div>
                );
            case 'hr1':
                return (
                    <div className="grid md:grid-cols-2 gap-8 items-center py-20 px-8" style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
                        <div className="space-y-6">
                            <h1 className="text-4xl md:text-6xl font-bold leading-tight">{content.title || 'Seu Título Aqui'}</h1>
                            <p className="opacity-80 text-lg">{content.subtitle || 'Uma breve descrição sobre o seu negócio'}</p>
                            <button className="px-8 py-3 rounded-xl font-bold transition-transform hover:scale-105" style={{ backgroundColor: 'var(--primary)', color: 'white' }}>Saiba Mais</button>
                        </div>
                        <div className="aspect-video bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center">
                            <Layout className="w-16 h-16 opacity-20" />
                        </div>
                    </div>
                );
            case 'hr2':
                return (
                    <div className="py-32 px-8 text-center relative overflow-hidden" style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
                        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                        <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest" style={{ backgroundColor: 'var(--primary)', color: 'white' }}>Novidade</span>
                            <h1 className="text-5xl md:text-7xl font-extrabold">{content.title || 'Impacte o Mundo'}</h1>
                            <p className="text-xl opacity-80">{content.subtitle || 'A solução definitiva para o seu problema chegou'}</p>
                            <div className="flex gap-4 justify-center">
                                <button className="px-8 py-3 rounded-full font-bold" style={{ backgroundColor: 'var(--primary)', color: 'white' }}>Começar</button>
                                <button className="px-8 py-3 rounded-full font-bold border" style={{ borderColor: 'var(--primary)', color: 'var(--primary)' }}>Demo</button>
                            </div>
                        </div>
                    </div>
                );
            case 'hr3':
                return (
                    <div className="min-h-[60vh] flex items-center justify-center p-12 bg-cover bg-center relative" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80")', color: 'white' }}>
                        <div className="absolute inset-0 bg-black/70"></div>
                        <div className="relative z-10 text-center space-y-4">
                            <h1 className="text-4xl md:text-6xl font-bold">{content.title || 'Título sobre Imagem'}</h1>
                            <p className="text-lg opacity-90 max-w-2xl mx-auto">{content.subtitle || 'Destaque visual impactante'}</p>
                        </div>
                    </div>
                );
            case 'hr4':
                return (
                    <div className="py-24 px-8 text-center bg-gradient-to-br from-primary/20 via-background to-background" style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text" style={{ '--gradient-primary': `linear-gradient(135deg, var(--primary) 0%, #fff 100%)` } as any}>{content.title || 'Gradiente Elegante'}</h1>
                        <p className="max-w-xl mx-auto opacity-70 mb-8">{content.subtitle || 'Layout focado em clareza e modernidade'}</p>
                        <div className="w-12 h-1 bg-primary mx-auto rounded-full"></div>
                    </div>
                );
            default: return null;
        }
    };

    const renderServices = () => {
        switch (variationId) {
            case 'ph1':
                return (
                    <div className={resp("max-w-7xl mx-auto px-6 font-sans", "py-12")} style={{ paddingTop: isMobile ? '3rem' : '3rem', paddingBottom: isMobile ? '3rem' : '3rem', backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
                        <h2 className="font-semibold text-lg mb-6 text-opacity-80 uppercase tracking-wide">
                            {content.title || 'Serviços em Destaque'}
                        </h2>

                        <div className={resp("grid gap-6", "md:grid-cols-3")}>
                            {[1, 2, 3].map(i => (
                                <div key={i} className="bg-white rounded-lg shadow-sm p-4 border border-gray-100 hover:shadow-md transition-shadow">
                                    <div className="w-full h-40 bg-gray-100 rounded mb-4 overflow-hidden relative flex items-center justify-center text-gray-400">
                                        {content[`card${i}_image`] ? (
                                            <img src={content[`card${i}_image`]} alt={`Produto ${i}`} className="w-full h-full object-cover" />
                                        ) : (
                                            <div className="flex flex-col items-center">
                                                <Zap className="w-8 h-8 opacity-20" />
                                                <span className="text-xs">Imagem</span>
                                            </div>
                                        )}
                                    </div>
                                    <h3 className="font-semibold text-gray-900">{content[`card${i}_title`] || `Produto Exemplar ${i}`}</h3>
                                    <p className="text-sm text-gray-500 mt-1 mb-4 h-10 overflow-hidden">{content[`card${i}_desc`] || `Descrição breve sobre o serviço ou produto ${i} para atrair o cliente.`}</p>
                                    <div className="flex items-center justify-between mt-auto">
                                        <span className="font-semibold text-gray-900">{content[`card${i}_price`] || 'R$ 99,90'}</span>
                                        <a href="#" className="text-white text-xs px-4 py-2 rounded-full font-medium" style={{ backgroundColor: 'var(--primary)' }}>Saiba mais</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 's1':
                return (
                    <div className="py-16 px-8" style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
                        <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: 'var(--primary)' }}>{content.title || 'Nossos Serviços'}</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="p-8 rounded-3xl glass border-white/5 text-center group hover:border-primary/50 transition-all">
                                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl" style={{ backgroundColor: 'var(--primary)', color: 'white' }}>
                                        {i === 1 ? <Target className="w-8 h-8" /> : i === 2 ? <Shield className="w-8 h-8" /> : <Zap className="w-8 h-8" />}
                                    </div>
                                    <h3 className="font-bold text-xl mb-3">Estratégia {i}</h3>
                                    <p className="text-sm opacity-60 leading-relaxed">Soluções inteligentes focadas em resultados reais para seu negócio.</p>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 's2':
                return (
                    <div className="py-20 px-8" style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-4xl font-bold mb-12">{content.title || 'Como Ajudamos'}</h2>
                            <div className="space-y-6">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="flex gap-6 items-start p-6 rounded-2xl hover:bg-white/5 transition-colors">
                                        <div className="text-4xl font-black opacity-20" style={{ color: 'var(--primary)' }}>0{i}</div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-2">Processo Escalável {i}</h3>
                                            <p className="opacity-60">Metodologia exclusiva para transformar sua presença digital.</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            case 's3':
                return (
                    <div className="py-16 px-8" style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="flex items-center gap-6 p-6 glass rounded-2xl">
                                    <div className="w-12 h-12 shrink-0 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--primary)20', color: 'var(--primary)' }}>
                                        <CheckCircle2 />
                                    </div>
                                    <h3 className="font-bold">Diferencial Competitivo {i}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 's4':
                return (
                    <div className="py-16 px-8 text-center" style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
                        <h2 className="text-2xl font-bold mb-12 opacity-50 uppercase tracking-widest">{content.title || 'Serviços'}</h2>
                        <div className="flex flex-wrap justify-center gap-12">
                            {['Design', 'Código', 'Marketing', 'Estratégia'].map(t => (
                                <div key={t} className="flex flex-col items-center gap-4">
                                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--primary)' }}></div>
                                    <span className="font-bold text-xl">{t}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            default: return null;
        }
    };

    const renderAbout = () => {
        switch (variationId) {
            case 'a1':
                return (
                    <div className="grid md:grid-cols-2 gap-12 items-center py-20 px-8" style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
                        <div className="aspect-[4/5] bg-muted rounded-3xl overflow-hidden relative shadow-2xl">
                            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80" alt="About" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl"></div>
                        </div>
                        <div className="space-y-6">
                            <h2 className="text-4xl font-bold">{content.title || 'Nossa História'}</h2>
                            <div className="w-20 h-1.5 rounded-full" style={{ backgroundColor: 'var(--primary)' }}></div>
                            <p className="text-lg opacity-70 leading-relaxed">{content.description || 'Uma jornada de inovação e compromisso com o sucesso dos nossos clientes.'}</p>
                            <div className="flex gap-8">
                                <div>
                                    <div className="text-3xl font-bold" style={{ color: 'var(--primary)' }}>10+</div>
                                    <div className="text-[10px] opacity-50 uppercase font-black tracking-widest">Anos de Mercado</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold" style={{ color: 'var(--primary)' }}>500+</div>
                                    <div className="text-[10px] opacity-50 uppercase font-black tracking-widest">Projetos Entregues</div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'a2':
                return (
                    <div className="grid md:grid-cols-2 gap-12 items-center py-20 px-8" style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
                        <div className="order-2 md:order-1 space-y-6">
                            <h2 className="text-4xl font-bold">{content.title || 'Quem Somos'}</h2>
                            <p className="text-lg opacity-70 leading-relaxed bg-white/5 p-6 rounded-2xl border-l-4" style={{ borderColor: 'var(--primary)' }}>
                                {content.description || 'Focamos em transformar tecnologia em resultados de negócio através de interfaces memoráveis.'}
                            </p>
                            <button className="flex items-center gap-2 font-bold" style={{ color: 'var(--primary)' }}>
                                Conheça nossa cultura <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                        <div className="order-1 md:order-2 aspect-video bg-muted rounded-3xl overflow-hidden shadow-2xl border border-white/5">
                            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" alt="Team" className="w-full h-full object-cover" />
                        </div>
                    </div>
                );
            case 'a3':
                return (
                    <div className="py-24 px-8 text-center" style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
                        <div className="max-w-3xl mx-auto space-y-8">
                            <div className="w-16 h-16 rounded-full glass mx-auto flex items-center justify-center border-primary/20 border">
                                <Target className="w-8 h-8 text-primary" />
                            </div>
                            <h2 className="text-5xl font-black italic uppercase tracking-tighter" style={{ color: 'var(--primary)' }}>{content.title || 'Nossa Missão'}</h2>
                            <p className="text-2xl font-light opacity-80 leading-relaxed italic">
                                "Acreditamos que o design é a alma de cada projeto digital que toca a vida das pessoas."
                            </p>
                            <div className="pt-6 opacity-40 text-sm font-bold tracking-[0.3em] uppercase">R&V Code Lab Since 2024</div>
                        </div>
                    </div>
                );
            case 'a4':
                return (
                    <div className="py-20 px-8 flex flex-col md:flex-row gap-1 border-y border-white/5" style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
                        <div className="flex-1 p-12 glass rounded-l-3xl border-none">
                            <h2 className="text-3xl font-bold mb-4">Inovação</h2>
                            <p className="opacity-60">Sempre na vanguarda das tecnologias mais modernas.</p>
                        </div>
                        <div className="flex-1 p-12 glass rounded-r-3xl border-none" style={{ backgroundColor: 'var(--primary)', color: 'white' }}>
                            <h2 className="text-3xl font-bold mb-4">Resultados</h2>
                            <p className="opacity-90">Compromisso total com o ROI do seu investimento digital.</p>
                        </div>
                    </div>
                );
            default:
                return (
                    <div className="py-20 px-8 text-center" style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
                        <h2 className="text-3xl font-bold mb-6">{content.title || 'Sobre Nós'}</h2>
                        <p className="max-w-2xl mx-auto opacity-70 mb-10">{content.description || 'Expertise técnica combinada com visão estratégica para o seu negócio.'}</p>
                        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 glass">
                            <Star className="w-4 h-4 text-primary fill-primary" />
                            <span className="font-bold text-sm">Empresa Referência no Setor</span>
                        </div>
                    </div>
                );
        }
    };

    const renderActivities = () => {
        switch (variationId) {
            case 'ph1':
                return (
                    <div className={resp("max-w-7xl mx-auto px-6 grid gap-12 font-sans", "py-16 md:grid-cols-2")} style={{ paddingTop: isMobile ? '3rem' : '4rem', paddingBottom: isMobile ? '3rem' : '4rem', backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
                        {/* BENEFÍCIOS */}
                        <div>
                            <h2 className="font-semibold text-lg mb-6 text-opacity-80 uppercase tracking-wide">{content.benefits_title || 'Benefícios'}</h2>

                            <div className="space-y-6">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="flex gap-4 items-start">
                                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center shrink-0">
                                            <CheckCircle2 className="w-5 h-5 text-gray-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-lg">{content[`benefit${i}_title`] || `Benefício Exclusivo ${i}`}</h4>
                                            <p className="text-sm text-gray-500 mt-1">
                                                {content[`benefit${i}_desc`] || 'Uma descrição detalhada sobre este benefício incrível que sua empresa oferece.'}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* COMO FUNCIONA */}
                        <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100">
                            <h2 className="font-semibold text-lg mb-6 text-gray-900">{content.how_title || 'Como funciona'}</h2>

                            <ol className="space-y-6">
                                {[1, 2, 3].map(i => (
                                    <li key={i} className="flex gap-4 items-start">
                                        <span className="font-bold text-gray-300 text-2xl leading-none">0{i}</span>
                                        <p className="text-sm text-gray-600 mt-1.5">
                                            {content[`step${i}_desc`] || `Explicação detalhada da etapa ${i} do processo de funcionamento do seu serviço.`}
                                        </p>
                                    </li>
                                ))}
                            </ol>

                            <a href="#"
                                className="inline-block mt-8 text-white px-8 py-3 rounded-full text-sm font-bold shadow-md hover:opacity-90 transition-opacity"
                                style={{ backgroundColor: 'var(--primary)' }}>
                                Começar agora
                            </a>
                        </div>
                    </div>
                );
            case 'act1':
                return (
                    <div className="py-20 px-8" style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
                        <h2 className="text-3xl font-bold mb-12 text-center">{content.title || 'Atividades'}</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="aspect-square glass rounded-2xl flex flex-col items-center justify-center gap-3 group hover:bg-primary/10 transition-colors border border-white/5">
                                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                                        <Zap className="text-primary w-5 h-5" />
                                    </div>
                                    <span className="text-[10px] font-bold uppercase opacity-60">Atividade {i}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'act2':
                return (
                    <div className="py-16 px-8" style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
                        <div className="max-w-2xl mx-auto glass rounded-3xl p-8 border-white/10">
                            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                                <Target className="text-primary" /> {content.title || 'O que fazemos'}
                            </h2>
                            <div className="space-y-4">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all">
                                        <CheckCircle2 className="w-5 h-5 text-primary" />
                                        <span className="font-medium">Item de atividade específico {i}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            case 'act3':
                return (
                    <div className="py-20 px-8 overflow-hidden" style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
                        <div className="flex gap-6 animate-scroll pointer-events-none opacity-50">
                            {[1, 2, 3, 4, 5, 6].map(i => (
                                <div key={i} className="shrink-0 w-64 h-80 glass rounded-3xl flex items-center justify-center border-white/5">
                                    <Layout className="w-12 h-12" />
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 text-center space-y-4">
                            <h2 className="text-3xl font-bold">{content.title || 'Portfólio em Foco'}</h2>
                            <button className="px-6 py-2 rounded-full border border-primary text-primary font-bold text-sm">Ver Mais Atividades</button>
                        </div>
                    </div>
                );
            case 'act4':
                return (
                    <div className="py-20 px-8" style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
                        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-center">
                            <div className="flex-1 text-center md:text-left space-y-6">
                                <h2 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 leading-none">01</h2>
                                <h3 className="text-3xl font-bold uppercase">{content.title || 'Atividade em Grande Estilo'}</h3>
                                <p className="opacity-60 text-lg">Um mergulho profundo no que fazemos de melhor.</p>
                            </div>
                            <div className="flex-1 w-full aspect-square bg-primary/20 rounded-[4rem] flex items-center justify-center p-12">
                                <div className="w-full h-full glass rounded-[3rem] border-primary/20 flex flex-col items-center justify-center text-center p-6">
                                    <Shield className="w-16 h-16 text-primary mb-4" />
                                    <p className="font-bold">Segurança e Qualidade em cada detalhe.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            default: return null;
        }
    };

    const renderInfo = () => {
        switch (variationId) {
            case 'ph1':
                return (
                    <div className={resp("max-w-7xl mx-auto px-6 font-sans", "py-16")} style={{ paddingTop: isMobile ? '3rem' : '4rem', paddingBottom: isMobile ? '3rem' : '4rem', backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
                        <h2 className="font-semibold text-lg mb-10 text-opacity-80 uppercase tracking-wide">{content.title || 'Informações Adicionais'}</h2>
                        <section className={resp("grid gap-8 text-center", "md:grid-cols-3")}>
                            {[1, 2, 3].map(i => (
                                <div key={i} className="p-4">
                                    <div className="w-12 h-12 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                                        {i === 1 ? <Target className="w-5 h-5 text-gray-500" /> : i === 2 ? <Shield className="w-5 h-5 text-gray-500" /> : <Zap className="w-5 h-5 text-gray-500" />}
                                    </div>
                                    <h4 className="font-bold text-lg mb-2">{content[`info${i}_title`] || `Diferencial ${i}`}</h4>
                                    <p className="text-sm text-gray-500 leading-relaxed">
                                        {content[`info${i}_desc`] || `Descrição breve sobre o diferencial ${i} e como ele impacta positivamente.`}
                                    </p>
                                </div>
                            ))}
                        </section>
                    </div>
                );
            case 'i1':
                return (
                    <div className="py-20 px-8" style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
                        <div className="max-w-3xl mx-auto space-y-4">
                            <h2 className="text-3xl font-bold mb-10 text-center">{content.title || 'Perguntas Frequentes'}</h2>
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="p-6 glass rounded-2xl border border-white/5 flex justify-between items-center group cursor-pointer hover:border-primary/30 transition-all shadow-sm">
                                    <div className="font-bold text-sm md:text-base">Dúvida comum sobre o serviço {i}?</div>
                                    <Plus className="w-4 h-4 text-primary group-hover:rotate-90 transition-transform" />
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'i2':
                return (
                    <div className="py-20 px-8" style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
                        <div className="grid md:grid-cols-3 gap-1">
                            {[1, 2, 3].map(i => (
                                <div key={i} className={`p-10 ${i === 2 ? 'bg-primary text-white scale-105 rounded-3xl z-10 shadow-2xl' : 'glass opacity-60'}`}>
                                    <h3 className="text-xl font-bold mb-4">Informação {i}</h3>
                                    <p className="text-sm opacity-80 mb-6">Conteúdo detalhado sobre este ponto específico informativo.</p>
                                    <ul className="space-y-2">
                                        <li className="flex items-center gap-2 text-[10px] font-bold"><CheckCircle2 className="w-3 h-3" /> VANTAGEM A</li>
                                        <li className="flex items-center gap-2 text-[10px] font-bold"><CheckCircle2 className="w-3 h-3" /> VANTAGEM B</li>
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'i3':
                return (
                    <div className="py-20 px-8" style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
                        <h2 className="text-2xl font-black uppercase text-center mb-16 tracking-[0.5em] opacity-20">{content.title || 'Detalhes'}</h2>
                        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="flex gap-4">
                                    <div className="w-1.5 h-full rounded-full" style={{ backgroundColor: 'var(--primary)' }}></div>
                                    <div>
                                        <h4 className="font-bold mb-1">Diferencial Estruturado {i}</h4>
                                        <p className="text-sm opacity-60 leading-relaxed">Explicando por que este ponto é crucial para o seu sucesso a longo prazo.</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'i4':
                return (
                    <div className="py-16 px-8" style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
                        <div className="flex flex-wrap gap-8 justify-center">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="flex items-center gap-4">
                                    <div className="p-3 rounded-full border border-primary/20">
                                        <Star className="text-primary w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold">Resumo {i}</div>
                                        <div className="text-xs opacity-50">Texto bem curto aqui.</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            default: return null;
        }
    };

    const renderFooter = () => {
        switch (variationId) {
            case 'ph1':
                return (
                    <footer className={resp("bg-gray-900 text-gray-300 px-6 font-sans", "py-12")} style={{ paddingTop: isMobile ? '3rem' : '3rem', paddingBottom: isMobile ? '3rem' : '3rem' }}>
                        <div className={resp("max-w-7xl mx-auto grid gap-8 text-sm", "md:grid-cols-4")}>
                            {/* Coluna 1: Logo e Slogan */}
                            <div>
                                <h3 className="font-semibold text-white mb-2 text-lg">{content.brand || 'Logo'}</h3>
                                <p className="opacity-80">{content.slogan || 'Seu slogan ou subtítulo da empresa aqui.'}</p>
                            </div>

                            {/* Coluna 2: Menu */}
                            <div>
                                <h4 className="font-semibold text-white mb-3">Menu</h4>
                                <ul className="space-y-2">
                                    <li><a href="#" className="hover:text-white transition-colors">Início</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Serviços</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Sobre</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Benefícios</a></li>
                                </ul>
                            </div>

                            {/* Coluna 3: Contato */}
                            <div>
                                <h4 className="font-semibold text-white mb-3">Contato</h4>
                                <ul className="space-y-2">
                                    <li><a href="#" className="hover:text-white transition-colors">WhatsApp</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Email</a></li>
                                </ul>
                            </div>

                            {/* Coluna 4: Social */}
                            <div>
                                <h4 className="font-semibold text-white mb-3">Siga-nos</h4>
                                <div className="flex gap-3">
                                    <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded hover:bg-gray-700 transition-colors">
                                        <Instagram className="w-4 h-4 text-gray-400" />
                                    </a>
                                    <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded hover:bg-gray-700 transition-colors">
                                        <Facebook className="w-4 h-4 text-gray-400" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="text-center text-xs text-gray-600 border-t border-gray-800 mt-12 pt-6">
                            {content.copyright || '© Direitos de criação: R&Vcodelab'}
                        </div>
                    </footer>
                );
            case 'f1':
                return (
                    <div className="py-12 px-8 border-t border-white/10" style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
                        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                            <div className="font-bold text-xl">{content.brand || 'Brand'}</div>
                            <div className="text-xs opacity-40">{content.copyright || '© 2024 Todos os direitos reservados'}</div>
                        </div>
                    </div>
                );
            case 'f2':
                return (
                    <div className="py-12 px-8 border-t border-white/10 text-center" style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
                        <div className="font-bold text-2xl mb-6" style={{ color: 'var(--primary)' }}>{content.brand || 'Brand'}</div>
                        <div className="flex justify-center gap-6 mb-8">
                            <Instagram className="w-5 h-5 hover:text-primary cursor-pointer" />
                            <Facebook className="w-5 h-5 hover:text-primary cursor-pointer" />
                            <Linkedin className="w-5 h-5 hover:text-primary cursor-pointer" />
                            <Mail className="w-5 h-5 hover:text-primary cursor-pointer" />
                        </div>
                        <p className="text-[10px] opacity-30 font-bold tracking-widest uppercase italic font-mono">Crafted with ❤️ by R&V Code Lab</p>
                    </div>
                );
            case 'f3':
                return (
                    <div className="py-16 px-8 border-t border-white/10" style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
                        <div className="grid md:grid-cols-4 gap-12 mb-12">
                            <div className="space-y-4 col-span-1 md:col-span-2">
                                <div className="font-bold text-2xl">{content.brand || 'Brand'}</div>
                                <p className="text-sm opacity-50 max-w-xs">Oferecemos as melhores soluções do mercado com foco em excelência e inovação constante.</p>
                            </div>
                            <div className="space-y-4">
                                <h5 className="font-bold text-sm underline decoration-primary underline-offset-8">Links</h5>
                                <ul className="text-xs space-y-2 opacity-60">
                                    <li>Sobre Nós</li>
                                    <li>Serviços</li>
                                    <li>Contato</li>
                                </ul>
                            </div>
                            <div className="space-y-4">
                                <h5 className="font-bold text-sm underline decoration-primary underline-offset-8">Social</h5>
                                <ul className="text-xs space-y-2 opacity-60">
                                    <li>Instagram</li>
                                    <li>LinkedIn</li>
                                    <li>WhatsApp</li>
                                </ul>
                            </div>
                        </div>
                        <div className="pt-8 border-t border-white/5 flex justify-between text-[10px] opacity-30 font-bold uppercase">
                            <span>{content.copyright || '© 2024'}</span>
                            <span>Termos de Uso</span>
                        </div>
                    </div>
                );
            case 'f4':
                return (
                    <div className="py-16 px-8 border-t border-white/10" style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
                        <div className="flex flex-col md:flex-row gap-12">
                            <div className="flex-1 space-y-8">
                                <h4 className="text-4xl font-bold leading-none italic">{content.brand || 'Brand'}</h4>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-sm"><MapPin className="w-4 h-4 text-primary" /> São Paulo, Brasil</div>
                                    <div className="flex items-center gap-3 text-sm"><Phone className="w-4 h-4 text-primary" /> (11) 99999-9999</div>
                                    <div className="flex items-center gap-3 text-sm"><Mail className="w-4 h-4 text-primary" /> oi@rvcodelab.com.br</div>
                                </div>
                            </div>
                            <div className="flex-1 glass p-8 rounded-3xl border-none">
                                <h5 className="font-bold mb-4 uppercase tracking-widest text-xs opacity-50">Assine a News</h5>
                                <div className="flex gap-2">
                                    {/* Assuming Input and Button components are defined elsewhere or globally available */}
                                    <input placeholder="Seu e-mail" className="h-10 bg-white/5 border-white/10 text-xs p-2 rounded-xl flex-grow" />
                                    <button className="h-10 px-4 rounded-xl" style={{ backgroundColor: 'var(--primary)', color: 'white' }}><ArrowRight className="w-4 h-4" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            default: return null;
        }
    };

    const renderSection = () => {
        // Simplified rendering for brevity, can expand with more cases
        switch (type) {
            case 'header': return renderHeader();
            case 'hero': return renderHero();
            case 'services': return renderServices();
            case 'about': return renderAbout();
            case 'activities': return renderActivities();
            case 'info': return renderInfo();
            case 'footer': return renderFooter();
            default:
                return (
                    <div className="py-12 px-8 border-b border-white/5 opacity-50" style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
                        <div className="text-center">
                            <h2 className="text-2xl font-bold mb-2">{content.title || `Seção ${type}`}</h2>
                            <p className="text-sm italic">Layout "{variationId}" selecionado</p>
                        </div>
                    </div>
                );
        }
    }

    return (
        <section className={getFontClass()} style={style}>
            {renderSection()}
        </section>
    );
};
