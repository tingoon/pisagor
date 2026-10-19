import { Card } from "@pisagor/react";

const sizes = ["sm", "md", "lg"] as const;

export function Sizes() {
  return (
    <div className="flex flex-col gap-4">
      {sizes.map((size) => (
        <Card key={size} size={size}>
          <Card.Header>
            <Card.Title>Card header</Card.Title>
            <Card.Description>{`Size ${size}`}</Card.Description>
          </Card.Header>
          <Card.Content>
            <p className="text-muted-foreground text-sm">Card content</p>
          </Card.Content>
        </Card>
      ))}
    </div>
  );
}
