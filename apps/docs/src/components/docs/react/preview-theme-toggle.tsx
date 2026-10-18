import { MoonIcon, SunIcon } from "@phosphor-icons/react";
import { Button, Swap } from "@pisagor/react";
import { useLayoutEffect, useRef, useState } from "react";

function docsTheme(): "light" | "dark" {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

/** Per-preview light/dark control — uses `Swap` for the sun/moon transition. */
export function PreviewThemeToggle() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  function previewPanel() {
    return buttonRef.current
      ?.closest("[data-component-preview]")
      ?.querySelector<HTMLElement>('[data-panel="preview"]');
  }

  function apply(next: "light" | "dark") {
    const panel = previewPanel();
    if (!panel) return;
    // In-memory only for this preview — never localStorage / cookies.
    panel.dataset.previewTheme = next;
    panel.classList.toggle("dark", next === "dark");
    panel.classList.toggle("light", next === "light");
    setTheme(next);
  }

  useLayoutEffect(() => {
    const panel = buttonRef.current
      ?.closest("[data-component-preview]")
      ?.querySelector<HTMLElement>('[data-panel="preview"]');
    if (!panel) return;
    const next = docsTheme();
    panel.dataset.previewTheme = next;
    panel.classList.toggle("dark", next === "dark");
    panel.classList.toggle("light", next === "light");
    setTheme(next);
  }, []);

  const dark = theme === "dark";

  return (
    <Button
      ref={buttonRef}
      aria-label={
        dark ? "Switch preview to light mode" : "Switch preview to dark mode"
      }
      data-tooltip="Toggle mode"
      onClick={() => apply(dark ? "light" : "dark")}
      size="icon-sm"
      type="button"
      variant="ghost"
    >
      <Swap
        off={<SunIcon aria-hidden size={14} />}
        on={<MoonIcon aria-hidden size={14} />}
        swap={!dark}
        variant="fade"
      />
    </Button>
  );
}
