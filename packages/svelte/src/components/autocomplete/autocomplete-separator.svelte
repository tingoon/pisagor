<script lang="ts">
import type { ComponentProps } from "svelte";
import Separator from "../separator.svelte";

let { ...rest }: ComponentProps<typeof Separator> = $props();
</script>

<Separator {...rest} data-part="separator" data-scope="autocomplete" />
