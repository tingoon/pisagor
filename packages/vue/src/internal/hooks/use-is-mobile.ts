import { useMediaQuery } from "@vueuse/core";

/**
 * Mobile layout breakpoint in CSS pixels.
 * Keep in sync with `--breakpoint-md` in `styles.css` (48rem / 768px).
 */
export const MOBILE_BREAKPOINT = 768;

/**
 * Returns whether the viewport matches the mobile breakpoint.
 */
export const useIsMobile = () => useMediaQuery(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
