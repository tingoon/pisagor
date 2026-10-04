<script lang="ts">
import { Carousel } from "@pisagor/svelte";
import { imageSlides } from "./helpers";
</script>

<Carousel class="h-40" orientation="vertical" slides={imageSlides()} />
