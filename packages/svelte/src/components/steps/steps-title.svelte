<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { cn } from "@pisagor/utils";
import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import { useStepsItem } from "./steps.context";

type Props = Omit<HTMLAttributes<HTMLSpanElement>, "class"> & {
  children?: Snippet;
  class?: string | undefined;
};

let { class: className, children, ...rest }: Props = $props();
const { slots } = useStepsItem();
</script>

<Ark
  as="span"
  {...rest}
  class={slots.title({ class: cn(className) })}
  data-part="title"
  data-scope="steps"
>
  {@render children?.()}
</Ark>
