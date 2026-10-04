<script lang="ts">
import { Button, Drawer } from "@pisagor/svelte";
</script>

<div class="flex flex-wrap justify-center gap-2">
  <Drawer swipeDirection="down">
    <Drawer.Trigger>
      <Button variant="outline"> Bottom </Button>
    </Drawer.Trigger>
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
    <Drawer.Trigger>
      <Button variant="outline"> Top </Button>
    </Drawer.Trigger>
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
    <Drawer.Trigger>
      <Button variant="outline"> Left </Button>
    </Drawer.Trigger>
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
    <Drawer.Trigger>
      <Button variant="outline"> Right </Button>
    </Drawer.Trigger>
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
