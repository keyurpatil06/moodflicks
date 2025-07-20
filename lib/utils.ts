import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const movieCache = new Map<string, any>();

export const getFromCache = (key: string) => movieCache.get(key);
export const setInCache = (key: string, value: any) => movieCache.set(key, value);