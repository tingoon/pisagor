import { Carousel } from "..";
import { numberedSlides } from "./helpers";

export function MouseDrag() {
  return <Carousel allowMouseDrag slides={numberedSlides(8)} />;
}
