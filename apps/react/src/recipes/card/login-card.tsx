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
    <Card className={cn("w-full", className)}>
      <Card.Header
        description="Enter your email and check your inbox"
        title="Sign in to your account"
      >
        <Card.Action>
          <Button variant="link">Sign up</Button>
        </Card.Action>
      </Card.Header>
      <Card.Content>
        <Field.Set>
          <Field>
            <Field.Label>Email</Field.Label>
            <Input placeholder="john.doe@example.com" />
          </Field>
        </Field.Set>
      </Card.Content>
      <Card.Footer className="flex-col">
        <Button className="w-full" size="lg">
          {primaryActionLabel}
        </Button>
        <Button className="w-full" size="lg" variant="outline">
          <GlobeIcon />
          Sign in with Google
        </Button>
      </Card.Footer>
    </Card>
  );
}
