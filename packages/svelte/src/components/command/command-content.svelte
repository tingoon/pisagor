<script lang="ts">
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "svelte";
import ComboboxContent from "../combobox/combobox-content.svelte";
import { useCommand } from "./command.context";

type Props = ComponentProps<typeof ComboboxContent>;

let { class: className, ...rest }: Props = $props();
const { slots } = useCommand();
</script>

<ComboboxContent {...rest} class={slots.content({ class: cn(className) })} portalled={false} />
