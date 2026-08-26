import { ark } from "@ark-ui/vue/factory";
import { avatarGroupVariants } from "@pisagor/recipes/avatar";
import { defineComponent, h, type PropType } from "vue";
import { Avatar } from "./avatar";

type ArkPart = Parameters<typeof h>[0];

// #region Types
export interface AvatarGroupUser {
  fallback?: string;
  name?: string;
  src?: string;
}

export interface AvatarGroupProps {
  class?: unknown;
  /** Maximum number of avatars to show; excess shown as "+N". */
  max?: number;
  /** User list rendered as avatars. */
  users: AvatarGroupUser[];
}
// #endregion

// #region Parts
export const AvatarGroupRoot = defineComponent({
  inheritAttrs: false,
  name: "AvatarGroupRoot",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = avatarGroupVariants();

      return h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: variantSlots.base({ class: props.class }),
          "data-part": "group",
          "data-scope": "avatar",
        },
        slots,
      );
    };
  },
});

export const AvatarGroupCount = defineComponent({
  inheritAttrs: false,
  name: "AvatarGroupCount",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = avatarGroupVariants();

      return h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: variantSlots.count({ class: props.class }),
          "data-part": "group-count",
          "data-scope": "avatar",
        },
        slots,
      );
    };
  },
});

export const AvatarGroupShorthand = defineComponent({
  inheritAttrs: false,
  name: "AvatarGroup",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    max: { default: undefined, type: Number },
    users: { default: () => [], type: Array as PropType<AvatarGroupUser[]> },
  },
  setup(props, { attrs }) {
    return () => {
      const visibleUsers = props.max !== undefined ? props.users.slice(0, props.max) : props.users;
      const remainingCount =
        props.max !== undefined && props.users.length > props.max
          ? props.users.length - props.max
          : 0;

      return h(AvatarGroupRoot, { ...attrs, class: props.class }, () => [
        visibleUsers.map((user) =>
          h(Avatar, {
            alt: user.name ?? "",
            fallback: user.fallback,
            key: user.src ?? user.fallback ?? user.name,
            src: user.src,
          }),
        ),
        remainingCount > 0 ? h(AvatarGroupCount, () => `+${remainingCount}`) : null,
      ]);
    };
  },
});
// #endregion
