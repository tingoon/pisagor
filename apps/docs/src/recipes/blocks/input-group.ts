import { tv } from "tailwind-variants";

export const codeEditorInputBlock = tv({
  slots: {
    copy: "ml-auto",
    filename: "font-mono",
    icon: "text-muted-foreground",
    textarea: "font-mono text-sm",
  },
});

export const inputGroupWithInnerLabelBlock = tv({
  slots: {
    info: "ms-auto rtl:me-auto",
  },
});

export const inputGroupWithMenuBlock = tv({
  slots: {
    menu: "w-48",
  },
});
