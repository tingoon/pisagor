import {
  type ComponentProps,
  createContext,
  createElement,
  type ElementType,
  type FunctionComponent,
  use,
} from "react";
import type { ClassValue, VariantProps } from "tailwind-variants";

type SlotClassProps = {
  className?: ClassValue;
};

type SlotFn = (slotProps?: SlotClassProps) => string;

export type SlotRecipeFn = ((
  props?: Record<string, unknown>,
) => Record<string, SlotFn>) & {
  defaultVariants?: Record<string, unknown>;
  variantKeys?: ReadonlyArray<string | number>;
  variants?: Record<string, unknown>;
};

export interface SlotRecipeStyles<
  Slots extends Record<string, SlotFn>,
  Variants,
> {
  slots: Slots;
  variants: Variants;
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

function splitRecipeProps(
  props: Record<string, unknown>,
  recipe: SlotRecipeFn,
) {
  const keys = new Set(variantKeysOf(recipe));
  const variants: Record<string, unknown> = {};
  const rest: Record<string, unknown> = {};

  for (const [key, value] of Object.entries(props)) {
    if (key === "recipe") continue;
    if (keys.has(key)) variants[key] = value;
    else rest[key] = value;
  }

  return { rest, variants: definedOnly(variants) };
}

export interface CreateSlotRecipeContextOptions<
  Name extends string,
  R extends SlotRecipeFn,
> {
  /** PascalCase component name (DevTools prefix; kebab-cased for `data-scope`). */
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

  const StylesContext = createContext<Styles | undefined>(undefined);
  const dataScope = toKebabCase(name);
  StylesContext.displayName = `${name}Context`;

  function useStyles() {
    const styles = use(StylesContext);

    if (styles === undefined) {
      throw new Error(`use${name} must be used within ${name}Context.`);
    }

    return styles;
  }

  function withProvider<C extends ElementType>(
    Component: C,
    options: WithSlotRecipeOptions<Slot>,
  ): FunctionComponent<ComponentProps<C> & SlotRecipeProps<R>> {
    const partName = options.name;
    const slot = (options.slot ??
      (partName === "Root" ? "base" : toKebabCase(partName))) as Slot;

    function ProviderComponent(props: ComponentProps<C> & SlotRecipeProps<R>) {
      const recipe = (props.recipe ?? defaultRecipe) as R;
      const { rest, variants } = splitRecipeProps(
        props as Record<string, unknown>,
        recipe,
      );
      const resolved = {
        ...defaultRecipe.defaultVariants,
        ...recipe.defaultVariants,
        ...variants,
      } as Variants;
      const slots = recipe(resolved as never) as Slots;
      const { className, ...dom } = rest as Record<string, unknown> & {
        className?: ClassValue;
      };
      const defaultClassName = options.defaultProps?.className as
        | ClassValue
        | undefined;

      const dataAttrs: Record<string, unknown> = {};
      for (const [key, value] of Object.entries(
        resolved as Record<string, unknown>,
      )) {
        if (value !== undefined) {
          dataAttrs[`data-${toKebabCase(key)}`] = value;
        }
      }

      return createElement(
        StylesContext,
        { value: { slots, variants: resolved } },
        createElement(Component, {
          "data-part": slot === "base" ? "root" : slot,
          "data-scope": dataScope,
          ...dataAttrs,
          ...options.defaultProps,
          ...dom,
          className: (slots[slot] as SlotFn)({
            className: [defaultClassName, className],
          }),
        }),
      );
    }

    ProviderComponent.displayName = `${name}.${partName}`;

    return ProviderComponent;
  }

  function withContext<C extends ElementType>(
    Component: C,
    options: WithSlotRecipeOptions<Slot>,
  ): FunctionComponent<ComponentProps<C>> {
    const partName = options.name;
    const slot = (options.slot ??
      (partName === "Root" ? "base" : toKebabCase(partName))) as Slot;

    function SlotComponent(props: ComponentProps<C>) {
      const { slots } = useStyles();
      const { className, ...rest } = props as ComponentProps<C> & {
        className?: ClassValue;
      };
      const defaultClassName = options.defaultProps?.className as
        | ClassValue
        | undefined;

      return createElement(Component, {
        "data-part": slot === "base" ? "root" : slot,
        "data-scope": dataScope,
        ...options.defaultProps,
        ...rest,
        className: (slots[slot] as SlotFn)({
          className: [defaultClassName, className],
        }),
      });
    }

    SlotComponent.displayName = `${name}.${partName}`;

    return SlotComponent;
  }

  return {
    Context: StylesContext,
    useStyles,
    withContext,
    withProvider,
  };
}
