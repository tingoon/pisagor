<script lang="ts">
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "svelte";
import ComboboxList from "../combobox/combobox-list.svelte";
import { useCommand } from "./command.context";

type Props = ComponentProps<typeof ComboboxList>;

let { class: className, children, ...rest }: Props = $props();
const { slots } = useCommand();
</script>

<div class={slots.listWrapper()}>
  <ComboboxList {...rest} class={slots.list({ class: cn(className) })}>
    {@render children?.()}
  </ComboboxList>
</div>
