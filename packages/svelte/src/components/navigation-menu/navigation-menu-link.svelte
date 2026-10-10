<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { Snippet } from "svelte";
import type { HTMLAnchorAttributes } from "svelte/elements";
import { withContext } from "./navigation-menu.context";

type Props = HTMLAnchorAttributes & { active?: boolean; children?: Snippet };

let { active = false, children, ...rest }: Props = $props();
const part = withContext(() => rest, { name: "Link" });
</script>

<Ark
  as="a"
  {...part.props}
  aria-current={active ? "page" : undefined}
  data-active={active ? "" : undefined}
>
  {@render children?.()}
</Ark>
