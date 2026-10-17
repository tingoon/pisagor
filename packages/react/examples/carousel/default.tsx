import source from "./default.tsx?raw";
import { Carousel } from "@pisagor/react";
import { numberedSlides } from "./helpers";

export function Default() {
  return <Carousel slides={numberedSlides(8)} />;
}

export { source as DefaultSource };
