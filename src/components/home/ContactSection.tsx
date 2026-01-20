import { useState } from 'react';
import { Send, MessageCircle, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useTranslation } from 'react-i18next';

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { t } = useTranslation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formsubmit.co/ajax/codelabvr@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...data,
          _subject: "Novo contato via Portfólio r&v code lab",
          _template: "table"
        }),
      });

      if (response.ok) {
        toast({
          title: t('contact.form_success_title', { defaultValue: 'Mensagem enviada!' }),
          description: t('contact.form_success_desc', { defaultValue: 'Entraremos em contato em breve.' }),
        });
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error();
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro ao enviar",
        description: "Desculpe, algo deu errado. Tente novamente mais tarde ou use o WhatsApp.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-standard bg-gradient-to-b from-background to-card/30">
      <div className="section-container">
        <div className="text-center mb-12 animate-slide-up">
          <span className="inline-block px-4 py-2 rounded-full glass text-xs font-semibold uppercase tracking-wider text-primary mb-4">
            {t('contact.badge')}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
            {t('contact.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('contact.description')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="glass rounded-2xl p-8 border-white/5 shadow-xl animate-slide-up"
            style={{ animationDelay: '0.1s' }}
          >
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t('contact.form_name')}
                </label>
                <Input
                  name="name"
                  required
                  placeholder={t('contact.form_name_placeholder')}
                  className="bg-background/50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t('contact.form_email')}
                </label>
                <Input
                  name="email"
                  type="email"
                  required
                  placeholder={t('contact.form_email_placeholder')}
                  className="bg-background/50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t('contact.form_message')}
                </label>
                <Textarea
                  name="message"
                  required
                  rows={5}
                  placeholder={t('contact.form_message_placeholder')}
                  className="bg-background/50 resize-none"
                />
              </div>

              <div className="flex gap-4">
                <Button type="submit" className="flex-1 gap-2" disabled={isSubmitting}>
                  {isSubmitting ? t('contact.form_submitting') : t('contact.form_submit')}
                  <Send className="w-4 h-4" />
                </Button>
                <a
                  href="https://wa.me/553198636799"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button type="button" variant="outline" className="gap-2">
                    <MessageCircle className="w-4 h-4" />
                    {t('contact.info_whatsapp_label')}
                  </Button>
                </a>
              </div>
            </div>
          </form>

          {/* Info */}
          <div
            className="glass rounded-2xl p-8 border-white/5 shadow-xl animate-slide-up"
            style={{ animationDelay: '0.2s' }}
          >
            <h3 className="font-semibold text-xl text-foreground mb-6">
              {t('contact.info_title')}
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">{t('contact.info_email_label')}</h4>
                  <a
                    href="mailto:codelabvr@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    codelabvr@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">{t('contact.info_whatsapp_label')}</h4>
                  <a
                    href="https://wa.me/553198636799"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {t('contact.info_whatsapp_desc')}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">{t('contact.info_location_label')}</h4>
                  <p className="text-muted-foreground">
                    {t('contact.info_location_desc')}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <h4 className="font-medium text-foreground mb-4">{t('contact.info_hours_label')}</h4>
              <p className="text-muted-foreground text-sm whitespace-pre-line">
                {t('contact.info_hours_body')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
