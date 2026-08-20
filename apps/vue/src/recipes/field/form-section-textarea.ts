import { Button, Card, Field, Textarea } from "@pisagor/vue";
import { defineComponent, h, ref } from "vue";

type ArkPart = Parameters<typeof h>[0];

export const FormSectionTextarea = defineComponent({
  inheritAttrs: false,
  name: "FormSectionTextarea",
  setup() {
    const message = ref("");
    const error = ref<string | null>(null);

    const onSubmit = (event: Event) => {
      event.preventDefault();

      if (message.value.trim().length < 10) {
        error.value = "Message must be at least 10 characters.";
        return;
      }

      error.value = null;
    };

    return () =>
      h(Card as ArkPart, null, () => [
        h(
          "form",
          {
            onSubmit,
          },
          () => [
            h(Card.Content as ArkPart, null, () => [
              h(Field as ArkPart, { invalid: Boolean(error.value) }, () => [
                h(Field.Label as ArkPart, null, () => "Message"),
                h(Textarea as ArkPart, {
                  name: "message",
                  onValueChange: (next: string) => {
                    message.value = next;
                    error.value = null;
                  },
                  placeholder: "Type your message here",
                  value: message.value,
                }),
                error.value ? h(Field.Error as ArkPart, null, () => error.value) : null,
              ]),
            ]),
            h(Card.Footer as ArkPart, null, () =>
              h(Field as ArkPart, { orientation: "horizontal", reverse: true }, () => [
                h(Button as ArkPart, { type: "submit" }, () => "Submit"),
                h(
                  Button as ArkPart,
                  {
                    onClick: () => {
                      message.value = "";
                      error.value = null;
                    },
                    type: "button",
                    variant: "outline",
                  },
                  () => "Clear",
                ),
              ]),
            ),
          ],
        ),
      ]);
  },
});
