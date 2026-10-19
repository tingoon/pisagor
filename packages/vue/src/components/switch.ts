import { Switch as SwitchPrimitive } from "@ark-ui/vue";
import type {
  SwitchControlProps,
  SwitchHiddenInputProps,
  SwitchRootProps as SwitchRootPrimitiveProps,
  SwitchThumbProps,
} from "@ark-ui/vue";
import type { SwitchContract, SwitchRootContract } from "@pisagor/contracts";
import { switchRecipe } from "@pisagor/recipes";
import { defineComponent, h, type PropType } from "vue";
import { type ClassValue, createSlotRecipeContext } from "../internal";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "Switch",
  recipe: switchRecipe,
});
// #endregion

type ArkPart = Parameters<typeof h>[0];

// #region Types
type SwitchRootProps = SwitchRootPrimitiveProps & SwitchRootContract;

export interface SwitchProps
  extends Omit<SwitchRootProps, "children">, SwitchContract {
  /** Extra props forwarded to the switch control element */
  controlProps?: Omit<SwitchControlProps, "children" | "class">;
  /** Extra props forwarded to the hidden input element (e.g. tabIndex) */
  hiddenInputProps?: Omit<SwitchHiddenInputProps, "class">;
  /** Extra props forwarded to the switch thumb element */
  thumbProps?: Omit<SwitchThumbProps, "children" | "class">;
}
// #endregion

// #region Parts
const Root = withProvider<SwitchRootProps>(SwitchPrimitive.Root, {
  name: "Root",
});

const Control = withContext<SwitchControlProps>(SwitchPrimitive.Control, {
  name: "Control",
});

const Thumb = withContext<SwitchThumbProps>(SwitchPrimitive.Thumb, {
  name: "Thumb",
});
// #endregion

// #region Closed
const SwitchShorthand = defineComponent({
  emits: {
    checkedChange: (_details: { checked: boolean }) => true,
    valueChange: (_value: boolean) => true,
  },
  inheritAttrs: false,
  name: "Switch",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    classNames: {
      default: undefined,
      type: Object as PropType<SwitchProps["classNames"]>,
    },
    controlProps: {
      default: undefined,
      type: Object as PropType<SwitchProps["controlProps"]>,
    },
    hiddenInputProps: {
      default: undefined,
      type: Object as PropType<SwitchProps["hiddenInputProps"]>,
    },
    thumbProps: {
      default: undefined,
      type: Object as PropType<SwitchProps["thumbProps"]>,
    },
  },
  setup(props, { attrs, emit }) {
    return () =>
      h(
        Root,
        {
          ...attrs,
          class: props.class as string | undefined,
          onCheckedChange: (details: { checked: boolean }) => {
            emit("checkedChange", details);
            emit("valueChange", details.checked === true);
          },
        },
        () => [
          h(
            Control,
            { ...props.controlProps, class: props.classNames?.control },
            () =>
              h(Thumb, { ...props.thumbProps, class: props.classNames?.thumb }),
          ),
          h(
            SwitchPrimitive.HiddenInput as ArkPart,
            props.hiddenInputProps ?? {},
          ),
        ],
      );
  },
});
// #endregion

export const Switch = Object.assign(SwitchShorthand, {
  Control,
  HiddenInput: SwitchPrimitive.HiddenInput,
  Root,
  Thumb,
});
