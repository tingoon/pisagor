<script lang="ts">
  import { createListCollection, Portal } from "@ark-ui/svelte";
  import {
    Button,
    Field,
    FloatingPanel,
    NumberInput,
    Select,
  } from "@pisagor/svelte";
  import {
    ArrowsOutIcon,
    CornersInIcon,
    GearSixIcon,
    MinusIcon,
    XIcon,
  } from "phosphor-svelte";

  const collection = createListCollection({
    items: ["Inter", "Roboto", "Helvetica", "Geist"],
  });
  const resizeAxes = ["n", "e", "w", "s", "ne", "se", "sw", "nw"] as const;
</script>

<FloatingPanel.Root defaultSize={{ height: 300, width: 360 }}>
  <FloatingPanel.Trigger>
    {#snippet asChild(props)}
      <Button {...props()} variant="outline">Open</Button>
    {/snippet}
  </FloatingPanel.Trigger>
  <Portal>
    <FloatingPanel.Positioner>
      <FloatingPanel.Content>
        <FloatingPanel.DragTrigger>
          <FloatingPanel.Header>
            <GearSixIcon />
            <FloatingPanel.Title>Settings</FloatingPanel.Title>
            <FloatingPanel.Control>
              <FloatingPanel.StageTrigger stage="minimized">
                {#snippet asChild(props)}
                  <Button
                    {...props()}
                    aria-label="Minimize"
                    size="icon-xs"
                    variant="ghost"
                  >
                    <MinusIcon />
                  </Button>
                {/snippet}
              </FloatingPanel.StageTrigger>
              <FloatingPanel.StageTrigger stage="maximized">
                {#snippet asChild(props)}
                  <Button
                    {...props()}
                    aria-label="Maximize"
                    size="icon-xs"
                    variant="ghost"
                  >
                    <ArrowsOutIcon />
                  </Button>
                {/snippet}
              </FloatingPanel.StageTrigger>
              <FloatingPanel.StageTrigger stage="default">
                {#snippet asChild(props)}
                  <Button
                    {...props()}
                    aria-label="Restore"
                    size="icon-xs"
                    variant="outline"
                  >
                    <CornersInIcon />
                  </Button>
                {/snippet}
              </FloatingPanel.StageTrigger>
              <FloatingPanel.CloseTrigger>
                {#snippet asChild(props)}
                  <Button {...props()} aria-label="Close" size="icon-xs">
                    <XIcon aria-hidden />
                  </Button>
                {/snippet}
              </FloatingPanel.CloseTrigger>
            </FloatingPanel.Control>
          </FloatingPanel.Header>
        </FloatingPanel.DragTrigger>
        <FloatingPanel.Body>
          <Field>
            <Field.Label>Font family</Field.Label>
            <Select.Root {collection} defaultValue={["Inter"]}>
              <Select.Trigger class="w-full">
                <Select.ValueText />
              </Select.Trigger>
              <Select.Content>
                {#each collection.items as item (item)}
                  <Select.Item {item}>{item}</Select.Item>
                {/each}
              </Select.Content>
            </Select.Root>
          </Field>
          <Field>
            <Field.Label>Font size</Field.Label>
            <NumberInput class="w-full" defaultValue="16" />
          </Field>
        </FloatingPanel.Body>
        <FloatingPanel.Footer>
          <Button variant="outline">Save</Button>
        </FloatingPanel.Footer>
        {#each resizeAxes as axis (axis)}
          <FloatingPanel.ResizeTrigger {axis} />
        {/each}
      </FloatingPanel.Content>
    </FloatingPanel.Positioner>
  </Portal>
</FloatingPanel.Root>
