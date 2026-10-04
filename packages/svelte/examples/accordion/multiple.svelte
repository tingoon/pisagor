<script lang="ts">
import { Accordion } from "@pisagor/svelte/accordion";
import { shortFaqItems } from "./helpers";
</script>

<Accordion items={shortFaqItems()} multiple />
