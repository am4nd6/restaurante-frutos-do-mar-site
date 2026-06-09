export function WaveDivider({
  flip = false,
  className = "",
}: {
  flip?: boolean;
  className?: string;
}) {
  return (
    <div className={`relative w-full overflow-hidden leading-[0] ${className}`} aria-hidden>
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className={`w-[120%] -ml-[10%] h-[80px] md:h-[120px] ${flip ? "rotate-180" : ""}`}
      >
        <path
          d="M0,64 C240,120 480,0 720,48 C960,96 1200,16 1440,64 L1440,120 L0,120 Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}
