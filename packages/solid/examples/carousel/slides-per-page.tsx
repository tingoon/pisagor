import { Card, Carousel } from "@pisagor/solid";
export function SlidesPerPage() {
  return (
    <Carousel
      slides={Array.from({ length: 16 }, (_, slideIndex) => ({
        content: (
          <Card>
            <Card.Content class="flex h-40 items-center justify-center">
              <span class="font-semibold text-2xl">{slideIndex + 1}</span>
            </Card.Content>
          </Card>
        ),
        key: `slide-${slideIndex + 1}`,
      }))}
      slidesPerPage={3}
    />
  );
}
