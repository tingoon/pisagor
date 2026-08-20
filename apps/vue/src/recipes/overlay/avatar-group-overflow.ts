import { Avatar, Button, Popover } from "@pisagor/vue";
import { defineComponent, h } from "vue";

type ArkPart = Parameters<typeof h>[0];

const users = [
  {
    fallback: "JD",
    name: "Jane Doe",
    src: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    fallback: "JD",
    name: "John Doe",
    src: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    fallback: "JD",
    name: "Jane Doe",
    src: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    fallback: "JD",
    name: "John Doe",
    src: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];

export const AvatarGroupOverflow = defineComponent({
  inheritAttrs: false,
  name: "AvatarGroupOverflow",
  setup() {
    const popoverParts = Popover as unknown as {
      Trigger: ArkPart;
      Content: ArkPart;
      Body: ArkPart;
    };

    return () =>
      h("div", { class: "flex flex-wrap items-center gap-2" }, () => [
        h("div", { class: "flex items-center gap-2" }, () =>
          users.map((user) =>
            h(Avatar as ArkPart, {
              alt: user.name,
              fallback: user.fallback,
              key: user.src,
              src: user.src,
            }),
          ),
        ),
        h(Popover as ArkPart, { positioning: { placement: "bottom-end" } }, () => [
          h(popoverParts.Trigger, { asChild: true }, () =>
            h(
              Button as ArkPart,
              { pill: true, size: "icon-md", type: "button", variant: "ghost" },
              () => "+5",
            ),
          ),
          h(popoverParts.Content, null, () =>
            h(popoverParts.Body, null, () =>
              h("div", { class: "flex items-center gap-2" }, () =>
                users.map((user) =>
                  h(Avatar as ArkPart, {
                    alt: user.name,
                    fallback: user.fallback,
                    key: user.src,
                    src: user.src,
                  }),
                ),
              ),
            ),
          ),
        ]),
      ]);
  },
});
