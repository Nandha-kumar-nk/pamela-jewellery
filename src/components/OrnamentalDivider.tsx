export default function OrnamentalDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`} aria-hidden="true">
      <div
        className="flex-1 h-px max-w-32"
        style={{ background: 'linear-gradient(to right, transparent, hsl(var(--accent)))' }}
      />
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10 1L11.5 8.5L19 10L11.5 11.5L10 19L8.5 11.5L1 10L8.5 8.5L10 1Z"
          fill="hsl(var(--accent))"
          opacity="0.9"
        />
      </svg>
      <div
        className="flex-1 h-px max-w-32"
        style={{ background: 'linear-gradient(to left, transparent, hsl(var(--accent)))' }}
      />
    </div>
  );
}
