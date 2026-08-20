import { cn } from "@pisagor/utils";
import { Button, Card, Field, Input } from "@pisagor/vue";
import { defineComponent, h, type PropType, ref } from "vue";

type ArkPart = Parameters<typeof h>[0];

export interface EditableUserCardProps {
  class?: unknown;
}

export const EditableUserCard = defineComponent({
  inheritAttrs: false,
  name: "EditableUserCard",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props) {
    // Vue repo does not include the editable control used by the React recipe.
    // This keeps the layout intent with a simple read-only view.
    const name = ref("Jane Doe");
    const username = ref("@jane.doe");

    return () =>
      h(Card as ArkPart, { class: cn("w-full max-w-sm", props.class) }, () => [
        h(Card.Header as ArkPart, {
          description: "Click in the field or edit button to start editing",
          title: "Edit user",
        }),
        h(Card.Content as ArkPart, null, () =>
          h(Field.Group as ArkPart, null, () => [
            h(Field as ArkPart, null, () => [
              h(Field.Label as ArkPart, null, () => "Name"),
              h(Input as ArkPart, { class: "w-full", readOnly: true, value: name.value }),
            ]),
            h(Field as ArkPart, null, () => [
              h(Field.Label as ArkPart, null, () => "Username"),
              h(Input as ArkPart, { readOnly: true, value: username.value }),
            ]),
          ]),
        ),
        // Kept as visual affordance (no editing logic in Vue).
        h(Card.Footer as ArkPart, null, () =>
          h(Button as ArkPart, { type: "button", variant: "outline" }, () => "Edit"),
        ),
      ]);
  },
});
