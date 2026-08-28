import type { SurfaceVariantProps } from "@pisagor/recipes/surface";
import { createContext } from "../../internal/utils";

export type SurfaceVariant = NonNullable<SurfaceVariantProps["variant"]>;

export interface SurfaceContextValue {
  depth: number;
  variant: SurfaceVariant;
}

export const { SurfaceContext, useSurface } = createContext<SurfaceContextValue>()({
  name: "Surface",
  strict: false,
});
