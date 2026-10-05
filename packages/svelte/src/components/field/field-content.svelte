<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { cn } from "@pisagor/utils";
import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import { useFieldSlots } from "./field.context";

type Props = HTMLAttributes<HTMLDivElement> & {
  children?: Snippet;
};

let { class: className, children, ...rest }: Props = $props();
const slots = useFieldSlots();
</script>

<Ark
  as="div"
  {...rest}
  class={slots.content({ class: cn(className) })}
  data-part="content"
  data-scope="field"
>
  {@render children?.()}
</Ark>
