<script lang="ts">
  import { Switch as SwitchPrimitive } from "@ark-ui/svelte";
  import type {
    SwitchControlProps,
    SwitchHiddenInputProps,
    SwitchRootProps,
    SwitchThumbProps,
  } from "@ark-ui/svelte";
  import type { SwitchContract, SwitchRootContract } from "@pisagor/contracts";

  import SwitchControl from "./switch-control.svelte";
  import SwitchRoot from "./switch-root.svelte";
  import SwitchThumb from "./switch-thumb.svelte";

  type Props = Omit<SwitchRootProps, "children"> & {
    /** Extra props forwarded to the switch control element */
    controlProps?: Omit<SwitchControlProps, "children" | "class">;
    /** Extra props forwarded to the hidden input element (e.g. tabindex) */
    hiddenInputProps?: Omit<SwitchHiddenInputProps, "class">;
    onValueChange?: (value: boolean) => void;
    /** Extra props forwarded to the switch thumb element */
    thumbProps?: Omit<SwitchThumbProps, "children" | "class">;
  } & SwitchRootContract &
    SwitchContract;

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
