import {
  ArrowUpRightIcon,
  CheckCircleIcon,
  WarningIcon,
} from "@phosphor-icons/react";
import { Badge } from "@pisagor/react";
import { Announcement } from "..";
export function Variants() {
  return (
    <div className="flex flex-col gap-2">
      <Announcement
        badge={<Badge variant="default">Release</Badge>}
        title="v2.1.0 — Dark mode, faster builds, and 12 new components"
      />
      <Announcement
        badge={
          <Badge variant="destructive">
            <WarningIcon /> Payment failed
          </Badge>
        }
        title="Your last invoice couldn't be processed. Update your billing info."
      />
      <Announcement
        badge={<Badge variant="info">Maintenance</Badge>}
        title="Scheduled downtime tonight 2 to 4 a.m. UTC. No action needed."
      />
      <Announcement.Root asChild>
        <a href="https://example.com/announcement">
          <Badge variant="success">
            <CheckCircleIcon /> Deployed
          </Badge>
          <Announcement.Title>
            Production build completed in 2m 34s <ArrowUpRightIcon />
          </Announcement.Title>
        </a>
      </Announcement.Root>
      <Announcement
        badge={
          <Badge variant="warning">
            <WarningIcon /> Trial ending
          </Badge>
        }
        title="Your free trial expires in 3 days. Upgrade to keep access."
      />
    </div>
  );
}
