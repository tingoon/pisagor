import { tv, type VariantProps } from "tailwind-variants";

const surfaceVariantOptions = {
  default: "",
  glass: "",
  secondary: "",
  tertiary: "",
  transparent: "",
} as const;

const mutedSurfaces: Array<"secondary" | "tertiary" | "glass"> = [
  "secondary",
  "tertiary",
  "glass",
];

const previewSecondaryQuiet =
  "bg-muted/40 shadow-none hover:bg-muted/40 dark:hover:bg-muted/40 dark:hover:bg-transparent";
const previewSecondaryRaised =
  "bg-background shadow-none hover:bg-background dark:hover:bg-background/90 dark:hover:bg-transparent";

export const editableRecipe = tv({
  compoundVariants: [
    {
      class: { preview: previewSecondaryQuiet },
      surfaceVariant: undefined,
      variant: "secondary",
    },
    {
      class: { preview: previewSecondaryQuiet },
      surfaceVariant: ["default", "transparent"],
      variant: "secondary",
    },
    {
      class: { preview: previewSecondaryRaised },
      surfaceVariant: mutedSurfaces,
      variant: "secondary",
    },
  ],
  defaultVariants: {
    /** Surface variant. */
    surfaceVariant: undefined,
    /** Visual emphasis (control shell). */
    variant: "primary",
  },
  slots: {
    area: "w-full",
    base: [
      "group/editable",
      "relative",
      "w-full",
      "data-[orientation=vertical]:items-end",
      "flex items-center gap-2",
    ],
    control: [
      "group-data-[orientation=vertical]/editable:flex-col",
      "inline-flex items-center gap-2",
    ],
    preview: [
      "w-full justify-start",
      "px-3",
      "text-base font-normal whitespace-pre-wrap sm:text-sm",
      "duration-fast transition-colors ease-out",
      "dark:hover:bg-input/32",
      "data-placeholder-shown:text-muted-foreground",
      "in-[[data-scope=editable][data-part=area]:has(textarea)]:items-start",
      "motion-reduce:transition-none!",
    ],
  },
  variants: {
    surfaceVariant: surfaceVariantOptions,
    variant: {
      primary: {},
      secondary: {},
    },
  },
});

export type EditableRecipeFn = typeof editableRecipe;
export type EditableRecipe = ReturnType<EditableRecipeFn>;
export type EditableRecipeSlot = keyof EditableRecipe;
export type EditableVariantProps = VariantProps<EditableRecipeFn>;
