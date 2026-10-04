/** @jsxImportSource solid-js */
import { Carousel } from "@pisagor/solid";
import { numberedSlides } from "./helpers";

export function Spacing() {
  return (
    <Carousel slides={numberedSlides(8)} slidesPerPage={2} spacing="64px" />
  );
}
