import { cn } from '@/lib/utils';
import React from 'react'

const ShimmerButton = ({
  title,
  onClick,
  className,
  disabled
}: {
  title: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn("w-fit inline-flex h-12 animate-shimmer items-center justify-center rounded-xl border border-slate-600 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-200 transition-colors", className)}
    >
      {title}
    </button>
  )
}

export default ShimmerButton
