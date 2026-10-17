import { Carousel } from "@pisagor/solid";
import { imageSlides } from "./helpers";

export function OrientationHorizontal() {
  return <Carousel slides={imageSlides()} />;
}
