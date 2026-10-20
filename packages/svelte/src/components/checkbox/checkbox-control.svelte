<script lang="ts">
  import {
    Checkbox as CheckboxPrimitive,
    type CheckboxControlProps,
  } from "@ark-ui/svelte";
  import type { CheckboxRootContract } from "@pisagor/contracts";
  import { useStyles, withContext } from "./checkbox.context";

  /**
   * Control; mirrors the root `variant` as `data-variant`. Render your own
   * indicators.
   */
  let { children, ...rest }: CheckboxControlProps = $props();
  const styles = useStyles();
  const part = withContext(
    () => ({
      ...rest,
      "data-variant":
        (styles.variants as CheckboxRootContract).variant ?? "primary",
    }),
    { name: "Control", slot: "base" },
  );
</script>

<CheckboxPrimitive.Control {...part.props}>
  {@render children?.()}
</CheckboxPrimitive.Control>
