/** @jsxImportSource solid-js */
import { Button } from "@pisagor/solid";
import { Drawer } from "@pisagor/solid/drawer";
export function SwipeDirections() {
  return (
    <div class="flex flex-wrap justify-center gap-2">
      <Drawer swipeDirection="down">
        <Drawer.Trigger
          asChild={(props) => (
            <Button {...props()} variant="outline">
              Bottom
            </Button>
          )}
        />
        <Drawer.Content>
          <Drawer.Header title="Bottom drawer" />
          <Drawer.Body>
            <p class="text-muted-foreground text-sm">
              Swipe down to close this drawer.
            </p>
          </Drawer.Body>
        </Drawer.Content>
      </Drawer>
      <Drawer swipeDirection="up">
        <Drawer.Trigger
          asChild={(props) => (
            <Button {...props()} variant="outline">
              Top
            </Button>
          )}
        />
        <Drawer.Content>
          <Drawer.Header title="Top drawer" />
          <Drawer.Body>
            <p class="text-muted-foreground text-sm">
              Swipe up to close this drawer.
            </p>
          </Drawer.Body>
        </Drawer.Content>
      </Drawer>
      <Drawer swipeDirection="start">
        <Drawer.Trigger
          asChild={(props) => (
            <Button {...props()} variant="outline">
              Left
            </Button>
          )}
        />
        <Drawer.Content>
          <Drawer.Header title="Start drawer" />
          <Drawer.Body>
            <p class="text-muted-foreground text-sm">
              Swipe left to close this drawer.
            </p>
          </Drawer.Body>
        </Drawer.Content>
      </Drawer>
      <Drawer swipeDirection="end">
        <Drawer.Trigger
          asChild={(props) => (
            <Button {...props()} variant="outline">
              Right
            </Button>
          )}
        />
        <Drawer.Content>
          <Drawer.Header title="End drawer" />
          <Drawer.Body>
            <p class="text-muted-foreground text-sm">
              Swipe right to close this drawer.
            </p>
          </Drawer.Body>
        </Drawer.Content>
      </Drawer>
    </div>
  );
}
