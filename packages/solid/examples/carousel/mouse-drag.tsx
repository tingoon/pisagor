import source from "./mouse-drag.tsx?raw";
import { Carousel } from "@pisagor/solid";
import { numberedSlides } from "./helpers";

export function MouseDrag() {
  return <Carousel allowMouseDrag slides={numberedSlides(8)} />;
}

export { source as MouseDragSource };
