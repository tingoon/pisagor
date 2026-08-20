import { PhGear, PhShield, PhUser } from "@phosphor-icons/vue";
import { Button, Tabs } from "@pisagor/vue";
import { ref } from "vue";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Tabs,
  parameters: {
    docs: {
      description: {
        component:
          "Organizes related content into panels that users switch between without leaving the page.",
      },
    },
  },
  subcomponents: {
    Content: Tabs.Content,
    List: Tabs.List,
    Trigger: Tabs.Trigger,
  },
  title: "Components/Navigation/Tabs",
});

export const Default = meta.story({
  render: () => ({
    components: { Tabs },
    template: `
      <Tabs default-value="tab-1">
        <Tabs.List>
          <Tabs.Trigger value="tab-1">Profile</Tabs.Trigger>
          <Tabs.Trigger value="tab-2">Settings</Tabs.Trigger>
          <Tabs.Trigger value="tab-3">Security</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content class="p-4 text-center text-muted-foreground text-xs" value="tab-1">
          Profile content
        </Tabs.Content>
        <Tabs.Content class="p-4 text-center text-muted-foreground text-xs" value="tab-2">
          Settings content
        </Tabs.Content>
        <Tabs.Content class="p-4 text-center text-muted-foreground text-xs" value="tab-3">
          Security content
        </Tabs.Content>
      </Tabs>
    `,
  }),
});

export const Variants = meta.story({
  render: () => ({
    components: { Tabs },
    template: `
      <div class="flex flex-col gap-2">
        <Tabs default-value="tab-1">
          <Tabs.List variant="default">
            <Tabs.Trigger value="tab-1">Profile</Tabs.Trigger>
            <Tabs.Trigger value="tab-2">Settings</Tabs.Trigger>
            <Tabs.Trigger value="tab-3">Security</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content class="p-4 text-center text-muted-foreground text-xs" value="tab-1">
            Default variant
          </Tabs.Content>
          <Tabs.Content class="p-4 text-center text-muted-foreground text-xs" value="tab-2">
            Content 2
          </Tabs.Content>
          <Tabs.Content class="p-4 text-center text-muted-foreground text-xs" value="tab-3">
            Content 3
          </Tabs.Content>
        </Tabs>

        <Tabs default-value="tab-1">
          <Tabs.List variant="underline">
            <Tabs.Trigger value="tab-1">Profile</Tabs.Trigger>
            <Tabs.Trigger value="tab-2">Settings</Tabs.Trigger>
            <Tabs.Trigger value="tab-3">Security</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content class="p-4 text-center text-muted-foreground text-xs" value="tab-1">
            Underline variant
          </Tabs.Content>
          <Tabs.Content class="p-4 text-center text-muted-foreground text-xs" value="tab-2">
            Content 2
          </Tabs.Content>
          <Tabs.Content class="p-4 text-center text-muted-foreground text-xs" value="tab-3">
            Content 3
          </Tabs.Content>
        </Tabs>

        <Tabs default-value="tab-1" orientation="vertical">
          <Tabs.List variant="underline">
            <Tabs.Trigger value="tab-1">Tab 1</Tabs.Trigger>
            <Tabs.Trigger value="tab-2">Tab 2</Tabs.Trigger>
            <Tabs.Trigger value="tab-3">Tab 3</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content class="p-4 text-center text-muted-foreground text-xs" value="tab-1">
            Underline + vertical
          </Tabs.Content>
          <Tabs.Content class="p-4 text-center text-muted-foreground text-xs" value="tab-2">
            Content 2
          </Tabs.Content>
          <Tabs.Content class="p-4 text-center text-muted-foreground text-xs" value="tab-3">
            Content 3
          </Tabs.Content>
        </Tabs>
      </div>
    `,
  }),
});

export const OrientationHorizontal = meta.story({
  render: () => ({
    components: { Tabs },
    template: `
      <Tabs default-value="tab-1">
        <Tabs.List>
          <Tabs.Trigger value="tab-1">Tab 1</Tabs.Trigger>
          <Tabs.Trigger value="tab-2">Tab 2</Tabs.Trigger>
          <Tabs.Trigger value="tab-3">Tab 3</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content class="p-4 text-center text-muted-foreground text-xs" value="tab-1">
          Content 1
        </Tabs.Content>
        <Tabs.Content class="p-4 text-center text-muted-foreground text-xs" value="tab-2">
          Content 2
        </Tabs.Content>
        <Tabs.Content class="p-4 text-center text-muted-foreground text-xs" value="tab-3">
          Content 3
        </Tabs.Content>
      </Tabs>
    `,
  }),
});

export const OrientationVertical = meta.story({
  render: () => ({
    components: { Tabs },
    template: `
      <Tabs default-value="tab-1" orientation="vertical">
        <Tabs.List>
          <Tabs.Trigger value="tab-1">Tab 1</Tabs.Trigger>
          <Tabs.Trigger value="tab-2">Tab 2</Tabs.Trigger>
          <Tabs.Trigger value="tab-3">Tab 3</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content class="p-4 text-center text-muted-foreground text-xs" value="tab-1">
          Content 1
        </Tabs.Content>
        <Tabs.Content class="p-4 text-center text-muted-foreground text-xs" value="tab-2">
          Content 2
        </Tabs.Content>
        <Tabs.Content class="p-4 text-center text-muted-foreground text-xs" value="tab-3">
          Content 3
        </Tabs.Content>
      </Tabs>
    `,
  }),
});

export const Disabled = meta.story({
  render: () => ({
    components: { Tabs },
    template: `
      <Tabs default-value="tab-1">
        <Tabs.List>
          <Tabs.Trigger value="tab-1">Profile</Tabs.Trigger>
          <Tabs.Trigger disabled value="tab-2">Settings</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content class="p-4 text-center text-muted-foreground text-xs" value="tab-1">
          Profile content
        </Tabs.Content>
        <Tabs.Content class="p-4 text-center text-muted-foreground text-xs" value="tab-2">
          Settings content
        </Tabs.Content>
      </Tabs>
    `,
  }),
});

export const WithIcons = meta.story({
  render: () => ({
    components: { PhGear, PhShield, PhUser, Tabs },
    template: `
      <Tabs default-value="tab-1">
        <Tabs.List>
          <Tabs.Trigger value="tab-1">
            <PhUser />
            Profile
          </Tabs.Trigger>
          <Tabs.Trigger value="tab-2">
            <PhGear />
            Settings
          </Tabs.Trigger>
          <Tabs.Trigger value="tab-3">
            <PhShield />
            Security
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content class="p-4 text-center text-muted-foreground text-xs" value="tab-1">
          Profile content
        </Tabs.Content>
        <Tabs.Content class="p-4 text-center text-muted-foreground text-xs" value="tab-2">
          Settings content
        </Tabs.Content>
        <Tabs.Content class="p-4 text-center text-muted-foreground text-xs" value="tab-3">
          Security content
        </Tabs.Content>
      </Tabs>
    `,
  }),
});

export const Controlled = meta.story({
  render: () => ({
    components: { Button, Tabs },
    setup() {
      const value = ref("profile");
      const onValueChange = (details: { value: string }) => {
        value.value = details.value;
      };

      return { onValueChange, value };
    },
    template: `
      <div class="flex flex-col gap-2">
        <Tabs :onValueChange="onValueChange" :value="value">
          <Tabs.List>
            <Tabs.Trigger value="profile">Profile</Tabs.Trigger>
            <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
            <Tabs.Trigger value="security">Security</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="profile">
            <p class="text-muted-foreground text-sm">
              Manage your profile information and preferences.
            </p>
          </Tabs.Content>
          <Tabs.Content value="settings">
            <p class="text-muted-foreground text-sm">
              Customize notifications, theme, and text density.
            </p>
          </Tabs.Content>
          <Tabs.Content value="security">
            <p class="text-muted-foreground text-sm">
              Update your password and security settings.
            </p>
          </Tabs.Content>
        </Tabs>
        <div class="flex gap-2">
          <Button size="sm" variant="outline" @click="value = 'profile'">Go to Profile</Button>
          <Button size="sm" variant="outline" @click="value = 'settings'">Go to Settings</Button>
          <Button size="sm" variant="outline" @click="value = 'security'">Go to Security</Button>
        </div>
      </div>
    `,
  }),
});
