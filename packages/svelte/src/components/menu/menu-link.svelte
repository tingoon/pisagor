<script lang="ts">
  import { Ark } from "@ark-ui/svelte";
  import { cn } from "@pisagor/utils";
  import type { Snippet } from "svelte";
  import type { HTMLAnchorAttributes } from "svelte/elements";
  import { useStyles } from "./menu.context";

  type Props = HTMLAnchorAttributes & { active?: boolean; children?: Snippet };

  let { active = false, class: className, children, ...rest }: Props = $props();
  const styles = useStyles();
  const slots = $derived(styles.slots);
</script>

<li class={slots.wrapper()} data-part="item-wrapper" data-scope="menu">
  <Ark
    as="a"
    {...rest}
    aria-current={active ? "page" : undefined}
    class={slots.link({ class: cn(className) })}
    data-active={active ? "" : undefined}
    data-part="link"
    data-scope="menu"
  >
    {@render children?.()}
  </Ark>
</li>
