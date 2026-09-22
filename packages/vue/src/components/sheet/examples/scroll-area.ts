import { defineComponent, h } from "vue";
import { outlineButtonClass } from "../../../internal/story-button";
import { Sheet } from "..";

const termsSections = [
  {
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi imperdiet placerat nisl, ac consequat sem hendrerit in.",
    heading: "What is Lorem Ipsum?",
  },
  {
    body: "Pellentesque quis sapien tortor. Nulla egestas tristique justo, in commodo quam posuere id.",
    heading: "Why do we use it?",
  },
  {
    body: "Pellentesque turpis est, mollis eu arcu eu, tempor tincidunt urna.",
    heading: "Where does it come from?",
  },
  {
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas semper eros a maximus.",
    heading: "Where can I get some?",
  },
  {
    body: "Donec tortor lorem, finibus vel suscipit vehicula, sagittis efficitur erat.",
    heading: "Who can I contact if I have questions?",
  },
  {
    body: "Aenean maximus, libero vel laoreet congue, purus leo iaculis libero.",
    heading: "What happens if I don't agree to these terms?",
  },
] as const;

export default defineComponent({
  name: "ScrollArea",
  setup() {
    return () =>
      h(Sheet, null, () => [
        h(Sheet.Trigger, { asChild: true }, () =>
          h("button", { class: outlineButtonClass(), type: "button" }, "Open"),
        ),
        h(Sheet.Content, null, () => [
          h(Sheet.Header, { title: "Terms and conditions" }),
          h(Sheet.Body, { scrollFade: true }, () =>
            h(
              "div",
              {
                class:
                  "space-y-2 **:[h3]:font-semibold **:[p]:text-muted-foreground **:[p]:text-sm",
              },
              termsSections.flatMap((section) => [
                h("h3", null, section.heading),
                h("p", null, section.body),
              ]),
            ),
          ),
          h(Sheet.Footer, null, () => [
            h(Sheet.CloseTrigger, { asChild: true }, () =>
              h("button", { class: outlineButtonClass(), type: "button" }, "Cancel"),
            ),
            h(Sheet.CloseTrigger, { asChild: true }, () =>
              h("button", { class: outlineButtonClass(), type: "button" }, "Agree"),
            ),
          ]),
        ]),
      ]);
  },
});
