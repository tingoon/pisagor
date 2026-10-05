<script lang="ts">
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "svelte";
import { Input } from "../input";
import { useSidebar } from "./sidebar.context";

let {
  class: className,
  classNames,
  ...rest
}: ComponentProps<typeof Input> = $props();
const ctx = useSidebar();
</script>

<Input
  {...rest}
  class={ctx.slots.input({ class: cn(className) })}
  {classNames}
  data-sidebar="input"
/>
