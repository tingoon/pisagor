import type { ButtonVariantProps } from "@pisagor/recipes/button";
import type { ToggleVariantProps } from "@pisagor/recipes/toggle";
import type { ToggleGroupRecipe } from "@pisagor/recipes/toggle-group";
import { createContext } from "../../utils/create-context";

export interface ToggleGroupContextValue {
  size: NonNullable<ToggleVariantProps["size"]>;
  slots: ToggleGroupRecipe;
  spacing: number;
  variant: Extract<ButtonVariantProps["variant"], "outline" | "ghost">;
}

const ctx = createContext<ToggleGroupContextValue>({ name: "ToggleGroup" });

export const setToggleGroupContext = ctx.setContext;
export const useToggleGroup = ctx.getContext;
