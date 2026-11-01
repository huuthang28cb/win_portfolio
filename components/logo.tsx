export function Logo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 40"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="navVhGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="50%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
        <linearGradient id="navBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#1e293b" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="10" fill="url(#navBgGrad)" />
      <rect
        width="38"
        height="38"
        x="1"
        y="1"
        rx="9"
        fill="none"
        stroke="url(#navVhGrad)"
        strokeWidth="1.5"
        strokeOpacity="0.6"
      />
      <path
        d="M10 11 L18 29 L22 29 L30 11 L25 11 L20 23.5 L15 11 Z"
        fill="url(#navVhGrad)"
      />
      <circle cx="20" cy="14" r="2.2" fill="#38bdf8" />
    </svg>
  )
}

