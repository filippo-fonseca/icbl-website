"use client";

export default function MechanobiologyMini() {
  return (
    <svg
      viewBox="0 0 120 80"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="miniMechCellGrad" cx="40%" cy="40%">
          <stop offset="0%" stopColor="#4a9eff" stopOpacity="0.4" />
          <stop offset="70%" stopColor="#14365d" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#14365d" stopOpacity="0.3" />
        </radialGradient>
        <linearGradient id="miniFiberGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(74, 158, 255, 0.1)" />
          <stop offset="50%" stopColor="rgba(74, 158, 255, 0.3)" />
          <stop offset="100%" stopColor="rgba(74, 158, 255, 0.1)" />
        </linearGradient>
        <marker id="miniArrow" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
          <polygon points="0 0, 6 2, 0 4" fill="#4a9eff" />
        </marker>
        <marker id="miniArrowIn" markerWidth="5" markerHeight="4" refX="0" refY="2" orient="auto">
          <polygon points="5 0, 0 2, 5 4" fill="rgba(255, 150, 100, 0.8)" />
        </marker>
        <filter id="miniMechGlow">
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* ECM fibers */}
      <g stroke="url(#miniFiberGrad)" strokeWidth="1" fill="none">
        <path d="M5 20 Q40 15 60 20 T115 18" />
        <path d="M5 40 Q40 45 60 40 T115 42" />
        <path d="M5 60 Q40 55 60 60 T115 58" />
        <path d="M25 5 Q20 30 25 50 T22 75" />
        <path d="M60 5 Q65 30 60 50 T63 75" />
        <path d="M95 5 Q90 30 95 50 T92 75" />
      </g>

      {/* Central cell */}
      <g filter="url(#miniMechGlow)">
        <ellipse cx="60" cy="40" rx="22" ry="14" fill="url(#miniMechCellGrad)" stroke="#4a9eff" strokeWidth="1" />
        <ellipse cx="60" cy="40" rx="6" ry="4" fill="rgba(20, 54, 93, 0.8)" />
        {/* Sarcomeres */}
        {[-12, -4, 4, 12].map((offset, i) => (
          <line key={i} x1={60 + offset} y1="32" x2={60 + offset} y2="48" stroke="rgba(74, 158, 255, 0.3)" strokeWidth="0.5" />
        ))}
      </g>

      {/* Focal adhesions */}
      {[{ x: 38, y: 40 }, { x: 42, y: 30 }, { x: 42, y: 50 }, { x: 82, y: 40 }, { x: 78, y: 30 }, { x: 78, y: 50 }].map((pos, i) => (
        <circle key={i} cx={pos.x} cy={pos.y} r="2" fill="#4a9eff" fillOpacity="0.6" />
      ))}

      {/* Force arrows - compression */}
      <line x1="12" y1="40" x2="30" y2="40" stroke="rgba(255, 150, 100, 0.7)" strokeWidth="1.5" markerEnd="url(#miniArrowIn)" />
      <line x1="108" y1="40" x2="90" y2="40" stroke="rgba(255, 150, 100, 0.7)" strokeWidth="1.5" markerEnd="url(#miniArrowIn)" />

      {/* Force arrows - stretch */}
      <line x1="60" y1="22" x2="60" y2="8" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#miniArrow)" />
      <line x1="60" y1="58" x2="60" y2="72" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#miniArrow)" />

      {/* Signaling waves */}
      <circle cx="60" cy="40" r="18" stroke="rgba(74, 158, 255, 0.15)" strokeWidth="0.5" fill="none">
        <animate attributeName="r" values="18;22;18" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.3;0.1;0.3" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}
