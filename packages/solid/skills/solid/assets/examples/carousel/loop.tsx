/** @jsxImportSource solid-js */
import { Carousel } from "@pisagor/solid/carousel";
import { numberedSlides } from "./helpers";

export function Loop() {
  return <Carousel autoplay loop slides={numberedSlides(4)} />;
}
