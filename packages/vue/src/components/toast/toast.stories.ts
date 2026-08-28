import { createToaster } from "@ark-ui/vue/toast";
import { Button, Toaster, toast } from "@pisagor/vue";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Toaster,
  decorators: [
    () => ({
      components: { Toaster },
      template: `
        <Toaster />
        <story />
      `,
    }),
  ],
  parameters: {
    docs: {
      description: {
        component:
          "Shows brief feedback messages that appear and dismiss automatically after an action completes.",
      },
    },
    metadata: {
      aliases: ["snackbar"],
      api: "compound",
      taxonomy: "standard",
    },
  },
  subcomponents: {
    Item: Toaster.Item,
  },
  title: "Components/Feedback/Toast",
});

export const Default = meta.story({
  render: () => ({
    components: { Button },
    setup() {
      const handleClick = () => {
        toast.create({
          description: "Tuesday, February 10, 2026 at 10:00 AM.",
          title: "Event created",
        });
      };

      return { handleClick };
    },
    template: '<Button @click="handleClick" variant="outline">Toast</Button>',
  }),
});

export const Variants = meta.story({
  render: () => ({
    components: { Button },
    setup() {
      const handleSuccess = () =>
        toast.success({
          description: "Event has been created.",
          title: "Event created",
        });
      const handleError = () =>
        toast.error({
          description: "Event has not been created. Check your connection and try again.",
          title: "Something went wrong",
        });
      const handleWarning = () =>
        toast.warning({
          description: "Your session will expire soon.",
          title: "Session expiring soon",
        });
      const handleInfo = () =>
        toast.info({
          description: "You have a new event.",
          title: "New event",
        });

      return { handleError, handleInfo, handleSuccess, handleWarning };
    },
    template: `
      <div class="flex flex-wrap gap-2">
        <Button @click="handleSuccess" variant="outline">Success</Button>
        <Button @click="handleError" variant="outline">Error</Button>
        <Button @click="handleWarning" variant="outline">Warning</Button>
        <Button @click="handleInfo" variant="outline">Info</Button>
      </div>
    `,
  }),
});

export const Duration = meta.story({
  render: () => ({
    components: { Button },
    setup() {
      const handleShort = () =>
        toast.create({
          description: "This toast disappears after 2 seconds.",
          duration: 2000,
          title: "Short duration",
        });
      const handleLong = () =>
        toast.create({
          description: "This toast stays for 10 seconds.",
          duration: 10_000,
          title: "Long duration",
        });
      const handlePersistent = () =>
        toast.create({
          closable: true,
          description: "This toast stays until you close it.",
          duration: Number.POSITIVE_INFINITY,
          title: "Persistent",
        });

      return { handleLong, handlePersistent, handleShort };
    },
    template: `
      <div class="flex flex-wrap gap-2">
        <Button @click="handleShort" variant="outline">2 seconds</Button>
        <Button @click="handleLong" variant="outline">10 seconds</Button>
        <Button @click="handlePersistent" variant="outline">Until dismissed</Button>
      </div>
    `,
  }),
});

export const Closable = meta.story({
  render: () => ({
    components: { Button },
    setup() {
      const handleClick = () =>
        toast.create({
          closable: false,
          description: "Tuesday, February 10, 2026 at 10:00 AM.",
          title: "Event created",
        });

      return { handleClick };
    },
    template: `
      <div class="flex flex-wrap gap-2">
        <Button @click="handleClick" variant="outline">Toast</Button>
      </div>
    `,
  }),
});

export const Dedupe = meta.story({
  render: () => ({
    components: { Button },
    setup() {
      const handleWithId = () =>
        toast.create({
          description: "This is a toast with id.",
          id: "dedupe-on",
          title: "New event",
        });
      const handleWithoutId = () =>
        toast.create({
          description: "This is a toast without id.",
          title: "New event",
        });

      return { handleWithId, handleWithoutId };
    },
    template: `
      <div class="flex gap-2">
        <Button @click="handleWithId" variant="outline">Toast with id</Button>
        <Button @click="handleWithoutId" variant="outline">Toast without id</Button>
      </div>
    `,
  }),
});

export const Action = meta.story({
  render: () => ({
    components: { Button },
    setup() {
      const handleAction = () => {
        const id = toast.create({
          action: {
            label: "Undo",
            onClick() {
              toast.dismiss(id);
              toast.success({
                id: "action-undone",
                title: "User restored",
                type: "success",
              });
            },
          },
          description: "You can restore the user.",
          id: "action-performed",
          title: "User deleted",
          type: "error",
        });
      };

      return { handleAction };
    },
    template: '<Button @click="handleAction" variant="outline">Toast</Button>',
  }),
});

export const WithPromise = meta.story({
  render: () => ({
    components: { Button },
    setup() {
      const handleClick = () => {
        toast.promise<{ name: string }>(
          () => new Promise((resolve) => setTimeout(() => resolve({ name: "Event" }), 2000)),
          {
            error: {
              description: "Something went wrong. Check your connection and try again.",
              title: "Error generating event",
            },
            loading: {
              description: "Please wait while we generate the event.",
              title: "Generating event...",
            },
            success: (data) => ({
              description: `${data.name} has been created`,
              title: "Event generated",
            }),
          },
        );
      };

      return { handleClick };
    },
    template: '<Button @click="handleClick" variant="outline">Run Promise</Button>',
  }),
});

export const Placements = meta.story({
  render: () => ({
    components: { Button, Toaster },
    setup() {
      const topStartToaster = createToaster({
        overlap: true,
        placement: "top-start",
      });
      const topToaster = createToaster({
        overlap: true,
        placement: "top",
      });
      const topEndToaster = createToaster({
        overlap: true,
        placement: "top-end",
      });
      const bottomStartToaster = createToaster({
        overlap: true,
        placement: "bottom-start",
      });
      const bottomToaster = createToaster({
        overlap: true,
        placement: "bottom",
      });
      const bottomEndToaster = createToaster({
        overlap: true,
        placement: "bottom-end",
      });

      const handleTopStart = () =>
        topStartToaster.create({ description: "placement: top-start", title: "Top start" });
      const handleTop = () =>
        topToaster.create({ description: "placement: top", title: "Top center" });
      const handleTopEnd = () =>
        topEndToaster.create({ description: "placement: top-end", title: "Top end" });
      const handleBottomStart = () =>
        bottomStartToaster.create({
          description: "placement: bottom-start",
          title: "Bottom start",
        });
      const handleBottom = () =>
        bottomToaster.create({ description: "placement: bottom-center", title: "Bottom center" });
      const handleBottomEnd = () =>
        bottomEndToaster.create({ description: "placement: bottom-end", title: "Bottom end" });

      return {
        bottomEndToaster,
        bottomStartToaster,
        bottomToaster,
        handleBottom,
        handleBottomEnd,
        handleBottomStart,
        handleTop,
        handleTopEnd,
        handleTopStart,
        topEndToaster,
        topStartToaster,
        topToaster,
      };
    },
    template: `
      <div>
        <Toaster :toaster="topStartToaster" />
        <Toaster :toaster="topToaster" />
        <Toaster :toaster="topEndToaster" />
        <Toaster :toaster="bottomStartToaster" />
        <Toaster :toaster="bottomToaster" />
        <Toaster :toaster="bottomEndToaster" />

        <div class="flex flex-col items-center justify-center gap-2">
          <div class="flex flex-wrap gap-2">
            <Button @click="handleTopStart" variant="outline">Top start</Button>
            <Button @click="handleTop" variant="outline">Top center</Button>
            <Button @click="handleTopEnd" variant="outline">Top end</Button>
          </div>
          <div class="flex flex-wrap gap-2">
            <Button @click="handleBottomStart" variant="outline">Bottom start</Button>
            <Button @click="handleBottom" variant="outline">Bottom center</Button>
            <Button @click="handleBottomEnd" variant="outline">Bottom end</Button>
          </div>
        </div>
      </div>
    `,
  }),
});
