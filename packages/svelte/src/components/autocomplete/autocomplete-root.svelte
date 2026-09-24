<script lang="ts">
import type { ComponentProps } from "svelte";
import { Combobox } from "../combobox";

type Props = ComponentProps<typeof Combobox.Root>;
let { children, ...rest }: Props = $props();
</script>

<Combobox.Root {...rest} allowCustomValue inputBehavior="autocomplete">
  {@render children?.()}
</Combobox.Root>
