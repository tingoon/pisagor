import { ark } from "@ark-ui/solid/factory";
import type {
  FieldErrorTextProps,
  FieldHelperTextProps,
  FieldLabelProps,
  FieldRootProps as FieldPrimitiveRootProps,
} from "@ark-ui/solid/field";
import { Field as FieldPrimitive } from "@ark-ui/solid/field";
import {
  type FieldsetLegendProps,
  Fieldset as FieldsetPrimitive,
  type FieldsetRootProps,
} from "@ark-ui/solid/fieldset";
import { type FieldVariantProps, fieldRecipe } from "@pisagor/recipes/field";
import { formControlSeparatorRecipe } from "@pisagor/recipes/form-control";
import { cn } from "@pisagor/utils";
import type { ComponentProps, JSX } from "solid-js";
import { createMemo, Show, splitProps } from "solid-js";
import { Separator } from "../separator";
import { useFormControlSurface } from "../surface/use-form-control-surface";
import { FieldContext, useFieldSlots } from "./field.context";

export interface FieldRootProps extends FieldPrimitiveRootProps, FieldVariantProps {
  recipe?: typeof fieldRecipe;
}

export type FieldProps = FieldRootProps;

export interface FieldLegendProps extends FieldsetLegendProps {
  variant?: "legend" | "label";
}

export interface FieldSetProps extends FieldsetRootProps {
  recipe?: typeof fieldRecipe;
}

export type FieldHelperProps = FieldHelperTextProps;
export type FieldErrorProps = FieldErrorTextProps;

export interface FieldGroupProps extends ComponentProps<typeof ark.div> {
  recipe?: typeof fieldRecipe;
}

export type FieldContentProps = ComponentProps<typeof ark.div>;
export type FieldRequiredIndicatorProps = ComponentProps<typeof ark.span>;
export type FieldTitleProps = ComponentProps<typeof ark.div>;
export type FieldDescriptionProps = ComponentProps<typeof ark.p>;
export type FieldSeparatorProps = ComponentProps<typeof ark.div>;

export function FieldRoot(props: FieldRootProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "orientation",
    "children",
    "reverse",
    "recipe",
    "class",
  ]);
  const orientation = () => local.orientation ?? "vertical";
  const reverse = () => local.reverse ?? false;
  const slots = createMemo(() =>
    (local.recipe ?? fieldRecipe)({ orientation: orientation(), reverse: reverse() }),
  );

  return (
    <FieldContext value={{ slots: slots() }}>
      <FieldPrimitive.Root
        {...rest}
        class={slots().base({ class: cn(local.class) })}
        data-orientation={orientation()}
      >
        {local.children}
      </FieldPrimitive.Root>
    </FieldContext>
  );
}

export function FieldSet(props: FieldSetProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "recipe", "class"]);
  const slots = () => (local.recipe ?? fieldRecipe)();

  return (
    <FieldContext value={{ slots: slots() }}>
      <FieldsetPrimitive.Root {...rest} class={slots().set({ class: cn(local.class) })}>
        {local.children}
      </FieldsetPrimitive.Root>
    </FieldContext>
  );
}

export function FieldLegend(props: FieldLegendProps): JSX.Element {
  const [local, rest] = splitProps(props, ["variant", "class"]);
  const slots = useFieldSlots();
  return (
    <FieldsetPrimitive.Legend
      {...rest}
      class={slots.legend({ class: cn(local.class) })}
      data-variant={local.variant ?? "legend"}
    />
  );
}

export function FieldGroup(props: FieldGroupProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "recipe", "class"]);
  const slots = () => (local.recipe ?? fieldRecipe)();

  return (
    <FieldContext value={{ slots: slots() }}>
      <ark.div
        {...rest}
        class={slots().group({ class: cn(local.class) })}
        data-part="group"
        data-scope="field"
      >
        {local.children}
      </ark.div>
    </FieldContext>
  );
}

export function FieldContent(props: FieldContentProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const slots = useFieldSlots();
  return (
    <ark.div
      {...rest}
      class={slots.content({ class: cn(local.class) })}
      data-part="content"
      data-scope="field"
    />
  );
}

export function FieldLabel(props: FieldLabelProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const slots = useFieldSlots();
  return <FieldPrimitive.Label {...rest} class={slots.label({ class: cn(local.class) })} />;
}

export function FieldRequiredIndicator(props: FieldRequiredIndicatorProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const slots = useFieldSlots();

  return (
    <FieldPrimitive.RequiredIndicator
      {...rest}
      aria-hidden
      class={slots.requiredIndicator({ class: cn(local.class) })}
    >
      {local.children ?? "*"}
    </FieldPrimitive.RequiredIndicator>
  );
}

export function FieldTitle(props: FieldTitleProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const slots = useFieldSlots();
  return (
    <ark.div
      {...rest}
      class={slots.title({ class: cn(local.class) })}
      data-part="title"
      data-scope="field"
    />
  );
}

export function FieldDescription(props: FieldDescriptionProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const slots = useFieldSlots();
  return (
    <ark.p
      {...rest}
      class={slots.description({ class: cn(local.class) })}
      data-part="description"
      data-scope="field"
    />
  );
}

export function FieldSeparator(props: FieldSeparatorProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const slots = useFieldSlots();
  const surfaceVariant = useFormControlSurface();

  return (
    <ark.div
      {...rest}
      class={slots.separator({ class: cn(local.class) })}
      data-content={!!local.children}
      data-part="separator"
      data-scope="field"
    >
      <Separator class={slots.inline()} />
      <Show when={!!local.children}>
        <span class={formControlSeparatorRecipe({ surfaceVariant, variant: "primary" })}>
          {local.children}
        </span>
      </Show>
    </ark.div>
  );
}

export function FieldHelper(props: FieldHelperProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const slots = useFieldSlots();
  return <FieldPrimitive.HelperText {...rest} class={slots.helper({ class: cn(local.class) })} />;
}

export function FieldError(props: FieldErrorProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const slots = useFieldSlots();
  return <FieldPrimitive.ErrorText {...rest} class={slots.error({ class: cn(local.class) })} />;
}
