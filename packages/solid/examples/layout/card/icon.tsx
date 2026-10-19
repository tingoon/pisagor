import { Button, Card } from "@pisagor/solid";
import { CurrencyDollarIcon } from "@squidlab/phosphor-solid/icons";

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
        <pre class="bg-muted rounded-md p-2 text-center text-sm font-medium">
          <code>15OFF</code>
        </pre>
      </Card.Content>
      <Card.Footer class="flex-row-reverse">
        <Button size="sm">Copy code</Button>
      </Card.Footer>
    </Card>
  );
}
