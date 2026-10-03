<script lang="ts">
import { formSectionBlock } from "@pisagor/recipes/blocks/field";
import { Button, Field, Input, Surface } from "@pisagor/svelte";

const styles = formSectionBlock();
</script>

<Surface bordered class={styles.root()} padding="lg" rounded>
  <Field.Group>
    <Field>
      <Field.Label>Name</Field.Label>
      <Input placeholder="First name" />
    </Field>
    <Field>
      <Field.Label>Email</Field.Label>
      <Input placeholder="you@example.com" type="email" />
      <Field.Description>We'll use this email to contact you</Field.Description>
    </Field>
    <Field orientation="horizontal" reverse>
      <Button>Submit</Button>
      <Button variant="outline">Reset</Button>
    </Field>
  </Field.Group>
</Surface>
