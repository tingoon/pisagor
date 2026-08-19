import { buttonVariants } from "@pisagor/styles/ui/button";
import { cn } from "@pisagor/utils";

export function outlineButtonClass(className?: string) {
  return cn(buttonVariants({ variant: "outline" }), className);
}
