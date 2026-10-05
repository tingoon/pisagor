<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { HTMLAttributes } from "svelte/elements";
import { useActionBar } from "./action-bar.context";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class"> & {
  class?: string | undefined;
};
let { class: className, children, ...rest }: Props = $props();
const ctx = useActionBar();
</script>

<Ark
  as="div"
  {...rest}
  class={ctx.slots.body({ class: className })}
  data-part="body"
  data-scope="action-bar"
>
  {@render children?.()}
</Ark>
