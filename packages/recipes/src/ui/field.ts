import { tv, type VariantProps } from "tailwind-variants";

export const fieldRecipe = tv({
  defaultVariants: {
    orientation: "vertical",
    reverse: false,
  },
  slots: {
    base: [
      "group/field",
      "w-full",
      "flex gap-2",
      "data-invalid:text-destructive",
      "dark:data-invalid:text-destructive-foreground",
    ],
    content: ["group/field-content", "flex flex-1 flex-col gap-1.5", "leading-snug"],
    description: [
      "pointer-events-none",
      "font-normal text-muted-foreground text-sm leading-normal",
      "group-has-data-[orientation=horizontal]/field:text-balance",
      "@md/field-group:group-data-[orientation=responsive]/field:text-balance",
      "nth-last-2:-mt-1 last:mt-0 [[data-variant=legend]+&]:-mt-1.5",
      "in-[[data-scope=field][data-part=root]:has([data-scope=radio-group][data-part=item])]:ms-6 in-[[data-scope=field][data-part=root]:has([data-scope=radio-group][data-part=item])]:-mt-1.5!",
      "[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
    ],
    error: ["font-normal text-destructive text-sm", "dark:text-destructive-foreground"],
    group: [
      "group/field-group @container/field-group",
      "flex w-full flex-col gap-4",
      "data-[scope=checkbox]:data-[part=group]:gap-3",
      "*:data-[scope=field]:data-[part=group]:gap-4",
    ],
    helper: ["text-muted-foreground text-sm"],
    inline: ["absolute inset-0 top-1/2"],
    label: [
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
    legend: ["mb-3 font-medium", "data-[variant=legend]:text-base", "data-[variant=label]:text-sm"],
    requiredIndicator: ["select-none text-destructive text-sm", "dark:text-destructive-foreground"],
    separator: [
      "relative",
      "h-5",
      "-my-2 group-data-[variant=outline]/field-group:-mb-2",
      "text-sm",
    ],
    set: [
      "flex flex-col gap-6",
      "has-[>[data-scope=checkbox][data-part=group]]:gap-3 has-[>[data-scope=radio-group][data-part=root]]:gap-3",
    ],
    title: [
      "w-fit",
      "flex items-center gap-2",
      "font-medium text-sm leading-snug",
      "group-data-[disabled=true]/field:opacity-64",
    ],
  },
  variants: {
    orientation: {
      horizontal: {
        base: [
          "flex-row items-center",
          "*:data-[scope=field]:data-[part=label]:flex-auto",
          "has-[>[data-scope=field][data-part=content]]:items-start has-[>[data-scope=field][data-part=content]]:[&>[role=checkbox],[role=radio]]:mt-px",
        ],
      },
      responsive: {
        base: [
          "flex-col *:w-full [&>.sr-only]:w-auto",
          "@md/field-group:flex-row @md/field-group:items-center @md/field-group:*:w-auto",
          "@md/field-group:*:data-[scope=field]:data-[part=label]:flex-auto",
          "@md/field-group:has-[>[data-scope=field][data-part=content]]:items-start",
          "@md/field-group:has-[>[data-scope=field][data-part=content]]:[&>[role=checkbox],[role=radio]]:mt-px",
        ],
      },
      vertical: {
        base: ["flex-col *:w-full [&>.sr-only]:w-auto"],
      },
    },
    reverse: {
      true: {
        base: [
          "data-[orientation=horizontal]:flex-row-reverse",
          "data-[orientation=vertical]:flex-col-reverse",
          "data-[orientation=responsive]:flex-col-reverse",
          "data-[orientation=responsive]:@md/field-group:flex-row-reverse",
        ],
      },
    },
  },
});

export type FieldVariantProps = VariantProps<typeof fieldRecipe>;
export type FieldSlots = ReturnType<typeof fieldRecipe>;
