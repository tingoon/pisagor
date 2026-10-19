import {
  ArrowUpIcon,
  CalendarIcon,
  CheckSquareIcon,
  SparkleIcon,
  StarIcon,
  SunIcon,
  XIcon,
} from "@phosphor-icons/react";
import {
  Button,
  InputGroup,
  Progress,
  Separator,
  Sheet,
  Sidebar,
} from "@pisagor/react";
import { useIsMobile } from "@pisagor/react/hooks";
import { useState } from "react";
import { tv } from "tailwind-variants";
import { NavUser, PagePlaceholder, WorkspaceSwitcher } from "./helpers";

const assistantPanel = tv({
  slots: {
    assistant: "bg-card flex w-80 shrink-0 flex-col border-s",
    assistantBody: "flex flex-1 flex-col gap-3 overflow-auto p-4",
    assistantComposer: "border-t p-3",
    assistantHeader: "flex h-14 shrink-0 items-center gap-2 border-b px-4",
    assistantMessage: "bg-muted w-fit max-w-full rounded-xl px-3 py-2 text-sm",
    assistantReply:
      "bg-primary text-primary-foreground ms-auto w-fit max-w-full rounded-xl px-3 py-2 text-sm",
    header: "bg-background flex h-14 shrink-0 items-center gap-2 border-b px-4",
    headerActions: "ms-auto flex items-center gap-1",
    headerDivider: "h-4",
    pageTitle: "text-sm font-semibold tracking-tight",
    splitMain: "flex min-w-0 flex-1 flex-col",
    splitRow: "flex min-h-0 flex-1",
    trailing: "ms-auto",
    usageCard:
      "bg-background flex flex-col gap-2 rounded-xl border p-3 text-xs group-data-[collapsible=icon]:hidden",
    usageRow: "text-foreground flex items-center justify-between font-medium",
  },
});

const styles = assistantPanel();

const lists = [
  { count: "4", icon: SunIcon, isActive: true, title: "My day" },
  { count: "9", icon: StarIcon, title: "Important" },
  { count: "12", icon: CalendarIcon, title: "Planned" },
  { count: "31", icon: CheckSquareIcon, title: "All tasks" },
];

/**
 * Three-column shell: a floating sidebar, the main content, and a toggleable
 * assistant panel on the end side. The panel sits in flow on desktop and opens
 * as a sheet on mobile.
 */
export function AssistantPanel() {
  const isMobile = useIsMobile();
  const [assistantOpen, setAssistantOpen] = useState(true);

  return (
    <Sidebar.Provider>
      <Sidebar collapsible="icon" variant="floating">
        <Sidebar.Header>
          <WorkspaceSwitcher />
        </Sidebar.Header>
        <Sidebar.Content>
          <Sidebar.Group>
            <Sidebar.GroupLabel>Lists</Sidebar.GroupLabel>
            <Sidebar.Menu>
              {lists.map((list) => (
                <Sidebar.MenuItem key={list.title}>
                  <Sidebar.MenuButton
                    isActive={list.isActive}
                    tooltip={list.title}
                  >
                    <list.icon />
                    <span>{list.title}</span>
                  </Sidebar.MenuButton>
                  <Sidebar.MenuBadge>{list.count}</Sidebar.MenuBadge>
                </Sidebar.MenuItem>
              ))}
            </Sidebar.Menu>
          </Sidebar.Group>
        </Sidebar.Content>
        <Sidebar.Footer>
          <div className={styles.usageCard()}>
            <div className={styles.usageRow()}>
              <span>Today’s focus</span>
              <span>3 of 4</span>
            </div>
            <Progress aria-label="Today’s focus" value={75} />
          </div>
          <NavUser />
        </Sidebar.Footer>
      </Sidebar>

      <Sidebar.Inset>
        <div className={styles.splitRow()}>
          <div className={styles.splitMain()}>
            <header className={styles.header()}>
              <Sidebar.Trigger />
              <Separator
                className={styles.headerDivider()}
                orientation="vertical"
              />
              <h1 className={styles.pageTitle()}>My day</h1>
              <div className={styles.headerActions()}>
                <Button
                  aria-pressed={assistantOpen}
                  onClick={() => setAssistantOpen((open) => !open)}
                  size="sm"
                  variant={assistantOpen ? "secondary" : "outline"}
                >
                  <SparkleIcon />
                  Assistant
                </Button>
              </div>
            </header>
            <PagePlaceholder />
          </div>

          {isMobile ? (
            <Sheet
              onOpenChange={(details) => setAssistantOpen(details.open)}
              open={assistantOpen}
              placement="right"
              title="Assistant"
            >
              <AssistantConversation />
            </Sheet>
          ) : assistantOpen ? (
            <aside aria-label="Assistant" className={styles.assistant()}>
              <div className={styles.assistantHeader()}>
                <SparkleIcon />
                <h2 className={styles.pageTitle()}>Assistant</h2>
                <Button
                  aria-label="Close assistant"
                  className={styles.trailing()}
                  onClick={() => setAssistantOpen(false)}
                  size="icon-sm"
                  variant="ghost"
                >
                  <XIcon />
                </Button>
              </div>
              <AssistantConversation />
            </aside>
          ) : null}
        </div>
      </Sidebar.Inset>
    </Sidebar.Provider>
  );
}

function AssistantConversation() {
  return (
    <>
      <div className={styles.assistantBody()}>
        <p className={styles.assistantReply()}>What should I focus on today?</p>
        <p className={styles.assistantMessage()}>
          Start with the launch checklist: two items are due before noon. The
          design review can move to tomorrow.
        </p>
      </div>
      <div className={styles.assistantComposer()}>
        <InputGroup>
          <InputGroup.Textarea placeholder="Ask about your tasks…" />
          <InputGroup.Addon align="block-end">
            <Button
              aria-label="Send"
              className={styles.trailing()}
              size="icon-sm"
            >
              <ArrowUpIcon />
            </Button>
          </InputGroup.Addon>
        </InputGroup>
      </div>
    </>
  );
}
