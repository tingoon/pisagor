import { tv, type VariantProps } from "tailwind-variants";

export const fieldVariants = tv({
  base: [
    "group/field",
    "w-full",
    "flex gap-2",
    "data-invalid:text-destructive",
    "dark:data-invalid:text-destructive-foreground",
  ],
  defaultVariants: {
    orientation: "vertical",
    reverse: false,
  },
  variants: {
    orientation: {
      horizontal: [
        "flex-row items-center",
        "*:data-[scope=field]:data-[part=label]:flex-auto",
        "has-[>[data-scope=field][data-part=content]]:items-start has-[>[data-scope=field][data-part=content]]:[&>[role=checkbox],[role=radio]]:mt-px",
      ],
      responsive: [
        "flex-col *:w-full [&>.sr-only]:w-auto",
        "@md/field-group:flex-row @md/field-group:items-center @md/field-group:*:w-auto",
        "@md/field-group:*:data-[scope=field]:data-[part=label]:flex-auto",
        "@md/field-group:has-[>[data-scope=field][data-part=content]]:items-start",
        "@md/field-group:has-[>[data-scope=field][data-part=content]]:[&>[role=checkbox],[role=radio]]:mt-px",
      ],
      vertical: ["flex-col *:w-full [&>.sr-only]:w-auto"],
    },
    reverse: {
      true: [
        "data-[orientation=horizontal]:flex-row-reverse",
        "data-[orientation=vertical]:flex-col-reverse",
        "data-[orientation=responsive]:flex-col-reverse",
        "data-[orientation=responsive]:@md/field-group:flex-row-reverse",
      ],
    },
  },
});

export const fieldSetVariants = tv({
  base: [
    "flex flex-col gap-6",
    "has-[>[data-scope=checkbox][data-part=group]]:gap-3 has-[>[data-scope=radio-group][data-part=root]]:gap-3",
  ],
});

export const fieldLegendVariants = tv({
  base: ["mb-3 font-medium", "data-[variant=legend]:text-base", "data-[variant=label]:text-sm"],
});

export const fieldGroupVariants = tv({
  base: [
    "group/field-group @container/field-group",
    "flex w-full flex-col gap-4",
    "data-[scope=checkbox]:data-[part=group]:gap-3",
    "*:data-[scope=field]:data-[part=group]:gap-4",
  ],
});

export const fieldContentVariants = tv({
  base: ["group/field-content", "flex flex-1 flex-col gap-1.5", "leading-snug"],
});

export const fieldLabelVariants = tv({
  base: [
    "group/field-label peer/field-label",
    "select-none font-medium text-sm leading-snug",
    "flex w-fit gap-1",
    "has-[>[data-scope=field][data-part=root]]:w-full has-[>[data-scope=field][data-part=root]]:flex-col has-[>[data-scope=field][data-part=root]]:rounded-xl has-[>[data-scope=field][data-part=root]]:border has-[>[data-scope=field][data-part=root]]:bg-background *:data-[scope=field]:data-[part=root]:p-2.5",
    "in-[[data-scope=surface][data-part=root][data-variant=default]]:has-[>[data-scope=field][data-part=root]]:bg-muted/40 in-[[data-scope=surface][data-part=root][data-variant=default]]:has-[>[data-scope=field][data-part=root]]:shadow-none",
    "in-[[data-scope=surface][data-part=root][data-variant=secondary]]:has-[>[data-scope=field][data-part=root]]:bg-background in-[[data-scope=surface][data-part=root][data-variant=tertiary]]:has-[>[data-scope=field][data-part=root]]:bg-background",
    "has-data-[state=checked]:border-primary has-data-[state=checked]:bg-primary/5",
    "group-data-disabled/field:opacity-64",
    "dark:has-data-[state=checked]:bg-primary/10",
  ],
});

export const fieldRequiredIndicatorVariants = tv({
  base: ["select-none text-destructive text-sm", "dark:text-destructive-foreground"],
});

export const fieldTitleVariants = tv({
  base: [
    "w-fit",
    "flex items-center gap-2",
    "font-medium text-sm leading-snug",
    "group-data-[disabled=true]/field:opacity-64",
  ],
});

export const fieldDescriptionVariants = tv({
  base: [
    "pointer-events-none",
    "font-normal text-muted-foreground text-sm leading-normal",
    "group-has-data-[orientation=horizontal]/field:text-balance",
    "@md/field-group:group-data-[orientation=responsive]/field:text-balance",
    "nth-last-2:-mt-1 last:mt-0 [[data-variant=legend]+&]:-mt-1.5",
    "in-[[data-scope=field][data-part=root]:has([data-scope=radio-group][data-part=item])]:ms-6 in-[[data-scope=field][data-part=root]:has([data-scope=radio-group][data-part=item])]:-mt-1.5!",
    "[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
  ],
});

export const fieldSeparatorVariants = tv({
  base: ["relative", "h-5", "-my-2 group-data-[variant=outline]/field-group:-mb-2", "text-sm"],
});

export const fieldHelperVariants = tv({
  base: ["text-muted-foreground text-sm"],
});

export const fieldErrorVariants = tv({
  base: ["font-normal text-destructive text-sm", "dark:text-destructive-foreground"],
});

export const fieldInlineVariants = tv({
  base: ["absolute inset-0 top-1/2"],
});

export type FieldVariantProps = VariantProps<typeof fieldVariants>;
export type FieldVariants = ReturnType<typeof fieldVariants>;

export type FieldSetVariantProps = VariantProps<typeof fieldSetVariants>;
export type FieldSetVariants = ReturnType<typeof fieldSetVariants>;

export type FieldLegendVariantProps = VariantProps<typeof fieldLegendVariants>;
export type FieldLegendVariants = ReturnType<typeof fieldLegendVariants>;

export type FieldGroupVariantProps = VariantProps<typeof fieldGroupVariants>;
export type FieldGroupVariants = ReturnType<typeof fieldGroupVariants>;

export type FieldContentVariantProps = VariantProps<typeof fieldContentVariants>;
export type FieldContentVariants = ReturnType<typeof fieldContentVariants>;

export type FieldLabelVariantProps = VariantProps<typeof fieldLabelVariants>;
export type FieldLabelVariants = ReturnType<typeof fieldLabelVariants>;

export type FieldRequiredIndicatorVariantProps = VariantProps<
  typeof fieldRequiredIndicatorVariants
>;
export type FieldRequiredIndicatorVariants = ReturnType<typeof fieldRequiredIndicatorVariants>;

export type FieldTitleVariantProps = VariantProps<typeof fieldTitleVariants>;
export type FieldTitleVariants = ReturnType<typeof fieldTitleVariants>;

export type FieldDescriptionVariantProps = VariantProps<typeof fieldDescriptionVariants>;
export type FieldDescriptionVariants = ReturnType<typeof fieldDescriptionVariants>;

export type FieldSeparatorVariantProps = VariantProps<typeof fieldSeparatorVariants>;
export type FieldSeparatorVariants = ReturnType<typeof fieldSeparatorVariants>;

export type FieldHelperVariantProps = VariantProps<typeof fieldHelperVariants>;
export type FieldHelperVariants = ReturnType<typeof fieldHelperVariants>;

export type FieldErrorVariantProps = VariantProps<typeof fieldErrorVariants>;
export type FieldErrorVariants = ReturnType<typeof fieldErrorVariants>;

export type FieldInlineVariantProps = VariantProps<typeof fieldInlineVariants>;
export type FieldInlineVariants = ReturnType<typeof fieldInlineVariants>;
