import source from "./default.tsx?raw";
import { Carousel } from "@pisagor/solid";

export function Default() {
  return (
    <Carousel
      slides={[
        {
          content: (
            <div class="bg-muted flex h-40 items-center justify-center">1</div>
          ),
        },
        {
          content: (
            <div class="bg-muted flex h-40 items-center justify-center">2</div>
          ),
        },
        {
          content: (
            <div class="bg-muted flex h-40 items-center justify-center">3</div>
          ),
        },
      ]}
    />
  );
}

export { source as DefaultSource };
