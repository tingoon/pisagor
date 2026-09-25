import { Field, Input } from "@pisagor/vue";
import { defineComponent, h } from "vue";
import { outlineButtonClass } from "../../../internal/story-button";
import type { ArkPart } from "../../../internal/types";
import { Popover } from "..";
export default defineComponent({
  name: "CustomSpacing",
  setup() {
    return () =>
      h(Popover, null, () => [
        h(Popover.Trigger, { asChild: true }, () =>
          h("button", { class: outlineButtonClass(), type: "button" }, "Open"),
        ),
        h(
          Popover.Content as ArkPart,
          { class: "w-80 [--space:--spacing(2)] sm:[--space:--spacing(5)]" },
          () => [
            h(Popover.Header, {
              description: "Set the dimensions for the layer.",
              title: "Dimensions",
            }),
            h(Popover.Body, null, () =>
              h(Field.Group as ArkPart, { class: "gap-2" }, () => [
                h(
                  Field as ArkPart,
                  { class: "grid grid-cols-3 items-center gap-2" },
                  () => [
                    h(Field.Label, null, () => "Width"),
                    h(Input as ArkPart, {
                      class: "col-span-2",
                      defaultValue: "100%",
                    }),
                  ],
                ),
                h(
                  Field as ArkPart,
                  { class: "grid grid-cols-3 items-center gap-2" },
                  () => [
                    h(Field.Label, null, () => "Max. width"),
                    h(Input as ArkPart, {
                      class: "col-span-2",
                      defaultValue: "300px",
                    }),
                  ],
                ),
              ]),
            ),
          ],
        ),
      ]);
  },
});
