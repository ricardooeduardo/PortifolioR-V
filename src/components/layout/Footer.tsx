import { Link } from 'react-router-dom';
import { MessageCircle, Send, Instagram, Mail, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-primary">
                <span className="font-bold text-primary-foreground text-sm">R&V</span>
              </div>
              <div>
                <div className="font-semibold text-foreground">R&V CODE LAB</div>
                <div className="text-xs text-muted-foreground">Soluções Web & Desenvolvimento</div>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm max-w-md">
              Transformamos ideias em aplicações seguras, rápidas e escaláveis.
              Websites, sistemas e integrações personalizadas para o seu negócio.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Links Úteis</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/#portfolio" className="hover:text-primary transition-colors">Portfólio</Link></li>
              <li><Link to="/#services" className="hover:text-primary transition-colors">Serviços</Link></li>
              <li><Link to="/#about" className="hover:text-primary transition-colors">Sobre Nós</Link></li>
              <li><Link to="/#contact" className="hover:text-primary transition-colors">Contato</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contato</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:codelabvr@gmail.com" className="hover:text-primary transition-colors">
                  codelabvr@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-primary" />
                <a href="https://wa.me/553198636799" className="hover:text-primary transition-colors">
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-primary" />
                <a href="https://www.instagram.com/rvcodelab/" className="hover:text-primary transition-colors">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} <strong>R&V CODE LAB</strong> — Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/553198636799"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors text-sm"
            >
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/rvcodelab/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
