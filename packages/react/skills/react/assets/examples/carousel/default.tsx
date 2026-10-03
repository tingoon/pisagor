import { Carousel } from "@pisagor/react/carousel";
import { numberedSlides } from "./helpers";

export function Default() {
  return <Carousel slides={numberedSlides(8)} />;
}
