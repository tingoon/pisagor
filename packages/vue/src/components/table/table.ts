import { ark } from "@ark-ui/vue/factory";
import {
  tableBodyVariants,
  tableCaptionVariants,
  tableCellVariants,
  tableFooterVariants,
  tableHeaderVariants,
  tableHeadVariants,
  tableRowVariants,
  tableVariants,
  tableWrapperVariants,
} from "@pisagor/styles/ui/table";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType } from "vue";
import type { WithTestId } from "../../internal/types";

// #region Types
export interface TableProps extends WithTestId {
  /**
   * Whether the table rows are hoverable.
   *
   * @defaultValue true
   */
  isHoverable?: boolean;
  /**
   * The variant of the table.
   *
   * @defaultValue "plain"
   */
  variant?: "plain" | "striped";
  class?: unknown;
}

type ArkPart = Parameters<typeof h>[0];
// #endregion

// #region Parts
export const TableRoot = defineComponent({
  inheritAttrs: false,
  name: "TableRoot",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    isHoverable: { default: true, type: Boolean },
    testId: String,
    variant: { default: "plain", type: String as PropType<TableProps["variant"]> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        "div" as ArkPart,
        {
          class: tableWrapperVariants(),
          "data-part": "wrapper",
          "data-scope": "table",
        },
        () =>
          h(
            ark.table as ArkPart,
            {
              ...attrs,
              class: cn(tableVariants(), props.class),
              "data-hoverable": props.isHoverable ? "true" : undefined,
              "data-part": "root",
              "data-scope": "table",
              "data-testid": props.testId,
              "data-variant": props.variant,
            },
            slots.default?.(),
          ),
      );
  },
});

export const TableHeader = defineComponent({
  inheritAttrs: false,
  name: "TableHeader",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ark.thead as ArkPart,
        {
          ...attrs,
          class: cn(tableHeaderVariants(), props.class),
          "data-part": "header",
          "data-scope": "table",
        },
        slots.default?.(),
      );
  },
});

export const TableBody = defineComponent({
  inheritAttrs: false,
  name: "TableBody",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ark.tbody as ArkPart,
        {
          ...attrs,
          class: cn(tableBodyVariants(), props.class),
          "data-part": "body",
          "data-scope": "table",
        },
        slots.default?.(),
      );
  },
});

export const TableFooter = defineComponent({
  inheritAttrs: false,
  name: "TableFooter",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ark.tfoot as ArkPart,
        {
          ...attrs,
          class: cn(tableFooterVariants(), props.class),
          "data-part": "footer",
          "data-scope": "table",
        },
        slots.default?.(),
      );
  },
});

export const TableRow = defineComponent({
  inheritAttrs: false,
  name: "TableRow",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ark.tr as ArkPart,
        {
          ...attrs,
          class: cn(tableRowVariants(), props.class),
          "data-part": "row",
          "data-scope": "table",
        },
        slots.default?.(),
      );
  },
});

export const TableHead = defineComponent({
  inheritAttrs: false,
  name: "TableHead",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ark.th as ArkPart,
        {
          ...attrs,
          class: cn(tableHeadVariants(), props.class),
          "data-part": "head",
          "data-scope": "table",
        },
        slots.default?.(),
      );
  },
});

export const TableCell = defineComponent({
  inheritAttrs: false,
  name: "TableCell",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ark.td as ArkPart,
        {
          ...attrs,
          class: cn(tableCellVariants(), props.class),
          "data-part": "cell",
          "data-scope": "table",
        },
        slots.default?.(),
      );
  },
});

export const TableCaption = defineComponent({
  inheritAttrs: false,
  name: "TableCaption",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ark.caption as ArkPart,
        {
          ...attrs,
          class: cn(tableCaptionVariants(), props.class),
          "data-part": "caption",
          "data-scope": "table",
        },
        slots.default?.(),
      );
  },
});
// #endregion
