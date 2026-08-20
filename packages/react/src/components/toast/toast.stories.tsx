import { createToaster } from "@ark-ui/react/toast";
import { Button, Toaster, toast } from "@pisagor/react";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Toaster,
  decorators: [
    (Story) => (
      <>
        <Toaster />
        <Story />
      </>
    ),
  ],
  parameters: {
    docs: {
      aliases: ["snackbar"],
      api: "compound",
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
          "Shows brief feedback messages that appear and dismiss automatically after an action completes.",
      },
      taxonomy: "standard",
    },
  },
  subcomponents: {
    Item: Toaster.Item,
  },
  title: "Components/Feedback/Toast",
});

export const Default = meta.story({
  render: () => (
    <Button
      onClick={() => {
        toast.create({
          description: "Tuesday, February 10, 2026 at 10:00 AM.",
          title: "Event created",
        });
      }}
      variant="outline"
    >
      Toast
    </Button>
  ),
});

export const Variants = meta.story({
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button
        onClick={() =>
          toast.success({
            description: "Event has been created.",
            title: "Event created",
          })
        }
        variant="outline"
      >
        Success
      </Button>
      <Button
        onClick={() =>
          toast.error({
            description: "Event has not been created. Check your connection and try again.",
            title: "Something went wrong",
          })
        }
        variant="outline"
      >
        Error
      </Button>
      <Button
        onClick={() =>
          toast.warning({
            description: "Your session will expire soon.",
            title: "Session expiring soon",
          })
        }
        variant="outline"
      >
        Warning
      </Button>
      <Button
        onClick={() =>
          toast.info({
            description: "You have a new event.",
            title: "New event",
          })
        }
        variant="outline"
      >
        Info
      </Button>
    </div>
  ),
});

export const Duration = meta.story({
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button
        onClick={() =>
          toast.create({
            description: "This toast disappears after 2 seconds.",
            duration: 2000,
            title: "Short duration",
          })
        }
        variant="outline"
      >
        2 seconds
      </Button>
      <Button
        onClick={() =>
          toast.create({
            description: "This toast stays for 10 seconds.",
            duration: 10_000,
            title: "Long duration",
          })
        }
        variant="outline"
      >
        10 seconds
      </Button>
      <Button
        onClick={() =>
          toast.create({
            closable: true,
            description: "This toast stays until you close it.",
            duration: Number.POSITIVE_INFINITY,
            title: "Persistent",
          })
        }
        variant="outline"
      >
        Until dismissed
      </Button>
    </div>
  ),
});

export const Closable = meta.story({
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button
        onClick={() =>
          toast.create({
            closable: false,
            description: "Tuesday, February 10, 2026 at 10:00 AM.",
            title: "Event created",
          })
        }
        variant="outline"
      >
        Toast
      </Button>
    </div>
  ),
});

export const Dedupe = meta.story({
  render: () => (
    <div className="flex gap-2">
      <Button
        onClick={() =>
          toast.create({
            description: "This is a toast with id.",
            id: "dedupe-on",
            title: "New event",
          })
        }
        variant="outline"
      >
        Toast with id
      </Button>
      <Button
        onClick={() =>
          toast.create({
            description: "This is a toast without id.",
            title: "New event",
          })
        }
        variant="outline"
      >
        Toast without id
      </Button>
    </div>
  ),
});

export const Action = meta.story({
  render: () => {
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

    return (
      <Button onClick={handleAction} variant="outline">
        Toast
      </Button>
    );
  },
});

export const WithPromise = meta.story({
  render: () => (
    <Button
      onClick={() => {
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
      }}
      variant="outline"
    >
      Run Promise
    </Button>
  ),
});

export const Placements = meta.story({
  render: () => {
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
    return (
      <>
        <Toaster toaster={topStartToaster} />
        <Toaster toaster={topToaster} />
        <Toaster toaster={topEndToaster} />
        <Toaster toaster={bottomStartToaster} />
        <Toaster toaster={bottomToaster} />
        <Toaster toaster={bottomEndToaster} />

        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex flex-wrap gap-2">
            <Button
              onClick={() =>
                topStartToaster.create({
                  description: "placement: top-start",
                  title: "Top start",
                })
              }
              variant="outline"
            >
              Top start
            </Button>
            <Button
              onClick={() =>
                topToaster.create({
                  description: "placement: top",
                  title: "Top center",
                })
              }
              variant="outline"
            >
              Top center
            </Button>
            <Button
              onClick={() =>
                topEndToaster.create({
                  description: "placement: top-end",
                  title: "Top end",
                })
              }
              variant="outline"
            >
              Top end
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button
              onClick={() =>
                bottomStartToaster.create({
                  description: "placement: bottom-start",
                  title: "Bottom start",
                })
              }
              variant="outline"
            >
              Bottom start
            </Button>
            <Button
              onClick={() =>
                bottomToaster.create({
                  description: "placement: bottom-center",
                  title: "Bottom center",
                })
              }
              variant="outline"
            >
              Bottom center
            </Button>
            <Button
              onClick={() =>
                bottomEndToaster.create({
                  description: "placement: bottom-end",
                  title: "Bottom end",
                })
              }
              variant="outline"
            >
              Bottom end
            </Button>
          </div>
        </div>
      </>
    );
  },
});
