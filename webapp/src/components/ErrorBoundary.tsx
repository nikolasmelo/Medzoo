import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { soundManager } from '../utils/sound';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  errorInfo: string;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    errorInfo: '',
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, errorInfo: error.message };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
    try {
       soundManager.playError();
    } catch (e) {
       console.error("Audio engine failed during error boundary invocation", e);
    }
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="fixed inset-0 z-[9999] bg-[#070B09] flex items-center justify-center p-6 text-center select-none font-mono">
          <div className="max-w-2xl w-full border border-rose-500/50 bg-rose-950/20 p-8 rounded-3xl backdrop-blur-md shadow-2xl shadow-rose-900/20 relative overflow-hidden">
             
            {/* Scanline effect */}
            <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,1)_50%)] bg-[length:100%_4px]" />
            
            <AlertTriangle className="w-20 h-20 text-rose-500 mx-auto mb-6 animate-pulse" />
            <h1 className="text-3xl font-black text-rose-500 uppercase tracking-widest mb-2">Falha Crítica de Telemetria</h1>
            <h2 className="text-rose-400/80 text-sm tracking-[0.2em] mb-8">SYSTEM_ASSERTION_FAULT :: CANVAS_2D / WEB_AUDIO</h2>
            
            <div className="bg-black/50 border border-rose-900/50 rounded-xl p-4 mb-8 text-left overflow-hidden text-rose-300 text-xs">
               <p className="opacity-70 mb-2">&gt; DUMP_TRACE:</p>
               <p className="whitespace-pre-wrap font-bold">{this.state.errorInfo}</p>
            </div>

            <button
              onClick={() => window.location.reload()}
              className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-rose-900 border border-rose-500 text-white font-bold uppercase tracking-widest hover:bg-rose-800 transition-colors"
            >
              <RefreshCw className="w-5 h-5" />
              Reiniciar Sistema CARFS
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
