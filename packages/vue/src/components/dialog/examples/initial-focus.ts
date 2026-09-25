import { Field, Input } from "@pisagor/vue";
import { defineComponent, h } from "vue";
import {
  defaultButtonClass,
  outlineButtonClass,
} from "../../../internal/story-button";
import { Dialog } from "..";

export default defineComponent({
  name: "InitialFocus",
  setup() {
    const initialFocusEl = () =>
      document.getElementById(
        "dialog-initial-focus-input",
      ) as HTMLElement | null;

    return () =>
      h(Dialog, { initialFocusEl }, () => [
        h(Dialog.Trigger, { asChild: true }, () =>
          h("button", { class: outlineButtonClass(), type: "button" }, "Open"),
        ),
        h(Dialog.Content, null, () => [
          h(Dialog.Header, {
            description:
              "The first input will be focused when the dialog opens.",
            title: "Edit profile",
          }),
          h(Dialog.Body, null, () =>
            h(Field.Group, null, () => [
              h(Field, null, () => [
                h(Field.Label, null, () => "Name"),
                h(Input, {
                  id: "dialog-initial-focus-input",
                  placeholder: "John Doe",
                }),
              ]),
              h(Field, null, () => [
                h(Field.Label, null, () => "Email"),
                h(Input, { placeholder: "john.doe@example.com" }),
              ]),
            ]),
          ),
          h(Dialog.Footer, null, () => [
            h(Dialog.CloseTrigger, { asChild: true }, () =>
              h(
                "button",
                { class: outlineButtonClass(), type: "button" },
                "Cancel",
              ),
            ),
            h(Dialog.CloseTrigger, { asChild: true }, () =>
              h(
                "button",
                { class: defaultButtonClass(), type: "button" },
                "Save",
              ),
            ),
          ]),
        ]),
      ]);
  },
});
