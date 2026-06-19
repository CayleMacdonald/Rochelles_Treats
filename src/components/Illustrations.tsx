// Elegant, professional SVG food illustrations for Rochelle's Treats
// Professional food illustrations for Rochelle's Treats

export function PastaIllustration({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Plate */}
      <ellipse cx="100" cy="135" rx="80" ry="18" fill="#e5e5e5" />
      <ellipse cx="100" cy="132" rx="76" ry="16" fill="#fafafa" />
      {/* Bowl */}
      <path d="M25 105 Q25 140 100 140 Q175 140 175 105 Z" fill="#f5f5f5" stroke="#ddd" strokeWidth="1" />
      <path d="M25 105 Q100 115 175 105" fill="#fff" />
      {/* Pasta swirls */}
      <path d="M55 102 Q60 88 72 92 Q82 96 76 108 Q70 118 58 114 Q48 110 55 102 Z" fill="#e8c9a8" />
      <path d="M80 96 Q85 82 96 86 Q106 90 100 102 Q94 112 84 108 Q74 104 80 96 Z" fill="#d4a574" />
      <path d="M105 98 Q110 84 122 88 Q132 92 126 104 Q120 114 108 110 Q98 106 105 98 Z" fill="#e8c9a8" />
      <path d="M130 100 Q135 86 146 90 Q156 94 150 106 Q144 116 132 112 Q122 108 130 100 Z" fill="#c08a52" />
      {/* Cheese sauce */}
      <path d="M50 100 Q100 92 150 100 Q145 110 100 112 Q55 110 50 100 Z" fill="#f0ebe0" opacity="0.8" />
      {/* Chicken pieces */}
      <ellipse cx="75" cy="95" rx="14" ry="8" fill="#a66e3b" />
      <ellipse cx="110" cy="92" rx="12" ry="7" fill="#8a5a30" />
      <ellipse cx="140" cy="96" rx="11" ry="6" fill="#a66e3b" />
      {/* Herbs */}
      <circle cx="92" cy="88" r="3" fill="#729872" />
      <circle cx="105" cy="85" r="2.5" fill="#547854" />
      <circle cx="120" cy="90" r="2" fill="#729872" />
      {/* Steam */}
      <path d="M80 75 Q83 65 80 55" stroke="#d4c8b5" strokeWidth="1.5" fill="none" opacity="0.5" className="animate-float" />
      <path d="M100 72 Q103 62 100 52" stroke="#d4c8b5" strokeWidth="1.5" fill="none" opacity="0.4" className="animate-float" style={{ animationDelay: '1s' }} />
      <path d="M120 74 Q123 64 120 54" stroke="#d4c8b5" strokeWidth="1.5" fill="none" opacity="0.5" className="animate-float" style={{ animationDelay: '2s' }} />
    </svg>
  );
}

export function ChickenSchnitzelIllustration({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Plate */}
      <ellipse cx="100" cy="138" rx="82" ry="18" fill="#e5e5e5" />
      <ellipse cx="100" cy="135" rx="78" ry="16" fill="#fafafa" />
      {/* Schnitzel */}
      <path d="M35 105 Q50 80 90 82 Q125 80 155 88 Q175 92 170 110 Q165 128 130 130 Q90 132 55 125 Q30 118 35 105 Z" fill="#a66e3b" />
      <path d="M42 102 Q55 82 88 84 Q120 82 148 90 Q165 94 162 110 Q158 124 128 126 Q90 128 58 122 Q38 116 42 102 Z" fill="#c08a52" />
      {/* Breaded texture */}
      <circle cx="65" cy="95" r="3" fill="#6d4626" opacity="0.3" />
      <circle cx="85" cy="90" r="2.5" fill="#6d4626" opacity="0.3" />
      <circle cx="105" cy="92" r="3.5" fill="#6d4626" opacity="0.3" />
      <circle cx="125" cy="96" r="2.5" fill="#6d4626" opacity="0.3" />
      <circle cx="75" cy="108" r="3" fill="#6d4626" opacity="0.2" />
      <circle cx="100" cy="112" r="2.5" fill="#6d4626" opacity="0.2" />
      <circle cx="120" cy="106" r="3" fill="#6d4626" opacity="0.2" />
      {/* Pepper sauce */}
      <path d="M50 98 Q90 90 145 98" fill="none" stroke="#6d4626" strokeWidth="4" strokeLinecap="round" opacity="0.5" />
      {/* Chips on side */}
      <rect x="155" y="112" width="16" height="5" rx="2" fill="#e8c9a8" transform="rotate(-8 163 114)" />
      <rect x="158" y="120" width="16" height="5" rx="2" fill="#d4a574" transform="rotate(4 166 122)" />
      <rect x="153" y="128" width="14" height="5" rx="2" fill="#e8c9a8" transform="rotate(-3 160 130)" />
      {/* Herbs */}
      <circle cx="80" cy="100" r="3" fill="#729872" />
      <circle cx="100" cy="97" r="2.5" fill="#547854" />
      <circle cx="115" cy="103" r="2" fill="#729872" />
    </svg>
  );
}

export function CottagePieIllustration({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 170" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Dish shadow */}
      <ellipse cx="100" cy="155" rx="75" ry="14" fill="#d1d5db" opacity="0.3" />
      {/* Dish body */}
      <path d="M28 120 Q28 158 100 158 Q172 158 172 120 Z" fill="#f0ebe0" stroke="#d4c8b5" strokeWidth="1.5" />
      {/* Mash layer */}
      <path d="M30 120 Q100 108 170 120" fill="#f9f6f0" />
      <path d="M32 118 Q100 106 168 118" fill="#fff" />
      {/* Mince layer */}
      <path d="M38 108 Q100 98 162 108" fill="#8a5a30" />
      <path d="M40 106 Q100 96 160 106" fill="#6d4626" />
      {/* Cheese topping */}
      <path d="M32 118 Q100 110 168 118 Q163 128 100 130 Q37 128 32 118 Z" fill="#e8c9a8" opacity="0.7" />
      {/* Cheese bubbles */}
      <circle cx="58" cy="120" r="5" fill="#f0ebe0" />
      <circle cx="82" cy="118" r="4" fill="#e8c9a8" />
      <circle cx="108" cy="119" r="6" fill="#f0ebe0" />
      <circle cx="132" cy="118" r="4" fill="#e8c9a8" />
      {/* Steam */}
      <path d="M75 95 Q78 85 75 75" stroke="#d4c8b5" strokeWidth="1.5" fill="none" opacity="0.4" className="animate-float" />
      <path d="M100 92 Q103 82 100 72" stroke="#d4c8b5" strokeWidth="1.5" fill="none" opacity="0.3" className="animate-float" style={{ animationDelay: '1s' }} />
      <path d="M125 94 Q128 84 125 74" stroke="#d4c8b5" strokeWidth="1.5" fill="none" opacity="0.4" className="animate-float" style={{ animationDelay: '2s' }} />
    </svg>
  );
}

export function WingsIllustration({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Plate */}
      <ellipse cx="100" cy="140" rx="80" ry="16" fill="#e5e5e5" />
      <ellipse cx="100" cy="137" rx="76" ry="14" fill="#fafafa" />
      {/* Wings */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <g key={i} transform={`translate(${20 + (i % 3) * 52}, ${i < 3 ? 85 : 118})`}>
          <path d="M0 25 Q-10 5 5 0 Q22 -4 26 20 Q30 42 18 42 Q6 46 0 25 Z"
            fill={i % 2 === 0 ? '#a66e3b' : '#8a5a30'} />
          <path d="M4 23 Q-2 8 7 4 Q18 0 22 18" fill={i % 2 === 0 ? '#c08a52' : '#a66e3b'} opacity="0.5" />
          {/* Sauce glaze */}
          <path d="M2 24 Q-2 10 6 6 Q16 2 20 18" fill={i % 2 === 0 ? '#873528' : '#6b2a20'} opacity="0.3" />
        </g>
      ))}
      {/* Rice bowl */}
      <ellipse cx="155" cy="130" rx="22" ry="8" fill="#ddd" />
      <path d="M135 118 Q135 132 155 132 Q175 132 175 118 Z" fill="#fafafa" stroke="#e5e5e5" strokeWidth="1" />
      <path d="M137 118 Q155 114 173 118" fill="#fff" />
      {/* Rice grains */}
      {[[145, 118], [152, 116], [160, 118], [148, 120], [156, 120]].map(([x, y], idx) => (
        <ellipse key={idx} cx={x} cy={y} rx="2" ry="1" fill="#e5e5e5" />
      ))}
      {/* Sesame seeds */}
      <circle cx="55" cy="100" r="1.5" fill="#e8c9a8" />
      <circle cx="72" cy="96" r="1.5" fill="#e8c9a8" />
      <circle cx="108" cy="98" r="1.5" fill="#e8c9a8" />
    </svg>
  );
}

export function ChickenBowlIllustration({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Bowl shadow */}
      <ellipse cx="100" cy="148" rx="72" ry="12" fill="#ccc" opacity="0.2" />
      {/* Bowl body */}
      <path d="M30 105 Q30 150 100 150 Q170 150 170 105 Z" fill="#f0ebe0" stroke="#d4c8b5" strokeWidth="1.5" />
      {/* Rice base */}
      <ellipse cx="100" cy="105" rx="68" ry="12" fill="#fafafa" />
      <path d="M34 105 Q100 96 166 105" fill="#fff" />
      {/* Rice grain texture */}
      {[[55, 102], [70, 99], [85, 101], [100, 98], [115, 100], [130, 102]].map(([x, y], i) => (
        <ellipse key={i} cx={x} cy={y} rx="3.5" ry="1.2" fill="#e5e5e5" />
      ))}
      {/* Curry sauce */}
      <path d="M40 120 Q70 112 100 115 Q130 112 160 120 Q155 135 100 138 Q45 135 40 120 Z" fill="#c08a52" opacity="0.8" />
      {/* Chicken chunks */}
      <ellipse cx="72" cy="122" rx="12" ry="7" fill="#a66e3b" />
      <ellipse cx="100" cy="118" rx="10" ry="6" fill="#8a5a30" />
      <ellipse cx="128" cy="123" rx="11" ry="6" fill="#a66e3b" />
      {/* Sauce drips */}
      <path d="M70 112 Q72 118 69 121" stroke="#e8c9a8" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Herbs */}
      <circle cx="100" cy="112" r="3.5" fill="#729872" />
      <circle cx="110" cy="110" r="2.5" fill="#547854" />
      {/* Steam */}
      <path d="M85 92 Q88 84 85 76" stroke="#d4c8b5" strokeWidth="1.5" fill="none" opacity="0.4" className="animate-float" />
      <path d="M110 89 Q113 81 110 73" stroke="#d4c8b5" strokeWidth="1.5" fill="none" opacity="0.3" className="animate-float" style={{ animationDelay: '1s' }} />
    </svg>
  );
}

export function SteakIllustration({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Plate */}
      <ellipse cx="110" cy="152" rx="88" ry="16" fill="#e5e5e5" />
      <ellipse cx="110" cy="149" rx="84" ry="14" fill="#fafafa" />
      {/* Steak */}
      <path d="M38 105 Q48 78 88 80 Q120 78 155 85 Q180 90 175 110 Q170 128 132 130 Q90 132 55 125 Q32 118 38 105 Z" fill="#6d4626" />
      <path d="M45 104 Q55 82 90 84 Q118 82 150 88 Q172 92 168 110 Q164 124 130 126 Q90 128 58 122 Q38 116 45 104 Z" fill="#8a5a30" />
      {/* Grill marks */}
      <line x1="68" y1="88" x2="58" y2="120" stroke="#382413" strokeWidth="3" strokeLinecap="round" opacity="0.4" />
      <line x1="88" y1="84" x2="78" y2="122" stroke="#382413" strokeWidth="3" strokeLinecap="round" opacity="0.4" />
      <line x1="108" y1="83" x2="98" y2="124" stroke="#382413" strokeWidth="3" strokeLinecap="round" opacity="0.4" />
      <line x1="128" y1="85" x2="120" y2="122" stroke="#382413" strokeWidth="3" strokeLinecap="round" opacity="0.4" />
      {/* Pepper sauce */}
      <path d="M48 100 Q95 92 160 100" fill="none" stroke="#52351d" strokeWidth="5" strokeLinecap="round" opacity="0.5" />
      {/* Mash */}
      <ellipse cx="168" cy="124" rx="24" ry="14" fill="#f0ebe0" />
      <path d="M146 122 Q168 116 190 122" fill="#f9f6f0" />
      {/* Butternut */}
      <ellipse cx="45" cy="130" rx="20" ry="10" fill="#c08a52" />
      <path d="M27 128 Q45 124 63 128" fill="#d4a574" />
      {/* Steam */}
      <path d="M95 72 Q98 64 95 56" stroke="#d4c8b5" strokeWidth="1.5" fill="none" opacity="0.4" className="animate-float" />
      <path d="M118 70 Q121 62 118 54" stroke="#d4c8b5" strokeWidth="1.5" fill="none" opacity="0.3" className="animate-float" style={{ animationDelay: '1s' }} />
    </svg>
  );
}

export function BakeryBasketIllustration({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 180" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Basket */}
      <path d="M45 135 L55 170 L145 170 L155 135 Z" fill="#8a5a30" />
      <path d="M45 135 L155 135" stroke="#a66e3b" strokeWidth="3" />
      {/* Weave lines */}
      {[142, 150, 160].map((y, i) => (
        <line key={i} x1={47 + i * 2} y1={y} x2={153 - i * 2} y2={y} stroke="#a66e3b" strokeWidth="1.5" opacity="0.5" />
      ))}
      {/* Handle */}
      <path d="M75 135 Q100 110 125 135" fill="none" stroke="#6d4626" strokeWidth="4" strokeLinecap="round" />
      {/* Bread loaf */}
      <ellipse cx="85" cy="128" rx="30" ry="14" fill="#c08a52" />
      <path d="M56 128 Q85 114 114 128" fill="#d4a574" />
      <path d="M62 124 Q85 116 108 124" fill="#e8c9a8" opacity="0.6" />
      {/* Croissant */}
      <path d="M110 122 Q125 108 140 114 Q150 120 140 126 Q130 132 118 128 Q108 124 110 122 Z" fill="#a66e3b" />
      <path d="M112 122 Q126 110 138 116" fill="none" stroke="#c08a52" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      {/* Muffin */}
      <path d="M52 124 Q60 114 74 116 Q82 124 74 130 Q60 132 52 124 Z" fill="#c8553d" />
      <ellipse cx="64" cy="118" rx="10" ry="7" fill="#e0745c" />
    </svg>
  );
}

export function HeroIllustration({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 360 300" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Table surface */}
      <ellipse cx="180" cy="265" rx="160" ry="25" fill="#e5ddd0" opacity="0.5" />
      {/* Main plate */}
      <ellipse cx="180" cy="255" rx="130" ry="22" fill="#ddd" />
      <ellipse cx="180" cy="252" rx="125" ry="20" fill="#fafafa" />
      {/* Pasta bowl */}
      <path d="M60 170 Q60 245 180 245 Q300 245 300 170 Z" fill="#f5f5f5" stroke="#ddd" strokeWidth="2" />
      <path d="M60 170 Q180 185 300 170" fill="#fff" />
      {/* Pasta swirls */}
      {[[90, 168], [130, 160], [170, 165], [210, 158], [250, 163]].map(([cx, cy], i) => (
        <path
          key={i}
          d={`M${cx - 18} ${cy + 12} Q${cx} ${cy - 22} ${cx + 18} ${cy + 12} Q${cx + 10} ${cy + 32} ${cx} ${cy + 28} Q${cx - 10} ${cy + 32} ${cx - 18} ${cy + 12} Z`}
          fill={i % 2 === 0 ? '#d4a574' : '#c08a52'}
        />
      ))}
      {/* Cheese sauce */}
      <path d="M75 165 Q180 150 285 165 Q278 180 180 188 Q82 180 75 165 Z" fill="#f0ebe0" opacity="0.7" />
      {/* Chicken pieces */}
      <ellipse cx="115" cy="158" rx="16" ry="9" fill="#a66e3b" />
      <ellipse cx="160" cy="152" rx="14" ry="8" fill="#8a5a30" />
      <ellipse cx="200" cy="155" rx="13" ry="7" fill="#a66e3b" />
      <ellipse cx="245" cy="160" rx="15" ry="8" fill="#8a5a30" />
      {/* Herbs */}
      <circle cx="145" cy="145" r="5" fill="#729872" />
      <circle cx="180" cy="142" r="4" fill="#547854" />
      <circle cx="215" cy="146" r="3.5" fill="#729872" />
      {/* Steam */}
      {[[130, 130, 0], [180, 125, 0.8], [230, 128, 1.6]].map(([x, y, delay], i) => (
        <path
          key={i}
          d={`M${x} ${y} Q${x + 10} ${y - 25} ${x} ${y - 50}`}
          stroke="#d4c8b5"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          opacity="0.5"
          className="animate-float"
          style={{ animationDelay: `${delay}s` }}
        />
      ))}
      {/* Side elements */}
      {/* Bread basket */}
      <g transform="translate(290, 180) scale(0.55)">
        <path d="M45 135 L55 170 L145 170 L155 135 Z" fill="#8a5a30" />
        <path d="M75 135 Q100 110 125 135" fill="none" stroke="#6d4626" strokeWidth="4" strokeLinecap="round" />
        <ellipse cx="85" cy="128" rx="30" ry="14" fill="#c08a52" />
        <path d="M56 128 Q85 114 114 128" fill="#d4a574" />
      </g>
      {/* Wine glass */}
      <g transform="translate(30, 170) scale(0.5)">
        <path d="M40 20 Q40 60 60 70 L60 110 L50 110 L50 115 L70 115 L70 110 L60 110 L60 70 Q80 60 80 20 Z" fill="none" stroke="#d4c8b5" strokeWidth="2" />
        <path d="M42 22 Q42 55 60 65 Q78 55 78 22 Z" fill="#c8553d" opacity="0.3" />
      </g>
      {/* Herb sprig */}
      <g transform="translate(20, 200)">
        <path d="M0 0 Q15 -20 30 -10" stroke="#729872" strokeWidth="2" fill="none" />
        <circle cx="5" cy="-5" r="4" fill="#729872" />
        <circle cx="15" cy="-12" r="3" fill="#547854" />
        <circle cx="25" cy="-8" r="3.5" fill="#729872" />
      </g>
    </svg>
  );
}

export function DecorativeLeaf({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 60" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M20 60 Q5 40 5 20 Q5 0 20 0 Q35 0 35 20 Q35 40 20 60 Z" fill="#729872" opacity="0.15" />
      <path d="M20 60 Q20 30 20 0" stroke="#729872" strokeWidth="0.5" fill="none" opacity="0.3" />
    </svg>
  );
}

export function DecorativeCircle({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="50" cy="50" r="45" fill="none" stroke="#d4a574" strokeWidth="0.5" opacity="0.3" />
      <circle cx="50" cy="50" r="35" fill="none" stroke="#d4a574" strokeWidth="0.5" opacity="0.2" />
      <circle cx="50" cy="50" r="25" fill="none" stroke="#d4a574" strokeWidth="0.5" opacity="0.15" />
    </svg>
  );
}
