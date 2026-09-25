import {
  Progress as ProgressPrimitive,
  type ProgressRootProps as ProgressPrimitiveRootProps,
  type ProgressRangeProps,
  type ProgressTrackProps,
  type ProgressValueTextProps,
} from "@ark-ui/solid/progress";
import { type ProgressRecipeSlot, progressRecipe } from "@pisagor/recipes/progress";
import { cn } from "@pisagor/utils";
import type { ComponentProps, JSX } from "solid-js";
import { Show, splitProps } from "solid-js";
import type { VariantClassNames } from "../../internal/types";
import { Field } from "../field";
import { ProgressContext, useProgress } from "./progress.context";

type ProgressHeaderProps = ComponentProps<"div">;
type ProgressClassNames = VariantClassNames<ProgressRecipeSlot>;

type ProgressRootProps = Omit<ProgressPrimitiveRootProps, "value"> & {
  recipe?: typeof progressRecipe;
  value?: number | null;
};

export interface ProgressProps extends Omit<ProgressRootProps, "children"> {
  indeterminate?: boolean;
  isValueVisible?: boolean;
  value?: number;
  children?: JSX.Element;
  label?: string;
  classNames?: ProgressClassNames;
  rangeProps?: Omit<ProgressRangeProps, "children" | "class">;
  trackProps?: Omit<ProgressTrackProps, "children" | "class">;
  valueProps?: Omit<ProgressValueTextProps, "children" | "class">;
}

function ProgressRoot(props: ProgressRootProps): JSX.Element {
  const [local, rest] = splitProps(props, ["orientation", "children", "recipe", "class"]);
  const slots = () => (local.recipe ?? progressRecipe)();

  return (
    <ProgressContext value={{ slots: slots() }}>
      <ProgressPrimitive.Root
        {...rest}
        class={slots().base({ class: cn(local.class) })}
        orientation={local.orientation ?? "horizontal"}
      >
        {local.children}
      </ProgressPrimitive.Root>
    </ProgressContext>
  );
}

function ProgressHeader(props: ProgressHeaderProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const { slots } = useProgress();

  return (
    <div {...rest} class={slots.header({ class: cn(local.class) })}>
      {local.children}
    </div>
  );
}

function ProgressValue(props: ProgressValueTextProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useProgress();

  return <ProgressPrimitive.ValueText {...rest} class={slots.value({ class: cn(local.class) })} />;
}

function ProgressTrack(props: ProgressTrackProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const { slots } = useProgress();

  return (
    <ProgressPrimitive.Track {...rest} class={slots.track({ class: cn(local.class) })}>
      {local.children}
    </ProgressPrimitive.Track>
  );
}

function ProgressRange(props: ProgressRangeProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useProgress();

  return <ProgressPrimitive.Range {...rest} class={slots.range({ class: cn(local.class) })} />;
}

export function Progress(props: ProgressProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "orientation",
    "indeterminate",
    "isValueVisible",
    "value",
    "children",
    "label",
    "rangeProps",
    "trackProps",
    "valueProps",
    "class",
    "classNames",
  ]);

  const showHeader = () => Boolean(local.label || local.isValueVisible);

  return (
    <ProgressRoot
      {...rest}
      class={local.class}
      orientation={local.orientation ?? "horizontal"}
      value={local.indeterminate ? null : local.value}
    >
      <Show when={showHeader()}>
        <ProgressHeader class={local.classNames?.header}>
          <Show when={local.label}>
            <Field.Label>{local.label}</Field.Label>
          </Show>
          <Show when={local.isValueVisible}>
            <Field.Label
              asChild={(labelProps) => (
                <ProgressValue
                  {...labelProps()}
                  {...local.valueProps}
                  class={local.classNames?.value}
                />
              )}
            />
          </Show>
        </ProgressHeader>
      </Show>
      {local.children}
      <ProgressTrack {...local.trackProps} class={local.classNames?.track}>
        <ProgressRange {...local.rangeProps} class={local.classNames?.range} />
      </ProgressTrack>
    </ProgressRoot>
  );
}
