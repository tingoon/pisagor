import { Button, Card } from "@pisagor/vue";
import { defineComponent, h } from "vue";
import { productCardBlock } from "#/recipes/blocks/card";

const styles = productCardBlock();

type ArkPart = Parameters<typeof h>[0];

export const ProductCard = defineComponent({
  inheritAttrs: false,
  name: "ProductCard",
  setup() {
    return () =>
      h(Card as ArkPart, { class: styles.root() }, () => [
        h(Card.Media as ArkPart, {
          class: styles.media(),
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
        h(Card.Footer as ArkPart, { class: styles.footer() }, () => [
          h(
            Button as ArkPart,
            { class: styles.action(), type: "button", variant: "outline" },
            () => "Add to cart",
          ),
          h(
            Button as ArkPart,
            { class: styles.action(), type: "button" },
            () => "Buy now",
          ),
        ]),
      ]);
  },
});
