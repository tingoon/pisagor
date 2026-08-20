import { ark } from "@ark-ui/vue/factory";
import { skipNavContentVariants, skipNavLinkVariants } from "@pisagor/styles/ui/skip-nav";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType } from "vue";
import type { WithTestId } from "../../internal/types";

// #region Types
export interface SkipNavLinkProps extends WithTestId {
  /**
   * The id of the element to skip to.
   *
   * @defaultValue "skip-nav-content"
   *
   * @remarks
   * Must match the `id` on the paired `SkipNavContent`.
   */
  id?: string;
  class?: unknown;
}

export interface SkipNavContentProps extends WithTestId {
  /**
   * The id that SkipNavLink links to.
   *
   * @defaultValue "skip-nav-content"
   *
   * @remarks
   * Must match the `id` passed to the paired `SkipNavLink`.
   */
  id?: string;
  class?: unknown;
}
// #endregion

type ArkPart = Parameters<typeof h>[0];

const SKIP_NAV_ID = "skip-nav-content";

// #region Parts
export const SkipNavLink = defineComponent({
  inheritAttrs: false,
  name: "SkipNavLink",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    id: { default: SKIP_NAV_ID, type: String },
    testId: String,
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ark.a as ArkPart,
        {
          ...attrs,
          class: cn(skipNavLinkVariants(), props.class, attrs.class),
          "data-part": "link",
          "data-scope": "skip-nav",
          "data-testid": props.testId,
          href: `#${props.id}`,
        },
        slots.default ?? (() => "Skip to content"),
      );
  },
});

export const SkipNavContent = defineComponent({
  inheritAttrs: false,
  name: "SkipNavContent",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    id: { default: SKIP_NAV_ID, type: String },
    testId: String,
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: cn(skipNavContentVariants(), props.class, attrs.class),
          "data-part": "content",
          "data-scope": "skip-nav",
          id: props.id,
          tabIndex: -1,
        },
        slots,
      );
  },
});
// #endregion
