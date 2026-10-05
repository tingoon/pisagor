<script lang="ts">
import type { ComponentProps } from "svelte";
import Separator from "../separator/separator.svelte";
import { useCommand } from "./command.context";

type Props = ComponentProps<typeof Separator>;

let { class: className, ...rest }: Props = $props();
const { slots } = useCommand();
</script>

<Separator
  {...rest}
  class={slots.separator({ class: className })}
  data-part="separator"
  data-scope="command"
/>
