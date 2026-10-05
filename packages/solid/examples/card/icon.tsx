import { Button, Card } from "@pisagor/solid";
import { CurrencyDollarIcon } from "@pisagor/solid/icons";
export function Icon() {
  return (
    <Card>
      <Card.Media variant="icon">
        <CurrencyDollarIcon />
      </Card.Media>
      <Card.Header
        description="Minimum purchase of $100 required. Use code at checkout."
        title="Get 15% off"
      />
      <Card.Content>
        <pre class="rounded-md bg-muted p-2 text-center font-medium text-sm">
          <code>15OFF</code>
        </pre>
      </Card.Content>
      <Card.Footer class="flex-row-reverse">
        <Button size="sm">Copy code</Button>
      </Card.Footer>
    </Card>
  );
}
