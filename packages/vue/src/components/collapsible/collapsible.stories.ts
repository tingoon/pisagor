import { Button, Card, Clipboard, Collapsible } from "@pisagor/vue";
import { ref } from "vue";
import preview from "#/vue/preview";

const meta = preview.meta({
  component: Collapsible,
  parameters: {
    docs: {
      description: {
        component:
          "Hides and reveals a section of content behind a trigger so users can keep dense pages manageable.",
      },
    },
  },
  subcomponents: {
    Content: Collapsible.Content,
    Indicator: Collapsible.Indicator,
    Trigger: Collapsible.Trigger,
  },
  title: "Components/Layout/Collapsible",
});

export const Default = meta.story({
  render: () => ({
    components: { Collapsible },
    template: `
      <div class="w-96 rounded-xl border bg-card p-4">
        <Collapsible>
          <Collapsible.Trigger class="flex w-full items-center justify-between font-medium text-sm">
            Total visits
            <Collapsible.Indicator />
          </Collapsible.Trigger>
          <Collapsible.Content class="pt-3 text-muted-foreground text-sm">
            <p>Google 22.3%</p>
            <p>Facebook -10.1%</p>
            <p>TikTok 6.8%</p>
          </Collapsible.Content>
        </Collapsible>
      </div>
    `,
  }),
});

export const PartialCollapse = meta.story({
  render: () => ({
    components: { Button, Collapsible },
    template: `
      <Collapsible class="w-96" collapsed-height="50px">
        <Collapsible.Trigger as-child>
          <Button class="w-full" variant="outline">
            Read more
            <Collapsible.Indicator />
          </Button>
        </Collapsible.Trigger>
        <Collapsible.Content class="space-y-2 p-2">
          <p class="text-muted-foreground text-sm">
            This is the first paragraph of content. When collapsed, only a portion of this content
            will be visible.
          </p>
          <p class="text-muted-foreground text-sm">
            This is the second paragraph. It will be hidden when the collapsible is in its collapsed
            state.
          </p>
          <p class="text-muted-foreground text-sm">
            This is the third paragraph. Expand the collapsible to see all the content.
          </p>
          <p class="text-muted-foreground text-sm">
            This is the fourth paragraph. The collapsedHeight prop controls how much content is
            visible when collapsed.
          </p>
          <Collapsible.Trigger as-child>
            <Button class="w-full" variant="outline">
              Collapse (cannot be focused when collapsed)
              <Collapsible.Indicator />
            </Button>
          </Collapsible.Trigger>
        </Collapsible.Content>
      </Collapsible>
    `,
  }),
});

export const Disabled = meta.story({
  render: () => ({
    components: { Button, Collapsible },
    template: `
      <div>
        <Collapsible disabled>
          <Collapsible.Trigger as-child>
            <Button class="w-full" variant="outline">
              Disabled collapsible
              <Collapsible.Indicator />
            </Button>
          </Collapsible.Trigger>
          <Collapsible.Content class="pt-2">
            <p class="text-muted-foreground text-sm">
              This content cannot be accessed because the collapsible is unavailable.
            </p>
          </Collapsible.Content>
        </Collapsible>
      </div>
    `,
  }),
});

export const Nested = meta.story({
  render: () => ({
    components: { Button, Card, Clipboard, Collapsible },
    template: `
      <Card class="w-80">
        <Card.Header description="We'll help you get started" title="Getting started" />

        <Card.Content>
          <Collapsible>
            <Collapsible.Trigger as-child>
              <Button class="w-full" variant="outline">
                View details
                <Collapsible.Indicator />
              </Button>
            </Collapsible.Trigger>
            <Collapsible.Content class="flex flex-col gap-2 p-2">
              <p class="text-muted-foreground text-sm">
                Here you can find the documentation for all the components and how to use them.
              </p>
              <Collapsible>
                <Collapsible.Trigger as-child>
                  <Button class="w-full" size="sm" variant="outline">
                    Install dependencies
                    <Collapsible.Indicator />
                  </Button>
                </Collapsible.Trigger>
                <Collapsible.Content class="flex flex-col gap-2 p-2">
                  <p class="text-muted-foreground text-sm">Copy the following code:</p>

                  <pre class="relative rounded-md bg-muted p-2 text-muted-foreground text-xs">
                    <code>bun add ui</code>

                    <Clipboard
                      button-size="icon-sm"
                      button-variant="ghost"
                      class="absolute inset-e-1.5 top-0.5"
                      value="bun add ui"
                      variant="button"
                    />
                  </pre>
                </Collapsible.Content>
              </Collapsible>
            </Collapsible.Content>
          </Collapsible>
        </Card.Content>
      </Card>
    `,
  }),
});

export const Controlled = meta.story({
  render: () => ({
    components: { Button, Collapsible },
    setup() {
      const open = ref(false);
      return { open };
    },
    template: `
      <div class="w-64 space-y-2">
        <Collapsible v-model:open="open">
          <Collapsible.Trigger as-child>
            <Button class="w-full" variant="outline">
              {{ open ? 'Collapse' : 'Expand' }}
              <Collapsible.Indicator />
            </Button>
          </Collapsible.Trigger>
          <Collapsible.Content class="p-2">
            <p class="text-muted-foreground text-sm">
              This collapsible is controlled. The state is managed externally.
            </p>
          </Collapsible.Content>
        </Collapsible>
        <p class="text-center text-muted-foreground text-sm">{{ open ? '✅' : '❌' }}</p>
      </div>
    `,
  }),
});

export const Compound = meta.story({
  render: () => ({
    components: { Collapsible },
    template: `
      <Collapsible default-open class="w-96 rounded-xl border bg-card p-4">
        <Collapsible.Trigger class="flex w-full items-center justify-between font-medium text-sm">
          Details
          <Collapsible.Indicator />
        </Collapsible.Trigger>
        <Collapsible.Content class="pt-3 text-muted-foreground text-sm">
          Manual composition with Collapsible.Root and subparts.
        </Collapsible.Content>
      </Collapsible>
    `,
  }),
});
