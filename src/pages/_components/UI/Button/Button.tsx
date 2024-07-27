type ButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
};

export default function Button({ children, disabled }: ButtonProps) {
  const colorClass = disabled ? "bg-zinc-300" : "bg-zinc-600";
  const hoverClass = !disabled && "hover:bg-zinc-900";
  const cursorClass = disabled ? "cursor-not-allowed" : "cursor-pointer";

  return (
    <button
      className={`inline-block px-4 py-2 ${colorClass} text-white font-bold rounded-md ${hoverClass} transition-colors duration-300 ${cursorClass}`}
    >
      {children}
    </button>
  );
}
