import { createToaster } from "@ark-ui/svelte/toast";

/** Shared toaster store used by `<Toaster />` and `toast.create(...)`. */
export const toast = createToaster({
  max: 3,
  overlap: true,
  placement: "bottom-end",
});
