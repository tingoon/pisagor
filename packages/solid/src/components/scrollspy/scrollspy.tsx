import { ark } from "@ark-ui/solid/factory";
import { cn } from "@pisagor/utils";
import type { ComponentProps, JSX } from "solid-js";
import { onCleanup, onMount, splitProps } from "solid-js";

type ScrollTarget = HTMLElement | Document | null | undefined;

const SCROLLSPY_ANCHOR = "data-scrollspy-anchor";
const SCROLLSPY_OFFSET = "data-scrollspy-offset";
const SCROLLSPY_ANCHOR_SELECTOR = `[${SCROLLSPY_ANCHOR}]`;

export interface ScrollspyProps extends ComponentProps<typeof ark.div> {
  history?: boolean;
  offset?: number;
  smooth?: boolean;
  /** Accessor or getter for scroll target element */
  targetRef?: () => ScrollTarget;
  onUpdate?: (id: string) => void;
}

function resolveScrollElement(target: ScrollTarget): HTMLElement | null {
  if (target === document) return document.documentElement;
  if (!(target instanceof HTMLElement)) return document.documentElement;
  const viewport = target.querySelector(
    '[data-scope="scroll-area"][data-part="viewport"]',
  );
  if (viewport instanceof HTMLElement) return viewport;
  return target;
}

function resolveScrollTarget(target: ScrollTarget): HTMLElement | Window {
  if (target === document || !target) return window;
  if (target instanceof HTMLElement) {
    const viewport = target.querySelector(
      '[data-scope="scroll-area"][data-part="viewport"]',
    );
    if (viewport instanceof HTMLElement) return viewport;
    return target;
  }
  return window;
}

function getSectionScrollOffset(
  sectionElement: HTMLElement,
  scrollElement: HTMLElement,
): number {
  if (scrollElement === document.documentElement) {
    return sectionElement.getBoundingClientRect().top + window.scrollY;
  }
  const sectionRect = sectionElement.getBoundingClientRect();
  const scrollRect = scrollElement.getBoundingClientRect();
  return sectionRect.top - scrollRect.top + scrollElement.scrollTop;
}

export function Scrollspy(props: ScrollspyProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "children",
    "history",
    "offset",
    "smooth",
    "targetRef",
    "onUpdate",
    "class",
  ]);

  let selfEl: HTMLDivElement | undefined;
  let anchorElements: Element[] | null = null;
  let prevId: string | null = null;

  const historyEnabled = () => local.history ?? true;
  const offset = () => local.offset ?? 0;
  const smooth = () => local.smooth ?? true;

  const setActiveSection = (sectionId: string | null, force = false) => {
    if (!sectionId) return;
    anchorElements?.forEach((item) => {
      const id = item.getAttribute(SCROLLSPY_ANCHOR);
      if (id === sectionId) item.setAttribute("data-active", "true");
      else item.removeAttribute("data-active");
    });
    local.onUpdate?.(sectionId);
    if (historyEnabled() && (force || prevId !== sectionId)) {
      window.history.replaceState({}, "", `#${sectionId}`);
    }
    prevId = sectionId;
  };

  const handleScroll = () => {
    if (!anchorElements || anchorElements.length === 0) return;
    const scrollElement = resolveScrollElement(local.targetRef?.() ?? null);
    if (!scrollElement) return;

    const scrollTop =
      scrollElement === document.documentElement
        ? window.scrollY || document.documentElement.scrollTop
        : scrollElement.scrollTop;

    let activeIdx = 0;
    let minDelta = Number.POSITIVE_INFINITY;

    anchorElements.forEach((anchor, idx) => {
      const sectionId = anchor.getAttribute(SCROLLSPY_ANCHOR);
      if (!sectionId) return;
      const sectionElement = document.getElementById(sectionId);
      if (!sectionElement) return;
      let customOffset = offset();
      const dataOffset = anchor.getAttribute(SCROLLSPY_OFFSET);
      if (dataOffset) customOffset = Number.parseInt(dataOffset, 10);
      const sectionOffset = getSectionScrollOffset(
        sectionElement,
        scrollElement,
      );
      const delta = Math.abs(sectionOffset - customOffset - scrollTop);
      if (sectionOffset - customOffset <= scrollTop && delta < minDelta) {
        minDelta = delta;
        activeIdx = idx;
      }
    });

    if (
      scrollTop + scrollElement.clientHeight >=
      scrollElement.scrollHeight - 2
    ) {
      activeIdx = anchorElements.length - 1;
    }

    const sectionId =
      anchorElements[activeIdx]?.getAttribute(SCROLLSPY_ANCHOR) ?? null;
    setActiveSection(sectionId);
  };

  const scrollTo = (anchorElement: HTMLElement) => (event?: Event) => {
    event?.preventDefault();
    const sectionId =
      anchorElement.getAttribute(SCROLLSPY_ANCHOR)?.replace("#", "") ?? null;
    if (!sectionId) return;
    const sectionElement = document.getElementById(sectionId);
    if (!sectionElement) return;
    const scrollToElement = resolveScrollTarget(local.targetRef?.() ?? null);
    let customOffset = offset();
    const dataOffset = anchorElement.getAttribute(SCROLLSPY_OFFSET);
    if (dataOffset) customOffset = Number.parseInt(dataOffset, 10);
    const scrollElement =
      scrollToElement instanceof HTMLElement
        ? scrollToElement
        : document.documentElement;
    const scrollTop =
      getSectionScrollOffset(sectionElement, scrollElement) - customOffset;
    scrollToElement.scrollTo({
      behavior: smooth() ? "smooth" : "auto",
      left: 0,
      top: scrollTop,
    });
    setActiveSection(sectionId, true);
  };

  const scrollToHashSection = () => {
    const hash = CSS.escape(window.location.hash.replace("#", ""));
    if (!hash) return;
    const targetElement = document.querySelector(
      `[${SCROLLSPY_ANCHOR}="${hash}"]`,
    ) as HTMLElement | null;
    if (targetElement) scrollTo(targetElement)();
  };

  onMount(() => {
    if (selfEl) {
      anchorElements = Array.from(
        selfEl.querySelectorAll(SCROLLSPY_ANCHOR_SELECTOR),
      );
    }
    const currentAnchors = anchorElements;
    const clickHandlers = new Map<Element, (event: Event) => void>();
    currentAnchors?.forEach((item) => {
      const handler = scrollTo(item as HTMLElement);
      clickHandlers.set(item, handler);
      item.addEventListener("click", handler);
    });

    const onScroll = (event: Event) => {
      const scrollTarget = local.targetRef?.() ?? document;
      const scrollElement = resolveScrollTarget(scrollTarget);
      if (
        scrollElement === window ||
        (scrollElement instanceof HTMLElement &&
          scrollElement.contains(event.target as Node))
      ) {
        handleScroll();
      }
    };

    window.addEventListener("scroll", onScroll, true);
    const initialTimeout = window.setTimeout(() => {
      scrollToHashSection();
      handleScroll();
    }, 100);

    onCleanup(() => {
      window.removeEventListener("scroll", onScroll, true);
      currentAnchors?.forEach((item) => {
        const handler = clickHandlers.get(item);
        if (handler) item.removeEventListener("click", handler);
      });
      window.clearTimeout(initialTimeout);
    });
  });

  return (
    <ark.div
      {...rest}
      class={cn(local.class)}
      data-part="root"
      data-scope="scrollspy"
      ref={(el) => {
        selfEl = el;
      }}
    >
      {local.children}
    </ark.div>
  );
}
