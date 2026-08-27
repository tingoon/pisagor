import { PhX } from "@phosphor-icons/vue";
import { defineComponent, h, type PropType } from "vue";
import {
  InputGroupAddon,
  InputGroupButton,
  type InputGroupButtonProps,
} from "../input-group/input-group-core";

type ArkPart = Parameters<typeof h>[0];

interface InputClearButtonProps extends InputGroupButtonProps {
  onClear: () => void;
}

export const InputClearButton = defineComponent({
  inheritAttrs: false,
  name: "InputClearButton",
  props: {
    onClear: { required: true, type: Function as PropType<InputClearButtonProps["onClear"]> },
  },
  setup(props, { attrs }) {
    return () =>
      h(
        InputGroupButton as ArkPart,
        {
          ...(attrs as object),
          "aria-label": "Clear",
          "data-part": "clear-button",
          "data-scope": "input",
          onClick: props.onClear,
          size: "icon-xs",
          type: "button",
          variant: "ghost",
        },
        () => h(PhX),
      );
  },
});

export const InputClearAddon = defineComponent({
  inheritAttrs: false,
  name: "InputClearAddon",
  props: {
    onClear: { required: true, type: Function as PropType<InputClearButtonProps["onClear"]> },
  },
  setup(props, { attrs }) {
    return () =>
      h(InputGroupAddon as ArkPart, { align: "inline-end" }, () =>
        h(InputClearButton as ArkPart, { ...(attrs as object), onClear: props.onClear }),
      );
  },
});
