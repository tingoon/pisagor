<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import { useFieldSlots } from "./field.context";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class"> & {
  children?: Snippet;
  class?: string | undefined;
};

let { class: className, children, ...rest }: Props = $props();
const slots = useFieldSlots();
</script>

<Ark
  as="div"
  {...rest}
  class={slots.title({ class: className })}
  data-part="title"
  data-scope="field"
>
  {@render children?.()}
</Ark>
