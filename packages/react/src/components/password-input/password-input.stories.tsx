import { useState } from "react";
import preview, { SurfaceDecorator } from "#/storybook/preview";
import { PasswordInput } from "..";

const meta = preview.meta({
  component: PasswordInput,
  parameters: {
    docs: {
      description: {
        component:
          "Collects passwords with a show-hide control so users can enter credentials securely and verify them.",
      },
    },
    metadata: {
      api: "closed",
      taxonomy: "standard",
    },
  },
  title: "Components/Forms/Password Input",
});

export const Default = meta.story({
  args: {
    placeholder: "Enter password",
  },
});

export const Sizes = meta.story({
  render: () => (
    <div className="flex flex-col gap-2">
      <PasswordInput placeholder="Small" size="sm" />
      <PasswordInput placeholder="Medium" size="md" />
      <PasswordInput placeholder="Large" size="lg" />
    </div>
  ),
});

export const OnSurface = Default.extend({
  decorators: [SurfaceDecorator],
  parameters: { layout: "fullscreen" },
});

export const Disabled = meta.story({
  args: {
    disabled: true,
    placeholder: "••••••••",
  },
});

export const Invalid = meta.story({
  args: {
    invalid: true,
    placeholder: "••••••••",
  },
});

export const Autocomplete = meta.story({
  render: () => (
    <div className="flex flex-col gap-2">
      <PasswordInput autoComplete="current-password" placeholder="••••••••" />
      <PasswordInput autoComplete="new-password" placeholder="••••••••" />
    </div>
  ),
});

export const AutoHide = meta.story({
  render: () => {
    const HIDE_DELAY_MS = 3000;
    const [visible, setVisible] = useState(false);

    const handleVisibilityChange = (visible: boolean) => {
      setVisible(visible);

      if (visible) {
        setTimeout(() => {
          setVisible(false);
        }, HIDE_DELAY_MS);
      }
    };

    return (
      <PasswordInput
        onVisibilityChange={({ visible }) => handleVisibilityChange(visible)}
        placeholder="Enter password"
        visible={visible}
      />
    );
  },
});

export const ControlledVisibility = meta.story({
  render: () => {
    const [visible, setVisible] = useState(false);

    return (
      <PasswordInput
        onVisibilityChange={(details) => setVisible(details.visible)}
        placeholder="Enter password"
        visible={visible}
      />
    );
  },
});

export const Controlled = meta.story({
  render: () => {
    const [password, setPassword] = useState("");

    return (
      <PasswordInput
        onChange={(event) => setPassword(event.target.value)}
        placeholder="Enter password"
        value={password}
      />
    );
  },
});
