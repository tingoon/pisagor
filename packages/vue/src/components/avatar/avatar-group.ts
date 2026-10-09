import { ark } from "@ark-ui/vue/factory";
import type { AvatarGroupProps as BaseAvatarGroupProps } from "@pisagor/props";
import { avatarGroupRecipe } from "@pisagor/recipes";
import { defineComponent, h, type PropType } from "vue";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context";
import { Avatar } from "./avatar";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "AvatarGroup",
  recipe: avatarGroupRecipe,
});
// #endregion

// #region Parts
export const AvatarGroupRoot = withProvider(ark.div, {
  name: "Root",
  slot: "base",
});

export const AvatarGroupCount = withContext(ark.div, {
  name: "Count",
});
// #endregion

// #region Types
export interface AvatarGroupUser {
  fallback?: string;
  name?: string;
  src?: string;
}

export interface AvatarGroupProps extends BaseAvatarGroupProps {
  class?: unknown;
  /** Maximum number of avatars to show; excess shown as "+N". */
  max?: number;
  /** User list rendered as avatars. */
  users: AvatarGroupUser[];
}
// #endregion

// #region Shorthand
export const AvatarGroupShorthand = defineComponent({
  inheritAttrs: false,
  name: "AvatarGroup",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
    max: { default: undefined, type: Number },
    users: { default: () => [], type: Array as PropType<AvatarGroupUser[]> },
  },
  setup(props, { attrs }) {
    return () => {
      const visibleUsers =
        props.max !== undefined ? props.users.slice(0, props.max) : props.users;
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
        remainingCount > 0
          ? h(AvatarGroupCount, () => `+${remainingCount}`)
          : null,
      ]);
    };
  },
});
// #endregion
