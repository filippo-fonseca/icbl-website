"use client";

export default function CardiomyopathyTree() {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <svg
        viewBox="0 0 400 360"
        className="w-full h-full max-w-md"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Definitions for gradients and filters */}
        <defs>
          <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e4a7d" />
            <stop offset="100%" stopColor="#14365d" />
          </linearGradient>
          <linearGradient id="rootGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4a9eff" />
            <stop offset="100%" stopColor="#14365d" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="softGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Connection lines */}
        <g stroke="rgba(74, 158, 255, 0.3)" strokeWidth="2" fill="none">
          {/* Main trunk */}
          <path d="M200 70 L200 110" className="animate-draw" style={{ animationDelay: "0.2s" }} />

          {/* First split */}
          <path d="M200 110 Q200 130 100 150" className="animate-draw" style={{ animationDelay: "0.4s" }} />
          <path d="M200 110 Q200 130 300 150" className="animate-draw" style={{ animationDelay: "0.4s" }} />

          {/* Left branch splits */}
          <path d="M100 180 Q100 200 55 220" className="animate-draw" style={{ animationDelay: "0.6s" }} />
          <path d="M100 180 Q100 200 145 220" className="animate-draw" style={{ animationDelay: "0.6s" }} />

          {/* Right branch splits */}
          <path d="M300 180 Q300 200 255 220" className="animate-draw" style={{ animationDelay: "0.6s" }} />
          <path d="M300 180 Q300 200 345 220" className="animate-draw" style={{ animationDelay: "0.6s" }} />
        </g>

        {/* Root node - Inherited Cardiomyopathies */}
        <g filter="url(#glow)">
          <rect
            x="115"
            y="20"
            width="170"
            height="50"
            rx="25"
            fill="url(#rootGradient)"
            className="animate-scale-in"
          />
          <text
            x="200"
            y="40"
            textAnchor="middle"
            fill="white"
            fontSize="11"
            fontWeight="500"
            className="animate-scale-in"
          >
            Inherited
          </text>
          <text
            x="200"
            y="55"
            textAnchor="middle"
            fill="white"
            fontSize="11"
            fontWeight="500"
            className="animate-scale-in"
          >
            Cardiomyopathies
          </text>
        </g>

        {/* Level 1 nodes */}
        {/* Structural */}
        <g filter="url(#softGlow)" className="animate-scale-in" style={{ animationDelay: "0.3s" }}>
          <rect
            x="45"
            y="130"
            width="110"
            height="50"
            rx="25"
            fill="url(#nodeGradient)"
          />
          <text x="100" y="152" textAnchor="middle" fill="white" fontSize="10" fontWeight="500">
            Structural
          </text>
          <text x="100" y="166" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="9">
            Changes
          </text>
        </g>

        {/* Arrhythmogenic */}
        <g filter="url(#softGlow)" className="animate-scale-in" style={{ animationDelay: "0.3s" }}>
          <rect
            x="245"
            y="130"
            width="110"
            height="50"
            rx="25"
            fill="url(#nodeGradient)"
          />
          <text x="300" y="152" textAnchor="middle" fill="white" fontSize="10" fontWeight="500">
            Arrhythmogenic
          </text>
          <text x="300" y="166" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="9">
            Electrical
          </text>
        </g>

        {/* Level 2 nodes - Terminal leaves */}
        {/* HCM */}
        <g filter="url(#softGlow)" className="animate-scale-in" style={{ animationDelay: "0.5s" }}>
          <rect
            x="15"
            y="220"
            width="80"
            height="60"
            rx="10"
            fill="rgba(20, 54, 93, 0.6)"
            stroke="rgba(74, 158, 255, 0.3)"
            strokeWidth="1"
          />
          <text x="55" y="240" textAnchor="middle" fill="#4a9eff" fontSize="13" fontWeight="600">
            HCM
          </text>
          <text x="55" y="254" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="7">
            Hypertrophic
          </text>
          <text x="55" y="266" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="7">
            Cardiomyopathy
          </text>
        </g>

        {/* DCM */}
        <g filter="url(#softGlow)" className="animate-scale-in" style={{ animationDelay: "0.6s" }}>
          <rect
            x="105"
            y="220"
            width="80"
            height="60"
            rx="10"
            fill="rgba(20, 54, 93, 0.6)"
            stroke="rgba(74, 158, 255, 0.3)"
            strokeWidth="1"
          />
          <text x="145" y="240" textAnchor="middle" fill="#4a9eff" fontSize="13" fontWeight="600">
            DCM
          </text>
          <text x="145" y="254" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="7">
            Dilated
          </text>
          <text x="145" y="266" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="7">
            Cardiomyopathy
          </text>
        </g>

        {/* ACM */}
        <g filter="url(#softGlow)" className="animate-scale-in" style={{ animationDelay: "0.7s" }}>
          <rect
            x="215"
            y="220"
            width="80"
            height="60"
            rx="10"
            fill="rgba(20, 54, 93, 0.6)"
            stroke="rgba(74, 158, 255, 0.3)"
            strokeWidth="1"
          />
          <text x="255" y="240" textAnchor="middle" fill="#4a9eff" fontSize="13" fontWeight="600">
            ACM
          </text>
          <text x="255" y="254" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="7">
            Arrhythmogenic
          </text>
          <text x="255" y="266" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="7">
            Cardiomyopathy
          </text>
        </g>

        {/* Others */}
        <g filter="url(#softGlow)" className="animate-scale-in" style={{ animationDelay: "0.8s" }}>
          <rect
            x="305"
            y="220"
            width="80"
            height="60"
            rx="10"
            fill="rgba(20, 54, 93, 0.4)"
            stroke="rgba(74, 158, 255, 0.2)"
            strokeWidth="1"
            strokeDasharray="4,2"
          />
          <text x="345" y="240" textAnchor="middle" fill="rgba(74, 158, 255, 0.7)" fontSize="11" fontWeight="500">
            Others
          </text>
          <text x="345" y="254" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="7">
            RCM, LVNC,
          </text>
          <text x="345" y="266" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="7">
            ARVC, etc.
          </text>
        </g>

        {/* Subtitle */}
        <text x="200" y="310" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="9">
          Genetic mutations affecting cardiac muscle structure and function
        </text>

        {/* Decorative dots */}
        <circle cx="30" cy="100" r="2" fill="rgba(74, 158, 255, 0.3)" />
        <circle cx="370" cy="100" r="2" fill="rgba(74, 158, 255, 0.3)" />
        <circle cx="10" cy="295" r="1.5" fill="rgba(74, 158, 255, 0.2)" />
        <circle cx="390" cy="295" r="1.5" fill="rgba(74, 158, 255, 0.2)" />
      </svg>
    </div>
  );
}
