<script lang="ts">
import { Carousel } from "@pisagor/svelte";
import { numberedSlides } from "./helpers";
</script>

<Carousel slides={numberedSlides(8)} slidesPerPage={2} spacing="64px" />
