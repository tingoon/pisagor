/** @jsxImportSource solid-js */

import { Field } from "@pisagor/solid";
import { Textarea } from "@pisagor/solid/textarea";
import { createSignal } from "solid-js";
export function Controlled() {
  const [message, setMessage] = createSignal("");

  return (
    <Field class="flex flex-col gap-3">
      <Textarea
        onChange={({ target }) => setMessage(target.value)}
        placeholder="Type your message here"
        value={message()}
      />
      <Field.Description class="text-right">
        Character count: {message().length}
      </Field.Description>
    </Field>
  );
}
