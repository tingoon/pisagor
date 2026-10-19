<script lang="ts">
  import {
    Select as SelectPrimitive,
    type SelectTriggerProps as ArkSelectTriggerProps,
  } from "@ark-ui/svelte";
  import { CaretUpDownIcon, XIcon } from "phosphor-svelte";
  import { useStyles, withContext } from "./select.context";
  import SelectClearTrigger from "./select-clear-trigger.svelte";
  import SelectControl from "./select-control.svelte";

  type Props = Omit<ArkSelectTriggerProps, "size"> & {
    /**
     * Whether to show a clear button when a value is selected.
     *
     * @defaultValue false
     */
    clearable?: boolean;
  };

  let { clearable = false, children, ...rest }: Props = $props();

  const styles = useStyles();
  const trigger = withContext(
    () => ({
      ...rest,
      "data-clearable": clearable || undefined,
    }),
    { name: "Trigger" },
  );
</script>

<SelectControl>
  <SelectPrimitive.Trigger {...trigger.props}>
    {@render children?.()}
    <div class={styles.slots.triggerActions()}>
      <SelectPrimitive.Indicator>
        <CaretUpDownIcon />
      </SelectPrimitive.Indicator>
    </div>
  </SelectPrimitive.Trigger>
  {#if clearable}
    <SelectClearTrigger>
      <XIcon />
    </SelectClearTrigger>
  {/if}
</SelectControl>
