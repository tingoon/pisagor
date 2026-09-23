import { buttonRecipe } from "@pisagor/recipes/button";
import { cn } from "@pisagor/utils";

export function outlineButtonClass(className?: string) {
  return cn(buttonRecipe({ variant: "outline" }).base(), className);
}

export function defaultButtonClass(className?: string) {
  return cn(buttonRecipe().base(), className);
}

export function ghostButtonClass(className?: string) {
  return cn(buttonRecipe({ variant: "ghost" }).base(), className);
}
