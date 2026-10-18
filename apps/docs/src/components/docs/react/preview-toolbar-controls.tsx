import { Select } from "@pisagor/react";
import { useLayoutEffect, useRef, useState } from "react";

const SURFACE_STORAGE_KEY = "pisagor.docs.preview-surface";
const SURFACE_EVENT = "pisagor:preview-surface";

type Option = { label: string; value: string };

function readStoredSurface(): string {
  try {
    return localStorage.getItem(SURFACE_STORAGE_KEY) ?? "page";
  } catch {
    return "page";
  }
}

function asValue(next: string | string[]): string | undefined {
  return Array.isArray(next) ? next[0] : next;
}

/** Surface + optional viewport selects for the component preview toolbar. */
export function PreviewToolbarControls({
  surfaces,
  viewports,
}: {
  surfaces: Option[];
  viewports?: Option[];
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [surface, setSurface] = useState("page");
  const [viewport, setViewport] = useState("desktop");

  function previewRoot() {
    return rootRef.current?.closest<HTMLElement>("[data-component-preview]");
  }

  function surfaceClasses(root: HTMLElement) {
    const classes = new Map<string, string>([["page", "w-full"]]);
    for (const tpl of root.querySelectorAll<HTMLTemplateElement>(
      "template[data-surface-template]",
    )) {
      const el = tpl.content.firstElementChild;
      if (el && tpl.dataset.surfaceTemplate) {
        classes.set(tpl.dataset.surfaceTemplate, el.className);
      }
    }

    return classes;
  }

  function applySurface(value: string) {
    const root = previewRoot();
    const wrapper = root?.querySelector<HTMLElement>("[data-preview-surface]");
    if (!root || !wrapper) return;
    const classes = surfaceClasses(root);
    const next = classes.has(value) ? value : "page";
    wrapper.className = classes.get(next) ?? "w-full";
    wrapper.dataset.previewSurface = next;
    setSurface(next);
  }

  function chooseSurface(value: string) {
    try {
      localStorage.setItem(SURFACE_STORAGE_KEY, value);
    } catch {
      /* storage blocked */
    }
    document.dispatchEvent(new CustomEvent(SURFACE_EVENT, { detail: value }));
  }

  function applyViewport(value: string) {
    const stage = previewRoot()?.querySelector<HTMLElement>(
      "[data-preview-stage]",
    );
    if (!stage) return;
    if (value !== "desktop" && value !== "tablet" && value !== "mobile") {
      return;
    }
    stage.dataset.viewport = value;
    setViewport(value);
  }

  useLayoutEffect(() => {
    applySurface(readStoredSurface());
    const onSurface = (event: Event) => {
      if (!rootRef.current?.isConnected) return;
      applySurface(String((event as CustomEvent<string>).detail));
    };
    document.addEventListener(SURFACE_EVENT, onSurface);

    return () => document.removeEventListener(SURFACE_EVENT, onSurface);
  }, []);

  return (
    <div className="flex flex-wrap items-center gap-1" ref={rootRef}>
      <Select
        aria-label="Surface"
        items={surfaces}
        onValueChange={(next) => {
          const value = asValue(next);
          if (value) chooseSurface(value);
        }}
        size="sm"
        value={[surface]}
      />
      {viewports ? (
        <Select
          aria-label="Viewport"
          items={viewports}
          onValueChange={(next) => {
            const value = asValue(next);
            if (value) applyViewport(value);
          }}
          size="sm"
          value={[viewport]}
        />
      ) : null}
    </div>
  );
}
