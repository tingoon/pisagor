import { Carousel } from "@pisagor/react/carousel";
import { numberedSlides } from "./helpers";

export function Autoplay() {
  return <Carousel autoplay loop slides={numberedSlides(8)} />;
}
