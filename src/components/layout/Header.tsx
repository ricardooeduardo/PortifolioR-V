import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeSwitcher } from './ThemeSwitcher';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Sobre', href: '/#about' },
  { label: 'Serviços', href: '/#services' },
  { label: 'Portfólio', href: '/#portfolio' },
  { label: 'Contato', href: '/#contact' },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  const navItems = [
    { label: t('header.home'), href: '/' },
    { label: t('header.about'), href: '/sobre' },
    { label: t('header.services'), href: '/#services' },
    { label: t('header.portfolio'), href: '/#portfolio' },
    { label: t('header.contact'), href: '/#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href.startsWith('/#')) {
      const id = href.replace('/#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 glass-strong">
      <div className="section-container py-4 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-primary shadow-lg group-hover:shadow-[0_0_20px_hsl(152_100%_42%/0.4)] transition-shadow duration-300">
            <span className="font-bold text-primary-foreground text-sm">R&V</span>
          </div>
          <div className="leading-tight">
            <div className="font-semibold text-foreground">R&V CODE LAB</div>
            <div className="text-xs text-muted-foreground">Soluções Web & Desenvolvimento</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Navegação principal">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => handleNavClick(item.href)}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>

          <a
            href="https://wa.me/553198636799"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex"
          >
            <Button variant="default" size="sm" className="gap-2">
              <MessageCircle className="w-4 h-4" />
              {t('header.whatsapp')}
            </Button>
          </a>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded-lg glass"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-strong border-t border-border animate-fade-in">
          <div className="section-container py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => handleNavClick(item.href)}
                className="py-3 px-4 rounded-lg hover:bg-muted transition-colors text-foreground"
              >
                {item.label}
              </Link>
            ))}

            <div className="flex items-center justify-between px-4 py-3 border-t border-border mt-2">
              <span className="text-sm text-muted-foreground">Preferências</span>
              <div className="flex gap-2">
                <LanguageSwitcher />
                <ThemeSwitcher />
              </div>
            </div>

            <a
              href="https://wa.me/553198636799"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2"
            >
              <Button variant="default" className="w-full gap-2">
                <MessageCircle className="w-4 h-4" />
                {t('header.whatsapp')}
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
