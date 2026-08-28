import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merges class names with `clsx`, then deduplicates Tailwind utilities via `tailwind-merge`. */
export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
