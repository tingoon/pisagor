/** @jsxImportSource solid-js */
import { Carousel } from "@pisagor/solid/carousel";
import { imageSlides } from "./helpers";

export function OrientationHorizontal() {
  return <Carousel slides={imageSlides()} />;
}
