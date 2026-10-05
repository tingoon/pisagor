<script lang="ts">
import { Breadcrumb, Button, DropdownMenu } from "@pisagor/svelte";
</script>

<Breadcrumb.Root>
  <Breadcrumb.List>
    <Breadcrumb.Item>
      <Breadcrumb.Link href="https://example.com/">Home</Breadcrumb.Link>
    </Breadcrumb.Item>
    <Breadcrumb.Separator />
    <Breadcrumb.Item>
      <DropdownMenu positioning={{ placement: "bottom-start" }}>
        <DropdownMenu.Trigger>
          {#snippet asChild(
            props,
          )}
            <Button
              {...props()}
              aria-label="Open menu to view more breadcrumb items"
              size="icon-sm"
              variant="ghost"
            >
              <Breadcrumb.Ellipsis />
            </Button>
          {/snippet}
        </DropdownMenu.Trigger>
        <DropdownMenu.Content class="w-40">
          <DropdownMenu.Item value="docs">
            {#snippet asChild(
              props,
            )}
              <a {...props()} href="https://example.com/documentation"
                >Documentation</a
              >
            {/snippet}
          </DropdownMenu.Item>
          <DropdownMenu.Item value="components">
            {#snippet asChild(
              props,
            )}
              <a {...props()} href="https://example.com/components"
                >Components</a
              >
            {/snippet}
          </DropdownMenu.Item>
          <DropdownMenu.Item value="hooks">
            {#snippet asChild(
              props,
            )}
              <a {...props()} href="https://example.com/hooks">Hooks</a>
            {/snippet}
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu>
    </Breadcrumb.Item>
    <Breadcrumb.Separator />
    <Breadcrumb.Item>
      <Breadcrumb.Link href="https://example.com/">Products</Breadcrumb.Link>
    </Breadcrumb.Item>
    <Breadcrumb.Separator />
    <Breadcrumb.Item>
      <Breadcrumb.Page>Breadcrumb</Breadcrumb.Page>
    </Breadcrumb.Item>
  </Breadcrumb.List>
</Breadcrumb.Root>
