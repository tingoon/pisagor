<script lang="ts">
  import { Breadcrumb } from "@pisagor/svelte";
  import { CaretRightIcon } from "phosphor-svelte";
</script>

<Breadcrumb.Root>
  <Breadcrumb.List>
    <Breadcrumb.Item>
      <Breadcrumb.Link href="https://example.com/docs">Docs</Breadcrumb.Link>
    </Breadcrumb.Item>
    <Breadcrumb.Separator>
      <CaretRightIcon />
    </Breadcrumb.Separator>
    <Breadcrumb.Item>
      <Breadcrumb.Link href="https://example.com/docs/components"
        >Components</Breadcrumb.Link
      >
    </Breadcrumb.Item>
    <Breadcrumb.Separator>
      <CaretRightIcon />
    </Breadcrumb.Separator>
    <Breadcrumb.Item>
      <Breadcrumb.Page>Breadcrumb</Breadcrumb.Page>
    </Breadcrumb.Item>
  </Breadcrumb.List>
</Breadcrumb.Root>
