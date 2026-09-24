<script lang="ts" setup>
import { Button } from "@pisagor/vue";
import { Collapsible } from "..";
</script>

<template>
  <Collapsible class="w-96" collapsed-height="50px">
    <Collapsible.Trigger as-child>
      <Button class="w-full" variant="outline">
        Read more
        <Collapsible.Indicator />
      </Button>
    </Collapsible.Trigger>
    <Collapsible.Content class="space-y-2 p-2">
      <p class="text-muted-foreground text-sm">
        This is the first paragraph of content. When collapsed, only a portion of this content will
        be visible.
      </p>
      <p class="text-muted-foreground text-sm">
        This is the second paragraph. It will be hidden when the collapsible is in its collapsed
        state.
      </p>
      <p class="text-muted-foreground text-sm">
        This is the third paragraph. Expand the collapsible to see all the content.
      </p>
      <p class="text-muted-foreground text-sm">
        This is the fourth paragraph. The collapsedHeight prop controls how much content is visible
        when collapsed.
      </p>
      <Collapsible.Trigger as-child>
        <Button class="w-full" variant="outline">
          Collapse (cannot be focused when collapsed)
          <Collapsible.Indicator />
        </Button>
      </Collapsible.Trigger>
    </Collapsible.Content>
  </Collapsible>
</template>
