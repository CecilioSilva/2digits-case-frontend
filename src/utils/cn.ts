import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// This function is a wrapper around clsx that merges the classes with tailwindcss classes
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
