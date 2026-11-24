import { useState } from 'react';
import { Scissors } from 'lucide-react';

interface EditorialImageProps {
  src: string;
  alt: string;
  fallbackLabel?: string;
  className?: string;
  loading?: 'eager' | 'lazy';
  darkSurface?: boolean;
}

export function EditorialImage({
  src,
  alt,
  fallbackLabel,
  className = '',
  loading = 'lazy',
  darkSurface = false,
}: EditorialImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center gap-3 p-6 text-center ${
          darkSurface
            ? 'bg-charcoal-soft text-cream/70'
            : 'bg-cream-dark text-charcoal/70'
        } ${className}`}
      >
        <Scissors className="h-6 w-6 text-copper" aria-hidden="true" />
        <span className="font-serif text-sm tracking-wide">
          {fallbackLabel || alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
