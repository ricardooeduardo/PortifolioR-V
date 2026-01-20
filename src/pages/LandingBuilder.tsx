import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Plus,
  Trash2,
  Settings,
  Eye,
  Download,
  ChevronRight,
  Layout,
  User,
  Zap,
  ChevronUp,
  ChevronDown,
  Monitor,
  Smartphone,
  Send,
  Check
} from 'lucide-react';
import { ParticleBackground } from '@/components/ui/ParticleBackground';
import { Header } from '@/components/layout/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { useTranslation } from 'react-i18next';

import { BUILDER_SECTIONS, SectionType, BUILDER_FONTS, BUILDER_COLORS } from '@/components/builder/constants';
import { GlobalStyleEditor } from '@/components/builder/GlobalStyleEditor';
import { LayoutPicker } from '@/components/builder/LayoutPicker';
import { TemplateRenderer } from '@/components/builder/TemplateRenderer';

interface BuilderSection {
  uuid: string;
  type: SectionType;
  variationId: string;
  content: Record<string, string>;
}

interface UserData {
  name: string;
  email: string;
  phone: string;
}

const LandingBuilder = () => {
  const { toast } = useToast();
  const { t } = useTranslation();

  // States
  const [currentStep, setCurrentStep] = useState<'data' | 'build' | 'preview'>('data');
  const [userData, setUserData] = useState<UserData>({ name: '', email: '', phone: '' });
  const [activeTab, setActiveTab] = useState<'sections' | 'style' | 'content'>('sections');

  const [sections, setSections] = useState<BuilderSection[]>([
    { uuid: '1', type: 'header', variationId: 'h1', content: { brand: 'Minha Empresa' } },
    { uuid: '2', type: 'hero', variationId: 'hr1', content: { title: 'Destaque Seu Negócio', subtitle: 'Ajudamos sua empresa a crescer' } },
    { uuid: '3', type: 'services', variationId: 's1', content: { title: 'Nossos Serviços' } },
    { uuid: '4', type: 'footer', variationId: 'f1', content: { brand: 'Minha Empresa', copyright: '© 2024' } },
  ]);

  const [globalConfig, setGlobalConfig] = useState({
    primaryColor: '#00D77A',
    bgColor: '#0b0f13',
    textColor: '#e6eef6',
    fontFamily: 'font-inter'
  });

  const [activeSectionUuid, setActiveSectionUuid] = useState<string | null>(sections[0].uuid);
  const [viewportMode, setViewportMode] = useState<'desktop' | 'mobile'>('desktop');

  const [showExportModal, setShowExportModal] = useState(false);
  const [isExporting, setIsExporting] = useState(false);

  // Logic
  const addSection = (type: SectionType) => {
    const variations = BUILDER_SECTIONS[type] || [];
    const defaultVar = variations.length > 0 ? variations[0].id : '';
    const newSection: BuilderSection = {
      uuid: Math.random().toString(36).substr(2, 9),
      type,
      variationId: defaultVar,
      content: { title: `Minha Seção de ${type}` }
    };
    setSections([...sections, newSection]);
    setActiveSectionUuid(newSection.uuid);
  };

  const removeSection = (uuid: string) => {
    setSections(sections.filter(s => s.uuid !== uuid));
    if (activeSectionUuid === uuid) setActiveSectionUuid(null);
  };

  const moveSection = (index: number, direction: 'up' | 'down') => {
    const newSections = [...sections];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= newSections.length) return;

    [newSections[index], newSections[targetIndex]] = [newSections[targetIndex], newSections[index]];
    setSections(newSections);
  };

  const updateSection = (uuid: string, updates: Partial<BuilderSection>) => {
    setSections(sections.map(s => s.uuid === uuid ? { ...s, ...updates } : s));
  };

  const handleExport = async () => {
    setIsExporting(true);

    // Prepare data for FormSubmit
    const payload = {
      _subject: `📦 Nova Exportação: ${userData.name}`,
      _template: 'table',
      _captcha: 'false',
      usuario_nome: userData.name,
      usuario_email: userData.email,
      usuario_whatsapp: userData.phone,
      config_global: JSON.stringify(globalConfig, null, 2),
      secoes: sections.map((s, i) => `${i + 1}. ${s.type} (Var: ${s.variationId}) - Content: ${JSON.stringify(s.content)}`).join('\n'),
      raw_data: JSON.stringify({ userData, globalConfig, sections }, null, 2)
    };

    try {
      const response = await fetch("https://formsubmit.co/ajax/codelabvr@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        toast({
          title: "Projeto Exportado!",
          description: "Sua configuração foi enviada para codelabvr@gmail.com com sucesso."
        });
        setShowExportModal(false);
      } else {
        throw new Error("Falha no envio");
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro ao exportar",
        description: "Não foi possível enviar sua configuração. Tente novamente."
      });
    } finally {
      setIsExporting(false);
    }
  };
  const activeSection = sections.find(s => s.uuid === activeSectionUuid);

  if (currentStep === 'data') {
    return (
      <div className="min-h-screen">
        <ParticleBackground />
        <Header />
        <main className="pt-28 pb-24">
          <div className="section-container max-w-2xl">
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              {t('common.back')}
            </Link>

            <div className="glass rounded-3xl p-10 animate-slide-up shadow-2xl border-white/5">
              <div className="text-center mb-10">
                <div className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-primary/20 flex items-center justify-center float">
                  <User className="w-10 h-10 text-primary" />
                </div>
                <h1 className="text-4xl font-bold text-foreground mb-3 tracking-tight">
                  Vamos começar!
                </h1>
                <p className="text-muted-foreground text-lg">
                  Preencha seus dados para habilitar o editor visual.
                </p>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-muted-foreground ml-1">Seu Nome</label>
                  <Input
                    value={userData.name}
                    onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                    placeholder="Ex: João Silva"
                    className="bg-background/50 h-12 rounded-xl focus:ring-primary/50"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-muted-foreground ml-1">E-mail Profissional</label>
                  <Input
                    type="email"
                    value={userData.email}
                    onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                    placeholder="email@exemplo.com"
                    className="bg-background/50 h-12 rounded-xl focus:ring-primary/50"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-muted-foreground ml-1">WhatsApp</label>
                  <Input
                    type="tel"
                    value={userData.phone}
                    onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
                    placeholder="(00) 00000-0000"
                    className="bg-background/50 h-12 rounded-xl focus:ring-primary/50"
                  />
                </div>

                <Button
                  className="w-full gap-2 h-14 text-lg rounded-2xl shadow-xl shadow-primary/20 mt-4"
                  onClick={() => setCurrentStep('build')}
                  disabled={!userData.name || !userData.email || !userData.phone}
                >
                  Continuar para o Editor
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-background">
      {/* Builder Header */}
      <header className="h-16 glass-strong border-b border-white/5 flex items-center shrink-0 z-50">
        <div className="w-full px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center font-bold text-primary-foreground">R&V</Link>
            <div className="h-4 w-px bg-white/10 hidden sm:block"></div>
            <div>
              <h1 className="text-sm font-bold text-foreground">Editor de Landing Page</h1>
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">{userData.name}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-muted/30 p-1 rounded-xl">
            <button
              onClick={() => setViewportMode('desktop')}
              className={`p-1.5 rounded-lg transition ${viewportMode === 'desktop' ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:bg-white/5'}`}
            >
              <Monitor className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewportMode('mobile')}
              className={`p-1.5 rounded-lg transition ${viewportMode === 'mobile' ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:bg-white/5'}`}
            >
              <Smartphone className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={() => setCurrentStep('data')} className="text-xs">Sair</Button>
            <Button size="sm" onClick={() => setShowExportModal(true)} className="gap-2 rounded-xl">
              <Download className="w-4 h-4" />
              Exportar
            </Button>
          </div>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar - Navigation/Add */}
        <aside className="w-72 glass-strong border-r border-white/5 flex flex-col shrink-0 overflow-hidden">
          {/* Tabs */}
          <div className="flex p-2 border-b border-white/5">
            {[{ id: 'sections', icon: Layout, label: 'Seções' }, { id: 'style', icon: Settings, label: 'Estilo' }].map(tTab => {
              const Icon = tTab.icon;
              return (
                <button
                  key={tTab.id}
                  onClick={() => setActiveTab(tTab.id as any)}
                  className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-bold transition-all ${activeTab === tTab.id ? 'bg-primary/20 text-primary border border-primary/20' : 'text-muted-foreground hover:bg-white/5'}`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {tTab.label}
                </button>
              );
            })}
          </div>

          <div className="flex-1 overflow-y-auto custom-scrollbar">
            {activeTab === 'sections' && (
              <div className="p-4 space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-muted-foreground px-1">Ativas</label>
                  {sections.map((s, idx) => (
                    <div
                      key={s.uuid}
                      onClick={() => setActiveSectionUuid(s.uuid)}
                      className={`group p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${activeSectionUuid === s.uuid ? 'bg-primary/10 border-primary' : 'glass border-transparent hover:border-white/10'
                        }`}
                    >
                      <span className="text-sm font-medium">{s.type === 'about' ? 'Quem Somos' : s.type}</span>
                      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button onClick={(e) => { e.stopPropagation(); moveSection(idx, 'up') }} className="p-1 rounded hover:bg-white/10"><ChevronUp className="w-3 h-3" /></button>
                        <button onClick={(e) => { e.stopPropagation(); moveSection(idx, 'down') }} className="p-1 rounded hover:bg-white/10"><ChevronDown className="w-3 h-3" /></button>
                        <button onClick={(e) => { e.stopPropagation(); removeSection(s.uuid) }} className="p-1 rounded hover:bg-destructive/20 text-destructive"><Trash2 className="w-3 h-3" /></button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-4 pt-6 border-t border-white/5 text-center">
                  <label className="text-[10px] uppercase font-bold text-muted-foreground">Nova Seção</label>
                  <div className="grid grid-cols-2 gap-2">
                    {(['header', 'hero', 'services', 'about', 'activities', 'info', 'footer'] as SectionType[]).map(st => (
                      <button
                        key={st}
                        onClick={() => addSection(st)}
                        className="flex flex-col items-center gap-2 p-3 glass rounded-xl hover:bg-primary/20 border border-transparent hover:border-primary/30 transition-all"
                      >
                        <Plus className="w-4 h-4 text-primary" />
                        <span className="text-[10px] font-bold capitalize">{st === 'about' ? 'Quem Somos' : st}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'style' && (
              <GlobalStyleEditor
                currentFont={globalConfig.fontFamily}
                onFontChange={(font) => setGlobalConfig({ ...globalConfig, fontFamily: font })}
                currentColors={{ primary: globalConfig.primaryColor, bg: globalConfig.bgColor, text: globalConfig.textColor }}
                onColorChange={(colors) => setGlobalConfig({ ...globalConfig, primaryColor: colors.primary, bgColor: colors.bg, textColor: colors.text })}
              />
            )}
          </div>
        </aside>

        {/* Center - Preview Canvas */}
        <main className="flex-1 bg-muted/20 p-8 overflow-y-auto flex justify-center items-start">
          <div
            className={`bg-background shadow-2xl transition-all duration-500 origin-top overflow-hidden rounded-md border border-white/5 ${viewportMode === 'mobile' ? 'w-[375px] min-h-[667px]' : 'w-full max-w-5xl min-h-screen'
              }`}
          >
            {/* Browser-like Toolbar */}
            <div className="bg-muted h-7 flex items-center px-4 gap-1.5 shrink-0">
              <div className="w-2 h-2 rounded-full bg-white/10"></div>
              <div className="w-2 h-2 rounded-full bg-white/10"></div>
              <div className="w-2 h-2 rounded-full bg-white/10"></div>
            </div>

            {/* Rendered Sections */}
            <div className="flex flex-col">
              {sections.map((s) => (
                <div
                  key={s.uuid}
                  onClick={() => setActiveSectionUuid(s.uuid)}
                  className={`relative cursor-pointer transition-all border-2 border-transparent ${activeSectionUuid === s.uuid ? 'ring-2 ring-primary ring-inset border-primary/50' : 'hover:border-primary/20'
                    }`}
                >
                  <TemplateRenderer
                    type={s.type}
                    variationId={s.variationId}
                    config={globalConfig}
                    content={s.content}
                  />
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* Right Sidebar - Active Section Content/Layout */}
        <aside className="w-80 glass-strong border-l border-white/5 flex flex-col shrink-0">
          {activeSection ? (
            <div className="flex flex-col h-full">
              <div className="p-4 border-b border-white/5">
                <h2 className="text-sm font-bold flex items-center gap-2">
                  <Settings className="w-4 h-4 text-primary" />
                  Editando: {activeSection.type === 'about' ? 'Quem Somos' : activeSection.type}
                </h2>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-8 custom-scrollbar">
                {/* Layout Variation Picker */}
                <LayoutPicker
                  sectionType={activeSection.type}
                  currentVariationId={activeSection.variationId}
                  onVariationChange={(id) => updateSection(activeSection.uuid, { variationId: id })}
                />

                {/* Content Inputs */}
                <div className="space-y-4 pt-6 border-t border-white/5">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Conteúdo</h3>
                  {activeSection.type === 'hero' && (
                    <div className="space-y-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-medium ml-1">Título</label>
                        <Input
                          value={activeSection.content.title || ''}
                          onChange={(e) => updateSection(activeSection.uuid, { content: { ...activeSection.content, title: e.target.value } })}
                          className="bg-background/30 text-xs"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-medium ml-1">Subtítulo</label>
                        <Input
                          value={activeSection.content.subtitle || ''}
                          onChange={(e) => updateSection(activeSection.uuid, { content: { ...activeSection.content, subtitle: e.target.value } })}
                          className="bg-background/30 text-xs"
                        />
                      </div>
                    </div>
                  )}
                  {activeSection.type === 'header' && (
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium ml-1">Nome da Marca</label>
                      <Input
                        value={activeSection.content.brand || ''}
                        onChange={(e) => updateSection(activeSection.uuid, { content: { ...activeSection.content, brand: e.target.value } })}
                        className="bg-background/30 text-xs"
                      />
                    </div>
                  )}
                  {/* General Title Fallback */}
                  {!['hero', 'header'].includes(activeSection.type) && (
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium ml-1">Título</label>
                      <Input
                        value={activeSection.content.title || ''}
                        onChange={(e) => updateSection(activeSection.uuid, { content: { ...activeSection.content, title: e.target.value } })}
                        className="bg-background/30 text-xs"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full p-8 text-center text-muted-foreground opacity-30">
              <Zap className="w-12 h-12 mb-4" />
              <p className="text-sm font-medium">Selecione uma seção no preview para editar</p>
            </div>
          )}
        </aside>
      </div>

      {/* Export Modal */}
      <Dialog open={showExportModal} onOpenChange={setShowExportModal}>
        <DialogContent className="glass-strong border-white/10 rounded-3xl">
          <DialogHeader>
            <DialogTitle>Tudo Pronto!</DialogTitle>
            <DialogDescription>
              Enviaremos sua configuração para nossa equipe começar a desenvolver sua Landing Page agora mesmo.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-2">
              <h4 className="text-xs font-bold uppercase text-primary">Seus Dados</h4>
              <p className="text-sm">{userData.name}</p>
              <p className="text-xs text-muted-foreground">{userData.email} | {userData.phone}</p>
            </div>

            <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-between">
              <div>
                <h4 className="text-xs font-bold uppercase text-primary">Configuração</h4>
                <p className="text-sm">{sections.length} seções configuradas</p>
              </div>
              <Check className="text-primary w-6 h-6" />
            </div>
          </div>

          <div className="flex gap-3">
            <Button variant="ghost" className="flex-1" onClick={() => setShowExportModal(false)}>Voltar</Button>
            <Button
              className="flex-1 shadow-xl shadow-primary/20"
              onClick={handleExport}
              disabled={isExporting}
            >
              {isExporting ? "Transmitindo..." : "Confirmar e Exportar"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LandingBuilder;
