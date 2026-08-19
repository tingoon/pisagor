import { Button } from "@pisagor/react/button";
import { Card } from "@pisagor/react/card";
import { Field } from "@pisagor/react/field";
import { Textarea } from "@pisagor/react/textarea";
import type { SubmitEvent } from "react";
import { useState } from "react";

export function FormSectionTextarea() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (e: SubmitEvent) => {
    e.preventDefault();

    if (message.trim().length < 10) {
      setError("Message must be at least 10 characters.");
      return;
    }
    setError(null);
  };

  return (
    <Card asChild>
      <form onSubmit={onSubmit}>
        <Card.Content>
          <Field invalid={!!error}>
            <Field.Label>Message</Field.Label>
            <Textarea
              name="message"
              onChange={(e) => {
                setMessage(e.target.value);
                setError(null);
              }}
              placeholder="Type your message here"
              value={message}
            />
            {error && <Field.Error>{error}</Field.Error>}
          </Field>
        </Card.Content>
        <Card.Footer>
          <Field orientation="horizontal" reverse>
            <Button type="submit">Submit</Button>
            <Button
              onClick={() => {
                setMessage("");
                setError(null);
              }}
              variant="outline"
            >
              Clear
            </Button>
          </Field>
        </Card.Footer>
      </form>
    </Card>
  );
}
