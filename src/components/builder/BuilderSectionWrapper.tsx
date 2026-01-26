import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowUp, ArrowDown, Trash2, Copy, Pencil } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BuilderSectionWrapperProps {
    children: React.ReactNode;
    isActive: boolean;
    onSelect: () => void;
    onMoveUp: (e: React.MouseEvent) => void;
    onMoveDown: (e: React.MouseEvent) => void;
    onDelete: (e: React.MouseEvent) => void;
    onDuplicate?: (e: React.MouseEvent) => void;
    label: string;
}

export const BuilderSectionWrapper: React.FC<BuilderSectionWrapperProps> = ({
    children,
    isActive,
    onSelect,
    onMoveUp,
    onMoveDown,
    onDelete,
    onDuplicate,
    label
}) => {
    return (
        <div
            onClick={onSelect}
            className={cn(
                "relative group border-2 transition-all duration-200",
                isActive
                    ? "border-primary ring-2 ring-primary/20 z-20"
                    : "border-transparent hover:border-primary/50 z-10"
            )}
        >
            {/* Label Tag (Visible on Active or Hover) */}
            <div className={cn(
                "absolute -top-7 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] font-bold px-3 py-1 rounded-t-lg transition-all shadow-md flex items-center gap-2",
                isActive || 'group-hover:opacity-100 opacity-0'
            )}>
                {isActive && <Pencil className="w-3 h-3" />}
                {label}
            </div>

            {/* Floating Toolbar (Visible on Active or Hover) */}
            <div className={cn(
                "absolute top-4 right-4 flex gap-1 bg-white shadow-xl rounded-lg p-1 transition-all transform scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 z-50",
                isActive && "opacity-100 scale-100"
            )}>
                <Button variant="ghost" size="icon" className="h-7 w-7 hover:bg-gray-100 text-gray-600" onClick={onMoveUp} title="Mover para cima">
                    <ArrowUp className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-7 w-7 hover:bg-gray-100 text-gray-600" onClick={onMoveDown} title="Mover para baixo">
                    <ArrowDown className="w-4 h-4" />
                </Button>
                {onDuplicate && (
                    <Button variant="ghost" size="icon" className="h-7 w-7 hover:bg-blue-50 text-blue-500" onClick={onDuplicate} title="Duplicar">
                        <Copy className="w-4 h-4" />
                    </Button>
                )}
                <Button variant="ghost" size="icon" className="h-7 w-7 hover:bg-red-50 text-red-500" onClick={onDelete} title="Remover">
                    <Trash2 className="w-4 h-4" />
                </Button>
            </div>

            {/* Content */}
            <div className={cn("transition-opacity", isActive ? "opacity-100" : "opacity-100")}>
                {children}
            </div>

            {/* Active Overlay (Subtle tint to indicate selection focus if needed, currently disabled for clarity) */}
            {/* {isActive && <div className="absolute inset-0 bg-primary/5 pointer-events-none" />} */}
        </div>
    );
};
