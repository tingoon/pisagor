<script lang="ts">
import type { ComponentProps } from "svelte";
import { Input } from "../input";
import { useSidebar } from "./sidebar.context";

type Props = ComponentProps<typeof Input>;

let { class: className, classNames, ...rest }: Props = $props();
const ctx = useSidebar();
</script>

<Input {...rest} class={ctx.slots.input({ class: className })} {classNames} data-sidebar="input" />
