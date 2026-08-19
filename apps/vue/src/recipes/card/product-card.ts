import { Button } from "@pisagor/vue/button";
import { Card } from "@pisagor/vue/card";
import { defineComponent, h } from "vue";

type ArkPart = Parameters<typeof h>[0];

export const ProductCard = defineComponent({
  inheritAttrs: false,
  name: "ProductCard",
  setup() {
    return () =>
      h(Card as ArkPart, { class: "overflow-hidden" }, () => [
        h(Card.Media as ArkPart, { class: "h-32 bg-muted", variant: "image" }),
        h(
          Card.Header as ArkPart,
          {
            description:
              "This sofa is perfect for modern tropical spaces, baroque inspired spaces.",
          },
          () =>
            h(Card.Title as ArkPart, null, () =>
              h(
                "a",
                { href: "https://example.com/products/living-room-sofa" },
                () => "Living room Sofa",
              ),
            ),
        ),
        h(Card.Footer as ArkPart, { class: "flex-row-reverse gap-2" }, () => [
          h(Button as ArkPart, { class: "flex-1", type: "button" }, () => "Buy now"),
          h(
            Button as ArkPart,
            { class: "flex-1", type: "button", variant: "outline" },
            () => "Add to cart",
          ),
        ]),
      ]);
  },
});
