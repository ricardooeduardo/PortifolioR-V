import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle } from 'lucide-react';
import { Button } from './button';

interface Props {
    children?: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Uncaught error:', error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            if (this.props.fallback) {
                return this.props.fallback;
            }

            return (
                <div className="flex flex-col items-center justify-center h-full min-h-[400px] p-8 text-center bg-background/50 rounded-xl border border-destructive/20">
                    <div className="w-12 h-12 bg-destructive/10 text-destructive rounded-full flex items-center justify-center mb-4">
                        <AlertTriangle className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">Algo deu errado neste componente</h3>
                    <p className="text-sm text-muted-foreground mb-4 max-w-md">
                        Ocorreu um erro ao tentar renderizar esta seção. Tente recarregar a página.
                    </p>
                    <div className="p-2 bg-muted/50 rounded text-xs font-mono text-left max-w-sm overflow-auto mb-4 border text-muted-foreground">
                        {this.state.error?.message}
                    </div>
                    <Button
                        variant="outline"
                        onClick={() => this.setState({ hasError: false })}
                    >
                        Tentar Novamente
                    </Button>
                </div>
            );
        }

        return this.props.children;
    }
}
