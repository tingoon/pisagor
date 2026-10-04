/** @jsxImportSource solid-js */
import { Carousel } from "@pisagor/solid/carousel";
import { numberedSlides } from "./helpers";

export function MouseDrag() {
  return <Carousel allowMouseDrag slides={numberedSlides(8)} />;
}
