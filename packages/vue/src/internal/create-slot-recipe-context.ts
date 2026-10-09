import type { ClassValue, VariantProps } from "tailwind-variants";
import {
  type Component,
  type ComponentObjectPropsOptions,
  computed,
  type DefineSetupFnComponent,
  defineComponent,
  h,
  type InjectionKey,
  inject,
  type Prop,
  provide,
  type Slots,
  type VNode,
} from "vue";

type SlotClassProps = {
  class?: ClassValue;
};

/** Component-facing `class` prop: Vue accepts any class binding (string, array, object). */
type PartClassProps = {
  class?: unknown;
};

type SlotFn = (slotProps?: SlotClassProps) => string;

export type SlotRecipeFn = ((
  props?: Record<string, unknown>,
) => Record<string, SlotFn>) & {
  defaultVariants?: Record<string, unknown>;
  variantKeys?: ReadonlyArray<string | number>;
  variants?: Record<string, unknown>;
};

/**
 * Styles exposed through provide/inject. Fields are computed-backed getters:
 * read them inside render functions / computed (do not destructure in
 * `setup`) to stay reactive.
 */
export interface SlotRecipeStyles<
  Slots extends Record<string, SlotFn>,
  Variants,
> {
  readonly slots: Slots;
  readonly variants: Variants;
}

type RecipeVariantProps<R extends SlotRecipeFn> =
  string extends keyof VariantProps<R> ? Record<never, never> : VariantProps<R>;

/** Override must keep the same slot return shape as the default recipe. */
export type CompatibleSlotRecipe<R extends SlotRecipeFn> = R &
  ((props?: RecipeVariantProps<R>) => ReturnType<R>);

export type SlotRecipeProps<R extends SlotRecipeFn> = RecipeVariantProps<R> & {
  recipe?: CompatibleSlotRecipe<R>;
};

export interface WithSlotRecipeOptions<Slot extends string = string> {
  /** PascalCase part name (`Alert.Title`). */
  name: string;
  /** Recipe slot; defaults to kebab-case of `name` (`Root` → `base`). */
  slot?: Slot;
  defaultProps?: Record<string, unknown>;
}

/** Native tag (`"div"`) or component (Ark part, `ark.div`, …) to render. */
export type SlotHost = string | Component;

export interface CreateSlotRecipeContextOptions<
  Name extends string,
  R extends SlotRecipeFn,
> {
  /** PascalCase component name (DevTools prefix; kebab-cased for `data-scope`). */
  name: Name;
  recipe: R;
}

function variantKeysOf(recipe: SlotRecipeFn) {
  return (recipe.variantKeys ?? Object.keys(recipe.variants ?? {})).map(String);
}

function definedOnly(values: Record<string, unknown>) {
  const out: Record<string, unknown> = {};

  for (const [key, value] of Object.entries(values)) {
    if (value !== undefined) out[key] = value;
  }

  return out;
}

function toKebabCase(value: string) {
  return value
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1-$2")
    .toLowerCase();
}

/** `true` / `false`-only variants are declared `Boolean` so `<X inset />` works in templates. */
function isBooleanVariant(options: unknown) {
  if (typeof options !== "object" || options === null) return false;

  const keys = Object.keys(options);

  return (
    keys.length > 0 && keys.every((key) => key === "true" || key === "false")
  );
}

/** Runtime prop declarations: `class`, `recipe` and every variant key. */
function runtimePropsOf(recipe: SlotRecipeFn, withVariants: boolean) {
  const props: Record<string, Prop<unknown>> = {
    class: { default: undefined },
  };

  if (!withVariants) return props;

  props.recipe = { default: undefined, type: Function };

  for (const key of variantKeysOf(recipe)) {
    props[key] = isBooleanVariant(recipe.variants?.[key])
      ? { default: undefined, type: Boolean }
      : { default: undefined };
  }

  return props;
}

/**
 * Slot-recipe parts expose `name` on the component object (DevTools, Storybook
 * `subcomponents`, which expects component options rather than a bare constructor).
 */
export type SlotRecipePart<Props extends object> =
  DefineSetupFnComponent<Props> & {
    inheritAttrs: boolean;
    name: string;
  };

/** Native tags take children; components take the slots object. */
export function renderSlotHost(
  host: SlotHost,
  props: Record<string, unknown>,
  slots: Slots,
): VNode {
  return typeof host === "string"
    ? h(host, props, slots.default?.())
    : h(host, props, slots);
}

export function createSlotRecipeContext<
  const Name extends string,
  R extends SlotRecipeFn,
>({ name, recipe: defaultRecipe }: CreateSlotRecipeContextOptions<Name, R>) {
  type Slots = ReturnType<R>;
  type Variants = RecipeVariantProps<R>;
  type Styles = SlotRecipeStyles<Slots, Variants>;
  type Slot = keyof Slots & string;

  const key: InjectionKey<Styles> = Symbol(`${name}Context`);
  const dataScope = toKebabCase(name);
  const variantKeys = variantKeysOf(defaultRecipe);

  function slotOf(options: WithSlotRecipeOptions<Slot>): Slot {
    return (options.slot ??
      (options.name === "Root" ? "base" : toKebabCase(options.name))) as Slot;
  }

  function useStyles(): Styles {
    const styles = inject(key, undefined);

    if (styles === undefined) {
      throw new Error(`use${name} must be used within ${name}Context.`);
    }

    return styles;
  }

  /**
   * Optional consumer (React `use(Context)` parity): `undefined` outside a
   * provider so parts can fall back to the default recipe.
   */
  function useOptionalStyles(): Styles | undefined {
    return inject(key, undefined);
  }

  /**
   * Provide styles from `setup` for hand-written roots. Pass getters
   * (`{ get slots() { return slots.value; }, … }`) to stay reactive.
   */
  function provideStyles(styles: Styles) {
    provide(key, styles);
  }

  /** Renderless provider (`h(Context, { value }, slots)`), React `<Context value>` parity. */
  const Context = defineComponent<{ value: Styles }>(
    (props, { slots }) => {
      provideStyles({
        get slots() {
          return props.value.slots;
        },
        get variants() {
          return props.value.variants;
        },
      });

      return () => slots.default?.();
    },
    { name: `${name}Context`, props: ["value"] },
  );

  /**
   * Styled root: provides styles to descendants and renders `component` with
   * the `slot` class, `data-scope` / `data-part` and variant `data-*`.
   */
  function withProvider<P extends object = Record<never, never>>(
    component: SlotHost,
    options: WithSlotRecipeOptions<Slot>,
  ): SlotRecipePart<P & SlotRecipeProps<R> & PartClassProps> {
    type Props = P & SlotRecipeProps<R> & PartClassProps;

    const partName = `${name}.${options.name}`;

    const slot = slotOf(options);
    const defaultClass = options.defaultProps?.class as ClassValue;
    const runtimeProps = runtimePropsOf(
      defaultRecipe,
      true,
    ) as ComponentObjectPropsOptions<Props>;

    const part = defineComponent<Props>(
      (props, { attrs, slots: children }) => {
        const values = props as Record<string, unknown>;
        const recipe = computed(() => (values.recipe ?? defaultRecipe) as R);
        const variants = computed(() => {
          const own: Record<string, unknown> = {};

          for (const variantKey of variantKeys) {
            own[variantKey] = values[variantKey];
          }

          return {
            ...defaultRecipe.defaultVariants,
            ...recipe.value.defaultVariants,
            ...definedOnly(own),
          } as Variants;
        });
        const slots = computed(
          () => recipe.value(variants.value as never) as Slots,
        );

        provideStyles({
          get slots() {
            return slots.value;
          },
          get variants() {
            return variants.value;
          },
        });

        return () => {
          const dataAttrs: Record<string, unknown> = {};

          for (const [variantKey, value] of Object.entries(
            variants.value as Record<string, unknown>,
          )) {
            if (value !== undefined) {
              dataAttrs[`data-${toKebabCase(variantKey)}`] = value;
            }
          }

          return renderSlotHost(
            component,
            {
              "data-part": slot === "base" ? "root" : slot,
              "data-scope": dataScope,
              ...dataAttrs,
              ...options.defaultProps,
              ...attrs,
              class: (slots.value[slot] as SlotFn)({
                class: [defaultClass, values.class as ClassValue],
              }),
            },
            children,
          );
        };
      },
      {
        inheritAttrs: false,
        name: partName,
        props: runtimeProps,
      },
    );

    return Object.assign(part, { inheritAttrs: false, name: partName });
  }

  /** Styled descendant part reading `slot` from the nearest provider. */
  function withContext<P extends object = Record<never, never>>(
    component: SlotHost,
    options: WithSlotRecipeOptions<Slot>,
  ): SlotRecipePart<P & PartClassProps> {
    type Props = P & PartClassProps;

    const partName = `${name}.${options.name}`;

    const slot = slotOf(options);
    const defaultClass = options.defaultProps?.class as ClassValue;
    const runtimeProps = runtimePropsOf(
      defaultRecipe,
      false,
    ) as ComponentObjectPropsOptions<Props>;

    const part = defineComponent<Props>(
      (props, { attrs, slots: children }) => {
        const styles = useStyles();
        const values = props as Record<string, unknown>;

        return () =>
          renderSlotHost(
            component,
            {
              "data-part": slot === "base" ? "root" : slot,
              "data-scope": dataScope,
              ...options.defaultProps,
              ...attrs,
              class: (styles.slots[slot] as SlotFn)({
                class: [defaultClass, values.class as ClassValue],
              }),
            },
            children,
          );
      },
      {
        inheritAttrs: false,
        name: partName,
        props: runtimeProps,
      },
    );

    return Object.assign(part, { inheritAttrs: false, name: partName });
  }

  return {
    Context,
    provideStyles,
    useOptionalStyles,
    useStyles,
    withContext,
    withProvider,
  };
}
