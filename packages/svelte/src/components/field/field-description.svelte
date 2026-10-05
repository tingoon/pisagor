<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import { useFieldSlots } from "./field.context";

type Props = Omit<HTMLAttributes<HTMLParagraphElement>, "class"> & {
  children?: Snippet;
  class?: string | undefined;
};

let { class: className, children, ...rest }: Props = $props();
const slots = useFieldSlots();
</script>

<Ark
  as="p"
  {...rest}
  class={slots.description({ class: className })}
  data-part="description"
  data-scope="field"
>
  {@render children?.()}
</Ark>
