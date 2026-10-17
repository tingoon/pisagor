import { Field, Textarea } from "@pisagor/react";
import { useState } from "react";
export function Controlled() {
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
}
