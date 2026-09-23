import { CurrencyDollarIcon } from "@phosphor-icons/react";
import { Button } from "@pisagor/react";
import { Card } from "..";
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
        <pre className="rounded-md bg-muted p-2 text-center font-medium text-sm">
          <code>15OFF</code>
        </pre>
      </Card.Content>
      <Card.Footer className="flex-row-reverse">
        <Button size="sm">Copy code</Button>
      </Card.Footer>
    </Card>
  );
}
