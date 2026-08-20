import {
  PhArrowSquareOut,
  PhCaretRight,
  PhDotsThree,
  PhPlus,
  PhSealCheck,
  PhShieldWarning,
  PhUser,
} from "@phosphor-icons/vue";
import { Avatar, Button, Item } from "@pisagor/vue";
import preview from "#/vue/preview";

const meta = preview.meta({
  component: Item,
  parameters: {
    docs: {
      description: {
        component:
          "Lays out a row of media, title, description, and actions for lists, menus, and pickers.",
      },
    },
  },
  subcomponents: {
    Actions: Item.Actions,
    Content: Item.Content,
    Description: Item.Description,
    Footer: Item.Footer,
    Group: Item.Group,
    Header: Item.Header,
    Media: Item.Media,
    Separator: Item.Separator,
    Title: Item.Title,
  },
  title: "Components/Data Display/Item",
});

export const Default = meta.story({
  render: () => ({
    components: { Button, Item, PhDotsThree },
    template: `
      <Item variant="outline">
        <Item.Content>
          <Item.Title>Basic item</Item.Title>
          <Item.Description>An item with title and description.</Item.Description>
        </Item.Content>
        <Item.Actions>
          <Button size="icon-sm" variant="outline">
            <PhDotsThree />
          </Button>
        </Item.Actions>
      </Item>
    `,
  }),
});

export const Variants = meta.story({
  render: () => ({
    components: { Item },
    template: `
      <div class="flex flex-col gap-2">
        <Item variant="default">
          <Item.Content>
            <Item.Title>Default variant</Item.Title>
            <Item.Description>Transparent background with no border.</Item.Description>
          </Item.Content>
        </Item>
        <Item variant="muted">
          <Item.Content>
            <Item.Title>Muted variant</Item.Title>
            <Item.Description>Muted background for secondary content.</Item.Description>
          </Item.Content>
        </Item>
        <Item variant="outline">
          <Item.Content>
            <Item.Title>Outline variant</Item.Title>
            <Item.Description>Outlined style with a visible border.</Item.Description>
          </Item.Content>
        </Item>
      </div>
    `,
  }),
});

export const Icon = meta.story({
  render: () => ({
    components: { Button, Item, PhShieldWarning },
    template: `
      <Item variant="outline">
        <Item.Media variant="icon">
          <PhShieldWarning />
        </Item.Media>
        <Item.Content>
          <Item.Title>Security alert</Item.Title>
          <Item.Description>New login detected from unknown device.</Item.Description>
        </Item.Content>
        <Item.Actions>
          <Button size="sm" variant="outline">
            Review
          </Button>
        </Item.Actions>
      </Item>
    `,
  }),
});

export const CustomSpacing = meta.story({
  render: () => ({
    components: { Item, PhUser },
    template: `
      <div class="flex flex-col gap-2">
        <Item class="w-full [--space:--spacing(2)]" variant="outline">
          <Item.Media variant="icon">
            <PhUser />
          </Item.Media>
          <Item.Content>
            <Item.Title>Compact spacing</Item.Title>
            <Item.Description>
              Uses \`[--space:--spacing(2)]\` for tighter padding and gap.
            </Item.Description>
          </Item.Content>
        </Item>
        <Item class="w-full [--space:--spacing(3)] md:[--space:--spacing(5)]" variant="outline">
          <Item.Media variant="icon">
            <PhUser />
          </Item.Media>
          <Item.Content>
            <Item.Title>Responsive spacing</Item.Title>
            <Item.Description>Wider from \`md\` up with \`md:[--space:--spacing(5)]\`.</Item.Description>
          </Item.Content>
        </Item>
      </div>
    `,
  }),
});

export const WithMedia = meta.story({
  render: () => ({
    components: { Item, PhCaretRight, PhSealCheck },
    template: `
      <Item variant="outline">
        <Item.Media>
          <PhSealCheck class="size-5" />
        </Item.Media>
        <Item.Content>
          <Item.Title>Your profile has been verified.</Item.Title>
        </Item.Content>
        <Item.Actions>
          <PhCaretRight class="size-4" />
        </Item.Actions>
      </Item>
    `,
  }),
});

export const WithAvatar = meta.story({
  render: () => ({
    components: { Avatar, Button, Item },
    template: `
      <Item variant="outline">
        <Item.Media>
          <Avatar alt="jane.doe@example.com" fallback="JD" size="sm" />
        </Item.Media>
        <Item.Content>
          <Item.Title>Jane Doe</Item.Title>
          <Item.Description>Last seen 5 months ago</Item.Description>
        </Item.Content>
        <Item.Actions>
          <Button size="sm" variant="outline">
            View
          </Button>
        </Item.Actions>
      </Item>
    `,
  }),
});

export const Image = meta.story({
  render: () => ({
    components: { Item },
    setup() {
      const images = [
        {
          alt: "Midnight City Lights",
          description: "Electric Nights · Neon Dreams · 3:45",
          src: "https://picsum.photos/seed/1/500/300",
        },
        {
          alt: "Coffee Shop Conversations",
          description: "Urban Stories · The Morning Brew · 4:05",
          src: "https://picsum.photos/seed/2/500/300",
        },
        {
          alt: "Digital Rain",
          description: "Binary Beats · Cyber Symphony · 3:30",
          src: "https://picsum.photos/seed/3/500/300",
        },
      ];
      return { images };
    },
    template: `
      <div class="flex flex-col gap-2">
        <Item variant="outline" v-for="image in images" :key="image.src">
          <Item.Media variant="image">
            <img
              :alt="image.alt"
              :src="image.src"
              class="aspect-square w-full object-cover grayscale"
              height="80"
              width="80"
            />
          </Item.Media>
          <Item.Content>
            <Item.Title>{{ image.alt }}</Item.Title>
            <Item.Description>{{ image.description }}</Item.Description>
          </Item.Content>
        </Item>
      </div>
    `,
  }),
});

export const Link = meta.story({
  render: () => ({
    components: { Item, PhArrowSquareOut },
    template: `
      <div class="flex flex-col gap-2">
        <Item as-child variant="muted">
          <a href="https://example.com/docs">
            <Item.Content>
              <Item.Title>Visit our documentation</Item.Title>
              <Item.Description>Learn how to get started with our components.</Item.Description>
            </Item.Content>
          </a>
        </Item>
        <Item as-child variant="outline">
          <a href="https://example.com/resources" rel="noopener noreferrer" target="_blank">
            <Item.Content>
              <Item.Title>External resource</Item.Title>
              <Item.Description>Opens in a new tab with security attributes.</Item.Description>
            </Item.Content>
            <PhArrowSquareOut />
          </a>
        </Item>
      </div>
    `,
  }),
});

export const Group = meta.story({
  render: () => ({
    components: { Avatar, Button, Item, PhPlus },
    setup() {
      return { people };
    },
    template: `
      <Item.Group>
        <Item variant="outline" v-for="person in people" :key="person.id">
          <Item.Media>
            <Avatar class="grayscale" :fallback="person.username.charAt(0).toUpperCase()" />
          </Item.Media>
          <Item.Content>
            <Item.Title>{{ person.username }}</Item.Title>
            <Item.Description>{{ person.email }}</Item.Description>
          </Item.Content>
          <Item.Actions>
            <Button class="rounded-full" size="icon-md" variant="ghost">
              <PhPlus />
            </Button>
          </Item.Actions>
        </Item>
      </Item.Group>
    `,
  }),
});

export const Header = meta.story({
  render: () => ({
    components: { Item },
    template: `
      <Item variant="outline">
        <Item.Header>
          <img
            alt="Item preview"
            class="aspect-square w-full grayscale"
            height="128"
            src="https://picsum.photos/seed/1/500/300"
            width="128"
          />
        </Item.Header>
        <Item.Content>
          <Item.Title>Item title</Item.Title>
          <Item.Description>Brief description of the item.</Item.Description>
        </Item.Content>
      </Item>
    `,
  }),
});

const people = [
  { email: "jane.doe@example.com", id: "jane", username: "jane.doe" },
  { email: "john.doe@example.com", id: "john", username: "john.doe" },
  { email: "alex.morgan@example.com", id: "alex", username: "alex.morgan" },
];
