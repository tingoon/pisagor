/** @jsxImportSource solid-js */
import { Button, Card, Field, Textarea } from "@pisagor/solid";
import { createSignal, Show } from "solid-js";

export function FormSectionTextarea() {
  const [message, setMessage] = createSignal("");
  const [error, setError] = createSignal<string | null>(null);

  const onSubmit = (e: Event) => {
    e.preventDefault();
    if (message().trim().length < 10) {
      setError("Message must be at least 10 characters.");
      return;
    }
    setError(null);
  };

  return (
    <Card
      asChild={(props) => (
        <form {...props()} onSubmit={onSubmit}>
          <Card.Content>
            <Field invalid={!!error()}>
              <Field.Label>Message</Field.Label>
              <Textarea
                name="message"
                onChange={({ target }) => {
                  setMessage(target.value);
                  setError(null);
                }}
                placeholder="Type your message here"
                value={message()}
              />
              <Show when={error()}>
                {(err) => <Field.Error>{err()}</Field.Error>}
              </Show>
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
                type="button"
                variant="outline"
              >
                Clear
              </Button>
            </Field>
          </Card.Footer>
        </form>
      )}
    />
  );
}
