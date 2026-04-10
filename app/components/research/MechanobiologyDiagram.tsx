"use client";

export default function MechanobiologyDiagram() {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <svg
        viewBox="0 0 400 360"
        className="w-full h-full max-w-md"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Cell gradient */}
          <radialGradient id="mechCellGradient" cx="40%" cy="40%">
            <stop offset="0%" stopColor="#4a9eff" stopOpacity="0.4" />
            <stop offset="70%" stopColor="#14365d" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#14365d" stopOpacity="0.3" />
          </radialGradient>

          {/* ECM fiber gradient */}
          <linearGradient id="fiberGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(74, 158, 255, 0.1)" />
            <stop offset="50%" stopColor="rgba(74, 158, 255, 0.4)" />
            <stop offset="100%" stopColor="rgba(74, 158, 255, 0.1)" />
          </linearGradient>

          {/* Arrow marker */}
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="7"
            refX="9"
            refY="3.5"
            orient="auto"
          >
            <polygon points="0 0, 10 3.5, 0 7" fill="#4a9eff" />
          </marker>

          {/* Inward arrow */}
          <marker
            id="arrowheadIn"
            markerWidth="8"
            markerHeight="6"
            refX="0"
            refY="3"
            orient="auto"
          >
            <polygon points="8 0, 0 3, 8 6" fill="rgba(255, 150, 100, 0.8)" />
          </marker>

          <filter id="mechGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ECM fiber network background */}
        <g className="animate-draw" style={{ animationDelay: "0s" }}>
          {/* Horizontal fibers */}
          <path d="M30 80 Q100 70 170 80 T310 85 T380 75" stroke="url(#fiberGradient)" strokeWidth="2" fill="none" />
          <path d="M20 140 Q90 150 160 140 T300 145 T370 135" stroke="url(#fiberGradient)" strokeWidth="1.5" fill="none" />
          <path d="M30 200 Q100 190 170 200 T310 195 T380 205" stroke="url(#fiberGradient)" strokeWidth="2" fill="none" />
          <path d="M20 260 Q90 270 160 260 T300 265 T370 255" stroke="url(#fiberGradient)" strokeWidth="1.5" fill="none" />

          {/* Vertical fibers */}
          <path d="M80 30 Q70 100 80 170 T75 310" stroke="url(#fiberGradient)" strokeWidth="1.5" fill="none" />
          <path d="M160 40 Q170 110 160 180 T165 280" stroke="url(#fiberGradient)" strokeWidth="1" fill="none" />
          <path d="M240 30 Q230 100 240 170 T235 310" stroke="url(#fiberGradient)" strokeWidth="1.5" fill="none" />
          <path d="M320 40 Q330 110 320 180 T325 280" stroke="url(#fiberGradient)" strokeWidth="1" fill="none" />

          {/* Cross fibers */}
          <path d="M50 50 Q120 100 180 140" stroke="rgba(74, 158, 255, 0.15)" strokeWidth="1" fill="none" />
          <path d="M350 50 Q280 100 220 140" stroke="rgba(74, 158, 255, 0.15)" strokeWidth="1" fill="none" />
          <path d="M50 280 Q120 230 180 190" stroke="rgba(74, 158, 255, 0.15)" strokeWidth="1" fill="none" />
          <path d="M350 280 Q280 230 220 190" stroke="rgba(74, 158, 255, 0.15)" strokeWidth="1" fill="none" />
        </g>

        {/* Central cardiomyocyte */}
        <g filter="url(#mechGlow)" className="animate-scale-in" style={{ animationDelay: "0.3s" }}>
          <ellipse
            cx="200"
            cy="165"
            rx="65"
            ry="45"
            fill="url(#mechCellGradient)"
            stroke="#4a9eff"
            strokeWidth="2"
          />
          {/* Nucleus */}
          <ellipse
            cx="200"
            cy="165"
            rx="20"
            ry="14"
            fill="rgba(20, 54, 93, 0.8)"
            stroke="rgba(74, 158, 255, 0.5)"
            strokeWidth="1"
          />
          {/* Sarcomeres */}
          {[-40, -20, 0, 20, 40].map((offset, i) => (
            <line
              key={i}
              x1={200 + offset}
              y1="135"
              x2={200 + offset}
              y2="195"
              stroke="rgba(74, 158, 255, 0.3)"
              strokeWidth="1"
            />
          ))}
        </g>

        {/* Focal adhesions / integrins */}
        {[
          { x: 135, y: 165 },
          { x: 145, y: 135 },
          { x: 145, y: 195 },
          { x: 265, y: 165 },
          { x: 255, y: 135 },
          { x: 255, y: 195 },
        ].map((pos, i) => (
          <g key={i} className="animate-scale-in" style={{ animationDelay: `${0.4 + i * 0.05}s` }}>
            <circle cx={pos.x} cy={pos.y} r="4" fill="#4a9eff" fillOpacity="0.6" />
            <circle cx={pos.x} cy={pos.y} r="2" fill="#4a9eff" />
          </g>
        ))}

        {/* Mechanical force arrows - compression (inward) */}
        <g className="animate-draw" style={{ animationDelay: "0.6s" }}>
          {/* Left compression */}
          <line
            x1="60"
            y1="165"
            x2="115"
            y2="165"
            stroke="rgba(255, 150, 100, 0.7)"
            strokeWidth="2"
            markerEnd="url(#arrowheadIn)"
          />
          {/* Right compression */}
          <line
            x1="340"
            y1="165"
            x2="285"
            y2="165"
            stroke="rgba(255, 150, 100, 0.7)"
            strokeWidth="2"
            markerEnd="url(#arrowheadIn)"
          />
        </g>

        {/* Stretch/tension arrows (outward) */}
        <g className="animate-draw" style={{ animationDelay: "0.7s" }}>
          {/* Top stretch */}
          <line
            x1="200"
            y1="105"
            x2="200"
            y2="60"
            stroke="#4a9eff"
            strokeWidth="2"
            markerEnd="url(#arrowhead)"
          />
          {/* Bottom stretch */}
          <line
            x1="200"
            y1="225"
            x2="200"
            y2="270"
            stroke="#4a9eff"
            strokeWidth="2"
            markerEnd="url(#arrowhead)"
          />
        </g>

        {/* Signaling pathway indicators */}
        <g className="animate-scale-in" style={{ animationDelay: "0.8s" }}>
          {/* Mechanotransduction signals */}
          <circle cx="200" cy="165" r="30" stroke="rgba(74, 158, 255, 0.2)" strokeWidth="1" fill="none" strokeDasharray="4,4">
            <animate attributeName="r" values="30;35;30" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.5;0.2;0.5" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="200" cy="165" r="45" stroke="rgba(74, 158, 255, 0.1)" strokeWidth="1" fill="none" strokeDasharray="4,4">
            <animate attributeName="r" values="45;50;45" dur="2s" repeatCount="indefinite" begin="0.3s" />
            <animate attributeName="opacity" values="0.3;0.1;0.3" dur="2s" repeatCount="indefinite" begin="0.3s" />
          </circle>
        </g>

        {/* Labels */}
        <g fontSize="9" fill="rgba(255,255,255,0.5)">
          <text x="30" y="165" textAnchor="start" fill="rgba(255, 150, 100, 0.8)">Compression</text>
          <text x="200" y="45" textAnchor="middle" fill="#4a9eff">Stretch</text>
          <text x="200" y="290" textAnchor="middle" fill="#4a9eff">Stretch</text>
        </g>

        {/* Legend */}
        <g transform="translate(20, 310)">
          <text fill="rgba(255,255,255,0.4)" fontSize="9">
            ECM = Extracellular Matrix
          </text>
          <g transform="translate(150, 0)">
            <line x1="0" y1="-3" x2="20" y2="-3" stroke="#4a9eff" strokeWidth="2" />
            <text x="25" y="0" fill="rgba(255,255,255,0.4)" fontSize="8">Tension</text>
          </g>
          <g transform="translate(250, 0)">
            <line x1="0" y1="-3" x2="20" y2="-3" stroke="rgba(255, 150, 100, 0.7)" strokeWidth="2" />
            <text x="25" y="0" fill="rgba(255,255,255,0.4)" fontSize="8">Compression</text>
          </g>
        </g>

        {/* Title */}
        <text x="200" y="345" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="10">
          Biomechanical forces and mechanotransduction
        </text>
      </svg>
    </div>
  );
}
