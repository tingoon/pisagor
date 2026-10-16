import { tv } from "tailwind-variants";

export const announcementRecipe = tv({
  slots: {
    base: [
      "group/announcement",
      "relative",
      "inline-flex max-w-full min-w-0 items-center gap-2",
      "py-0.5 ps-3 pe-3",
      "bg-input/4",
      "border-input rounded-2xl border",
      "duration-fast transition ease-out",
      "focus-visible:border-primary focus-visible:ring-0.75 focus-visible:ring-ring/32 outline-hidden",
      "[&_svg]:size-3.5 [&_svg]:shrink-0",
      "has-[[data-scope=badge][data-part=root]]:ps-0.5",
      "[button&,a&]:cursor-pointer [button&,a&]:active:scale-98",
      "[&>svg]:text-muted-foreground",
      "[a&]:hover:bg-input/12",
      "**:data-[scope=badge]:data-[part=root]:h-6.5 **:data-[scope=badge]:data-[part=root]:rounded-xl **:data-[scope=badge]:data-[part=root]:px-2 **:data-[scope=badge]:data-[part=root]:sm:text-xs",
      "[button&,a&]:pointer-coarse:after:absolute [button&,a&]:pointer-coarse:after:size-full [button&,a&]:pointer-coarse:after:min-h-11 [button&,a&]:pointer-coarse:after:min-w-11",
      "motion-reduce:transition-none! motion-reduce:[button&,a&]:active:scale-100",
    ],
    title: [
      "min-w-0",
      "inline-flex flex-1 items-center gap-1",
      "truncate text-sm font-medium select-none",
    ],
  },
});

export type AnnouncementRecipeFn = typeof announcementRecipe;
export type AnnouncementRecipe = ReturnType<AnnouncementRecipeFn>;
export type AnnouncementRecipeSlot = keyof AnnouncementRecipe;
