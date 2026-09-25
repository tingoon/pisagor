import { Button, Card } from "@pisagor/vue";
import { defineComponent, h } from "vue";

type ArkPart = Parameters<typeof h>[0];

export const ProductCard = defineComponent({
  inheritAttrs: false,
  name: "ProductCard",
  setup() {
    return () =>
      h(Card as ArkPart, { class: "max-w-sm overflow-hidden" }, () => [
        h(Card.Media as ArkPart, {
          class: "aspect-[4/3] bg-muted",
          variant: "image",
        }),
        h(
          Card.Header as ArkPart,
          {
            description: "Soft lines and easy depth for modern living spaces.",
          },
          () =>
            h(Card.Title as ArkPart, null, () =>
              h(
                "a",
                { href: "https://example.com/products/living-room-sofa" },
                () => "Living room sofa",
              ),
            ),
        ),
        h(Card.Footer as ArkPart, { class: "gap-2" }, () => [
          h(
            Button as ArkPart,
            { class: "flex-1", type: "button", variant: "outline" },
            () => "Add to cart",
          ),
          h(
            Button as ArkPart,
            { class: "flex-1", type: "button" },
            () => "Buy now",
          ),
        ]),
      ]);
  },
});
