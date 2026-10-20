<script lang="ts">
  import {
    RadioGroup as RadioGroupPrimitive,
    type RadioGroupItemProps,
  } from "@ark-ui/svelte";
  import type { RadioGroupItemRootContract } from "@pisagor/contracts";
  import { withProvider } from "./radio-group.context";

  type Props = RadioGroupItemProps & RadioGroupItemRootContract;

  let { children, ...rest }: Props = $props();
  const item = withProvider(() => rest, { name: "Item", slot: "base" });
</script>

<RadioGroupPrimitive.Item {...item.props}>
  {@render children?.()}
</RadioGroupPrimitive.Item>
