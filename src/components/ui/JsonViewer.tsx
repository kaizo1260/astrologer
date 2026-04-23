'use client';

import { useState } from 'react';

interface JsonViewerProps {
  data: unknown;
  title?: string;
}

export function JsonViewer({ data, title = 'JSON Data' }: JsonViewerProps) {
  const [copied, setCopied] = useState(false);

  const jsonString = JSON.stringify(data, null, 2);

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-mystical text-lg font-bold text-cosmic-gold">{title}</h3>
        <button
          onClick={handleCopy}
          className="px-4 py-2 bg-cosmic-gold/20 hover:bg-cosmic-gold/30 text-cosmic-gold rounded transition-colors text-sm"
        >
          {copied ? '✓ Copied' : 'Copy JSON'}
        </button>
      </div>
      <div className="bg-cosmic-bg border border-cosmic-border rounded-lg p-4 overflow-auto max-h-96">
        <pre className="text-cosmic-text text-sm font-mono whitespace-pre-wrap break-words">
          {jsonString}
        </pre>
      </div>
    </div>
  );
}
