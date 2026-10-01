<script lang="ts">
import { Button, Card, Field, Textarea } from "@pisagor/svelte";

let message = $state("");
let error = $state<string | null>(null);

function onSubmit(e: Event) {
  e.preventDefault();
  if (message.trim().length < 10) {
    error = "Message must be at least 10 characters.";
    return;
  }
  error = null;
}
</script>

<Card>
  <form onsubmit={onSubmit}>
    <Card.Content>
      <Field invalid={!!error}>
        <Field.Label>Message</Field.Label>
        <Textarea
          name="message"
          oninput={(e) => {
  message = (e.currentTarget as HTMLTextAreaElement).value;
  error = null;
}}
          placeholder="Type your message here"
          value={message}
        />
        {#if error}
          <Field.Error>{error}</Field.Error>
        {/if}
      </Field>
    </Card.Content>
    <Card.Footer>
      <Field orientation="horizontal" reverse>
        <Button type="submit">Submit</Button>
        <Button
          onclick={() => {
  message = "";
  error = null;
}}
          type="button"
          variant="outline"
        >
          Clear
        </Button>
      </Field>
    </Card.Footer>
  </form>
</Card>
