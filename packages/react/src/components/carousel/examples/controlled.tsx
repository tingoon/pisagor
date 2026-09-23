import { useState } from "react";
import { Carousel } from "..";
import { numberedSlides } from "./helpers";

export function Controlled() {
  const [page, setPage] = useState(0);
  const slides = numberedSlides(8);

  return (
    <div className="flex flex-col gap-2">
      <Carousel onPageChange={({ page }) => setPage(page)} page={page} slides={slides} />
      <p className="text-center text-muted-foreground text-sm">Current page: {page + 1} of 5</p>
    </div>
  );
}
