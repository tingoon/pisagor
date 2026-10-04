import type {
  ButtonVariantProps,
  ToggleGroupRecipe,
  ToggleVariantProps,
} from "@pisagor/recipes";
import { createContext } from "../../utils/create-context";

export interface ToggleGroupContextValue {
  size: NonNullable<ToggleVariantProps["size"]>;
  slots: ToggleGroupRecipe;
  spacing: number;
  variant: Extract<ButtonVariantProps["variant"], "outline" | "ghost">;
}

const ctx = createContext("ToggleGroup")<ToggleGroupContextValue>();

export const setToggleGroupContext = ctx.setContext;
export const useToggleGroup = ctx.getContext;
