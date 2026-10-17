import source from "./loop.tsx?raw";
import { Carousel } from "@pisagor/react";
import { numberedSlides } from "./helpers";

export function Loop() {
  return <Carousel autoplay loop slides={numberedSlides(4)} />;
}

export { source as LoopSource };
