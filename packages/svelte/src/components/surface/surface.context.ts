import type { SurfaceVariantProps } from "@pisagor/recipes/surface";
import { createContext } from "../../utils/create-context";

export type SurfaceVariant = NonNullable<SurfaceVariantProps["variant"]>;

export interface SurfaceContextValue {
  depth: number;
  variant: SurfaceVariant;
}

const ctx = createContext<SurfaceContextValue>({
  name: "Surface",
  strict: false,
});

export const setSurfaceContext = ctx.setContext;
export const useSurface = ctx.getContext;
