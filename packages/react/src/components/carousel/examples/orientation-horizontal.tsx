import { Carousel } from "..";
import { imageSlides } from "./helpers";

export function OrientationHorizontal() {
  return <Carousel slides={imageSlides()} />;
}
