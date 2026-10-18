<script lang="ts">
  import { handleNavigationMenuListKeyDown } from "@pisagor/utils";
  import type { Snippet } from "svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import { withContext } from "./navigation-menu.context";

  type Props = HTMLAttributes<HTMLUListElement> & {
    children?: Snippet;
  };

  let { children, onkeydown, ...rest }: Props = $props();
  const part = withContext(() => rest, { name: "List" });

  function handleKeyDown(
    event: KeyboardEvent & { currentTarget: EventTarget & HTMLUListElement },
  ) {
    onkeydown?.(event);
    if (!event.defaultPrevented) {
      handleNavigationMenuListKeyDown(event);
    }
  }
</script>

<ul {...part.props} onkeydown={handleKeyDown}>
  {@render children?.()}
</ul>
