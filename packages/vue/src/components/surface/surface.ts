import { type SurfaceVariantProps, surfaceRecipe } from "@pisagor/recipes/surface";
import { cn } from "@pisagor/utils";
import { computed, defineComponent, h, type PropType } from "vue";
import { createContext } from "../../internal/utils/create-context";

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

export interface SurfaceProps extends SurfaceVariantProps {
  /**
   * Style recipe. Defaults to `surfaceRecipe` from `@pisagor/recipes/surface`.
   *
   * @defaultValue surfaceRecipe
   */
  recipe?: typeof surfaceRecipe;
  class?: unknown;
}

type ArkPart = Parameters<typeof h>[0];

export const Surface = defineComponent({
  inheritAttrs: false,
  name: "PisagorSurface",
  props: {
    bordered: { default: false, type: Boolean },
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    padding: { default: undefined, type: String as PropType<SurfaceVariantProps["padding"]> },
    recipe: {
      default: surfaceRecipe,
      type: Function as PropType<typeof surfaceRecipe>,
    },
    rounded: { default: true, type: Boolean },
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
            props.recipe({
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
          "data-variant": surface.value.variant,
        },
        slots.default?.(),
      );
  },
});
