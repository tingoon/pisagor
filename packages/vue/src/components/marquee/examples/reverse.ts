import {
  PhArrowRight,
  PhAtom,
  PhDeviceMobile,
  PhGlobe,
  PhLightning,
  PhRobot,
  PhSparkle,
  PhStack,
} from "@phosphor-icons/vue";
import { Card } from "@pisagor/vue";
import { type Component, defineComponent, h } from "vue";
import { Marquee } from "..";

const marqueeIcons: Component[] = [
  PhGlobe,
  PhDeviceMobile,
  PhArrowRight,
  PhRobot,
  PhSparkle,
  PhLightning,
  PhStack,
  PhAtom,
];

export default defineComponent({
  name: "Reverse",
  setup() {
    type ArkPart = Parameters<typeof h>[0];

    return () =>
      h(Marquee as ArkPart, {
        items: marqueeIcons.map((IconComponent, index) =>
          h(Card as ArkPart, { class: "[--space:--spacing(8)]", key: index }, () =>
            h(Card.Content as ArkPart, null, () =>
              h(IconComponent as ArkPart, { class: "size-10" }),
            ),
          ),
        ),
        reverse: true,
      });
  },
});
