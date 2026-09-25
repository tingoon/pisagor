import { Avatar, Card } from "@pisagor/react";
import { Rating } from "..";
export function Testimonial() {
  return (
    <Card>
      <Card.Content className="space-y-2">
        <Rating />
        <blockquote className="text-muted-foreground">
          &ldquo;This completely changed our workflow. Fast, reliable, and the
          team loves it. Would recommend to anyone.&rdquo;
        </blockquote>
        <div className="flex gap-2">
          <Avatar alt="jane.doe@example.com" fallback="JD" size="lg" />
          <div>
            <Card.Title className="font-medium text-sm">Jane Doe</Card.Title>
            <Card.Description>Frontend Developer</Card.Description>
          </div>
        </div>
      </Card.Content>
    </Card>
  );
}
