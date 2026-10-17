import source from "./testimonial.tsx?raw";
import { Avatar, Card, Rating } from "@pisagor/solid";
export function Testimonial() {
  return (
    <Card>
      <Card.Content class="space-y-2">
        <Rating />
        <blockquote class="text-muted-foreground">
          &ldquo;This completely changed our workflow. Fast, reliable, and the
          team loves it. Would recommend to anyone.&rdquo;
        </blockquote>
        <div class="flex gap-2">
          <Avatar alt="jane.doe@example.com" fallback="JD" size="lg" />
          <div>
            <Card.Title class="text-sm font-medium">Jane Doe</Card.Title>
            <Card.Description>Frontend Developer</Card.Description>
          </div>
        </div>
      </Card.Content>
    </Card>
  );
}

export { source as TestimonialSource };
