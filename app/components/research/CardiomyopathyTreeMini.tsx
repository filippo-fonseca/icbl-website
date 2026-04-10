"use client";

export default function CardiomyopathyTreeMini() {
  return (
    <svg
      viewBox="0 0 120 80"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="miniNodeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e4a7d" />
          <stop offset="100%" stopColor="#14365d" />
        </linearGradient>
        <filter id="miniGlow">
          <feGaussianBlur stdDeviation="1" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Connection lines */}
      <g stroke="rgba(74, 158, 255, 0.3)" strokeWidth="1" fill="none">
        <path d="M60 18 L60 28" />
        <path d="M60 28 Q60 35 35 40" />
        <path d="M60 28 Q60 35 85 40" />
        <path d="M35 48 Q35 55 20 60" />
        <path d="M35 48 Q35 55 50 60" />
        <path d="M85 48 Q85 55 70 60" />
        <path d="M85 48 Q85 55 100 60" />
      </g>

      {/* Root node */}
      <rect x="35" y="5" width="50" height="13" rx="6" fill="url(#miniNodeGrad)" filter="url(#miniGlow)" />
      <text x="60" y="14" textAnchor="middle" fill="white" fontSize="5" fontWeight="500">
        Cardiomyopathies
      </text>

      {/* Level 1 */}
      <rect x="15" y="38" width="40" height="10" rx="5" fill="url(#miniNodeGrad)" opacity="0.8" />
      <rect x="65" y="38" width="40" height="10" rx="5" fill="url(#miniNodeGrad)" opacity="0.8" />

      {/* Terminal nodes */}
      <g filter="url(#miniGlow)">
        <rect x="8" y="58" width="24" height="16" rx="3" fill="rgba(20, 54, 93, 0.6)" stroke="rgba(74, 158, 255, 0.3)" strokeWidth="0.5" />
        <text x="20" y="68" textAnchor="middle" fill="#4a9eff" fontSize="6" fontWeight="600">HCM</text>

        <rect x="38" y="58" width="24" height="16" rx="3" fill="rgba(20, 54, 93, 0.6)" stroke="rgba(74, 158, 255, 0.3)" strokeWidth="0.5" />
        <text x="50" y="68" textAnchor="middle" fill="#4a9eff" fontSize="6" fontWeight="600">DCM</text>

        <rect x="58" y="58" width="24" height="16" rx="3" fill="rgba(20, 54, 93, 0.6)" stroke="rgba(74, 158, 255, 0.3)" strokeWidth="0.5" />
        <text x="70" y="68" textAnchor="middle" fill="#4a9eff" fontSize="6" fontWeight="600">ACM</text>

        <rect x="88" y="58" width="24" height="16" rx="3" fill="rgba(20, 54, 93, 0.4)" stroke="rgba(74, 158, 255, 0.2)" strokeWidth="0.5" strokeDasharray="2,1" />
        <text x="100" y="68" textAnchor="middle" fill="rgba(74, 158, 255, 0.6)" fontSize="5">...</text>
      </g>
    </svg>
  );
}
