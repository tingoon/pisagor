import { GlobeIcon } from "@phosphor-icons/react";
import { Button, Card, Field, Input } from "@pisagor/react";
import { loginCardBlock } from "@pisagor/recipes/blocks/card";
import { cn } from "@pisagor/utils";

const styles = loginCardBlock();

export interface LoginCardProps {
  className?: string;
  primaryActionLabel?: string;
}

export function LoginCard({
  primaryActionLabel = "Send one-time code",
  className,
}: LoginCardProps) {
  return (
    <Card className={cn(styles.root(), className)}>
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
      <Card.Footer className={styles.footer()}>
        <Button className={styles.action()} size="lg">
          {primaryActionLabel}
        </Button>
        <Button className={styles.action()} size="lg" variant="outline">
          <GlobeIcon />
          Continue with Google
        </Button>
      </Card.Footer>
    </Card>
  );
}
