import { SegmentGroup } from "@pisagor/react";
import { useLayoutEffect, useRef, useState } from "react";

const STORAGE_KEY = "pisagor.docs.package-manager";

export interface InstallationManager {
  command: string;
  id: string;
  label: string;
}

function readPreferredId(managers: InstallationManager[]) {
  try {
    const preferred = localStorage.getItem(STORAGE_KEY);
    if (preferred && managers.some((manager) => manager.id === preferred)) {
      return preferred;
    }
  } catch {
    /* ignore */
  }

  return managers[0]?.id ?? "bun";
}

/** Package-manager switch for `installation.astro` (React SegmentGroup). */
export function InstallationManagerTabs({
  managers,
}: {
  managers: InstallationManager[];
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(() => readPreferredId(managers));

  useLayoutEffect(() => {
    const manager = managers.find((entry) => entry.id === value);
    if (!manager) return;
    const root = rootRef.current?.closest<HTMLElement>("[data-installation]");
    const commandEl = root?.querySelector<HTMLElement>("[data-command-text]");
    if (commandEl) commandEl.textContent = manager.command;
  }, [managers, value]);

  return (
    <div className="min-w-0 flex-1" ref={rootRef}>
      <SegmentGroup
        aria-label="Package manager"
        items={managers.map((manager) => ({
          label: manager.label,
          value: manager.id,
        }))}
        onValueChange={(next) => {
          if (!next) return;
          try {
            localStorage.setItem(STORAGE_KEY, next);
          } catch {
            /* ignore */
          }
          setValue(next);
        }}
        size="sm"
        value={value}
      />
    </div>
  );
}
