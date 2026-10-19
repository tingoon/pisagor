<script lang="ts">
  import {
    Select as SelectPrimitive,
    type SelectClearTriggerProps,
  } from "@ark-ui/svelte";
  import { useLocale } from "../provider/context";
  import { withContext } from "./select.context";

  const { m } = useLocale();

  let { children, ...rest }: SelectClearTriggerProps = $props();
  const part = withContext(
    () => ({
      ...rest,
      "aria-label": m("select.clear"),
    }),
    { name: "ClearTrigger" },
  );
</script>

<SelectPrimitive.ClearTrigger {...part.props}>
  {@render children?.()}
</SelectPrimitive.ClearTrigger>
