// Animated SVG food illustrations used throughout the site
import React from 'react';

export function PastaIllustration({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 180" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Bowl */}
      <ellipse cx="100" cy="140" rx="75" ry="22" fill="#d49900" opacity="0.3" />
      <path d="M30 110 Q30 158 100 158 Q170 158 170 110 Z" fill="#ffd23f" stroke="#f5b700" strokeWidth="2" />
      <path d="M30 110 Q30 120 100 125 Q170 120 170 110 Z" fill="#ffe56b" />
      {/* Pasta swirls */}
      <path d="M60 108 Q65 95 75 100 Q85 105 80 115 Q75 125 65 120" fill="none" stroke="#f5b700" strokeWidth="4" strokeLinecap="round" />
      <path d="M85 100 Q90 88 100 93 Q110 98 105 108 Q100 118 90 113" fill="none" stroke="#e69500" strokeWidth="4" strokeLinecap="round" />
      <path d="M110 104 Q115 92 125 97 Q135 102 130 112 Q125 122 115 117" fill="none" stroke="#f5b700" strokeWidth="4" strokeLinecap="round" />
      {/* Cheese drip */}
      <path d="M70 110 Q72 118 68 122 Q66 128 70 130" fill="none" stroke="#ffd23f" strokeWidth="5" strokeLinecap="round" />
      <path d="M105 106 Q107 115 103 120 Q101 126 105 128" fill="none" stroke="#ffe56b" strokeWidth="5" strokeLinecap="round" />
      <path d="M130 110 Q132 119 128 124" fill="none" stroke="#ffd23f" strokeWidth="4" strokeLinecap="round" />
      {/* Chicken pieces */}
      <ellipse cx="80" cy="100" rx="12" ry="8" fill="#c0651a" />
      <ellipse cx="115" cy="98" rx="10" ry="7" fill="#b5581a" />
      {/* Parsley */}
      <circle cx="95" cy="92" r="5" fill="#22c55e" />
      <circle cx="103" cy="90" r="4" fill="#16a34a" />
      {/* Steam */}
      <path d="M80 80 Q83 70 80 62" stroke="#fed7e2" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.7" className="animate-steam" />
      <path d="M100 76 Q103 66 100 58" stroke="#fed7e2" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" className="animate-steam" style={{ animationDelay: '0.7s' }} />
      <path d="M120 78 Q123 68 120 60" stroke="#fed7e2" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5" className="animate-steam" style={{ animationDelay: '1.4s' }} />
    </svg>
  );
}

export function CupcakeIllustration({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 150" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Case */}
      <path d="M30 90 L40 130 L80 130 L90 90 Z" fill="#ffd23f" stroke="#f5b700" strokeWidth="1.5" />
      <line x1="50" y1="90" x2="45" y2="130" stroke="#f5b700" strokeWidth="1" opacity="0.5" />
      <line x1="60" y1="90" x2="60" y2="130" stroke="#f5b700" strokeWidth="1" opacity="0.5" />
      <line x1="70" y1="90" x2="75" y2="130" stroke="#f5b700" strokeWidth="1" opacity="0.5" />
      {/* Cake body */}
      <rect x="28" y="82" width="64" height="16" rx="4" fill="#fde68a" />
      {/* Icing */}
      <path d="M25 82 Q60 50 95 82" fill="#ec4899" />
      <path d="M35 76 Q60 56 85 76" fill="#f472b6" />
      {/* Icing waves */}
      <path d="M28 80 Q35 72 42 78 Q49 84 56 76 Q63 68 70 76 Q77 84 84 78 Q91 72 95 80" fill="#fce7f3" stroke="#ec4899" strokeWidth="1" />
      {/* Sprinkles */}
      <rect x="45" y="62" width="5" height="2" rx="1" fill="#2dd4bf" transform="rotate(30 47 63)" />
      <rect x="60" y="58" width="5" height="2" rx="1" fill="#ffd23f" transform="rotate(-20 62 59)" />
      <rect x="72" y="64" width="5" height="2" rx="1" fill="#ff5e9d" transform="rotate(45 74 65)" />
      <rect x="52" y="72" width="4" height="2" rx="1" fill="#22c55e" transform="rotate(10 54 73)" />
      {/* Cherry */}
      <circle cx="60" cy="54" r="6" fill="#e63946" />
      <path d="M60 48 Q65 40 70 38" stroke="#16a34a" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function ChickenIllustration({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 180 160" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Plate */}
      <ellipse cx="90" cy="135" rx="70" ry="18" fill="#e5e7eb" />
      <ellipse cx="90" cy="132" rx="68" ry="16" fill="#f9fafb" />
      {/* Schnitzel */}
      <path d="M30 110 Q50 85 90 88 Q130 85 150 110 Q145 130 90 132 Q35 130 30 110 Z" fill="#c0651a" />
      <path d="M38 106 Q55 86 90 89 Q125 86 142 106 Q138 125 90 127 Q42 125 38 106 Z" fill="#d97706" />
      {/* Breaded texture */}
      <circle cx="60" cy="100" r="4" fill="#92400e" opacity="0.4" />
      <circle cx="80" cy="94" r="3" fill="#92400e" opacity="0.4" />
      <circle cx="100" cy="96" r="5" fill="#92400e" opacity="0.4" />
      <circle cx="118" cy="102" r="3" fill="#92400e" opacity="0.4" />
      <circle cx="70" cy="112" r="4" fill="#92400e" opacity="0.3" />
      <circle cx="95" cy="115" r="3" fill="#92400e" opacity="0.3" />
      <circle cx="112" cy="108" r="4" fill="#92400e" opacity="0.3" />
      {/* Pepper sauce */}
      <path d="M60 95 Q80 88 110 92 Q125 95 128 102" fill="none" stroke="#7c2d12" strokeWidth="5" strokeLinecap="round" opacity="0.7" />
      {/* Chips on side */}
      <rect x="148" y="110" width="14" height="5" rx="2" fill="#fbbf24" transform="rotate(-10 155 112)" />
      <rect x="150" y="118" width="14" height="5" rx="2" fill="#fcd34d" transform="rotate(5 157 120)" />
      <rect x="146" y="125" width="12" height="5" rx="2" fill="#fbbf24" transform="rotate(-5 152 127)" />
      {/* Herbs */}
      <circle cx="80" cy="100" r="3" fill="#22c55e" />
      <circle cx="100" cy="97" r="2.5" fill="#16a34a" />
      <circle cx="110" cy="105" r="2" fill="#22c55e" />
    </svg>
  );
}

export function CottageIllustration({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 180 170" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Dish */}
      <ellipse cx="90" cy="148" rx="72" ry="16" fill="#d1d5db" />
      <path d="M20 120 Q20 152 90 152 Q160 152 160 120 Z" fill="#f3f4f6" stroke="#e5e7eb" strokeWidth="2" />
      {/* Mash layer */}
      <path d="M22 120 Q90 108 158 120" fill="#fde68a" stroke="#f5b700" strokeWidth="2" />
      <path d="M25 118 Q90 106 155 118" fill="#ffe56b" />
      {/* Mince layer */}
      <path d="M30 108 Q90 98 150 108" fill="#b45309" />
      <path d="M32 106 Q90 96 148 106" fill="#92400e" />
      {/* Cheese topping */}
      <path d="M25 118 Q90 110 155 118 Q150 125 90 128 Q30 125 25 118 Z" fill="#fcd34d" opacity="0.8" />
      {/* Cheese bubbles */}
      <circle cx="55" cy="120" r="5" fill="#fde68a" />
      <circle cx="80" cy="118" r="4" fill="#ffe56b" />
      <circle cx="105" cy="119" r="6" fill="#fde68a" />
      <circle cx="128" cy="118" r="4" fill="#ffe56b" />
      {/* Steam */}
      <path d="M70 98 Q73 88 70 80" stroke="#fed7e2" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" className="animate-steam" />
      <path d="M90 94 Q93 84 90 76" stroke="#fed7e2" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5" className="animate-steam" style={{ animationDelay: '1s' }} />
      <path d="M110 96 Q113 86 110 78" stroke="#fed7e2" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" className="animate-steam" style={{ animationDelay: '0.5s' }} />
    </svg>
  );
}

export function WingsIllustration({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 140" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Wings */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <g key={i} transform={`translate(${15 + (i % 3) * 46}, ${i < 3 ? 30 : 78})`}>
          <path d="M0 30 Q-12 5 5 0 Q25 -5 30 25 Q35 50 18 50 Q5 55 0 30 Z"
            fill={i % 2 === 0 ? '#c0651a' : '#b5581a'} />
          <path d="M4 28 Q-6 8 6 4 Q20 0 24 22" fill="#d97706" opacity="0.5" />
          {/* Sauce glaze */}
          <path d="M2 28 Q-4 10 7 6 Q18 2 22 20" fill={i % 2 === 0 ? '#991b1b' : '#7f1d1d'} opacity="0.4" />
        </g>
      ))}
      {/* Bowl of rice */}
      <ellipse cx="130" cy="115" rx="22" ry="8" fill="#d1d5db" />
      <path d="M110 100 Q110 118 130 118 Q150 118 150 100 Z" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1.5" />
      <path d="M112 100 Q130 96 148 100" fill="white" />
      {/* Rice grains */}
      {[[120, 100], [128, 98], [136, 100], [124, 103], [132, 103]].map(([x, y], idx) => (
        <ellipse key={idx} cx={x} cy={y} rx="2" ry="1" fill="#f3f4f6" />
      ))}
      {/* Sesame seeds on wings */}
      <circle cx="42" cy="46" r="1.5" fill="#fde68a" />
      <circle cx="55" cy="40" r="1.5" fill="#fde68a" />
      <circle cx="88" cy="44" r="1.5" fill="#fde68a" />
    </svg>
  );
}

export function BakeryBasketIllustration({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 180" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Basket */}
      <path d="M40 130 L50 168 L150 168 L160 130 Z" fill="#a16207" />
      <path d="M40 130 L160 130" stroke="#ca8a04" strokeWidth="4" />
      {/* Weave lines */}
      {[140, 150, 160].map((y, i) => (
        <line key={i} x1={42 + i * 2} y1={y} x2={158 - i * 2} y2={y} stroke="#ca8a04" strokeWidth="1.5" opacity="0.5" />
      ))}
      {/* Handle */}
      <path d="M70 130 Q100 100 130 130" fill="none" stroke="#92400e" strokeWidth="5" strokeLinecap="round" />
      {/* Bread loaf */}
      <ellipse cx="80" cy="122" rx="28" ry="14" fill="#ca8a04" />
      <path d="M54 122 Q80 108 106 122" fill="#fbbf24" />
      <path d="M60 118 Q80 110 100 118" fill="#fde68a" opacity="0.6" />
      {/* Croissant */}
      <path d="M100 116 Q115 100 130 108 Q140 115 130 122 Q120 130 108 125 Q98 120 100 116 Z" fill="#d97706" />
      <path d="M102 116 Q116 103 128 110" fill="none" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      {/* Muffin */}
      <path d="M48 118 Q55 108 68 110 Q75 118 68 125 Q55 128 48 118 Z" fill="#ec4899" />
      <ellipse cx="58" cy="112" rx="9" ry="7" fill="#f472b6" />
      {/* Sprinkles on muffin */}
      <rect x="53" y="110" width="4" height="1.5" rx="0.75" fill="#2dd4bf" transform="rotate(30)" />
      <rect x="60" y="108" width="3" height="1.5" rx="0.75" fill="#ffd23f" />
    </svg>
  );
}

export function ChickenBowlIllustration({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 180 160" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Bowl shadow */}
      <ellipse cx="90" cy="145" rx="68" ry="15" fill="#9ca3af" opacity="0.2" />
      {/* Bowl body */}
      <path d="M22 100 Q22 148 90 148 Q158 148 158 100 Z" fill="#fde68a" stroke="#f5b700" strokeWidth="2" />
      {/* Rice base */}
      <ellipse cx="90" cy="100" rx="66" ry="14" fill="#f9fafb" />
      <path d="M26 100 Q90 90 154 100" fill="white" />
      {/* Rice grain texture */}
      {[[55, 97], [70, 94], [85, 96], [100, 93], [115, 95], [130, 97]].map(([x, y], i) => (
        <ellipse key={i} cx={x} cy={y} rx="4" ry="1.5" fill="#f3f4f6" />
      ))}
      {/* Chicken curry sauce */}
      <path d="M35 118 Q65 108 90 112 Q115 108 145 118 Q140 135 90 138 Q40 135 35 118 Z" fill="#d97706" opacity="0.85" />
      {/* Chicken chunks */}
      <ellipse cx="70" cy="120" rx="12" ry="8" fill="#c0651a" />
      <ellipse cx="95" cy="116" rx="10" ry="7" fill="#b5581a" />
      <ellipse cx="116" cy="121" rx="11" ry="7" fill="#c0651a" />
      {/* Sauce drips */}
      <path d="M68 112 Q70 119 67 122" stroke="#f5b700" strokeWidth="3" strokeLinecap="round" fill="none" />
      {/* Herbs / garnish */}
      <circle cx="90" cy="112" r="4" fill="#22c55e" />
      <circle cx="100" cy="110" r="3" fill="#16a34a" />
      {/* Steam */}
      <path d="M75 90 Q78 80 75 72" stroke="#fed7e2" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" className="animate-steam" />
      <path d="M100 87 Q103 77 100 69" stroke="#fed7e2" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5" className="animate-steam" style={{ animationDelay: '1.1s' }} />
    </svg>
  );
}

export function SteakIllustration({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 170" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Plate */}
      <ellipse cx="100" cy="148" rx="78" ry="18" fill="#d1d5db" />
      <ellipse cx="100" cy="145" rx="76" ry="16" fill="#f3f4f6" />
      {/* Steak */}
      <path d="M35 105 Q45 78 80 80 Q110 78 140 85 Q165 90 162 110 Q158 128 120 130 Q80 132 50 125 Q28 118 35 105 Z" fill="#7f1d1d" />
      <path d="M40 104 Q50 80 82 82 Q112 80 138 87 Q160 92 157 110 Q153 126 118 128 Q80 130 52 122 Q34 116 40 104 Z" fill="#991b1b" />
      {/* Grill marks */}
      <line x1="65" y1="88" x2="55" y2="120" stroke="#450a0a" strokeWidth="4" strokeLinecap="round" opacity="0.5" />
      <line x1="85" y1="84" x2="75" y2="122" stroke="#450a0a" strokeWidth="4" strokeLinecap="round" opacity="0.5" />
      <line x1="105" y1="83" x2="96" y2="124" stroke="#450a0a" strokeWidth="4" strokeLinecap="round" opacity="0.5" />
      <line x1="125" y1="85" x2="118" y2="122" stroke="#450a0a" strokeWidth="4" strokeLinecap="round" opacity="0.5" />
      {/* Pepper sauce */}
      <path d="M45 100 Q90 92 148 100" fill="none" stroke="#78350f" strokeWidth="6" strokeLinecap="round" opacity="0.6" />
      {/* Mash */}
      <ellipse cx="158" cy="122" rx="22" ry="14" fill="#fde68a" />
      <path d="M138 120 Q158 114 178 120" fill="#ffe56b" />
      {/* Butternut */}
      <ellipse cx="42" cy="130" rx="18" ry="10" fill="#f97316" />
      <path d="M26 128 Q42 124 58 128" fill="#fb923c" />
      {/* Steam */}
      <path d="M90 78 Q93 68 90 60" stroke="#fed7e2" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" className="animate-steam" />
      <path d="M110 76 Q113 66 110 58" stroke="#fed7e2" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5" className="animate-steam" style={{ animationDelay: '0.8s' }} />
    </svg>
  );
}

export function FloatingPasta({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M10 30 Q15 15 25 20 Q35 25 30 35 Q25 45 15 40 Q5 35 10 30 Z" fill="#ffd23f" stroke="#f5b700" strokeWidth="1.5" />
      <path d="M12 30 Q17 18 24 22 Q32 26 28 34" fill="none" stroke="#f5b700" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M30 15 Q35 10 42 18 Q48 26 42 32 Q36 38 30 32 Q24 26 30 15 Z" fill="#fbbf24" stroke="#d97706" strokeWidth="1.5" />
      <circle cx="20" cy="22" r="4" fill="#c0651a" />
      <circle cx="38" cy="18" r="3" fill="#b5581a" />
      <circle cx="26" cy="36" r="3" fill="#22c55e" />
    </svg>
  );
}

export function FloatingCupcake({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 50 60" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M10 35 L15 52 L35 52 L40 35 Z" fill="#fcd34d" stroke="#f5b700" strokeWidth="1" />
      <rect x="8" y="30" width="34" height="10" rx="3" fill="#fde68a" />
      <path d="M6 30 Q25 14 44 30" fill="#ec4899" />
      <circle cx="25" cy="18" r="4" fill="#e63946" />
      <circle cx="18" cy="25" r="2" fill="#2dd4bf" />
      <circle cx="32" cy="22" r="2" fill="#ffd23f" />
    </svg>
  );
}

export function FloatingChilli({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 70" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M20 65 Q8 50 10 35 Q12 18 20 12 Q28 18 30 35 Q32 50 20 65 Z" fill="#e63946" />
      <path d="M20 65 Q14 52 15 38 Q16 25 20 18" fill="#ff5f6d" opacity="0.5" />
      <path d="M20 12 Q24 4 30 8" stroke="#22c55e" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function FloatingStar({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M25 5 L30 19 L45 19 L33 28 L38 42 L25 33 L12 42 L17 28 L5 19 L20 19 Z" fill="#ffd23f" stroke="#f5b700" strokeWidth="1" />
    </svg>
  );
}

export function FloatingDonut({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="30" cy="30" r="26" fill="#fcd34d" />
      <circle cx="30" cy="30" r="12" fill="#fff8e8" />
      <path d="M8 28 Q12 10 30 8 Q48 10 52 28" fill="#ec4899" opacity="0.85" />
      <circle cx="20" cy="22" r="2" fill="#2dd4bf" />
      <circle cx="30" cy="18" r="2" fill="#ff5f6d" />
      <circle cx="40" cy="22" r="2" fill="#22c55e" />
      <circle cx="16" cy="32" r="1.5" fill="#ffd23f" />
      <circle cx="44" cy="32" r="1.5" fill="#ec4899" />
    </svg>
  );
}

export function HeroIllustration({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 280" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Big bowl */}
      <ellipse cx="160" cy="248" rx="115" ry="26" fill="#b5581a" opacity="0.25" />
      <path d="M48 170 Q48 250 160 250 Q272 250 272 170 Z" fill="#ffd23f" stroke="#f5b700" strokeWidth="3" />
      <path d="M48 170 Q160 185 272 170" fill="#ffe56b" />
      {/* Pasta */}
      {[[75, 162], [110, 152], [145, 158], [180, 150], [215, 156], [245, 162]].map(([cx, cy], i) => (
        <path
          key={i}
          d={`M${cx - 14} ${cy + 10} Q${cx} ${cy - 18} ${cx + 14} ${cy + 10} Q${cx + 8} ${cy + 28} ${cx} ${cy + 25} Q${cx - 8} ${cy + 28} ${cx - 14} ${cy + 10} Z`}
          fill={i % 2 === 0 ? '#f5b700' : '#e69500'}
        />
      ))}
      {/* Cheese sauce */}
      <path d="M65 165 Q160 148 255 165 Q250 190 160 196 Q70 190 65 165 Z" fill="#fbbf24" opacity="0.7" />
      {/* Chicken pieces */}
      {[[95, 168], [148, 160], [195, 165], [230, 172]].map(([cx, cy], i) => (
        <ellipse key={i} cx={cx} cy={cy} rx={14 - i} ry={9} fill={i % 2 === 0 ? '#c0651a' : '#b5581a'} />
      ))}
      {/* Parsley top */}
      {[[130, 150], [160, 145], [190, 150]].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r={6 - i} fill={i === 1 ? '#16a34a' : '#22c55e'} />
      ))}
      {/* Steam trails */}
      {[[120, 135, 0], [160, 128, 0.8], [200, 133, 1.6]].map(([x, y, delay], i) => (
        <path
          key={i}
          d={`M${x} ${y} Q${x + 8} ${y - 20} ${x} ${y - 40}`}
          stroke="#fce7f3"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          opacity="0.7"
          className="animate-steam"
          style={{ animationDelay: `${delay}s` }}
        />
      ))}
      {/* Floating elements */}
      <g className="animate-float-slow" style={{ transformOrigin: '62px 82px' }}>
        <path d="M42 82 Q55 60 72 68 Q82 76 76 90 Q70 104 56 98 Q40 90 42 82 Z" fill="#ec4899" opacity="0.85" />
        <circle cx="56" cy="76" r="4" fill="#fce7f3" opacity="0.6" />
      </g>
      <g className="animate-float-med" style={{ transformOrigin: '268px 78px', animationDelay: '1s' }}>
        <circle cx="268" cy="78" r="18" fill="#fcd34d" />
        <circle cx="268" cy="78" r="8" fill="#fff8e8" />
        <path d="M252 76 Q255 66 268 65 Q281 66 284 76" fill="#f472b6" opacity="0.85" />
      </g>
      <g className="animate-float-fast" style={{ transformOrigin: '50px 38px', animationDelay: '0.5s' }}>
        <path d="M40 38 Q50 20 65 30 Q72 38 62 46 Q50 52 40 38 Z" fill="#ffd23f" stroke="#f5b700" strokeWidth="1" />
        <circle cx="52" cy="32" r="3" fill="#c0651a" />
      </g>
      <g className="animate-wiggle" style={{ transformOrigin: '275px 38px', animationDelay: '0.3s' }}>
        <path d="M268 48 Q260 30 268 20 Q278 28 278 40 Z" fill="#e63946" />
        <path d="M268 20 Q273 12 278 14" stroke="#22c55e" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>
      <g className="animate-bounce-soft" style={{ transformOrigin: '40px 135px', animationDelay: '1.2s' }}>
        <path d="M22 128 L28 148 L52 148 L58 128 Z" fill="#fcd34d" />
        <rect x="20" y="122" width="40" height="12" rx="4" fill="#fde68a" />
        <path d="M18 122 Q40 106 62 122" fill="#ec4899" />
        <circle cx="40" cy="110" r="5" fill="#e63946" />
      </g>
      <g className="animate-float-slow" style={{ transformOrigin: '285px 138px', animationDelay: '2s' }}>
        <path d="M270 138 Q275 123 285 128 Q295 133 290 143 Q283 152 272 145 Z" fill="#c0651a" />
        <path d="M272 138 Q276 125 284 130" fill="none" stroke="#fbbf24" strokeWidth="1.5" strokeLinecap="round" />
      </g>
    </svg>
  );
}
