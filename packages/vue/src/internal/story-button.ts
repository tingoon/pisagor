import { buttonVariants } from "@pisagor/recipes/button";
import { cn } from "@pisagor/utils";

export function outlineButtonClass(className?: string) {
  return cn(buttonVariants({ variant: "outline" }), className);
}
