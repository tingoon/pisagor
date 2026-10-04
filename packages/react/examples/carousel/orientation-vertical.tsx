import { Carousel } from "@pisagor/react";
import { imageSlides } from "./helpers";

export function OrientationVertical() {
  return (
    <Carousel className="h-40" orientation="vertical" slides={imageSlides()} />
  );
}
