<script lang="ts">
import { Separator } from "../separator";
import { useActionBar } from "./action-bar.context";

type Props = { class?: string | undefined };
let { class: className, ...rest }: Props = $props();
const ctx = useActionBar();
</script>

<Separator
  {...rest}
  class={ctx.slots.separator({ class: className })}
  data-part="separator"
  data-scope="action-bar"
/>
