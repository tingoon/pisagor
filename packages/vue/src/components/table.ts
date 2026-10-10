import { ark } from "@ark-ui/vue/factory";
import type { TableProps as BaseTableProps } from "@pisagor/props";
import { tableRecipe } from "@pisagor/recipes";
import { computed, defineComponent, h, type PropType } from "vue";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";

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
      type: [String, Object, Array] as PropType<unknown>,
    },
    isHoverable: { default: true, type: Boolean },
    recipe: {
      default: tableRecipe,
      type: Function as PropType<typeof tableRecipe>,
    },
    variant: {
      default: "plain",
      type: String as PropType<TableProps["variant"]>,
    },
  },
  setup(props, { attrs, slots }) {
    const recipeSlots = computed(() => props.recipe());

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

export const TableHeader = withContext(ark.thead, { name: "Header" });

export const TableBody = withContext(ark.tbody, { name: "Body" });

export const TableFooter = withContext(ark.tfoot, { name: "Footer" });

export const TableRow = withContext(ark.tr, { name: "Row" });

export const TableHead = withContext(ark.th, { name: "Head" });

export const TableCell = withContext(ark.td, { name: "Cell" });

export const TableCaption = withContext(ark.caption, { name: "Caption" });
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
