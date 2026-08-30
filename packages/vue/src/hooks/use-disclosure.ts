import { useToggle } from "@vueuse/core";
import type { Ref } from "vue";

export interface UseDisclosureReturn {
  opened: Ref<boolean>;
  open: () => void;
  close: () => void;
  toggle: (value?: boolean) => void;
}

/**
 * Returns open/close/toggle helpers for boolean disclosure state.
 */
export function useDisclosure(initialValue = false): UseDisclosureReturn {
  const [opened, toggle] = useToggle(initialValue);

  return {
    close: () => {
      toggle(false);
    },
    open: () => {
      toggle(true);
    },
    opened,
    toggle,
  };
}
