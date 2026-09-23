import { Button } from "@pisagor/react";
import { Drawer } from "..";
export function SwipeDirections() {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      <Drawer swipeDirection="down">
        <Drawer.Trigger asChild>
          <Button variant="outline">Bottom</Button>
        </Drawer.Trigger>
        <Drawer.Content>
          <Drawer.Header title="Bottom drawer" />
          <Drawer.Body>
            <p className="text-muted-foreground text-sm">Swipe down to close this drawer.</p>
          </Drawer.Body>
        </Drawer.Content>
      </Drawer>
      <Drawer swipeDirection="up">
        <Drawer.Trigger asChild>
          <Button variant="outline">Top</Button>
        </Drawer.Trigger>
        <Drawer.Content>
          <Drawer.Header title="Top drawer" />
          <Drawer.Body>
            <p className="text-muted-foreground text-sm">Swipe up to close this drawer.</p>
          </Drawer.Body>
        </Drawer.Content>
      </Drawer>
      <Drawer swipeDirection="start">
        <Drawer.Trigger asChild>
          <Button variant="outline">Left</Button>
        </Drawer.Trigger>
        <Drawer.Content>
          <Drawer.Header title="Start drawer" />
          <Drawer.Body>
            <p className="text-muted-foreground text-sm">Swipe left to close this drawer.</p>
          </Drawer.Body>
        </Drawer.Content>
      </Drawer>
      <Drawer swipeDirection="end">
        <Drawer.Trigger asChild>
          <Button variant="outline">Right</Button>
        </Drawer.Trigger>
        <Drawer.Content>
          <Drawer.Header title="End drawer" />
          <Drawer.Body>
            <p className="text-muted-foreground text-sm">Swipe right to close this drawer.</p>
          </Drawer.Body>
        </Drawer.Content>
      </Drawer>
    </div>
  );
}
