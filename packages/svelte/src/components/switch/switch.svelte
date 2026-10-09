<script lang="ts">
import {
  type SwitchControlProps,
  type SwitchHiddenInputProps,
  Switch as SwitchPrimitive,
  type SwitchRootProps,
  type SwitchThumbProps,
} from "@ark-ui/svelte/switch";
import type { SwitchProps as BaseSwitchProps } from "@pisagor/props";
import type { SwitchRecipeSlot } from "@pisagor/recipes";
import type { VariantClassNames } from "../../internal/types";
import SwitchControl from "./switch-control.svelte";
import SwitchRoot from "./switch-root.svelte";
import SwitchThumb from "./switch-thumb.svelte";

type FormControlVariant = "primary" | "secondary";

type Props = Omit<SwitchRootProps, "children"> & {
  /** Slot class names */
  classNames?: VariantClassNames<SwitchRecipeSlot>;
  /** Extra props forwarded to the switch control element */
  controlProps?: Omit<SwitchControlProps, "children" | "class">;
  /** Extra props forwarded to the hidden input element (e.g. tabindex) */
  hiddenInputProps?: Omit<SwitchHiddenInputProps, "class">;
  onValueChange?: (value: boolean) => void;
  /** Extra props forwarded to the switch thumb element */
  thumbProps?: Omit<SwitchThumbProps, "children" | "class">;
  /** Visual shell variant. Defaults to `primary`. */
  variant?: FormControlVariant;
} & BaseSwitchProps;

let {
  controlProps,
  hiddenInputProps,
  thumbProps,
  onCheckedChange,
  onValueChange,
  classNames,
  ...rest
}: Props = $props();

function handleCheckedChange(
  details: Parameters<NonNullable<SwitchRootProps["onCheckedChange"]>>[0],
) {
  onCheckedChange?.(details);
  onValueChange?.(details.checked === true);
}
</script>

<SwitchRoot
  {...rest}
  onCheckedChange={onCheckedChange || onValueChange
    ? handleCheckedChange
    : undefined}
>
  <SwitchControl {...controlProps} class={classNames?.control}>
    <SwitchThumb {...thumbProps} class={classNames?.thumb} />
  </SwitchControl>
  <SwitchPrimitive.HiddenInput {...hiddenInputProps} />
</SwitchRoot>
