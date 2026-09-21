import { GlobeIcon } from "@phosphor-icons/react";
import { Button, Card, Field, Input } from "@pisagor/react";
import { cn } from "@pisagor/utils";

export interface LoginCardProps {
  className?: string;
  primaryActionLabel?: string;
}

export function LoginCard({
  primaryActionLabel = "Send one-time code",
  className,
}: LoginCardProps) {
  return (
    <Card className={cn("mx-auto w-full max-w-md", className)}>
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
      <Card.Footer className="flex-col gap-2">
        <Button className="w-full" size="lg">
          {primaryActionLabel}
        </Button>
        <Button className="w-full" size="lg" variant="outline">
          <GlobeIcon />
          Continue with Google
        </Button>
      </Card.Footer>
    </Card>
  );
}
