import { useState, useMemo, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Search, Filter, ArrowLeft, ExternalLink, Play, Image as ImageIcon } from 'lucide-react';
import { ParticleBackground } from '@/components/ui/ParticleBackground';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type ProjectType = 'site' | 'landing' | 'system' | 'photo' | 'video' | 'branding';

interface Project {
  id: string;
  title: string;
  description: string;
  type: ProjectType | ProjectType[];
  category: 'development' | 'design' | 'platforms';
  image: string;
  tags: string[];
  link?: string;
}

const projects: Project[] = [
  // Development
  {
    id: '1',
    title: 'Prime Gr??fica',
    description: 'Site com painel de adm, listagem de produtos e direcionamento',
    type: 'site',
    category: 'development',
    image: '/img/grafica.png',
    tags: ['Tailwind CSS', 'HTML', 'PHP', 'JavaScript']
  },
  {
    id: '2',
    title: 'Setembro Magro',
    description: 'Landing page voltada para convers??o com relat??rio de insights',
    type: 'landing',
    category: 'development',
    image: '/img/setembro.png',
    tags: ['Tailwind', 'React', 'JavaScript']
  },
  {
    id: '3',
    title: 'Supermaxi',
    description: 'Site informativo com possibilidade para crescimento em e-commerce online',
    type: 'site',
    category: 'development',
    image: '/img/supermaxi.png',
    tags: ['Tailwind CSS', 'HTML', 'PHP', 'JavaScript']
  },
  {
    id: '5',
    title: 'Next Cursos',
    description: 'Plataforma de cursos com: Integra????o de API, Sistema de login, Relat??rios, Controle de assinaturas',
    type: 'site',
    category: 'development',
    image: '/img/curso.png',
    tags: ['Next.js', 'Tailwind', 'React', 'HTML', 'PHP', 'JavaScript']
  },

  // Platforms
  {
    id: '6',
    title: 'CityTour',
    description: 'Plataforma de viagem e turismo com: API, Integra????o com banco de dados, Gerenciamento de cadastro, Pagamentos, Planos, Clube de vantagens',
    type: 'system',
    category: 'platforms',
    image: '/img/city.png',
    tags: ['TypeScript', 'JavaScript', 'HTML', 'Tailwind', 'JSON', 'Vite']
  },
  {
    id: '7',
    title: 'Barbearia Ebenezer',
    description: 'Sistema para agendamento de hor??rios com: Pagamento, Integra????o com Google Agenda, Notifica????es, API, Gerenciador de clientes, Sistema de fidelidade, Planos mensais',
    type: 'system',
    category: 'platforms',
    image: '/img/barba.jpeg',
    tags: ['System', 'API', 'Google Agenda']
  },
  {
    id: '8',
    title: 'Projeto Coach',
    description: 'Site + sistema de gest??o de alunos com: Planos mensais, Pagamentos, Relat??rios, Treinos, V??deos, API, Chat com respostas autom??ticas',
    type: 'system',
    category: 'platforms',
    image: '/img/coach.png',
    tags: ['System', 'API', 'Gest??o']
  },


  // Design
  // Designer Stories
  { id: '101', title: 'Social Media', description: '', type: 'photo', category: 'design', image: '/img/storys/b (1).png', tags: ['Social Media'] },
  { id: '102', title: 'Designer', description: '', type: 'photo', category: 'design', image: '/img/storys/b (2).png', tags: ['Designer'] },
  { id: '103', title: 'Identidade Visual', description: '', type: 'photo', category: 'design', image: '/img/storys/b (3).png', tags: ['Identidade Visual'] },
  { id: '104', title: 'Social Media', description: '', type: 'photo', category: 'design', image: '/img/storys/b (4).png', tags: ['Social Media'] },
  { id: '105', title: 'Designer', description: '', type: 'photo', category: 'design', image: '/img/storys/b (5).png', tags: ['Designer'] },
  { id: '106', title: 'Identidade Visual', description: '', type: 'photo', category: 'design', image: '/img/storys/b (6).png', tags: ['Identidade Visual'] },
  { id: '107', title: 'Social Media', description: '', type: 'photo', category: 'design', image: '/img/storys/b (7).png', tags: ['Social Media'] },
  { id: '108', title: 'Designer', description: '', type: 'photo', category: 'design', image: '/img/storys/b (8).png', tags: ['Designer'] },
  { id: '109', title: 'Identidade Visual', description: '', type: 'photo', category: 'design', image: '/img/storys/b (9).png', tags: ['Identidade Visual'] },
  { id: '110', title: 'Social Media', description: '', type: 'photo', category: 'design', image: '/img/storys/b (10).png', tags: ['Social Media'] },
  { id: '111', title: 'Designer', description: '', type: 'photo', category: 'design', image: '/img/storys/b (11).png', tags: ['Designer'] },
  { id: '112', title: 'Identidade Visual', description: '', type: ['photo', 'branding'], category: 'design', image: '/img/storys/b (12).png', tags: ['Branding', 'Identidade Visual'] },
  { id: '113', title: 'Social Media', description: '', type: 'photo', category: 'design', image: '/img/storys/b (13).png', tags: ['Social Media'] },
  { id: '114', title: 'Designer', description: '', type: 'photo', category: 'design', image: '/img/storys/b (14).png', tags: ['Designer'] },
  { id: '115', title: 'Identidade Visual', description: '', type: 'photo', category: 'design', image: '/img/storys/b (15).png', tags: ['Identidade Visual'] },
  { id: '116', title: 'Social Media', description: '', type: 'photo', category: 'design', image: '/img/storys/b (16).png', tags: ['Social Media'] },
  { id: '117', title: 'Designer', description: '', type: 'photo', category: 'design', image: '/img/storys/b (17).png', tags: ['Designer'] },
  { id: '118', title: 'Identidade Visual', description: '', type: 'photo', category: 'design', image: '/img/storys/b (18).png', tags: ['Identidade Visual'] },
  { id: '119', title: 'Social Media', description: '', type: 'photo', category: 'design', image: '/img/storys/b (19).png', tags: ['Social Media'] },
  { id: '120', title: 'Designer', description: '', type: ['photo', 'branding'], category: 'design', image: '/img/storys/b (20).png', tags: ['Branding', 'Designer'] },
  { id: '121', title: 'Identidade Visual', description: '', type: 'photo', category: 'design', image: '/img/storys/b (21).png', tags: ['Identidade Visual'] },
  { id: '122', title: 'Social Media', description: '', type: ['photo', 'branding'], category: 'design', image: '/img/storys/b (22).png', tags: ['Branding', 'Social Media'] },
  { id: '123', title: 'Designer', description: '', type: ['photo', 'branding'], category: 'design', image: '/img/storys/b (23).png', tags: ['Branding', 'Designer'] },
  { id: '124', title: 'Identidade Visual', description: '', type: ['photo', 'branding'], category: 'design', image: '/img/storys/b (24).png', tags: ['Branding', 'Identidade Visual'] },
  { id: '125', title: 'Social Media', description: '', type: ['photo', 'branding'], category: 'design', image: '/img/storys/b (25).png', tags: ['Branding', 'Social Media'] },
  { id: '126', title: 'Designer', description: '', type: 'photo', category: 'design', image: '/img/storys/b (26).png', tags: ['Designer'] },
  { id: '127', title: 'Identidade Visual', description: '', type: ['photo', 'branding'], category: 'design', image: '/img/storys/b (27).png', tags: ['Branding', 'Identidade Visual'] },
  { id: '128', title: 'Social Media', description: '', type: 'photo', category: 'design', image: '/img/storys/b (28).png', tags: ['Social Media'] },
  { id: '129', title: 'Designer', description: '', type: 'photo', category: 'design', image: '/img/storys/b (29).png', tags: ['Designer'] },
  { id: '130', title: 'Identidade Visual', description: '', type: ['photo', 'branding'], category: 'design', image: '/img/storys/b (30).png', tags: ['Branding', 'Identidade Visual'] },
  { id: '131', title: 'Social Media', description: '', type: 'photo', category: 'design', image: '/img/storys/b (31).png', tags: ['Social Media'] },
  { id: '132', title: 'Designer', description: '', type: 'photo', category: 'design', image: '/img/storys/b (32).png', tags: ['Designer'] },
  { id: '133', title: 'Identidade Visual', description: '', type: 'photo', category: 'design', image: '/img/storys/b (33).png', tags: ['Identidade Visual'] },
  { id: '134', title: 'Social Media', description: '', type: 'photo', category: 'design', image: '/img/storys/b (34).png', tags: ['Social Media'] },
  { id: '135', title: 'Designer', description: '', type: 'photo', category: 'design', image: '/img/storys/b (35).png', tags: ['Designer'] },
  { id: '136', title: 'Identidade Visual', description: '', type: 'photo', category: 'design', image: '/img/storys/b (36).png', tags: ['Identidade Visual'] },
  { id: '137', title: 'Social Media', description: '', type: 'photo', category: 'design', image: '/img/storys/b (37).png', tags: ['Social Media'] },
  { id: '138', title: 'Designer', description: '', type: 'photo', category: 'design', image: '/img/storys/b (38).png', tags: ['Designer'] },
  { id: '139', title: 'Identidade Visual', description: '', type: 'photo', category: 'design', image: '/img/storys/b (39).png', tags: ['Identidade Visual'] },
  { id: '140', title: 'Social Media', description: '', type: 'photo', category: 'design', image: '/img/storys/b (40).png', tags: ['Social Media'] },
  { id: '141', title: 'Designer', description: '', type: 'photo', category: 'design', image: '/img/storys/b (41).png', tags: ['Designer'] },
];


const Portfolio = () => {
  const { t } = useTranslation();
  const { category = 'all' } = useParams<{ category: string }>();
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState<ProjectType | 'all'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    setTypeFilter('all');
  }, [category]);

  const categoryInfos = useMemo(() => ({
    all: { title: t('portfolio_page.title_all'), description: t('portfolio_page.desc_all') },
    development: { title: t('portfolio.categories.0.title'), description: t('portfolio.categories.0.description') },
    design: { title: t('portfolio.categories.1.title'), description: t('portfolio.categories.1.description') },
    platforms: { title: t('portfolio.categories.2.title'), description: t('portfolio.categories.2.description') },
  }), [t]);

  const typeFilters = useMemo(() => {
    const filters: { value: ProjectType | 'all'; label: string }[] = [
      { value: 'all', label: t('portfolio_page.filters.all') }
    ];

    if (category === 'development') {
      filters.push({ value: 'site', label: t('portfolio_page.filters.sites') });
      filters.push({ value: 'system', label: t('portfolio_page.filters.systems') });
      filters.push({ value: 'landing', label: t('portfolio_page.filters.landing') });
    } else if (category === 'design') {
      filters.push({ value: 'photo', label: t('portfolio_page.filters.photo') });
      filters.push({ value: 'video', label: t('portfolio_page.filters.video') });
      filters.push({ value: 'branding', label: t('portfolio_page.filters.branding') });
    } else if (category === 'platforms') {
      filters.push({ value: 'system', label: t('portfolio_page.filters.systems') });
      filters.push({ value: 'site', label: t('portfolio_page.filters.sites') });
    } else {
      filters.push({ value: 'site', label: t('portfolio_page.filters.sites') });
      filters.push({ value: 'landing', label: t('portfolio_page.filters.landing') });
      filters.push({ value: 'system', label: t('portfolio_page.filters.systems') });
      filters.push({ value: 'photo', label: t('portfolio_page.filters.photo') });
      filters.push({ value: 'video', label: t('portfolio_page.filters.video') });
      filters.push({ value: 'branding', label: t('portfolio_page.filters.branding') });
    }
    return filters;
  }, [category, t]);

  const info = categoryInfos[category as keyof typeof categoryInfos] || categoryInfos.all;

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Category filter
      if (category !== 'all' && project.category !== category) return false;

      // Type filter
      if (typeFilter !== 'all') {
        const projectTypes = Array.isArray(project.type) ? project.type : [project.type];
        if (!projectTypes.includes(typeFilter as ProjectType)) return false;
      }

      // Search filter
      if (search) {
        const searchLower = search.toLowerCase();
        return (
          project.title.toLowerCase().includes(searchLower) ||
          project.description.toLowerCase().includes(searchLower) ||
          project.tags.some((tag) => tag.toLowerCase().includes(searchLower))
        );
      }

      return true;
    });
  }, [category, typeFilter, search]);

  const getTypeIcon = (type: ProjectType | ProjectType[]) => {
    const primaryType = Array.isArray(type) ? type[0] : type;
    switch (primaryType) {
      case 'video':
        return <Play className="w-4 h-4" />;
      case 'photo':
        return <ImageIcon className="w-4 h-4" />;
      default:
        return <ExternalLink className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen">
      <ParticleBackground />
      <Header />

      <main className="pt-28 pb-24">
        <div className="section-container">
          {/* Header */}
          <div className="mb-12">
            <Link to="/#portfolio" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" />
              {t('common.back')}
            </Link>

            <div className="animate-slide-up">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                {info.title}
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl">
                {info.description}
              </p>
            </div>
          </div>

          {/* Filters */}
          <div className="glass rounded-2xl p-6 mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder={t('portfolio_page.search_placeholder')}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-10 bg-background/50"
                />
              </div>

              {/* Type Filter */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
                <Filter className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                {typeFilters.map((filter) => (
                  <Button
                    key={filter.value}
                    variant={typeFilter === filter.value ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setTypeFilter(filter.value)}
                    className="flex-shrink-0"
                  >
                    {filter.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <article
                  key={project.id}
                  className="group glass rounded-2xl overflow-hidden hover-lift animate-slide-up"
                  style={{ animationDelay: `${(index + 2) * 0.05}s` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                      <Button
                        size="sm"
                        className="gap-2"
                        onClick={() => setSelectedProject(project)}
                      >
                        {getTypeIcon(project.type)}
                        {t('common.view_project')}
                      </Button>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full glass text-xs font-medium capitalize">
                        {(() => {
                          const primaryType = Array.isArray(project.type) ? project.type[0] : project.type;
                          return t(`portfolio_page.filters.${primaryType === 'site' ? 'sites' : primaryType === 'system' ? 'systems' : primaryType}`, { defaultValue: primaryType });
                        })()}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 rounded-md bg-muted text-xs text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 glass rounded-2xl">
              <p className="text-muted-foreground text-lg">
                {t('portfolio_page.no_results')}
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSearch('');
                  setTypeFilter('all');
                }}
              >
                {t('portfolio_page.clear_filters')}
              </Button>
            </div>
          )}
        </div>
      </main>

      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-background/40 backdrop-blur-xl border-white/10">
          <DialogHeader className="p-6 pb-0">
            <DialogTitle className="text-2xl font-bold text-foreground">
              {selectedProject?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="relative aspect-video w-full overflow-hidden p-6 pt-2">
            <img
              src={selectedProject?.image}
              alt={selectedProject?.title}
              className="w-full h-full object-contain rounded-lg shadow-2xl"
            />
          </div>
          <div className="p-6 pt-0">
            <p className="text-muted-foreground">
              {selectedProject?.description}
            </p>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Portfolio;
