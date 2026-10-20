<script lang="ts">
  import { RadioGroup as RadioGroupPrimitive } from "@ark-ui/svelte";
  import type {
    RadioGroupPresetItem as BaseRadioGroupPresetItem,
    RadioGroupContract,
    RadioGroupRootContract,
  } from "@pisagor/contracts";
  import type { ComponentProps } from "svelte";
  import RadioGroupItem from "./radio-group-item.svelte";
  import RadioGroupItemControl from "./radio-group-item-control.svelte";
  import RadioGroupItemText from "./radio-group-item-text.svelte";
  import RadioGroupRoot from "./radio-group-root.svelte";

  type RadioGroupPresetItem = Omit<BaseRadioGroupPresetItem, "label"> & {
    label: string;
  };
  type Props = Omit<ComponentProps<typeof RadioGroupRoot>, "children"> & {
    items?: RadioGroupPresetItem[];
  } & RadioGroupRootContract &
    RadioGroupContract;

  let { items = [], ...rest }: Props = $props();
</script>

<RadioGroupRoot {...rest}>
  {#each items as item (item.value)}
    <RadioGroupItem disabled={item.disabled} value={item.value}>
      <RadioGroupItemControl />
      <RadioGroupItemText>{item.label}</RadioGroupItemText>
      <RadioGroupPrimitive.ItemHiddenInput />
    </RadioGroupItem>
  {/each}
</RadioGroupRoot>
