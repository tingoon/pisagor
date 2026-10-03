<script lang="ts">
import { loginCardBlock } from "@pisagor/recipes/blocks/card";
import { Button, Card, Field, Input } from "@pisagor/svelte";
import { cn } from "@pisagor/utils";
import GlobeIcon from "phosphor-svelte/lib/GlobeIcon";

const styles = loginCardBlock();

interface Props {
  class?: string;
  primaryActionLabel?: string;
}

let { class: className, primaryActionLabel = "Send one-time code" }: Props =
  $props();
</script>

<Card class={cn(styles.root(), className)}>
  <Card.Header
    description="Enter your email and we'll send a one-time code to sign you in."
    title="Sign in"
  >
    <Card.Action>
      <Button variant="link">Sign up</Button>
    </Card.Action>
  </Card.Header>
  <Card.Content>
    <Field.Set>
      <Field>
        <Field.Label>Email</Field.Label>
        <Input placeholder="you@example.com" type="email" />
      </Field>
    </Field.Set>
  </Card.Content>
  <Card.Footer class={styles.footer()}>
    <Button class={styles.action()} size="lg">{primaryActionLabel}</Button>
    <Button class={styles.action()} size="lg" variant="outline">
      <GlobeIcon />
      Continue with Google
    </Button>
  </Card.Footer>
</Card>
