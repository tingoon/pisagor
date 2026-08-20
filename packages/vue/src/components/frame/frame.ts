import { ark } from "@ark-ui/vue/factory";
import {
  framePanelDescriptionVariants,
  framePanelFooterVariants,
  framePanelHeaderVariants,
  framePanelTitleVariants,
  framePanelVariants,
  frameVariants,
} from "@pisagor/styles/ui/frame";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType, type VNodeChild } from "vue";

type ArkPart = Parameters<typeof h>[0];

// #region Parts
export const FrameRoot = defineComponent({
  inheritAttrs: false,
  name: "FrameRoot",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    testId: String,
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: cn(frameVariants(), props.class),
          "data-part": "root",
          "data-scope": "frame",
          "data-testid": props.testId,
        },
        slots,
      );
  },
});

export const FramePanel = defineComponent({
  inheritAttrs: false,
  name: "FramePanel",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: cn(framePanelVariants(), props.class),
          "data-part": "panel",
          "data-scope": "frame",
        },
        slots,
      );
  },
});

export const FrameTitle = defineComponent({
  inheritAttrs: false,
  name: "FrameTitle",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: cn(framePanelTitleVariants(), props.class),
          "data-part": "panel-title",
          "data-scope": "frame",
        },
        slots,
      );
  },
});

export const FrameDescription = defineComponent({
  inheritAttrs: false,
  name: "FrameDescription",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: cn(framePanelDescriptionVariants(), props.class),
          "data-part": "panel-description",
          "data-scope": "frame",
        },
        slots,
      );
  },
});

export const FrameHeader = defineComponent({
  inheritAttrs: false,
  name: "FrameHeader",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    description: { default: undefined, type: [String, Object] as PropType<VNodeChild> },
    title: { default: undefined, type: [String, Object] as PropType<VNodeChild> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ark.header as ArkPart,
        {
          ...attrs,
          class: cn(framePanelHeaderVariants(), props.class),
          "data-part": "panel-header",
          "data-scope": "frame",
        },
        () => [
          props.title !== undefined && h(FrameTitle, null, () => props.title),
          props.description !== undefined && h(FrameDescription, null, () => props.description),
          slots.default?.(),
        ],
      );
  },
});

export const FrameFooter = defineComponent({
  inheritAttrs: false,
  name: "FrameFooter",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ark.footer as ArkPart,
        {
          ...attrs,
          class: cn(framePanelFooterVariants(), props.class),
          "data-part": "panel-footer",
          "data-scope": "frame",
        },
        slots,
      );
  },
});
// #endregion
