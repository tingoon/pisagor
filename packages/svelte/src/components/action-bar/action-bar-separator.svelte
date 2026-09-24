<script lang="ts">
import { cn } from "@pisagor/utils";
import { Separator } from "../separator";
import { useActionBar } from "./action-bar.context";

type Props = { class?: string | undefined };
let { class: className, ...rest }: Props = $props();
const ctx = useActionBar();
</script>

<Separator
  {...rest}
  class={ctx.slots.separator({ class: cn(className) })}
  data-part="separator"
  data-scope="action-bar"
/>
