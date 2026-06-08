export function CrabIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <ellipse cx="32" cy="36" rx="13" ry="10" fill="currentColor" />
      <path
        d="M21 32 11 26M43 32l10-6M21 39l-10 5M43 39l10 5M25 45l-8 7M39 45l8 7"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23 26c-4-2-7-5-8-10 5 .5 8 3 10 7M41 26c4-2 7-5 8-10-5 .5-8 3-10 7"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="27.5" cy="35" r="1.8" fill="var(--abyss)" />
      <circle cx="36.5" cy="35" r="1.8" fill="var(--abyss)" />
    </svg>
  );
}
