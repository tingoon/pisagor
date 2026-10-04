<script lang="ts">
import { Carousel } from "@pisagor/svelte";
import { numberedSlides } from "./helpers";

let page = $state(0);

const slides = numberedSlides(8);
</script>

<div class="flex flex-col gap-2">
  <Carousel
    onPageChange={(d) => {
      page = d.page;
    }}
    {page}
    {slides}
  />
  <p class="text-center text-muted-foreground text-sm">
    Current page: {page + 1} of 5
  </p>
</div>
