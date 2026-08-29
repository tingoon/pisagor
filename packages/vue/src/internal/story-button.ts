import { buttonRecipe } from "@pisagor/recipes/button";
import { cn } from "@pisagor/utils";

export function outlineButtonClass(className?: string) {
  return cn(buttonRecipe({ variant: "outline" }).base(), className);
}
