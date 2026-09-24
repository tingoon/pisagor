<script lang="ts">
import type { ComponentProps } from "svelte";
import { Combobox } from "../combobox";

type Props = ComponentProps<typeof Combobox>;
let props: Props = $props();
</script>

<Combobox {...props} allowCustomValue inputBehavior="autocomplete" />
