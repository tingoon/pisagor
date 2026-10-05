<script lang="ts">
import Separator from "../separator/separator.svelte";
import { useButtonGroup } from "./button-group.context";

type Props = {
  class?: string | undefined;
  orientation?: "horizontal" | "vertical";
};

let { orientation = "vertical", class: className, ...rest }: Props = $props();

const { slots } = useButtonGroup();
</script>

<Separator
  {...rest}
  class={slots.separator({ class: className })}
  data-part="separator"
  data-scope="button-group"
  {orientation}
/>
