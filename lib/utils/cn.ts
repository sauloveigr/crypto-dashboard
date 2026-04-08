import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind CSS classes with proper precedence
 * Combines clsx for conditional classes and tailwind-merge for deduplication
 * 
 * @param inputs - Class names, objects, or arrays to merge
 * @returns Merged class string
 * 
 * @example
 * cn("px-2 py-1", condition && "bg-blue-500")
 * cn("px-2", "px-4") // "px-4" (tailwind-merge dedupes)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
