import { onMount } from "svelte";

export const MOBILE_BREAKPOINT = 768;

/** Reactive match for viewport width below the mobile breakpoint. */
export function useIsMobile(breakpoint = MOBILE_BREAKPOINT) {
  let isMobile = $state(false);

  onMount(() => {
    const query = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const update = () => {
      isMobile = query.matches;
    };
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  });

  return {
    get current() {
      return isMobile;
    },
  };
}
