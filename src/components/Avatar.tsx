import { cn } from "../utils/cn";

const palettes = [
  "from-thread to-thread-2",
  "from-gold to-gold-2",
  "from-ink to-ink-2",
  "from-thread-2 to-gold",
];

function hashString(str: string) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) hash = (hash << 5) - hash + str.charCodeAt(i);
  return Math.abs(hash);
}

export function Avatar({
  image,
  initials,
  name,
  className,
}: {
  image?: string;
  initials: string;
  name?: string;
  className?: string;
}) {
  if (image) {
    return <img src={image} alt={name ?? initials} className={cn("object-cover", className)} />;
  }
  const palette = palettes[hashString(initials) % palettes.length];
  return (
    <div
      className={cn(
        "flex items-center justify-center bg-gradient-to-br font-en font-semibold text-paper",
        palette,
        className
      )}
      aria-label={name}
      role="img"
    >
      {initials}
    </div>
  );
}
