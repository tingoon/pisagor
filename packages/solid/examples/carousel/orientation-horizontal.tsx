import source from "./orientation-horizontal.tsx?raw";
import { Carousel } from "@pisagor/solid";
import { imageSlides } from "./helpers";

export function OrientationHorizontal() {
  return <Carousel slides={imageSlides()} />;
}

export { source as OrientationHorizontalSource };
