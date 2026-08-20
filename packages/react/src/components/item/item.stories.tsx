import {
  ArrowSquareOutIcon,
  CaretRightIcon,
  DotsThreeIcon,
  PlusIcon,
  SealCheckIcon,
  ShieldWarningIcon,
  UserIcon,
} from "@phosphor-icons/react";
import { Avatar, Button, Item } from "@pisagor/react";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Item,
  parameters: {
    docs: {
      api: "compound",
      checklist: {
        accessibleColor: true,
        definedOptions: true,
        platformScales: true,
      },
      description: {
        component:
          "Lays out a row of media, title, description, and actions for lists, menus, and pickers.",
      },
      taxonomy: "standard",
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
  render: () => (
    <Item variant="outline">
      <Item.Content>
        <Item.Title>Basic item</Item.Title>
        <Item.Description>An item with title and description.</Item.Description>
      </Item.Content>
      <Item.Actions>
        <Button size="icon-sm" variant="outline">
          <DotsThreeIcon />
        </Button>
      </Item.Actions>
    </Item>
  ),
});

export const Variants = meta.story({
  render: () => (
    <div className="flex flex-col gap-2">
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
  ),
});

export const Icon = meta.story({
  render: () => (
    <Item variant="outline">
      <Item.Media variant="icon">
        <ShieldWarningIcon />
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
  ),
});

export const CustomSpacing = meta.story({
  render: () => (
    <div className="flex flex-col gap-2">
      <Item className="w-full [--space:--spacing(2)]" variant="outline">
        <Item.Media variant="icon">
          <UserIcon />
        </Item.Media>
        <Item.Content>
          <Item.Title>Compact spacing</Item.Title>
          <Item.Description>
            Uses `[--space:--spacing(2)]` for tighter padding and gap.
          </Item.Description>
        </Item.Content>
      </Item>
      <Item className="w-full [--space:--spacing(3)] md:[--space:--spacing(5)]" variant="outline">
        <Item.Media variant="icon">
          <UserIcon />
        </Item.Media>
        <Item.Content>
          <Item.Title>Responsive spacing</Item.Title>
          <Item.Description>Wider from `md` up with `md:[--space:--spacing(5)]`.</Item.Description>
        </Item.Content>
      </Item>
    </div>
  ),
});

export const WithMedia = meta.story({
  render: () => (
    <Item variant="outline">
      <Item.Media>
        <SealCheckIcon className="size-5" />
      </Item.Media>
      <Item.Content>
        <Item.Title>Your profile has been verified.</Item.Title>
      </Item.Content>
      <Item.Actions>
        <CaretRightIcon className="size-4" />
      </Item.Actions>
    </Item>
  ),
});

export const WithAvatar = meta.story({
  render: () => (
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
  ),
});

export const Image = meta.story({
  render: () => {
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
    return (
      <div className="flex flex-col gap-2">
        {images.map((image) => (
          <Item key={image.src} variant="outline">
            <Item.Media variant="image">
              <img
                alt={image.alt}
                className="aspect-square w-full object-cover grayscale"
                height={80}
                src={image.src}
                width={80}
              />
            </Item.Media>
            <Item.Content>
              <Item.Title>{image.alt}</Item.Title>
              <Item.Description>{image.description}</Item.Description>
            </Item.Content>
          </Item>
        ))}
      </div>
    );
  },
});

export const Link = meta.story({
  render: () => (
    <div className="flex flex-col gap-2">
      <Item asChild variant="muted">
        <a href="https://example.com/docs">
          <Item.Content>
            <Item.Title>Visit our documentation</Item.Title>
            <Item.Description>Learn how to get started with our components.</Item.Description>
          </Item.Content>
        </a>
      </Item>
      <Item asChild variant="outline">
        <a href="https://example.com/resources" rel="noopener noreferrer" target="_blank">
          <Item.Content>
            <Item.Title>External resource</Item.Title>
            <Item.Description>Opens in a new tab with security attributes.</Item.Description>
          </Item.Content>
          <ArrowSquareOutIcon />
        </a>
      </Item>
    </div>
  ),
});

export const Group = meta.story({
  render: () => (
    <Item.Group>
      {people.map((person) => (
        <Item key={person.id} variant="outline">
          <Item.Media>
            <Avatar className="grayscale" fallback={person.username.charAt(0).toUpperCase()} />
          </Item.Media>
          <Item.Content>
            <Item.Title>{person.username}</Item.Title>
            <Item.Description>{person.email}</Item.Description>
          </Item.Content>
          <Item.Actions>
            <Button className="rounded-full" size="icon-md" variant="ghost">
              <PlusIcon />
            </Button>
          </Item.Actions>
        </Item>
      ))}
    </Item.Group>
  ),
});

export const Header = meta.story({
  render: () => (
    <Item variant="outline">
      <Item.Header>
        <img
          alt="Item preview"
          className="aspect-square w-full grayscale"
          height={128}
          src="https://picsum.photos/seed/1/500/300"
          width={128}
        />
      </Item.Header>
      <Item.Content>
        <Item.Title>Item title</Item.Title>
        <Item.Description>Brief description of the item.</Item.Description>
      </Item.Content>
    </Item>
  ),
});

const people = [
  { email: "jane.doe@example.com", id: "jane", username: "jane.doe" },
  { email: "john.doe@example.com", id: "john", username: "john.doe" },
  { email: "alex.morgan@example.com", id: "alex", username: "alex.morgan" },
];
