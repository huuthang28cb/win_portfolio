import React from "react"

export function OrgLogo({ id, name }: { id: string; name: string }) {
  if (id.includes("deepseek")) {
    return (
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-blue-50 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-800/50 flex items-center justify-center p-2 shrink-0">
        {/* DeepSeek style whale / wave logo */}
        <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
          <path
            d="M8 26C10 20 16 14 26 14C36 14 40 22 40 26C40 31 35 34 26 34C15 34 10 30 8 26Z"
            fill="#0284c7"
            opacity="0.9"
          />
          <circle cx="18" cy="22" r="2.5" fill="#ffffff" />
          <path
            d="M32 20C34 16 38 14 42 15C41 19 37 21 34 22"
            stroke="#0284c7"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
    )
  }

  if (id.includes("peking")) {
    return (
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-red-50 dark:bg-red-950/40 border border-red-200/60 dark:border-red-800/50 flex items-center justify-center p-1.5 shrink-0">
        {/* Peking University traditional circular badge style */}
        <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
          <circle cx="24" cy="24" r="21" stroke="#8b0000" strokeWidth="2.5" fill="#fdf2f2" />
          <circle cx="24" cy="24" r="17" stroke="#8b0000" strokeWidth="1.2" strokeDasharray="2 2" />
          <path
            d="M17 18H31M24 18V32M19 32H29M20 23L24 20L28 23"
            stroke="#8b0000"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    )
  }

  // Generic tech company logo
  return (
    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-slate-100 dark:bg-slate-800 border border-border flex items-center justify-center font-bold text-base text-primary shrink-0">
      {name.slice(0, 2).toUpperCase()}
    </div>
  )
}
