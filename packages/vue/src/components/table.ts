import type { TableProps as BaseTableProps } from "@pisagor/props";
import { tableRecipe } from "@pisagor/recipes";
import { computed, defineComponent, h, type PropType } from "vue";
import { type ClassValue, createSlotRecipeContext } from "../internal";

// #region Slot recipe context
const { provideStyles: provideTableStyles, withContext } =
  createSlotRecipeContext({
    name: "Table",
    recipe: tableRecipe,
  });
// #endregion

// #region Types
export interface TableProps extends BaseTableProps {
  class?: unknown;
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
}

type ArkPart = Parameters<typeof h>[0];
// #endregion

// #region Parts
export const TableRoot = defineComponent({
  inheritAttrs: false,
  name: "TableRoot",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    isHoverable: { default: true, type: Boolean },
    recipe: {
      default: tableRecipe,
      type: Function as PropType<typeof tableRecipe>,
    },
    size: {
      default: "md",
      type: String as PropType<"sm" | "md" | "lg">,
    },
    variant: {
      default: "plain",
      type: String as PropType<TableProps["variant"]>,
    },
  },
  setup(props, { attrs, slots }) {
    const recipeSlots = computed(() => props.recipe({ size: props.size }));

    provideTableStyles({
      get slots() {
        return recipeSlots.value;
      },
      variants: {},
    });

    return () => {
      const variantSlots = recipeSlots.value;

      return h(
        "div" as ArkPart,
        {
          class: variantSlots.wrapper(),
          "data-part": "wrapper",
          "data-scope": "table",
        },
        () =>
          h(
            "table",
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

export const TableHeader = withContext("thead", { name: "Header" });

export const TableBody = withContext("tbody", { name: "Body" });

export const TableFooter = withContext("tfoot", { name: "Footer" });

export const TableRow = withContext("tr", { name: "Row" });

export const TableHead = withContext("th", { name: "Head" });

export const TableCell = withContext("td", { name: "Cell" });

export const TableCaption = withContext("caption", { name: "Caption" });
// #endregion

export const Table = Object.assign(TableRoot, {
  Body: TableBody,
  Caption: TableCaption,
  Cell: TableCell,
  Footer: TableFooter,
  Head: TableHead,
  Header: TableHeader,
  Row: TableRow,
});
