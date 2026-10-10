import {
  type Component,
  type ComponentProps,
  createContext,
  createMemo,
  type JSX,
  type ParentProps,
  splitProps,
  useContext,
  type ValidComponent,
} from "solid-js";
import { Dynamic } from "solid-js/web";
import type { ClassValue, VariantProps } from "tailwind-variants";

type SlotClassProps = {
  class?: ClassValue;
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
 * Styles exposed through context. Provide getters (memo-backed) and read them
 * inside JSX / tracked scopes (do not destructure) to stay reactive.
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

export interface CreateSlotRecipeContextOptions<
  Name extends string,
  R extends SlotRecipeFn,
> {
  /** PascalCase component name (kebab-cased for `data-scope`). */
  name: Name;
  recipe: R;
}

function toKebabCase(value: string) {
  return value
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1-$2")
    .toLowerCase();
}

export function createSlotRecipeContext<
  const Name extends string,
  R extends SlotRecipeFn,
>({ name, recipe: defaultRecipe }: CreateSlotRecipeContextOptions<Name, R>) {
  type Slots = ReturnType<R>;
  type Variants = RecipeVariantProps<R>;
  type Styles = SlotRecipeStyles<Slots, Variants>;
  type Slot = keyof Slots & string;

  const StylesContext = createContext<Styles>();
  const dataScope = toKebabCase(name);
  const variantKeys = variantKeysOf(defaultRecipe);

  function slotOf(options: WithSlotRecipeOptions<Slot>): Slot {
    return (options.slot ??
      (options.name === "Root" ? "base" : toKebabCase(options.name))) as Slot;
  }

  /**
   * Styles context, usable both as a provider (`<Context value={…}>`) and with
   * `useContext(Context)` for optional reads. The value is read once, so pass
   * getters (`{ get slots() { return slots(); }, … }`) to stay reactive.
   */
  const Context = Object.assign(
    (props: ParentProps<{ value: Styles }>): JSX.Element => (
      <StylesContext.Provider value={props.value}>
        {props.children}
      </StylesContext.Provider>
    ),
    StylesContext,
  );

  function useStyles(): Styles {
    const styles = useContext(StylesContext);

    if (styles === undefined) {
      throw new Error(`use${name} must be used within ${name}Context.`);
    }

    return styles;
  }

  /**
   * Styled root: provides styles to descendants and renders `component` with
   * the `slot` class, `data-scope` / `data-part` and variant `data-*`.
   */
  function withProvider<C extends ValidComponent>(
    component: C,
    options: WithSlotRecipeOptions<Slot>,
  ): Component<ComponentProps<C> & SlotRecipeProps<R>> {
    // Widen for `Dynamic`: props are forwarded untouched, typed by the return.
    const host: ValidComponent = component;
    const slot = slotOf(options);
    const defaultClass = options.defaultProps?.class as ClassValue;

    return (props) => {
      const [local, variantProps, rest] = splitProps(
        props as Record<string, unknown>,
        ["class", "recipe"],
        variantKeys,
      );
      const recipe = () => (local.recipe ?? defaultRecipe) as R;
      const variants = createMemo(
        () =>
          ({
            ...defaultRecipe.defaultVariants,
            ...recipe().defaultVariants,
            ...definedOnly(variantProps),
          }) as Variants,
      );
      const slots = createMemo(() => recipe()(variants() as never) as Slots);

      const dataAttrs: Record<string, unknown> = {};
      for (const key of variantKeys) {
        Object.defineProperty(dataAttrs, `data-${toKebabCase(key)}`, {
          enumerable: true,
          get: () => (variants() as Record<string, unknown>)[key],
        });
      }

      return (
        <StylesContext.Provider
          value={{
            get slots() {
              return slots();
            },
            get variants() {
              return variants();
            },
          }}
        >
          <Dynamic
            component={host}
            data-part={slot === "base" ? "root" : slot}
            data-scope={dataScope}
            {...dataAttrs}
            {...options.defaultProps}
            {...rest}
            class={(slots()[slot] as SlotFn)({
              class: [defaultClass, local.class as ClassValue],
            })}
          />
        </StylesContext.Provider>
      );
    };
  }

  /** Styled descendant part reading `slot` from the nearest provider. */
  function withContext<C extends ValidComponent>(
    component: C,
    options: WithSlotRecipeOptions<Slot>,
  ): Component<ComponentProps<C>> {
    const host: ValidComponent = component;
    const slot = slotOf(options);
    const defaultClass = options.defaultProps?.class as ClassValue;

    return (props): JSX.Element => {
      const styles = useStyles();
      const [local, rest] = splitProps(props as Record<string, unknown>, [
        "class",
      ]);

      return (
        <Dynamic
          component={host}
          data-part={slot === "base" ? "root" : slot}
          data-scope={dataScope}
          {...options.defaultProps}
          {...rest}
          class={(styles.slots[slot] as SlotFn)({
            class: [defaultClass, local.class as ClassValue],
          })}
        />
      );
    };
  }

  return {
    Context,
    useStyles,
    withContext,
    withProvider,
  };
}
