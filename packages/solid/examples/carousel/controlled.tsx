import { Carousel } from "@pisagor/solid";
import { createSignal } from "solid-js";
import { numberedSlides } from "./helpers";

export function Controlled() {
  const [page, setPage] = createSignal(0);
  const slides = numberedSlides(8);

  return (
    <div class="flex flex-col gap-2">
      <Carousel
        onPageChange={({ page }) => setPage(page)}
        page={page()}
        slides={slides}
      />
      <p class="text-center text-muted-foreground text-sm">
        Current page: {page() + 1} of 5
      </p>
    </div>
  );
}
