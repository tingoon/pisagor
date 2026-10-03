/** @jsxImportSource solid-js */

import { loginCardBlock } from "@pisagor/recipes/blocks/card";
import { Button, Card, Field, Input } from "@pisagor/solid";
import { GlobeIcon } from "@pisagor/solid/icons";
import { cn } from "@pisagor/utils";

const styles = loginCardBlock();

export interface LoginCardProps {
  class?: string;
  primaryActionLabel?: string;
}

export function LoginCard(props: LoginCardProps) {
  return (
    <Card class={cn(styles.root(), props.class)}>
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
        <Button class={styles.action()} size="lg">
          {props.primaryActionLabel ?? "Send one-time code"}
        </Button>
        <Button class={styles.action()} size="lg" variant="outline">
          <GlobeIcon />
          Continue with Google
        </Button>
      </Card.Footer>
    </Card>
  );
}
