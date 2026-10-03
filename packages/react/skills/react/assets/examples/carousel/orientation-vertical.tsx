import { Carousel } from "@pisagor/react/carousel";
import { imageSlides } from "./helpers";

export function OrientationVertical() {
  return (
    <Carousel className="h-40" orientation="vertical" slides={imageSlides()} />
  );
}
