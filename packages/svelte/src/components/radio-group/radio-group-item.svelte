<script lang="ts">
  import {
    RadioGroup as RadioGroupPrimitive,
    type RadioGroupItemProps as ArkRadioGroupItemProps,
  } from "@ark-ui/svelte";
  import type { RadioGroupItemRootContract } from "@pisagor/contracts";

  import { withProvider } from "./radio-group.context";
  import RadioGroupItemControl from "./radio-group-item-control.svelte";
  import RadioGroupItemHiddenInput from "./radio-group-item-hidden-input.svelte";
  import RadioGroupItemText from "./radio-group-item-text.svelte";

  type Props = ArkRadioGroupItemProps &
    RadioGroupItemRootContract & {
      tabindex?: number | null;
    };

  let { tabindex, children, ...rest }: Props = $props();

  const item = withProvider(() => rest, { name: "Item", slot: "base" });
</script>

<RadioGroupPrimitive.Item {...item.props}>
  <RadioGroupItemControl />
  <RadioGroupItemText>
    {@render children?.()}
  </RadioGroupItemText>
  <RadioGroupItemHiddenInput {tabindex} />
</RadioGroupPrimitive.Item>
