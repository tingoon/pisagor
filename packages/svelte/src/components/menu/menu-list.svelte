<script lang="ts">
  import { type Snippet, setContext } from "svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import { MENU_INSIDE_LIST, withContext } from "./menu.context";

  type Props = HTMLAttributes<HTMLUListElement> & {
    children?: Snippet;
  };

  let { children, ...rest }: Props = $props();
  setContext(MENU_INSIDE_LIST, true);
  const part = withContext(() => rest, { name: "List" });
</script>

<ul {...part.props}>{@render children?.()}</ul>
