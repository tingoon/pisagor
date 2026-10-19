import { CurrencyDollarIcon } from "@phosphor-icons/react";
import { Button, Card } from "@pisagor/react";

export function Icon() {
  return (
    <Card>
      <Card.Media variant="icon">
        <CurrencyDollarIcon />
      </Card.Media>
      <Card.Header>
        <Card.Title>Get 15% off</Card.Title>
        <Card.Description>
          Minimum purchase of $100 required. Use code at checkout.
        </Card.Description>
      </Card.Header>
      <Card.Content>
        <pre className="bg-muted rounded-md p-2 text-center text-sm font-medium">
          <code>15OFF</code>
        </pre>
      </Card.Content>
      <Card.Footer className="flex-row-reverse">
        <Button size="sm">Copy code</Button>
      </Card.Footer>
    </Card>
  );
}
