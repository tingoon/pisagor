import {
  ArrowSquareOutIcon,
  DownloadIcon,
  GearIcon,
  HeartIcon,
  PlusIcon,
} from "@phosphor-icons/react";
import { Button } from "..";

export function WithIcon() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button variant="default">
        <PlusIcon />
        Add
      </Button>
      <Button variant="outline">
        <GearIcon />
        Settings
      </Button>
      <Button variant="secondary">
        <HeartIcon />
        Favorite
      </Button>
      <Button variant="ghost">
        <DownloadIcon />
        Download
      </Button>
      <Button variant="link">
        Visit website
        <ArrowSquareOutIcon />
      </Button>
    </div>
  );
}
