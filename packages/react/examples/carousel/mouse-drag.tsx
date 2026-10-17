import { Carousel } from "@pisagor/react";
import { numberedSlides } from "./helpers";

export function MouseDrag() {
  return <Carousel allowMouseDrag slides={numberedSlides(8)} />;
}
