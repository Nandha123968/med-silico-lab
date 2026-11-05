import React from 'react';
import { Download, Sliders, Code2, Eye, ExternalLink } from 'lucide-react';

interface WordPressBarProps {
  onOpenCustomizer: () => void;
  onOpenExporter: () => void;
  onDownloadZip: () => void;
  isDownloading: boolean;
}

export const WordPressBar: React.FC<WordPressBarProps> = ({
  onOpenCustomizer,
  onOpenExporter,
  onDownloadZip,
  isDownloading,
}) => {
  return (
    <div className="bg-slate-900 text-slate-200 border-b border-slate-800 text-xs px-4 py-2 sticky top-0 z-50 flex items-center justify-between gap-4 select-none">
      <div className="flex items-center gap-3">
        {/* WordPress Icon */}
        <div className="flex items-center gap-2 font-semibold text-slate-100">
          <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-8.08 10c0-1.28.29-2.49.8-3.58l4.47 12.26A8.02 8.02 0 0 1 3.92 12zm8.08 8c-.85 0-1.66-.14-2.42-.4l2.5-7.26 2.57 7.04c-.05.02-.1.03-.15.05-.79.37-1.63.57-2.5.57zm5.55-5.23l-3.26-9.45c1.47.77 2.68 1.98 3.45 3.45.69 1.3.9 2.76.81 4.22-.03.58-.16 1.16-.36 1.72l-.64.06zm-8.88-9.15c.67-.04 1.3-.06 1.3-.06.4-.02.35-.61-.05-.59 0 0-1.2.1-1.98.1-.76 0-1.96-.1-1.96-.1-.4-.02-.45.57-.05.59 0 0 .61.02 1.22.06l1.83 5.48-2.6 7.78-3.79-11.26c.4-.02.77-.04 1.15-.06.4-.02.35-.61-.05-.59 0 0-1.2.1-1.98.1-.19 0-.41-.01-.65-.02C5.3 4.8 8.44 3.92 12 3.92c2.25 0 4.31.78 5.96 2.08-.07.01-.13.02-.2.04-.69.21-1.18.77-1.18 1.51 0 .68.39 1.28.39 2.06 0 .68-.49 1.46-.98 2.53l-1.4 4.33-3.03-9.06z" />
          </svg>
          <span className="font-mono text-cyan-400">WP Med-Silico Lab</span>
        </div>

        <span className="hidden md:inline-block text-slate-500">|</span>

        <span className="hidden md:flex items-center gap-1.5 text-slate-300">
          <Eye className="w-3.5 h-3.5 text-emerald-400" />
          <span>Active WordPress Theme v1.0.0</span>
        </span>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={onOpenCustomizer}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition cursor-pointer font-medium"
          title="Customize site title, lab logo, brand colors"
        >
          <Sliders className="w-3.5 h-3.5 text-cyan-400" />
          <span>Theme Customizer</span>
        </button>

        <button
          onClick={onOpenExporter}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition cursor-pointer font-medium"
          title="View theme templates (style.css, functions.php, header.php, etc.)"
        >
          <Code2 className="w-3.5 h-3.5 text-indigo-400" />
          <span className="hidden sm:inline">PHP Templates</span>
        </button>

        <button
          onClick={onDownloadZip}
          disabled={isDownloading}
          className="flex items-center gap-1.5 px-3 py-1 rounded bg-cyan-700 hover:bg-cyan-600 text-white font-medium transition cursor-pointer disabled:opacity-50"
          title="Download full ready-to-upload WordPress Theme as a .zip"
        >
          <Download className="w-3.5 h-3.5" />
          <span>{isDownloading ? 'Packaging...' : 'Export Theme (.zip)'}</span>
        </button>
      </div>
    </div>
  );
};
