import { tv, type VariantProps } from "tailwind-variants";

export const announcementRecipe = tv({
  slots: {
    base: [
      "group/announcement",
      "relative",
      "inline-flex min-w-0 max-w-full items-center gap-2",
      "py-0.5 ps-3 pe-3",
      "bg-input/4",
      "rounded-2xl border border-input",
      "transition-colors",
      "outline-hidden focus-visible:border-primary focus-visible:ring-[3px] focus-visible:ring-ring/32",
      "[&_svg]:size-3.5 [&_svg]:shrink-0",
      "has-[[data-scope=badge][data-part=root]]:ps-0.5",
      "[button&,a&]:cursor-pointer",
      "[&>svg]:text-muted-foreground",
      "[a&]:hover:bg-input/12",
      "**:data-[scope=badge]:data-[part=root]:h-6.5 **:data-[scope=badge]:data-[part=root]:rounded-xl **:data-[scope=badge]:data-[part=root]:px-2 **:data-[scope=badge]:data-[part=root]:sm:text-xs",
      "[button&,a&]:pointer-coarse:after:absolute [button&,a&]:pointer-coarse:after:size-full [button&,a&]:pointer-coarse:after:min-h-11 [button&,a&]:pointer-coarse:after:min-w-11",
      "motion-reduce:transition-none!",
    ],
    title: [
      "min-w-0",
      "inline-flex flex-1 items-center gap-1",
      "select-none truncate font-medium text-sm",
    ],
  },
});

export type AnnouncementVariantProps = VariantProps<typeof announcementRecipe>;
export type AnnouncementSlots = ReturnType<typeof announcementRecipe>;
