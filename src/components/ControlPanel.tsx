import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Settings, X, Pencil, Eye, Check, RefreshCw, Palette, Sparkles, Copy, Sliders } from 'lucide-react';
import { PortfolioData } from '../types';

interface ControlPanelProps {
  data: PortfolioData;
  isEditMode: boolean;
  onToggleEditMode: () => void;
  onUpdate: (updated: Partial<PortfolioData>) => void;
  onReset: () => void;
}

export default function ControlPanel({
  data,
  isEditMode,
  onToggleEditMode,
  onUpdate,
  onReset
}: ControlPanelProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const colors: Array<{ id: PortfolioData['accentColor']; name: string; class: string }> = [
    { id: 'indigo', name: 'Royal Indigo', class: 'bg-indigo-600' },
    { id: 'amber', name: 'Raw Amber', class: 'bg-amber-500' },
    { id: 'emerald', name: 'Alpine Emerald', class: 'bg-emerald-500' },
    { id: 'rose', name: 'Crimson Rose', class: 'bg-rose-500' },
    { id: 'slate', name: 'Carbon Slate', class: 'bg-zinc-800' }
  ];

  const activeColorRing = {
    indigo: 'ring-indigo-600/30',
    amber: 'ring-amber-500/30',
    emerald: 'ring-emerald-500/30',
    rose: 'ring-rose-500/30',
    slate: 'ring-zinc-950/30',
  }[data.accentColor];

  const activeColorBg = {
    indigo: 'bg-indigo-600 hover:bg-indigo-700',
    amber: 'bg-amber-500 hover:bg-amber-600',
    emerald: 'bg-emerald-500 hover:bg-emerald-600',
    rose: 'bg-rose-500 hover:bg-rose-600',
    slate: 'bg-zinc-900 hover:bg-zinc-800',
  }[data.accentColor];

  const handleCopyConfig = () => {
    navigator.clipboard.writeText(JSON.stringify(data, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      
      {/* Floating Action Button trigger */}
      <motion.button
        animate={{ rotate: isOpen ? 90 : 0 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`cursor-pointer w-12 h-12 rounded-full text-white shadow-lg border border-white/20 flex items-center justify-center transition-all ${activeColorBg}`}
        aria-label="Toggle Designer Controls"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Sliders className="w-5 h-5" />}
      </motion.button>

      {/* Drawer Overlay Modal panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="absolute bottom-16 right-0 w-80 bg-white border border-zinc-200 rounded-3xl shadow-2xl p-6 overflow-hidden max-h-[80vh] overflow-y-auto"
          >
            {/* Header branding */}
            <div className="flex items-center justify-between pb-4 border-b border-zinc-100 mb-5">
              <div className="flex items-center gap-2">
                <Palette className="w-4 h-4 text-zinc-800 animate-spin" />
                <span className="font-display font-medium text-zinc-900 text-sm">Designer Toolbar</span>
              </div>
              <span className="text-[10px] font-mono text-zinc-400 bg-zinc-50 border border-zinc-200/50 px-2 py-0.5 rounded-full uppercase tracking-wider">
                Live Engine
              </span>
            </div>

            <div className="space-y-6">
              
              {/* Active mode toggle */}
              <div className="space-y-2">
                <label className="text-xs font-mono font-medium text-zinc-400 uppercase tracking-widest block">
                  Design Mode
                </label>
                <button
                  onClick={onToggleEditMode}
                  className={`cursor-pointer w-full flex items-center justify-between px-4 py-3 rounded-2xl border transition-all ${
                    isEditMode
                      ? 'bg-zinc-950 border-zinc-900 text-white shadow-md'
                      : 'bg-zinc-50 border-zinc-200 text-zinc-800 hover:bg-zinc-100'
                  }`}
                >
                  <span className="text-xs font-semibold">
                    {isEditMode ? 'Active Editing mode' : 'Static View Mode'}
                  </span>
                  <div className="flex items-center gap-1">
                    {isEditMode ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-lime-400 font-bold" />
                        <span className="text-[10px] font-mono text-lime-400 uppercase">ON</span>
                      </>
                    ) : (
                      <>
                        <Eye className="w-3.5 h-3.5 text-zinc-400" />
                        <span className="text-[10px] font-mono text-zinc-400 uppercase">OFF</span>
                      </>
                    )}
                  </div>
                </button>
              </div>

              {/* Theme Tone Accent Selector */}
              <div className="space-y-2.5">
                <label className="text-xs font-mono font-medium text-zinc-400 uppercase tracking-widest block">
                  Palette Swatches
                </label>
                <div className="flex items-center gap-3">
                  {colors.map((color) => (
                    <button
                      key={color.id}
                      onClick={() => onUpdate({ accentColor: color.id })}
                      className={`cursor-pointer w-7 h-7 rounded-full shadow-inner relative transition-transform ${color.class} ${
                        data.accentColor === color.id
                          ? 'scale-110 ring-4 ring-offset-1 ' + activeColorRing
                          : 'hover:scale-105'
                      }`}
                      title={color.name}
                    >
                      {data.accentColor === color.id && (
                        <span className="absolute inset-0 flex items-center justify-center text-white">
                          <Check className="w-3.5 h-3.5 font-bold" />
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Copy Setup state */}
              <div className="space-y-2.5 pt-4 border-t border-zinc-100">
                <label className="text-xs font-mono font-medium text-zinc-400 uppercase tracking-widest block">
                  Data Operations
                </label>
                <div className="flex gap-2">
                  <button
                    onClick={handleCopyConfig}
                    className="cursor-pointer flex-1 py-2 bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 rounded-xl text-xs font-medium text-zinc-700 flex items-center justify-center gap-1.5 transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-zinc-500" />
                        Copy JSON
                      </>
                    )}
                  </button>

                  <button
                    onClick={onReset}
                    className="cursor-pointer py-2 px-3 bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 rounded-xl text-xs font-medium text-zinc-700 flex items-center justify-center gap-1.5 transition-colors"
                    title="Reset to Template"
                  >
                    <RefreshCw className="w-3.5 h-3.5 text-zinc-400" />
                    Reset
                  </button>
                </div>
              </div>

              {/* Explanatory helper tips */}
              <div className="p-3.5 bg-yellow-50 border border-yellow-200/50 rounded-xl">
                <p className="text-[10px] font-mono text-amber-700 leading-normal">
                  💡 **Tip:** Enable "Active Editing" and customize Name, Location, and Bio direct inside page inputs!
                </p>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
