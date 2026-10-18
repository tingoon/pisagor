<script lang="ts">
  import { handleNavigationMenuContentKeyDown } from "@pisagor/utils";
  import type { Snippet } from "svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import {
    useStyles,
    useNavigationMenuItemState,
  } from "./navigation-menu.context";

  type Props = HTMLAttributes<HTMLUListElement> & { children?: Snippet };

  let { children, class: className, onkeydown, ...rest }: Props = $props();
  const styles = useStyles();
  const item = useNavigationMenuItemState("Content");

  function handleKeyDown(
    event: KeyboardEvent & { currentTarget: EventTarget & HTMLUListElement },
  ) {
    onkeydown?.(event);
    handleNavigationMenuContentKeyDown(event);
  }
</script>

<ul
  {...rest}
  class={styles.slots.content({ class: className as string | undefined })}
  data-part="content"
  data-scope="navigation-menu"
  data-state={item.open ? "open" : "closed"}
  hidden={!item.open}
  id={item.contentId}
  onkeydown={handleKeyDown}
>
  {@render children?.()}
</ul>
