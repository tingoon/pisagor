import { Carousel } from "..";
import { numberedSlides } from "./helpers";

export function Default() {
  return <Carousel slides={numberedSlides(8)} />;
}
