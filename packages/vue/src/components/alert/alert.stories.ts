import {
  PhCheckCircle,
  PhChecks,
  PhClockCounterClockwise,
  PhMagicWand,
  PhSparkle,
  PhWarning,
} from "@phosphor-icons/vue";
import { Alert, Button } from "@pisagor/vue";
import { h } from "vue";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Alert,
  parameters: {
    docs: {
      description: {
        component:
          "Shows a brief message that helps users notice important information — such as updates, warnings, or errors — with an optional title, icon, and actions.",
      },
    },
    metadata: {
      api: "compound-shorthand",
      taxonomy: "standard",
    },
  },
  subcomponents: {
    Action: Alert.Action,
    Description: Alert.Description,
    Root: Alert.Root,
    Title: Alert.Title,
  },
  title: "Components/Feedback/Alert",
});

export const Default = meta.story({
  render: () => ({
    components: { Alert },
    template: `
      <Alert
        description="You can add icons to alerts to provide visual context and improve user experience."
        title="Icons improve context"
      />
    `,
  }),
});

export const Variants = meta.story({
  render: () => () =>
    h("div", { class: "flex flex-col gap-2" }, [
      h(Alert, {
        description: "You can now start building your next great project.",
        icon: h(PhChecks),
        title: "Deployment successful",
        variant: "default",
      }),
      h(Alert, {
        description: "Your session has expired. Please log in again.",
        icon: h(PhWarning),
        title: "Session expired",
        variant: "destructive",
      }),
      h(Alert, {
        description: "A new update is available. Review the update when you're ready.",
        icon: h(PhClockCounterClockwise),
        title: "New update available",
        variant: "info",
      }),
      h(Alert, {
        description:
          "Your payment has been processed successfully. You will receive a receipt in your email.",
        icon: h(PhCheckCircle),
        title: "Payment successful",
        variant: "success",
      }),
      h(Alert, {
        description:
          "Your storage is almost full. Consider upgrading your plan to avoid losing data.",
        icon: h(PhWarning),
        title: "Storage almost full",
        variant: "warning",
      }),
    ]),
});

export const CustomColor = meta.story({
  render: () => () =>
    h(Alert, {
      classNames: undefined,
      description: "This alert uses a custom color.",
      icon: h(PhMagicWand),
      title: "Custom color alert",
      ...({ class: "border-purple-500/32 bg-purple-500/5 [&_svg]:text-purple-500" } as Record<
        string,
        unknown
      >),
    }),
});

export const WithAction = meta.story({
  render: () => () =>
    h(Alert, {
      action: [
        h(Button, { size: "xs", variant: "ghost" }, () => "Ignore"),
        h(Button, { size: "xs" }, () => "Update"),
      ],
      description: "Review the update when you're ready.",
      icon: h(PhClockCounterClockwise),
      title: "New update available",
    }),
});

export const WithIcon = meta.story({
  render: () => () =>
    h(Alert, {
      description:
        "Icons can be added to alerts to provide visual context and improve user experience.",
      icon: h(PhSparkle),
      title: "New feature available",
    }),
});

export const Compound = meta.story({
  render: () => () =>
    h(Alert.Root, { variant: "info" }, () => [
      h(PhChecks),
      h(Alert.Title, null, () => "Deployment successful"),
      h(Alert.Description, null, () => "You can now start building your next great project."),
      h(Alert.Action, null, () => h(Button, { size: "xs" }, () => "Update")),
    ]),
});
