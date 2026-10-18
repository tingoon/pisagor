<script lang="ts">
  import { handleRovingFocusKeyDown } from "@pisagor/utils";
  import type { HTMLAttributes } from "svelte/elements";
  import { withContext } from "./toolbar.context";

  let { children, ...rest }: HTMLAttributes<HTMLElement> = $props();
  const part = withContext(() => rest, {
    defaultProps: {
      "aria-orientation": "horizontal",
      onkeydown: handleRovingFocusKeyDown,
      role: "toolbar",
    },
    name: "Actions",
  });
</script>

<div {...part.props}>{@render children?.()}</div>
