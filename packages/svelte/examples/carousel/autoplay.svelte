<script lang="ts">
import { Carousel } from "@pisagor/svelte";
import { numberedSlides } from "./helpers";
</script>

<Carousel autoplay loop slides={numberedSlides(8)} />
