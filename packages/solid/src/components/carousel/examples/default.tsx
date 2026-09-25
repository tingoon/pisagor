import { Carousel } from "../index";

export function Default() {
  return (
    <Carousel
      slides={[
        {
          content: (
            <div class="flex h-40 items-center justify-center bg-muted">1</div>
          ),
        },
        {
          content: (
            <div class="flex h-40 items-center justify-center bg-muted">2</div>
          ),
        },
        {
          content: (
            <div class="flex h-40 items-center justify-center bg-muted">3</div>
          ),
        },
      ]}
    />
  );
}
