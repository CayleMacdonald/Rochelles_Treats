// Decorative SVG elements only — food imagery uses real Pexels photos

export function DecorativeCircle({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="50" cy="50" r="45" fill="none" stroke="#de3163" strokeWidth="0.5" opacity="0.15" />
      <circle cx="50" cy="50" r="35" fill="none" stroke="#e5b520" strokeWidth="0.5" opacity="0.1" />
      <circle cx="50" cy="50" r="25" fill="none" stroke="#de3163" strokeWidth="0.5" opacity="0.08" />
    </svg>
  );
}
