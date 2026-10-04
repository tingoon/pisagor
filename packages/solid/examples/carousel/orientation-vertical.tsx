/** @jsxImportSource solid-js */
import { Carousel } from "@pisagor/solid";
import { imageSlides } from "./helpers";

export function OrientationVertical() {
  return (
    <Carousel class="h-40" orientation="vertical" slides={imageSlides()} />
  );
}
