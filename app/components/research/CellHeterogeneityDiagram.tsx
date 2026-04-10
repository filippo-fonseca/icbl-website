"use client";

export default function CellHeterogeneityDiagram() {
  // Cell data with varying properties to show heterogeneity
  const cells = [
    { x: 80, y: 80, size: 50, opacity: 1, color: "#4a9eff", delay: 0 },
    { x: 160, y: 60, size: 42, opacity: 0.8, color: "#3d8ae6", delay: 0.1 },
    { x: 230, y: 90, size: 55, opacity: 0.9, color: "#5aafff", delay: 0.2 },
    { x: 300, y: 70, size: 38, opacity: 0.7, color: "#2a6bbd", delay: 0.15 },
    { x: 60, y: 160, size: 45, opacity: 0.85, color: "#4a9eff", delay: 0.25 },
    { x: 140, y: 145, size: 52, opacity: 0.95, color: "#5aafff", delay: 0.3 },
    { x: 220, y: 170, size: 48, opacity: 0.75, color: "#3d8ae6", delay: 0.35 },
    { x: 310, y: 150, size: 44, opacity: 0.88, color: "#4a9eff", delay: 0.2 },
    { x: 100, y: 240, size: 40, opacity: 0.7, color: "#2a6bbd", delay: 0.4 },
    { x: 180, y: 235, size: 58, opacity: 1, color: "#5aafff", delay: 0.45 },
    { x: 270, y: 250, size: 46, opacity: 0.82, color: "#4a9eff", delay: 0.5 },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <svg
        viewBox="0 0 400 360"
        className="w-full h-full max-w-md"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Cell gradient */}
          <radialGradient id="cellGradient" cx="30%" cy="30%">
            <stop offset="0%" stopColor="white" stopOpacity="0.3" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>

          {/* Nucleus gradient */}
          <radialGradient id="nucleusGradient" cx="40%" cy="40%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
            <stop offset="100%" stopColor="rgba(20, 54, 93, 0.8)" />
          </radialGradient>

          <filter id="cellGlow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Pulse animation */}
          <filter id="pulse">
            <feGaussianBlur stdDeviation="2" />
          </filter>
        </defs>

        {/* Background grid pattern */}
        <g stroke="rgba(74, 158, 255, 0.05)" strokeWidth="1">
          {[...Array(9)].map((_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 40 + 20} x2="400" y2={i * 40 + 20} />
          ))}
          {[...Array(11)].map((_, i) => (
            <line key={`v${i}`} x1={i * 40} y1="0" x2={i * 40} y2="320" />
          ))}
        </g>

        {/* Cells showing heterogeneity */}
        {cells.map((cell, i) => (
          <g
            key={i}
            className="animate-scale-in"
            style={{ animationDelay: `${cell.delay}s` }}
            filter="url(#cellGlow)"
          >
            {/* Cell membrane */}
            <ellipse
              cx={cell.x}
              cy={cell.y}
              rx={cell.size * 0.55}
              ry={cell.size * 0.4}
              fill={cell.color}
              fillOpacity={cell.opacity * 0.3}
              stroke={cell.color}
              strokeWidth="1.5"
              strokeOpacity={cell.opacity * 0.6}
            />
            {/* Cell highlight */}
            <ellipse
              cx={cell.x}
              cy={cell.y}
              rx={cell.size * 0.55}
              ry={cell.size * 0.4}
              fill="url(#cellGradient)"
            />
            {/* Nucleus */}
            <ellipse
              cx={cell.x}
              cy={cell.y}
              rx={cell.size * 0.2}
              ry={cell.size * 0.15}
              fill="url(#nucleusGradient)"
              stroke="rgba(74, 158, 255, 0.5)"
              strokeWidth="0.5"
            />
            {/* Sarcomere striations (characteristic of cardiomyocytes) */}
            {[...Array(3)].map((_, j) => (
              <line
                key={j}
                x1={cell.x - cell.size * 0.4 + j * cell.size * 0.25}
                y1={cell.y - cell.size * 0.25}
                x2={cell.x - cell.size * 0.4 + j * cell.size * 0.25}
                y2={cell.y + cell.size * 0.25}
                stroke={cell.color}
                strokeWidth="0.5"
                strokeOpacity={0.3}
              />
            ))}
          </g>
        ))}

        {/* Signal waves between cells */}
        <g className="animate-draw" style={{ animationDelay: "0.6s" }}>
          <path
            d="M130 80 Q150 70 160 80"
            stroke="rgba(74, 158, 255, 0.4)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="4,4"
          />
          <path
            d="M200 145 Q215 135 230 145"
            stroke="rgba(74, 158, 255, 0.3)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="4,4"
          />
          <path
            d="M140 235 Q160 225 180 235"
            stroke="rgba(74, 158, 255, 0.35)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="4,4"
          />
        </g>

        {/* Legend */}
        <g transform="translate(20, 300)">
          <text fill="rgba(255,255,255,0.5)" fontSize="9" fontWeight="500">
            Cell-to-cell variation in:
          </text>
          <g transform="translate(0, 15)">
            <rect x="0" y="0" width="8" height="8" rx="2" fill="#4a9eff" fillOpacity="0.9" />
            <text x="14" y="7" fill="rgba(255,255,255,0.4)" fontSize="8">Size</text>

            <rect x="50" y="0" width="8" height="8" rx="2" fill="#4a9eff" fillOpacity="0.5" />
            <text x="64" y="7" fill="rgba(255,255,255,0.4)" fontSize="8">Expression</text>

            <rect x="120" y="0" width="8" height="8" rx="2" fill="#2a6bbd" />
            <text x="134" y="7" fill="rgba(255,255,255,0.4)" fontSize="8">Function</text>
          </g>
        </g>

        {/* Title area */}
        <g transform="translate(200, 340)">
          <text textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="10">
            Cardiomyocyte population with functional heterogeneity
          </text>
        </g>

        {/* Decorative elements */}
        <circle cx="360" cy="30" r="3" fill="rgba(74, 158, 255, 0.2)" />
        <circle cx="375" cy="50" r="2" fill="rgba(74, 158, 255, 0.15)" />
        <circle cx="25" cy="290" r="2" fill="rgba(74, 158, 255, 0.15)" />
      </svg>
    </div>
  );
}
