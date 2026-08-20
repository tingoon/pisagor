import {
  CheckCircleIcon,
  ChecksIcon,
  ClockCounterClockwiseIcon,
  MagicWandIcon,
  SparkleIcon,
  WarningIcon,
} from "@phosphor-icons/react";
import { Alert, Button } from "@pisagor/react";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Alert,
  parameters: {
    docs: {
      api: "compound-shorthand",
      checklist: {
        accessibleColor: true,
        definedBehaviors: true,
        definedOptions: true,
        interactiveStates: true,
        keyboardInteractions: true,
        platformScales: true,
      },
      description: {
        component:
          "Shows a brief message that helps users notice important information — such as updates, warnings, or errors — with an optional title, icon, and actions.",
      },
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
  args: {
    description:
      "You can add icons to alerts to provide visual context and improve user experience.",
    title: "Icons improve context",
  },
});

export const Variants = meta.story({
  render: () => (
    <div className="flex flex-col gap-2">
      <Alert
        description="You can now start building your next great project."
        icon={<ChecksIcon />}
        title="Deployment successful"
        variant="default"
      />
      <Alert
        description="Your session has expired. Please log in again."
        icon={<WarningIcon />}
        title="Session expired"
        variant="destructive"
      />
      <Alert
        description="A new update is available. Review the update when you're ready."
        icon={<ClockCounterClockwiseIcon />}
        title="New update available"
        variant="info"
      />
      <Alert
        description="Your payment has been processed successfully. You will receive a receipt in your email."
        icon={<CheckCircleIcon />}
        title="Payment successful"
        variant="success"
      />
      <Alert
        description="Your storage is almost full. Consider upgrading your plan to avoid losing data."
        icon={<WarningIcon />}
        title="Storage almost full"
        variant="warning"
      />
    </div>
  ),
});

export const CustomColor = meta.story({
  args: {
    className: "border-purple-500/32 bg-purple-500/5 [&_svg]:text-purple-500",
    description: "This alert uses a custom color.",
    icon: <MagicWandIcon />,
    title: "Custom color alert",
  },
});

export const WithAction = meta.story({
  args: {
    action: (
      <>
        <Button size="xs" variant="ghost">
          Ignore
        </Button>
        <Button size="xs">Update</Button>
      </>
    ),
    description: "Review the update when you're ready.",
    icon: <ClockCounterClockwiseIcon />,
    title: "New update available",
  },
});

export const WithIcon = meta.story({
  args: {
    description:
      "Icons can be added to alerts to provide visual context and improve user experience.",
    icon: <SparkleIcon />,
    title: "New feature available",
  },
});

export const Compound = meta.story({
  parameters: {
    docs: {
      description: {
        story: "Manual composition with `Alert.Root` when shorthand props are not enough.",
      },
    },
  },
  render: () => (
    <Alert.Root variant="info">
      <ChecksIcon />
      <Alert.Title>Deployment successful</Alert.Title>
      <Alert.Description>You can now start building your next great project.</Alert.Description>
      <Alert.Action>
        <Button size="xs">Update</Button>
      </Alert.Action>
    </Alert.Root>
  ),
});
