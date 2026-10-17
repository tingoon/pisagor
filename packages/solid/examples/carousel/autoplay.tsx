import source from "./autoplay.tsx?raw";
import { Carousel } from "@pisagor/solid";
import { numberedSlides } from "./helpers";

export function Autoplay() {
  return <Carousel autoplay loop slides={numberedSlides(8)} />;
}

export { source as AutoplaySource };
