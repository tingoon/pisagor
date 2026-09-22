import { Carousel } from "..";
import { numberedSlides } from "./helpers";

export function Loop() {
  return <Carousel autoplay loop slides={numberedSlides(4)} />;
}
