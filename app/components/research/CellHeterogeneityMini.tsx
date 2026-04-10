"use client";

export default function CellHeterogeneityMini() {
  const cells = [
    { x: 25, y: 25, size: 18, opacity: 1, color: "#4a9eff" },
    { x: 55, y: 20, size: 14, opacity: 0.8, color: "#3d8ae6" },
    { x: 85, y: 28, size: 20, opacity: 0.9, color: "#5aafff" },
    { x: 20, y: 50, size: 16, opacity: 0.85, color: "#4a9eff" },
    { x: 50, y: 48, size: 19, opacity: 0.95, color: "#5aafff" },
    { x: 80, y: 52, size: 15, opacity: 0.75, color: "#3d8ae6" },
    { x: 35, y: 70, size: 14, opacity: 0.7, color: "#2a6bbd" },
    { x: 65, y: 68, size: 17, opacity: 0.88, color: "#4a9eff" },
    { x: 95, y: 72, size: 13, opacity: 0.65, color: "#5aafff" },
  ];

  return (
    <svg
      viewBox="0 0 120 80"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="miniCellGrad" cx="30%" cy="30%">
          <stop offset="0%" stopColor="white" stopOpacity="0.3" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <filter id="miniCellGlow">
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Grid pattern */}
      <g stroke="rgba(74, 158, 255, 0.05)" strokeWidth="0.5">
        {[...Array(5)].map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 20 + 10} x2="120" y2={i * 20 + 10} />
        ))}
        {[...Array(7)].map((_, i) => (
          <line key={`v${i}`} x1={i * 20} y1="0" x2={i * 20} y2="80" />
        ))}
      </g>

      {/* Cells */}
      {cells.map((cell, i) => (
        <g key={i} filter="url(#miniCellGlow)">
          <ellipse
            cx={cell.x}
            cy={cell.y}
            rx={cell.size * 0.5}
            ry={cell.size * 0.35}
            fill={cell.color}
            fillOpacity={cell.opacity * 0.3}
            stroke={cell.color}
            strokeWidth="0.75"
            strokeOpacity={cell.opacity * 0.6}
          />
          <ellipse
            cx={cell.x}
            cy={cell.y}
            rx={cell.size * 0.5}
            ry={cell.size * 0.35}
            fill="url(#miniCellGrad)"
          />
          {/* Nucleus */}
          <ellipse
            cx={cell.x}
            cy={cell.y}
            rx={cell.size * 0.15}
            ry={cell.size * 0.1}
            fill="rgba(20, 54, 93, 0.8)"
          />
        </g>
      ))}

      {/* Signal dots */}
      <circle cx="40" y="35" r="1" fill="rgba(74, 158, 255, 0.5)">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="70" cy="55" r="1" fill="rgba(74, 158, 255, 0.5)">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" begin="0.5s" />
      </circle>
    </svg>
  );
}
