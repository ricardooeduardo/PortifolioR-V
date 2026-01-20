export type SectionType = 'header' | 'hero' | 'services' | 'about' | 'activities' | 'info' | 'footer';

export interface SectionVariation {
    id: string;
    name: string;
    preview: string;
}

export const BUILDER_SECTIONS: Record<SectionType, SectionVariation[]> = {
    header: [
        { id: 'h1', name: 'Logo Esquerda', preview: 'Logo | Menu | CTA' },
        { id: 'h2', name: 'Logo Central', preview: 'Menu | Logo | CTA' },
        { id: 'h3', name: 'Minimalista', preview: 'Logo | Hamburguer' },
        { id: 'h4', name: 'CTA Destaque', preview: 'Menu | Button' },
    ],
    hero: [
        { id: 'hr1', name: 'Split (L/R)', preview: 'Texto à esquerda, Imagem à direita' },
        { id: 'hr2', name: 'Centralizado', preview: 'Foco no centro com overlay' },
        { id: 'hr3', name: 'Full Image', preview: 'Imagem total com texto' },
        { id: 'hr4', name: 'Clean Gradient', preview: 'Apenas texto sobre gradiente' },
    ],
    services: [
        { id: 's1', name: 'Icon Grid', preview: '3 colunas com ícones' },
        { id: 's2', name: 'Numbered List', preview: 'Lista com números grandes' },
        { id: 's3', name: 'Modern List', preview: 'Horizontal com imagens' },
        { id: 's4', name: 'Minimal Grid', preview: 'Minimalista sem ícones' },
    ],
    about: [
        { id: 'a1', name: 'Classic (L)', preview: 'Foto Esquerda' },
        { id: 'a2', name: 'Classic (R)', preview: 'Foto Direita' },
        { id: 'a3', name: 'Minimal Text', preview: 'Apenas texto institucional' },
        { id: 'a4', name: 'Modern Split', preview: 'Texto e foto divididos' },
    ],
    activities: [
        { id: 'act1', name: 'Gallery Grid', preview: 'Grade de fotos' },
        { id: 'act2', name: 'Simple List', preview: 'Checklist com ícones' },
        { id: 'act3', name: 'Slider', preview: 'Carrossel interativo' },
        { id: 'act4', name: 'Featured Big', preview: 'Destaque único grande' },
    ],
    info: [
        { id: 'i1', name: 'FAQ Accordion', preview: 'Perguntas e respostas' },
        { id: 'i2', name: 'Feature Cards', preview: '3 blocos informativos' },
        { id: 'i3', name: 'Detail List', preview: 'Lista de diferenciais' },
        { id: 'i4', name: 'Minimal Info', preview: 'Blocos de texto simples' },
    ],
    footer: [
        { id: 'f1', name: 'Simple Copy', preview: 'Copyright apenas' },
        { id: 'f2', name: 'Social Links', preview: 'Redes sociais integradas' },
        { id: 'f3', name: 'Full Footer', preview: 'Colunas e links completos' },
        { id: 'f4', name: 'Institutional', preview: 'Foco na marca e contato' },
    ],
};

export const BUILDER_FONTS = [
    { name: 'Inter (Padrão)', value: 'font-inter' },
    { name: 'Roboto', value: 'font-roboto' },
    { name: 'Playfair Display', value: 'font-playfair' },
    { name: 'Montserrat', value: 'font-montserrat' },
    { name: 'Open Sans', value: 'font-opensans' },
    { name: 'Poppins', value: 'font-poppins' },
    { name: 'JetBrains Mono', value: 'font-mono' },
];

export const BUILDER_COLORS = [
    { name: 'R&V Dark', bg: '#0b0f13', text: '#e6eef6', primary: '#00D77A' },
    { name: 'R&V Light', bg: '#f7fafc', text: '#0b1220', primary: '#15803d' },
    { name: 'Neon Purple', bg: '#0f051a', text: '#f5f0ff', primary: '#a855f7' },
    { name: 'Midnight', bg: '#020617', text: '#f8fafc', primary: '#3b82f6' },
    { name: 'Forest', bg: '#052c22', text: '#ecfdf5', primary: '#10b981' },
];
