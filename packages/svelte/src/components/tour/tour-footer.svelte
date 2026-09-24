<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { HTMLAttributes } from "svelte/elements";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class"> & { class?: string | undefined };
let { children, class: className, ...rest }: Props = $props();
</script>

<Ark as="div" {...rest} class={className} data-part="footer" data-scope="tour">
  {@render children?.()}
</Ark>
