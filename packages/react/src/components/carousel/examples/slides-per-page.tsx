import { Card } from "@pisagor/react";
import { Carousel } from "..";
export function SlidesPerPage() {
  return (
    <Carousel
      slides={Array.from({ length: 16 }, (_, slideIndex) => ({
        content: (
          <Card>
            <Card.Content className="flex h-40 items-center justify-center">
              <span className="font-semibold text-2xl">{slideIndex + 1}</span>
            </Card.Content>
          </Card>
        ),
        key: `slide-${slideIndex + 1}`,
      }))}
      slidesPerPage={3}
    />
  );
}
