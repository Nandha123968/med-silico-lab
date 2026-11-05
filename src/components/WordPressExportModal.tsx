import React, { useState } from 'react';
import { X, Download, Copy, Check, Code2, Sliders, Palette, CheckCircle2 } from 'lucide-react';
import { 
  WordPressThemeConfig, 
  generateWordPressTemplates, 
  createWordPressZip 
} from '../utils/wpThemeGenerator';
import { sanitizeText, sanitizeUrl } from '../utils/security';

interface WordPressExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: WordPressThemeConfig;
  onUpdateConfig: (newConfig: WordPressThemeConfig) => void;
  onLogoChange: (url: string) => void;
  logoUrl?: string;
}

export const WordPressExportModal: React.FC<WordPressExportModalProps> = ({
  isOpen,
  onClose,
  config,
  onUpdateConfig,
  onLogoChange,
  logoUrl,
}) => {
  const [activeTab, setActiveTab] = useState<'templates' | 'customizer'>('templates');
  const [selectedFile, setSelectedFile] = useState<string>('front-page.php');
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen) return null;

  const templates = generateWordPressTemplates(config);
  const currentCode = templates[selectedFile as keyof typeof templates] || '';

  const handleCopy = () => {
    navigator.clipboard.writeText(currentCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = async () => {
    try {
      setDownloading(true);
      const zipBlob = await createWordPressZip(config);
      const url = URL.createObjectURL(zipBlob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${config.themeName.toLowerCase().replace(/[^a-z0-9]/g, '-')}-wordpress-theme.zip`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3000);
    } catch (err) {
      console.error('Failed to create theme zip', err);
    } finally {
      setDownloading(false);
    }
  };

  const fileList = Object.keys(templates);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-slate-900 border border-slate-700 text-slate-100 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="px-4 sm:px-6 py-4 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 bg-slate-950">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-8 h-8 rounded bg-cyan-700 text-white flex items-center justify-center font-mono font-bold text-sm shrink-0">
              WP
            </div>
            <div className="min-w-0">
              <h3 className="text-sm sm:text-base font-bold text-white truncate">
                WordPress Theme Builder &amp; Code Exporter
              </h3>
              <p className="text-xs text-slate-400 truncate">
                Custom WordPress theme engineered for Med-Silico Lab with all services and pages.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 ml-auto">
            <button
              type="button"
              onClick={handleDownload}
              disabled={downloading}
              className="flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-lg bg-cyan-700 hover:bg-cyan-600 text-white text-xs font-semibold uppercase tracking-wider transition cursor-pointer disabled:opacity-50"
            >
              <Download className="w-4 h-4 shrink-0" />
              <span>{downloading ? 'Compiling...' : 'Download (.zip)'}</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="text-slate-400 hover:text-white p-1 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Bar */}
        <div className="flex flex-wrap items-center gap-4 px-4 sm:px-6 pt-3 border-b border-slate-800 bg-slate-950 text-xs font-medium">
          <button
            type="button"
            onClick={() => setActiveTab('templates')}
            className={`pb-3 border-b-2 flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'templates'
                ? 'border-cyan-400 text-cyan-400 font-semibold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Code2 className="w-4 h-4" />
            <span>Theme PHP &amp; CSS Templates</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('customizer')}
            className={`pb-3 border-b-2 flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'customizer'
                ? 'border-cyan-400 text-cyan-400 font-semibold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Sliders className="w-4 h-4" />
            <span>Theme Customizer &amp; Branding</span>
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1">
          {downloadSuccess && (
            <div className="mb-4 p-3 bg-emerald-950/80 border border-emerald-600 rounded-lg flex items-center gap-3 text-xs text-emerald-200">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <div>
                <strong>Theme Zip Downloaded!</strong> In WordPress wp-admin, navigate to <em>Appearance &rarr; Themes &rarr; Add New &rarr; Upload Theme</em> and upload this zip package.
              </div>
            </div>
          )}

          {activeTab === 'templates' ? (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-full min-h-[320px]">
              {/* File list */}
              <div className="md:col-span-1 space-y-1 bg-slate-950/60 p-2 rounded-lg border border-slate-800 text-xs font-mono">
                <div className="px-2 py-1.5 text-[11px] uppercase tracking-wider text-slate-500 font-bold">
                  Theme Files:
                </div>
                <div className="flex md:flex-col gap-1 overflow-x-auto pb-1 md:pb-0">
                  {fileList.map((file) => (
                    <button
                      type="button"
                      key={file}
                      onClick={() => setSelectedFile(file)}
                      className={`w-full text-left px-2.5 py-1.5 rounded transition cursor-pointer flex items-center justify-between whitespace-nowrap ${
                        selectedFile === file
                          ? 'bg-cyan-900/60 text-cyan-200 font-semibold border-l-2 border-cyan-400'
                          : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                      }`}
                    >
                      <span>{file}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Code viewer */}
              <div className="md:col-span-3 flex flex-col rounded-lg border border-slate-800 bg-slate-950 overflow-hidden">
                <div className="px-4 py-2 border-b border-slate-800 flex items-center justify-between gap-2 text-xs text-slate-400 bg-slate-950/80 font-mono">
                  <span className="truncate">Viewing: <strong className="text-cyan-300">{selectedFile}</strong></span>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded transition cursor-pointer shrink-0"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied!' : 'Copy File'}</span>
                  </button>
                </div>
                <pre className="p-4 overflow-x-auto text-xs font-mono text-slate-300 flex-1 leading-relaxed max-h-96">
                  {currentCode}
                </pre>
              </div>
            </div>
          ) : (
            /* Customizer Tab */
            <div className="space-y-6 max-w-2xl mx-auto text-xs">
              <div className="bg-slate-950 p-5 sm:p-6 rounded-lg border border-slate-800 space-y-4">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Palette className="w-4 h-4 text-cyan-400" />
                  <span>WordPress Theme &amp; Identity Settings</span>
                </h4>

                <div>
                  <label className="block text-slate-300 font-medium mb-1">Theme Name</label>
                  <input
                    type="text"
                    maxLength={100}
                    value={config.themeName}
                    onChange={(e) => onUpdateConfig({ ...config, themeName: sanitizeText(e.target.value, 100) })}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-100"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1">Theme Author / Lab Name</label>
                  <input
                    type="text"
                    maxLength={120}
                    value={config.author}
                    onChange={(e) => onUpdateConfig({ ...config, author: sanitizeText(e.target.value, 120) })}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-100"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1">Theme Description</label>
                  <textarea
                    rows={2}
                    maxLength={400}
                    value={config.description}
                    onChange={(e) => onUpdateConfig({ ...config, description: sanitizeText(e.target.value, 400) })}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-100"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Primary Color (Hex)</label>
                    <div className="flex items-center gap-2">
                      <input
                        type="color"
                        value={config.primaryColor}
                        onChange={(e) => onUpdateConfig({ ...config, primaryColor: e.target.value })}
                        className="w-8 h-8 rounded border-0 cursor-pointer shrink-0"
                      />
                      <input
                        type="text"
                        value={config.primaryColor}
                        onChange={(e) => onUpdateConfig({ ...config, primaryColor: e.target.value })}
                        className="w-full px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Secondary Color (Hex)</label>
                    <div className="flex items-center gap-2">
                      <input
                        type="color"
                        value={config.secondaryColor}
                        onChange={(e) => onUpdateConfig({ ...config, secondaryColor: e.target.value })}
                        className="w-8 h-8 rounded border-0 cursor-pointer shrink-0"
                      />
                      <input
                        type="text"
                        value={config.secondaryColor}
                        onChange={(e) => onUpdateConfig({ ...config, secondaryColor: e.target.value })}
                        className="w-full px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 font-mono"
                      />
                    </div>
                  </div>
                </div>

                {/* Logo Customizer */}
                <div className="pt-4 border-t border-slate-800">
                  <label className="block text-slate-300 font-medium mb-1">
                    Lab Logo Image URL (HTTPS or relative path)
                  </label>
                  <input
                    type="url"
                    value={logoUrl || ''}
                    onChange={(e) => onLogoChange(sanitizeUrl(e.target.value))}
                    placeholder="Paste your logo image URL or leave empty for default MS badge"
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-100"
                  />
                  <p className="text-[11px] text-slate-500 mt-1">
                    Leave blank to use the built-in Med-Silico Lab academic insignia badge, or paste any verified HTTPS logo image URL.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-4 sm:px-6 py-3 border-t border-slate-800 bg-slate-950 flex items-center justify-between text-xs text-slate-400">
          <div>WordPress Theme Version: 1.0.0 (GPL-v2 compliant)</div>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg transition cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
