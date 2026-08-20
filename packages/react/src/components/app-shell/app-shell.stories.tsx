import { faker } from "@faker-js/faker";
import { WarningIcon } from "@phosphor-icons/react";
import { Announcement, AppShell, Badge, Button, useAppShell } from "@pisagor/react";
import { useDisclosure } from "@pisagor/react-hooks";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: AppShell,
  parameters: {
    docs: {
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
          "Multi-region application shell with draggable side panels and an optional inspector for dashboard layouts.",
      },
      taxonomy: "pattern",
    },
    layout: "fullscreen",
  },
  subcomponents: {
    Banner: AppShell.Banner,
    Content: AppShell.Content,
    Header: AppShell.Header,
    Inspector: AppShell.Inspector,
    InspectorContent: AppShell.InspectorContent,
    InspectorFooter: AppShell.InspectorFooter,
    InspectorHeader: AppShell.InspectorHeader,
    InspectorTrigger: AppShell.InspectorTrigger,
    Main: AppShell.Main,
    Navigation: AppShell.Navigation,
    Panel: AppShell.Panel,
    PanelContent: AppShell.PanelContent,
    PanelFooter: AppShell.PanelFooter,
    PanelHeader: AppShell.PanelHeader,
    PanelTrigger: AppShell.PanelTrigger,
    Rail: AppShell.Rail,
    RailItem: AppShell.RailItem,
  },
  title: "Components/Layout/App Shell",
});

function ActiveRailPanelContent() {
  const { railStates } = useAppShell();
  const activeRailId = railStates.current.start?.activeRailId;

  return (
    <AppShell.PanelContent>
      {regionTitle(activeRailId ? `Panel: ${activeRailId}` : "Panel")}
    </AppShell.PanelContent>
  );
}

export const Default = meta.story({
  parameters: {
    docs: {
      description: {
        story:
          "Standard shell layout with banner, navigation, rails, a start panel, and main content.",
      },
    },
  },
  render: () => (
    <AppShell>
      <AppShell.Banner>{regionTitle("Banner")}</AppShell.Banner>

      <AppShell.Navigation>{regionTitle("Navigation")}</AppShell.Navigation>

      <AppShell.Rail defaultActiveRailId="home" placement="start">
        <AppShell.RailItem opensPanel railId="home" tooltip="Home">
          H
        </AppShell.RailItem>
        <AppShell.RailItem opensPanel railId="search" tooltip="Search">
          S
        </AppShell.RailItem>
      </AppShell.Rail>

      <AppShell.Panel defaultOpen>
        <AppShell.PanelContent>{regionTitle("Start panel")}</AppShell.PanelContent>
      </AppShell.Panel>

      <AppShell.Main>
        <AppShell.Header>
          <AppShell.PanelTrigger aria-label="Toggle start panel" />
          <div className="flex min-w-0 flex-1 justify-center">{regionTitle("Header")}</div>
        </AppShell.Header>
        {mainContent("Content")}
      </AppShell.Main>

      <AppShell.Rail defaultActiveRailId="notes" placement="end">
        <AppShell.RailItem railId="notes" tooltip="Notes">
          N
        </AppShell.RailItem>
        <AppShell.RailItem railId="chat" tooltip="Chat">
          C
        </AppShell.RailItem>
      </AppShell.Rail>
    </AppShell>
  ),
});

export const Banner = meta.story({
  parameters: {
    docs: {
      description: {
        story:
          "Fixed top banner with a dismiss control. Hiding the banner collapses the shell spacer.",
      },
    },
  },
  render: () => {
    const [opened, { close }] = useDisclosure(true);

    return (
      <AppShell>
        {opened ? (
          <AppShell.Banner className="flex items-center justify-center gap-1 p-2">
            <Announcement
              badge={
                <Badge variant="destructive">
                  <WarningIcon />
                  Process interrupted
                </Badge>
              }
              role="alert"
              title="Something went wrong during the process. Try again or contact support if the problem continues."
            />
            <Button onClick={close} pill size="sm">
              Dismiss
            </Button>
          </AppShell.Banner>
        ) : null}
        <AppShell.Main>{mainContent("Main")}</AppShell.Main>
      </AppShell>
    );
  },
});

export const Navigation = meta.story({
  render: () => (
    <AppShell>
      <AppShell.Navigation>{regionTitle("Navigation")}</AppShell.Navigation>
      <AppShell.Main>{mainContent("Main")}</AppShell.Main>
    </AppShell>
  ),
});

export const Inspectors = meta.story({
  render: () => (
    <AppShell>
      <AppShell.Navigation>
        <div className="flex items-center gap-2">
          <AppShell.InspectorTrigger aria-label="Toggle start inspector" placement="start" />
          {regionTitle("Navigation")}
          <AppShell.InspectorTrigger aria-label="Toggle end inspector" placement="end" />
        </div>
      </AppShell.Navigation>

      <AppShell.Inspector defaultOpen placement="start">
        <AppShell.InspectorHeader>{regionTitle("Start inspector header")}</AppShell.InspectorHeader>
        <AppShell.InspectorContent>{regionTitle("Start inspector")}</AppShell.InspectorContent>
        <AppShell.InspectorFooter>{regionTitle("Start inspector footer")}</AppShell.InspectorFooter>
      </AppShell.Inspector>

      <AppShell.Main>{mainContent("Main")}</AppShell.Main>

      <AppShell.Inspector defaultOpen placement="end">
        <AppShell.InspectorHeader>{regionTitle("End inspector header")}</AppShell.InspectorHeader>
        <AppShell.InspectorContent>{regionTitle("End inspector")}</AppShell.InspectorContent>
        <AppShell.InspectorFooter>{regionTitle("End inspector footer")}</AppShell.InspectorFooter>
      </AppShell.Inspector>
    </AppShell>
  ),
});

export const Panels = meta.story({
  parameters: {
    docs: {
      description: {
        story:
          "Start and end panels with `PanelHeader`, `PanelContent`, and `PanelFooter` sub-regions.",
      },
    },
  },
  render: () => (
    <AppShell>
      <AppShell.Navigation>{regionTitle("Navigation")}</AppShell.Navigation>

      <AppShell.Panel defaultOpen placement="start">
        <AppShell.PanelHeader>{regionTitle("Start panel header")}</AppShell.PanelHeader>
        <AppShell.PanelContent>{regionTitle("Start panel")}</AppShell.PanelContent>
        <AppShell.PanelFooter>{regionTitle("Start panel footer")}</AppShell.PanelFooter>
      </AppShell.Panel>

      <AppShell.Main>
        <AppShell.Header>
          <AppShell.PanelTrigger aria-label="Toggle start panel" placement="start" />
          <AppShell.PanelTrigger aria-label="Toggle end panel" placement="end" />
        </AppShell.Header>
        {mainContent("Main")}
      </AppShell.Main>

      <AppShell.Panel defaultOpen placement="end">
        <AppShell.PanelHeader>{regionTitle("End panel header")}</AppShell.PanelHeader>
        <AppShell.PanelContent>{regionTitle("End panel")}</AppShell.PanelContent>
        <AppShell.PanelFooter>{regionTitle("End panel footer")}</AppShell.PanelFooter>
      </AppShell.Panel>
    </AppShell>
  ),
});

export const Rails = meta.story({
  render: () => (
    <AppShell>
      <AppShell.Rail defaultActiveRailId="home" placement="start">
        <AppShell.RailItem opensPanel railId="home" tooltip="Home">
          H
        </AppShell.RailItem>
        <AppShell.RailItem opensPanel railId="search" tooltip="Search">
          S
        </AppShell.RailItem>
        <AppShell.RailItem opensPanel railId="settings" tooltip="Settings">
          G
        </AppShell.RailItem>
      </AppShell.Rail>

      <AppShell.Panel placement="start">
        <ActiveRailPanelContent />
      </AppShell.Panel>

      <AppShell.Main>
        <AppShell.Header>{regionTitle("Header")}</AppShell.Header>
        {mainContent("Main")}
      </AppShell.Main>

      <AppShell.Rail defaultActiveRailId="notes" placement="end">
        <AppShell.RailItem railId="notes" tooltip="Notes">
          N
        </AppShell.RailItem>
        <AppShell.RailItem railId="chat" tooltip="Chat">
          C
        </AppShell.RailItem>
      </AppShell.Rail>
    </AppShell>
  ),
});

export const Header = meta.story({
  parameters: {
    docs: {
      description: {
        story:
          "Toolbar row inside `AppShell.Main`. Pair with panel triggers in the header and inspector triggers in navigation.",
      },
    },
  },
  render: () => (
    <AppShell>
      <AppShell.Navigation>
        <div className="flex items-center gap-2">
          {regionTitle("Navigation")}
          <AppShell.InspectorTrigger aria-label="Toggle end inspector" placement="end" />
        </div>
      </AppShell.Navigation>

      <AppShell.Panel defaultOpen placement="start">
        <AppShell.PanelContent>{regionTitle("Start panel")}</AppShell.PanelContent>
      </AppShell.Panel>

      <AppShell.Inspector defaultOpen placement="end">
        <AppShell.InspectorContent>{regionTitle("End inspector")}</AppShell.InspectorContent>
      </AppShell.Inspector>

      <AppShell.Main>
        <AppShell.Header>
          <AppShell.PanelTrigger aria-label="Toggle start panel" placement="start" />
          <div className="flex min-w-0 flex-1 justify-center">{regionTitle("Header")}</div>
        </AppShell.Header>
        {mainContent("Main")}
      </AppShell.Main>
    </AppShell>
  ),
});

export const Main = meta.story({
  parameters: {
    docs: {
      description: {
        story:
          "Primary column spanning the shell grid. Holds the page header and scrollable content.",
      },
    },
  },
  render: () => (
    <AppShell>
      <AppShell.Navigation>{regionTitle("Navigation")}</AppShell.Navigation>
      <AppShell.Main>
        <AppShell.Header>{regionTitle("Header")}</AppShell.Header>
        <AppShell.Content>
          {regionTitle("Main")}
          {faker.lorem
            .paragraphs(8)
            .split("\n")
            .map((paragraph) => (
              <p key={paragraph} style={{ fontSize: 15 }}>
                {paragraph}
              </p>
            ))}
        </AppShell.Content>
      </AppShell.Main>
    </AppShell>
  ),
});

export const Content = meta.story({
  parameters: {
    docs: {
      description: {
        story:
          "Scrollable page body inside `AppShell.Main`. Long content grows the page and scrolls on the body.",
      },
    },
  },
  render: () => (
    <AppShell>
      <AppShell.Navigation>{regionTitle("Navigation")}</AppShell.Navigation>
      <AppShell.Main>
        <AppShell.Header>{regionTitle("Header")}</AppShell.Header>
        {mainContent("Content")}
      </AppShell.Main>
    </AppShell>
  ),
});

function regionTitle(text: string) {
  return (
    <div className="flex min-h-12 w-full items-center justify-center">
      <h6 className="text-center leading-4">{text}</h6>
    </div>
  );
}

function mainContent(title: string, paragraphs = 24) {
  return (
    <AppShell.Content>
      <h6 style={{ marginBottom: 8 }}>{title}</h6>
      {faker.lorem
        .paragraphs(paragraphs)
        .split("\n")
        .map((paragraph) => (
          <p key={paragraph} style={{ fontSize: 15 }}>
            {paragraph}
          </p>
        ))}
    </AppShell.Content>
  );
}
