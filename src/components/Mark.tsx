type Props = {
  className?: string;
};

export function Mark({ className = "h-8 w-8" }: Props) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect width="32" height="32" rx="8" fill="currentColor" />
      <path
        d="M11 8.25v15.5M11 16.05 21.4 8.7M11 16.05 21.4 23.4"
        fill="none"
        stroke="#fff"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
