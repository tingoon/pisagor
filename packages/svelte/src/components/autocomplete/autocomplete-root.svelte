<script lang="ts">
import type { ComponentProps } from "svelte";
import { Combobox } from "../combobox";

let { children, ...rest }: ComponentProps<typeof Combobox.Root> = $props();
</script>

<Combobox.Root {...rest} allowCustomValue inputBehavior="autocomplete">
  {@render children?.()}
</Combobox.Root>
