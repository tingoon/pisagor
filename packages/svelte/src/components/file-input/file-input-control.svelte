<script lang="ts">
  import type { HTMLInputAttributes } from "svelte/elements";
  import { withContext } from "./file-input.context";

  type Props = HTMLInputAttributes & {
    element?: HTMLInputElement | null;
  };

  let { element = $bindable<HTMLInputElement | null>(null), ...rest }: Props =
    $props();
  const part = withContext(() => rest, {
    defaultProps: {
      type: "file",
    },
    name: "Control",
  });
</script>

<input bind:this={element} {...part.props} />
