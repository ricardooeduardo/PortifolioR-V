import React from 'react';
import { BUILDER_SECTIONS, SectionVariation, SectionType } from './constants';
import { Layout, Check, Layers } from 'lucide-react';

interface LayoutPickerProps {
    sectionType: SectionType;
    currentVariationId: string;
    onVariationChange: (id: string) => void;
}

export const LayoutPicker: React.FC<LayoutPickerProps> = ({
    sectionType,
    currentVariationId,
    onVariationChange,
}) => {
    const variations = BUILDER_SECTIONS[sectionType];

    return (
        <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-foreground px-2">
                <Layers className="w-4 h-4 text-primary" />
                Layouts para {sectionType}
            </div>

            <div className="grid grid-cols-1 gap-3">
                {variations.map((variation) => (
                    <button
                        key={variation.id}
                        onClick={() => onVariationChange(variation.id)}
                        className={`group relative w-full text-left p-4 rounded-2xl transition-all border-2 overflow-hidden ${currentVariationId === variation.id
                                ? 'bg-primary/10 border-primary'
                                : 'glass border-transparent hover:border-white/10'
                            }`}
                    >
                        <div className="relative z-10 flex justify-between items-start">
                            <div>
                                <div className={`font-bold text-sm mb-1 ${currentVariationId === variation.id ? 'text-primary' : 'text-foreground'
                                    }`}>
                                    {variation.name}
                                </div>
                                <div className="text-xs text-muted-foreground line-clamp-1 italic">
                                    {variation.preview}
                                </div>
                            </div>

                            {currentVariationId === variation.id && (
                                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center animate-scale-in">
                                    <Check className="w-4 h-4 text-primary-foreground" />
                                </div>
                            )}
                        </div>

                        {/* Visual Preview Placeholder */}
                        <div className="mt-3 flex gap-1">
                            <div className="h-1 flex-1 bg-current opacity-20 rounded-full"></div>
                            <div className="h-1 w-1/4 bg-current opacity-10 rounded-full"></div>
                        </div>

                        <div className={`absolute bottom-0 right-0 w-16 h-16 bg-primary/5 rounded-tl-full transition-transform duration-500 ${currentVariationId === variation.id ? 'translate-x-0 translate-y-0' : 'translate-x-16 translate-y-16'
                            }`}></div>
                    </button>
                ))}
            </div>
        </div>
    );
};
