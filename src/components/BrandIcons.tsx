/**
 * Lightweight brand icon set (lucide-react no longer ships social logos).
 * All icons accept the same `size` prop as lucide icons for drop-in use.
 */
interface IconProps {
  size?: number;
  className?: string;
}

export function FacebookIcon({ size = 16, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
    </svg>
  );
}

export function InstagramIcon({ size = 16, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={className} aria-hidden="true">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function YoutubeIcon({ size = 16, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M21.6 7.2s-.21-1.51-.86-2.17c-.82-.87-1.74-.87-2.16-.92C15.6 4 12 4 12 4h-.01s-3.6 0-6.58.11c-.42.05-1.34.05-2.16.92-.65.66-.86 2.17-.86 2.17S2.18 9 2.18 10.79v1.65C2.18 14.23 2.4 16 2.4 16s.21 1.51.86 2.17c.82.87 1.9.84 2.38.93 1.73.17 7.36.22 7.36.22s3.6-.01 6.58-.12c.42-.05 1.34-.05 2.16-.92.65-.66.86-2.17.86-2.17s.22-1.77.22-3.56v-1.65c0-1.79-.22-3.56-.22-3.56ZM9.98 14.6V8.9l5.4 2.86-5.4 2.84Z" />
    </svg>
  );
}

export function LinkedinIcon({ size = 16, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.24 8.25H4.7V23H.24V8.25ZM8.4 8.25h4.27v2.01h.06c.6-1.1 2.06-2.26 4.24-2.26 4.53 0 5.37 2.87 5.37 6.6V23h-4.46v-6.66c0-1.59-.03-3.63-2.2-3.63-2.21 0-2.55 1.72-2.55 3.51V23H8.4V8.25Z" />
    </svg>
  );
}
