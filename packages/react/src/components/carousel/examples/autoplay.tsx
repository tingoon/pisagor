import { Carousel } from "..";
import { numberedSlides } from "./helpers";

export function Autoplay() {
  return <Carousel autoplay loop slides={numberedSlides(8)} />;
}
