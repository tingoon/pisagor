<script lang="ts">
import { Carousel } from "@pisagor/svelte/carousel";
import { numberedSlides } from "./helpers";
</script>

<Carousel allowMouseDrag slides={numberedSlides(8)} />
