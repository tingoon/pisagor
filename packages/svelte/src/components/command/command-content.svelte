<script lang="ts">
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "svelte";
import ComboboxContent from "../combobox/combobox-content.svelte";
import { useCommand } from "./command.context";

let { class: className, ...rest }: ComponentProps<typeof ComboboxContent> =
  $props();
const { slots } = useCommand();
</script>

<ComboboxContent
  {...rest}
  class={slots.content({ class: cn(className) })}
  portalled={false}
/>
