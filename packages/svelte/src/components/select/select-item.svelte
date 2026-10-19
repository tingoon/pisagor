<script lang="ts">
  import {
    Select as SelectPrimitive,
    type SelectItemProps,
  } from "@ark-ui/svelte";
  import { CheckIcon } from "phosphor-svelte";
  import { useStyles, withContext } from "./select.context";

  let { children, ...rest }: SelectItemProps = $props();
  const styles = useStyles();
  const part = withContext(() => rest, { name: "Item" });
</script>

<SelectPrimitive.Item {...part.props}>
  <SelectPrimitive.ItemText class={styles.slots.itemText()}>
    {@render children?.()}
  </SelectPrimitive.ItemText>
  <span class={styles.slots.itemIndicator()}>
    <SelectPrimitive.ItemIndicator>
      <CheckIcon />
    </SelectPrimitive.ItemIndicator>
  </span>
</SelectPrimitive.Item>
