import { useState } from "react";
import preview, { SurfaceDecorator } from "#/storybook/preview";
import { Field, Textarea } from "..";

const meta = preview.meta({
  component: Textarea,
  parameters: {
    docs: {
      description: {
        component:
          "Captures longer text such as messages, notes, and descriptions over multiple lines.",
      },
    },
    metadata: {
      api: "closed",
      taxonomy: "primitive",
    },
  },
  title: "Components/Forms/Textarea",
});

export const Default = meta.story({
  args: {
    placeholder: "Enter your message",
  },
});

export const Variants = meta.story({
  render: () => (
    <div className="flex flex-col gap-2">
      <Textarea placeholder="Primary" variant="primary" />
      <Textarea placeholder="Secondary" variant="secondary" />
    </div>
  ),
});

export const OnSurface = Variants.extend({
  decorators: [SurfaceDecorator],
  parameters: { layout: "fullscreen" },
});

export const Autoresize = meta.story({
  args: {
    autoresize: true,
    placeholder: "Type your message here",
  },
});

export const Disabled = meta.story({
  args: {
    disabled: true,
    placeholder: "Type your feedback here",
  },
});

export const Invalid = meta.story({
  args: {
    invalid: true,
    placeholder: "Type your feedback here",
  },
});

export const Controlled = meta.story({
  render: () => {
    const [message, setMessage] = useState("");

    return (
      <Field className="flex flex-col gap-3">
        <Textarea
          onChange={({ target }) => setMessage(target.value)}
          placeholder="Type your message here"
          value={message}
        />
        <Field.Description className="text-right">
          Character count: {message.length}
        </Field.Description>
      </Field>
    );
  },
});
