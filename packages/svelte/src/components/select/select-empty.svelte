<script lang="ts">
  import { Select as SelectPrimitive } from "@ark-ui/svelte";
  import type { Snippet } from "svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import { withContext } from "./select.context";

  type Props = HTMLAttributes<HTMLDivElement> & {
    children?: Snippet;
  };

  let { children, ...rest }: Props = $props();
  const part = withContext(() => rest, {
    defaultProps: { role: "presentation" },
    name: "Empty",
  });
</script>

<SelectPrimitive.Context>
  {#snippet render(select)}
    {#if select().empty}
      <div {...part.props}>
        {@render children?.()}
      </div>
    {/if}
  {/snippet}
</SelectPrimitive.Context>
