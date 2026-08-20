import type { SurfaceVariantProps } from "@pisagor/styles/ui/surface";
import { createContext } from "../../utils/create-context";

export type SurfaceVariant = NonNullable<SurfaceVariantProps["variant"]>;

export interface SurfaceContextValue {
  depth: number;
  variant: SurfaceVariant;
}

const [SurfaceContext, useSurface] = createContext<SurfaceContextValue>({
  name: "Surface",
  strict: false,
});

export { SurfaceContext, useSurface };
