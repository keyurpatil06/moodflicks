import { cn } from '@/lib/utils';
import React from 'react'

const LitButton = ({
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
      className={cn("p-[3px] relative", className)}
      onClick={onClick}
      disabled={disabled}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
      <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
        {title}
      </div>
    </button>
  )
}

export default LitButton
