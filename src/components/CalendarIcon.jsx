import React from "react";

export default function CalendarIcon({ className = "w-5 h-5", title = "Calendar icon" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? "false" : "true"}
      role="img"
    >
      {title ? <title>{title}</title> : null}
      <rect x="3" y="5" width="18" height="16" rx="2" ry="2" />
      <path d="M16 3v4M8 3v4M3 11h18" />
    </svg>
  );
}
