export default function Monogram({
  className = "h-8 w-8",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth={7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M50 14 L14 86"
        pathLength={1}
        style={{
          strokeDasharray: 1,
          strokeDashoffset: 1,
          animation: "draw 0.8s ease-out forwards",
        }}
      />
      <path
        d="M50 14 L86 86"
        pathLength={1}
        style={{
          strokeDasharray: 1,
          strokeDashoffset: 1,
          animation: "draw 0.8s ease-out 0.15s forwards",
        }}
      />
      <path
        d="M28 58 H72"
        pathLength={1}
        style={{
          strokeDasharray: 1,
          strokeDashoffset: 1,
          animation: "draw 0.8s ease-out 0.3s forwards",
        }}
      />
    </svg>
  );
}
