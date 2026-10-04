<script lang="ts">
import { Breadcrumb } from "@pisagor/svelte";
</script>

<Breadcrumb.Root>
  <Breadcrumb.List>
    <Breadcrumb.Item>
      <Breadcrumb.Link>
        {#snippet asChild(
  props,
)}
          <a {...props()} href="/docs">Docs</a>
        {/snippet}
      </Breadcrumb.Link>
    </Breadcrumb.Item>
    <Breadcrumb.Separator />
    <Breadcrumb.Item>
      <Breadcrumb.Link>
        {#snippet asChild(
  props,
)}
          <a {...props()} href="/docs/components">Components</a>
        {/snippet}
      </Breadcrumb.Link>
    </Breadcrumb.Item>
    <Breadcrumb.Separator />
    <Breadcrumb.Item>
      <Breadcrumb.Page>Breadcrumb</Breadcrumb.Page>
    </Breadcrumb.Item>
  </Breadcrumb.List>
</Breadcrumb.Root>
