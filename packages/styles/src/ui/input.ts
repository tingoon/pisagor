import { tv } from "tailwind-variants";

import { formControlShellVariants } from "./form-control";

export const inputRootVariants = formControlShellVariants;

export const inputVariants = tv({
  slots: {
    clearableRoot: [
      "flex-1",
      "bg-transparent",
      "rounded-none border-0 shadow-none",
      "focus-visible:ring-0",
      "disabled:bg-transparent aria-invalid:ring-0 data-invalid:ring-0",
      "dark:bg-transparent dark:disabled:bg-transparent",
    ],
  },
});
