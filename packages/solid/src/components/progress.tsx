import {
  Progress as ProgressPrimitive,
  type ProgressRootProps as ProgressPrimitiveRootProps,
  type ProgressRangeProps,
  type ProgressTrackProps,
  type ProgressValueTextProps,
} from "@ark-ui/solid/progress";
import type { ProgressProps as BaseProgressProps } from "@pisagor/props";
import { type ProgressRecipeSlot, progressRecipe } from "@pisagor/recipes";
import type { Component, ComponentProps, JSX } from "solid-js";
import { Show, splitProps } from "solid-js";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import type { VariantClassNames } from "../internal/types";
import { Field } from "./field";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "Progress",
  recipe: progressRecipe,
});
// #endregion

type ProgressHeaderProps = ComponentProps<"div">;
type ProgressClassNames = VariantClassNames<ProgressRecipeSlot>;

type ProgressRootProps = Omit<ProgressPrimitiveRootProps, "value"> &
  BaseProgressProps & {
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

const ProgressRoot: Component<ProgressRootProps> = withProvider(
  ProgressPrimitive.Root,
  { name: "Root", slot: "base" },
);

const ProgressHeader: Component<ProgressHeaderProps> = withContext("div", {
  name: "Header",
});

const ProgressValue: Component<ProgressValueTextProps> = withContext(
  ProgressPrimitive.ValueText,
  { name: "Value" },
);

const ProgressTrack: Component<ProgressTrackProps> = withContext(
  ProgressPrimitive.Track,
  { name: "Track" },
);

const ProgressRange: Component<ProgressRangeProps> = withContext(
  ProgressPrimitive.Range,
  { name: "Range" },
);

export function Progress(props: ProgressProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "orientation",
    "indeterminate",
    "isValueVisible",
    "defaultValue",
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
      defaultValue={local.defaultValue ?? 0}
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

export type {
  ProgressRangeProps,
  ProgressTrackProps,
  ProgressValueTextProps,
} from "@ark-ui/solid/progress";
