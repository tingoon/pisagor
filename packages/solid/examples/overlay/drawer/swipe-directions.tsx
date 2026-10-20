import { Button, Drawer } from "@pisagor/solid";

export function SwipeDirections() {
  return (
    <div class="flex flex-wrap justify-center gap-2">
      <Drawer
        swipeDirection="down"
        title="Bottom drawer"
        trigger={(props) => (
          <Button {...props} variant="outline">
            Bottom
          </Button>
        )}
      >
        <p class="text-muted-foreground text-sm">
          Swipe down to close this drawer.
        </p>
      </Drawer>
      <Drawer
        swipeDirection="up"
        title="Top drawer"
        trigger={(props) => (
          <Button {...props} variant="outline">
            Top
          </Button>
        )}
      >
        <p class="text-muted-foreground text-sm">
          Swipe up to close this drawer.
        </p>
      </Drawer>
      <Drawer
        swipeDirection="start"
        title="Start drawer"
        trigger={(props) => (
          <Button {...props} variant="outline">
            Left
          </Button>
        )}
      >
        <p class="text-muted-foreground text-sm">
          Swipe left to close this drawer.
        </p>
      </Drawer>
      <Drawer
        swipeDirection="end"
        title="End drawer"
        trigger={(props) => (
          <Button {...props} variant="outline">
            Right
          </Button>
        )}
      >
        <p class="text-muted-foreground text-sm">
          Swipe right to close this drawer.
        </p>
      </Drawer>
    </div>
  );
}
