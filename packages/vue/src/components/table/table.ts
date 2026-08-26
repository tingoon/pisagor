import { ark } from "@ark-ui/vue/factory";
import { tableVariants } from "@pisagor/styles/ui/table";
import { defineComponent, h, type PropType } from "vue";

// #region Types
export interface TableProps {
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
    variant: { default: "plain", type: String as PropType<TableProps["variant"]> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = tableVariants();

      return h(
        "div" as ArkPart,
        {
          class: variantSlots.wrapper(),
          "data-part": "wrapper",
          "data-scope": "table",
        },
        () =>
          h(
            ark.table as ArkPart,
            {
              ...attrs,
              class: variantSlots.base({ class: props.class }),
              "data-hoverable": props.isHoverable ? "true" : undefined,
              "data-part": "root",
              "data-scope": "table",
              "data-variant": props.variant,
            },
            slots.default?.(),
          ),
      );
    };
  },
});

export const TableHeader = defineComponent({
  inheritAttrs: false,
  name: "TableHeader",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = tableVariants();

      return h(
        ark.thead as ArkPart,
        {
          ...attrs,
          class: variantSlots.header({ class: props.class }),
          "data-part": "header",
          "data-scope": "table",
        },
        slots.default?.(),
      );
    };
  },
});

export const TableBody = defineComponent({
  inheritAttrs: false,
  name: "TableBody",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = tableVariants();

      return h(
        ark.tbody as ArkPart,
        {
          ...attrs,
          class: variantSlots.body({ class: props.class }),
          "data-part": "body",
          "data-scope": "table",
        },
        slots.default?.(),
      );
    };
  },
});

export const TableFooter = defineComponent({
  inheritAttrs: false,
  name: "TableFooter",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = tableVariants();

      return h(
        ark.tfoot as ArkPart,
        {
          ...attrs,
          class: variantSlots.footer({ class: props.class }),
          "data-part": "footer",
          "data-scope": "table",
        },
        slots.default?.(),
      );
    };
  },
});

export const TableRow = defineComponent({
  inheritAttrs: false,
  name: "TableRow",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = tableVariants();

      return h(
        ark.tr as ArkPart,
        {
          ...attrs,
          class: variantSlots.row({ class: props.class }),
          "data-part": "row",
          "data-scope": "table",
        },
        slots.default?.(),
      );
    };
  },
});

export const TableHead = defineComponent({
  inheritAttrs: false,
  name: "TableHead",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = tableVariants();

      return h(
        ark.th as ArkPart,
        {
          ...attrs,
          class: variantSlots.head({ class: props.class }),
          "data-part": "head",
          "data-scope": "table",
        },
        slots.default?.(),
      );
    };
  },
});

export const TableCell = defineComponent({
  inheritAttrs: false,
  name: "TableCell",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = tableVariants();

      return h(
        ark.td as ArkPart,
        {
          ...attrs,
          class: variantSlots.cell({ class: props.class }),
          "data-part": "cell",
          "data-scope": "table",
        },
        slots.default?.(),
      );
    };
  },
});

export const TableCaption = defineComponent({
  inheritAttrs: false,
  name: "TableCaption",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = tableVariants();

      return h(
        ark.caption as ArkPart,
        {
          ...attrs,
          class: variantSlots.caption({ class: props.class }),
          "data-part": "caption",
          "data-scope": "table",
        },
        slots.default?.(),
      );
    };
  },
});
// #endregion
