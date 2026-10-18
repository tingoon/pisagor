import { useLocaleContext } from "@ark-ui/vue";
import { defineComponent, h, type PropType } from "vue";

/** Renders a `display: contents` wrapper carrying Ark's `dir`. */
export const ProviderDir = defineComponent({
  name: "PisagorProviderDir",
  props: {
    motion: { default: undefined, type: String as PropType<string> },
    part: { required: true, type: String },
  },
  setup(props, { slots }) {
    const locale = useLocaleContext();
    return () =>
      h(
        "div",
        {
          "data-motion": props.motion,
          "data-part": props.part,
          "data-scope": "provider",
          dir: locale.value.dir,
          style: "display: contents",
        },
        slots.default?.(),
      );
  },
});
