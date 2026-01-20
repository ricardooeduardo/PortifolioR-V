import React from 'react';
import { BUILDER_FONTS, BUILDER_COLORS } from './constants';
import { Type, Palette, Hash } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface GlobalStyleEditorProps {
    currentFont: string;
    onFontChange: (font: string) => void;
    currentColors: {
        primary: string;
        bg: string;
        text: string;
    };
    onColorChange: (colors: { primary: string; bg: string; text: string }) => void;
}

export const GlobalStyleEditor: React.FC<GlobalStyleEditorProps> = ({
    currentFont,
    onFontChange,
    currentColors,
    onColorChange,
}) => {
    return (
        <div className="space-y-8 p-4">
            {/* Typography */}
            <div>
                <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Type className="w-4 h-4 text-primary" />
                    Tipografia Global
                </h3>
                <div className="grid grid-cols-1 gap-2">
                    {BUILDER_FONTS.map((font) => (
                        <button
                            key={font.value}
                            onClick={() => onFontChange(font.value)}
                            className={`w-full text-left px-4 py-3 rounded-xl transition-all border ${currentFont === font.value
                                    ? 'bg-primary/20 border-primary text-foreground'
                                    : 'glass border-transparent text-muted-foreground hover:bg-muted'
                                }`}
                        >
                            <span className={`text-base ${font.value}`}>{font.name}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Colors */}
            <div>
                <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Palette className="w-4 h-4 text-primary" />
                    Sistema de Cores
                </h3>

                <div className="space-y-6">
                    {/* Presets */}
                    <div className="grid grid-cols-5 gap-2">
                        {BUILDER_COLORS.map((preset) => (
                            <button
                                key={preset.name}
                                onClick={() => onColorChange({ primary: preset.primary, bg: preset.bg, text: preset.text })}
                                className="group relative"
                                title={preset.name}
                            >
                                <div
                                    className={`w-full aspect-square rounded-lg border-2 transition-all group-hover:scale-110 ${currentColors.bg === preset.bg ? 'border-primary' : 'border-white/10'
                                        }`}
                                    style={{ backgroundColor: preset.bg }}
                                >
                                    <div
                                        className="absolute bottom-1 right-1 w-2.5 h-2.5 rounded-full shadow-sm"
                                        style={{ backgroundColor: preset.primary }}
                                    />
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Custom Hex */}
                    <div className="space-y-4 pt-4 border-t border-white/5">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                            <Hash className="w-3 h-3" />
                            Cores Personalizadas
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                                <label className="text-[10px] uppercase font-bold text-muted-foreground">Primária</label>
                                <div className="flex gap-2">
                                    <div className="w-8 h-8 rounded shrink-0 border border-white/10" style={{ backgroundColor: currentColors.primary }}></div>
                                    <Input
                                        value={currentColors.primary}
                                        onChange={(e) => onColorChange({ ...currentColors, primary: e.target.value })}
                                        className="h-8 text-xs bg-background/30"
                                    />
                                </div>
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-[10px] uppercase font-bold text-muted-foreground">Fundo</label>
                                <div className="flex gap-2">
                                    <div className="w-8 h-8 rounded shrink-0 border border-white/10" style={{ backgroundColor: currentColors.bg }}></div>
                                    <Input
                                        value={currentColors.bg}
                                        onChange={(e) => onColorChange({ ...currentColors, bg: e.target.value })}
                                        className="h-8 text-xs bg-background/30"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
