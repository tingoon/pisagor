import type { SurfaceVariantProps } from "@pisagor/recipes";
import { createContext } from "../../utils";

export type SurfaceVariant = NonNullable<SurfaceVariantProps["variant"]>;

export interface SurfaceContextValue {
  depth: number;
  variant: SurfaceVariant;
}

export const { SurfaceContext, useSurface } = createContext(
  "Surface",
)<SurfaceContextValue>({ strict: false });
