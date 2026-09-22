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
import { defineComponent, h } from "vue";
import { Marquee } from "..";

const marqueeIcons = [
  PhGlobe,
  PhDeviceMobile,
  PhArrowRight,
  PhRobot,
  PhSparkle,
  PhLightning,
  PhStack,
  PhAtom,
] as const;

export default defineComponent({
  name: "CompoundExample",
  setup() {
    return () =>
      h(Marquee.Root, null, () =>
        h(Marquee.Content, null, () =>
          marqueeIcons.map((IconComponent, index) =>
            h(Marquee.Item, { key: index }, () =>
              h(Card, { class: "[--space:--spacing(8)]" }, () =>
                h(Card.Content, null, () => h(IconComponent, { class: "size-10" })),
              ),
            ),
          ),
        ),
      );
  },
});
