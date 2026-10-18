import { Carousel } from "@pisagor/react";
import { imageSlides } from "./helpers";

export function OrientationHorizontal() {
  return <Carousel slides={imageSlides()} />;
}
