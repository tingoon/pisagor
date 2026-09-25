import { useEffect, useId, useRef, useState } from "react";

type ThemePreference = "light" | "dark" | "system";
type ResolvedTheme = "light" | "dark";

const STORAGE_KEY = "pisagor-docs-theme";

function systemTheme(): ResolvedTheme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function resolveTheme(preference: ThemePreference): ResolvedTheme {
  return preference === "system" ? systemTheme() : preference;
}

function applyResolved(resolved: ResolvedTheme) {
  document.documentElement.classList.toggle("dark", resolved === "dark");
  document.documentElement.style.colorScheme = resolved;
}

function readPreference(): ThemePreference {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark" || stored === "system")
    return stored;
  return "system";
}

const options: { id: ThemePreference; label: string }[] = [
  { id: "light", label: "Light" },
  { id: "dark", label: "Dark" },
  { id: "system", label: "System" },
];

function SunIcon() {
  return (
    <svg aria-hidden className="size-4" fill="none" viewBox="0 0 24 24">
      <path
        d="M12 4V2M12 22v-2M4 12H2M22 12h-2M5.64 5.64 4.22 4.22M19.78 19.78l-1.42-1.42M5.64 18.36l-1.42 1.42M19.78 4.22l-1.42 1.42M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.75"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg aria-hidden className="size-4" fill="none" viewBox="0 0 24 24">
      <path
        d="M21 14.5A8.5 8.5 0 1 1 9.5 3 7 7 0 0 0 21 14.5Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.75"
      />
    </svg>
  );
}

function SystemIcon() {
  return (
    <svg aria-hidden className="size-4" fill="none" viewBox="0 0 24 24">
      <path
        d="M4 5.5A1.5 1.5 0 0 1 5.5 4h13A1.5 1.5 0 0 1 20 5.5v9A1.5 1.5 0 0 1 18.5 16h-13A1.5 1.5 0 0 1 4 14.5v-9ZM8 20h8M12 16v4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.75"
      />
    </svg>
  );
}

function PreferenceIcon({ preference }: { preference: ThemePreference }) {
  if (preference === "light") return <SunIcon />;
  if (preference === "dark") return <MoonIcon />;
  return <SystemIcon />;
}

export default function ThemeToggle() {
  const [preference, setPreference] = useState<ThemePreference>("system");
  const [resolved, setResolved] = useState<ResolvedTheme>("dark");
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  useEffect(() => {
    const initial = readPreference();
    const next = resolveTheme(initial);
    applyResolved(next);
    setPreference(initial);
    setResolved(next);

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      const current = readPreference();
      if (current !== "system") return;
      const system = resolveTheme("system");
      applyResolved(system);
      setResolved(system);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  function choose(next: ThemePreference) {
    localStorage.setItem(STORAGE_KEY, next);
    const resolvedNext = resolveTheme(next);
    applyResolved(resolvedNext);
    setPreference(next);
    setResolved(resolvedNext);
    setOpen(false);
  }

  return (
    <div className="relative" ref={rootRef}>
      <button
        aria-controls={menuId}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label={`Theme: ${preference}. Resolved ${resolved}.`}
        className="docs-press inline-flex size-8 items-center justify-center rounded-xl border border-border/70 bg-card/50 text-foreground shadow-xs backdrop-blur hover:bg-accent/60"
        onClick={() => setOpen((value) => !value)}
        type="button"
      >
        <PreferenceIcon preference={preference} />
      </button>

      {open ? (
        <div
          className="docs-material-heavy docs-sheet-panel docs-sheet-panel-end absolute end-0 z-50 mt-2 min-w-36 overflow-hidden rounded-xl border border-white/20 p-1 text-popover-foreground shadow-md dark:border-white/10"
          id={menuId}
          role="menu"
        >
          {options.map((option) => {
            const active = preference === option.id;
            return (
              <button
                aria-checked={active}
                className="docs-press flex w-full items-center gap-2 rounded-lg px-2.5 py-1.5 text-left text-sm hover:bg-accent/60 data-[active]:bg-accent data-[active]:text-accent-foreground"
                data-active={active || undefined}
                key={option.id}
                onClick={() => choose(option.id)}
                role="menuitemradio"
                type="button"
              >
                <PreferenceIcon preference={option.id} />
                <span className="flex-1">{option.label}</span>
                {active ? (
                  <svg
                    aria-hidden
                    className="size-3.5 opacity-80"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="m5 12 5 5L20 7"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                ) : null}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
