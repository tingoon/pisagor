import { tv } from "tailwind-variants";

export const signInFormBlock = tv({
  slots: {
    description: "text-muted-foreground text-sm leading-relaxed",
    forgotLink: "ms-auto text-sm underline-offset-4 hover:underline",
    form: "flex flex-col gap-4",
    full: "w-full",
    intro: "flex flex-col gap-1.5",
    root: "mx-auto w-full max-w-md",
    title: "font-semibold text-xl leading-tight tracking-tight",
  },
});
