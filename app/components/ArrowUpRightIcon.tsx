interface ArrowUpRightIconProps {
  className?: string;
}

const ArrowUpRightIcon = ({ className }: ArrowUpRightIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      className={`w-5 h-5 mb-1.5 ${className}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 7l-10 10m0-10h10v10"
      />
    </svg>
  );
};

export default ArrowUpRightIcon;
