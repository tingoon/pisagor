<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { formControlSeparatorRecipe } from "@pisagor/recipes/form-control";
import { cn } from "@pisagor/utils";
import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import Separator from "../separator/separator.svelte";
import { useFormControlSurface } from "../surface/use-form-control-surface";
import { useFieldSlots } from "./field.context";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class"> & {
  children?: Snippet;
  class?: string | undefined;
};

let { children, class: className, ...rest }: Props = $props();
const slots = useFieldSlots();
const surfaceVariant = useFormControlSurface();
</script>

<Ark
  as="div"
  {...rest}
  class={slots.separator({ class: cn(className) })}
  data-content={children ? "" : undefined}
  data-part="separator"
  data-scope="field"
>
  <Separator class={slots.inline()} />
  {#if children}
    <span class={formControlSeparatorRecipe({ surfaceVariant, variant: "primary" })}>
      {@render children()}
    </span>
  {/if}
</Ark>
