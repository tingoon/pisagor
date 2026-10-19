import { createContext, createElement, use } from "react";
import type { ComponentProps, ElementType, FunctionComponent } from "react";
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

  /** `data-part` / `data-scope` always win over consumer props. */
  function dataIdentity(
    defaultProps: Record<string, unknown> | undefined,
    slot: string,
  ) {
    return {
      "data-part":
        defaultProps?.["data-part"] ?? (slot === "base" ? "root" : slot),
      "data-scope": defaultProps?.["data-scope"] ?? dataScope,
    };
  }

  function useStyles() {
    const styles = use(StylesContext);

    if (styles === undefined) {
      throw new Error(`use${name} must be used within ${name}Context.`);
    }

    return styles;
  }

  type ProviderProps<C extends ElementType, P> = ComponentProps<C> & P;

  function createProvider<C extends ElementType, P extends object>(
    Component: C,
    options: WithSlotRecipeOptions<Slot>,
  ): FunctionComponent<ProviderProps<C, P>> {
    const partName = options.name;
    const slot = (options.slot ??
      (partName === "Root" ? "base" : toKebabCase(partName))) as Slot;

    function ProviderComponent(props: ProviderProps<C, P>) {
      const recipe = ((props as SlotRecipeProps<R>).recipe ??
        defaultRecipe) as R;
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
        ClassValue | undefined;

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
          ...dataAttrs,
          ...options.defaultProps,
          ...dom,
          ...dataIdentity(options.defaultProps, slot),
          className: (slots[slot] as SlotFn)({
            className: [defaultClassName, className],
          }),
        }),
      );
    }

    ProviderComponent.displayName = `${name}.${partName}`;

    return ProviderComponent;
  }

  /**
   * Options → root component. Call-signature interface keeps `P`'s constraint /
   * default visible to the language service (a returned generic function
   * otherwise widens to bare `<P>`, which IDEs often surface as `any`).
   */
  interface WithProviderBind<C extends ElementType> {
    <P extends object = SlotRecipeProps<R>>(
      options: WithSlotRecipeOptions<Slot>,
    ): FunctionComponent<ProviderProps<C, P>>;
  }

  /**
   * Host element first (inferred), optional root contract on the options call.
   * TypeScript cannot express `withProvider<Contract>("div")({…})` (no partial
   * type-argument inference), so the contract goes on the second call:
   *
   * `withProvider("div")<AlertRootContract>({ name: "Root", slot: "base" })`
   * `withProvider("div")({ name: "Root", slot: "base" })`
   */
  function withProvider<C extends ElementType>(
    Component: C,
  ): WithProviderBind<C> {
    return <P extends object = SlotRecipeProps<R>>(
      options: WithSlotRecipeOptions<Slot>,
    ) => createProvider<C, P>(Component, options);
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
        ClassValue | undefined;

      return createElement(Component, {
        ...options.defaultProps,
        ...rest,
        ...dataIdentity(options.defaultProps, slot),
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
