import { Breadcrumb, Button, DropdownMenu } from "@pisagor/vue";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Breadcrumb,
  parameters: {
    docs: {
      description: {
        component:
          "Shows where the user is within a hierarchy and lets them jump back to earlier levels.",
      },
    },
    metadata: {
      aliases: ["breadcrumbs"],
      api: "compound-shorthand",
      taxonomy: "standard",
    },
  },
  subcomponents: {
    Ellipsis: Breadcrumb.Ellipsis,
    Item: Breadcrumb.Item,
    Link: Breadcrumb.Link,
    List: Breadcrumb.List,
    Page: Breadcrumb.Page,
    Root: Breadcrumb.Root,
    Separator: Breadcrumb.Separator,
  },
  title: "Components/Navigation/Breadcrumb",
});

export const Default = meta.story({
  render: () => ({
    components: { Breadcrumb },
    template: `<Breadcrumb :items="[
      { href: 'https://example.com/', label: 'Home' },
      { href: 'https://example.com/', label: 'Components' },
      { isCurrentPage: true, label: 'Breadcrumb' },
    ]" />`,
  }),
});

export const Collapsed = meta.story({
  render: () => ({
    components: { Breadcrumb },
    template: `
      <Breadcrumb.Root>
        <Breadcrumb.List>
          <Breadcrumb.Item>
            <Breadcrumb.Link href="https://example.com/">Home</Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator />
          <Breadcrumb.Item>
            <Breadcrumb.Ellipsis />
          </Breadcrumb.Item>
          <Breadcrumb.Separator />
          <Breadcrumb.Item>
            <Breadcrumb.Link href="https://example.com/">Components</Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator />
          <Breadcrumb.Item>
            <Breadcrumb.Page>Breadcrumb</Breadcrumb.Page>
          </Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb.Root>
    `,
  }),
});

export const CustomSeparator = meta.story({
  render: () => ({
    components: { Breadcrumb },
    template: `
      <Breadcrumb.Root>
        <Breadcrumb.List>
          <Breadcrumb.Item>
            <Breadcrumb.Link href="https://example.com/">Home</Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator>/</Breadcrumb.Separator>
          <Breadcrumb.Item>
            <Breadcrumb.Link href="https://example.com/">Documentation</Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator>/</Breadcrumb.Separator>
          <Breadcrumb.Item>
            <Breadcrumb.Page>Introduction</Breadcrumb.Page>
          </Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb.Root>
    `,
  }),
});

export const WithLink = meta.story({
  render: () => ({
    components: { Breadcrumb },
    template: `
      <Breadcrumb.Root>
        <Breadcrumb.List>
          <Breadcrumb.Item>
            <Breadcrumb.Link as-child>
              <a href="/docs">Docs</a>
            </Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator />
          <Breadcrumb.Item>
            <Breadcrumb.Link as-child>
              <a href="/docs/components">Components</a>
            </Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator />
          <Breadcrumb.Item>
            <Breadcrumb.Page>Breadcrumb</Breadcrumb.Page>
          </Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb.Root>
    `,
  }),
});

export const WithMenu = meta.story({
  render: () => ({
    components: { Breadcrumb, Button, DropdownMenu },
    template: `
      <Breadcrumb.Root>
        <Breadcrumb.List>
          <Breadcrumb.Item>
            <Breadcrumb.Link href="https://example.com/">Home</Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator />
          <Breadcrumb.Item>
            <DropdownMenu :positioning="{ placement: 'bottom-start' }">
              <DropdownMenu.Trigger as-child>
                <Button
                  aria-label="Open menu to view more breadcrumb items"
                  size="icon-sm"
                  variant="ghost"
                >
                  <Breadcrumb.Ellipsis />
                </Button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content class="w-40">
                <DropdownMenu.Item as-child value="docs">
                  <a href="https://example.com/documentation">Documentation</a>
                </DropdownMenu.Item>
                <DropdownMenu.Item as-child value="components">
                  <a href="https://example.com/components">Components</a>
                </DropdownMenu.Item>
                <DropdownMenu.Item as-child value="hooks">
                  <a href="https://example.com/hooks">Hooks</a>
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
    `,
  }),
});

export const Compound = meta.story({
  render: () => ({
    components: { Breadcrumb },
    template: `
      <Breadcrumb.Root>
        <Breadcrumb.List>
          <Breadcrumb.Item>
            <Breadcrumb.Link href="https://example.com/">Home</Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator />
          <Breadcrumb.Item>
            <Breadcrumb.Link href="https://example.com/">Components</Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator />
          <Breadcrumb.Item>
            <Breadcrumb.Page>Breadcrumb</Breadcrumb.Page>
          </Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb.Root>
    `,
  }),
});
