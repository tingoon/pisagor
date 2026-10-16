<script lang="ts">
  import { Ark } from "@ark-ui/svelte/factory";
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

<Ark as="div" {...part.props}>{@render children?.()}</Ark>
