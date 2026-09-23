import { useDisclosure } from "@mantine/hooks";
import { WarningIcon } from "@phosphor-icons/react";
import { Announcement, Badge, Button } from "@pisagor/react";
import { AppShell } from "..";
import { mainContent } from "./helpers";
export function Banner() {
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
}
