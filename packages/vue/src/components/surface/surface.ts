import { type SurfaceVariantProps, surfaceVariants } from "@pisagor/styles/ui/surface";
import { cn } from "@pisagor/utils";
import { computed, defineComponent, h, type PropType } from "vue";
import type { WithTestId } from "../../internal/types";
import { createContext } from "../../utils/create-context";

export type SurfaceVariant = NonNullable<SurfaceVariantProps["variant"]>;

export interface SurfaceContextValue {
  depth: number;
  variant: SurfaceVariant;
}

const AUTO_VARIANTS = [
  "default",
  "secondary",
  "tertiary",
  "tertiary",
] as const satisfies readonly SurfaceVariant[];

const [provideSurfaceContext, useSurfaceContext] = createContext<SurfaceContextValue>({
  name: "PisagorSurface",
  strict: false,
});

export function useSurface() {
  return useSurfaceContext();
}

export interface SurfaceProps extends WithTestId {
  bordered?: boolean;
  class?: unknown;
  padding?: SurfaceVariantProps["padding"];
  rounded?: boolean;
  variant?: SurfaceVariant;
}

type ArkPart = Parameters<typeof h>[0];

export const Surface = defineComponent({
  inheritAttrs: false,
  name: "PisagorSurface",
  props: {
    bordered: { default: false, type: Boolean },
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    padding: { default: undefined, type: String as PropType<SurfaceVariantProps["padding"]> },
    rounded: { default: true, type: Boolean },
    testId: String,
    variant: { default: undefined, type: String as PropType<SurfaceVariant> },
  },
  setup(props, { attrs, slots }) {
    const parent = useSurface();

    const surface = computed(() => {
      const depth = parent ? parent.depth + 1 : 0;
      const variant =
        props.variant ?? AUTO_VARIANTS[Math.min(depth, AUTO_VARIANTS.length - 1)] ?? "default";

      return { depth, variant };
    });

    provideSurfaceContext(surface);

    return () =>
      h(
        "div" as ArkPart,
        {
          ...attrs,
          class: cn(
            surfaceVariants({
              bordered: props.bordered,
              padding: props.padding,
              rounded: props.rounded,
              variant: surface.value.variant,
            }),
            props.class,
          ),
          "data-depth": surface.value.depth,
          "data-part": "root",
          "data-scope": "surface",
          "data-testid": props.testId,
          "data-variant": surface.value.variant,
        },
        slots.default?.(),
      );
  },
});
