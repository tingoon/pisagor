<script lang="ts">
import type { ComponentProps } from "svelte";
import { Combobox } from "../combobox";

let props: ComponentProps<typeof Combobox> = $props();
</script>

<Combobox {...props} allowCustomValue inputBehavior="autocomplete" />
