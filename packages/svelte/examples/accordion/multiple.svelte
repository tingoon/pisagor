<script lang="ts">
import { Accordion } from "@pisagor/svelte";
import { shortFaqItems } from "./helpers";
</script>

<Accordion items={shortFaqItems()} multiple />
