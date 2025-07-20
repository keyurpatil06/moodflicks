import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const setInCache = (key: string, value: any) => {
  if (typeof window === "undefined") return;
  localStorage.setItem(key, JSON.stringify(value));
};

export const getFromCache = (key: string) => {
  if (typeof window === "undefined") return null; // server check
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};