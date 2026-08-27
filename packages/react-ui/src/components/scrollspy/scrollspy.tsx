import { ark } from "@ark-ui/react/factory";
import { cn } from "@pisagor/utils";
import { type ComponentProps, type RefObject, useCallback, useEffect, useRef } from "react";

// #region Types
type ScrollTarget = HTMLElement | Document | null | undefined;

const SCROLLSPY_ANCHOR = "data-scrollspy-anchor";
const SCROLLSPY_OFFSET = "data-scrollspy-offset";
const SCROLLSPY_ANCHOR_SELECTOR = `[${SCROLLSPY_ANCHOR}]`;

export interface ScrollspyProps extends ComponentProps<typeof ark.div> {
  /**
   * Whether to update the URL hash when the active section changes.
   *
   * @defaultValue true
   *
   * @remarks
   * Updates `window.location.hash`, which affects browser history navigation.
   */
  history?: boolean;
  /**
   * Global pixel offset from the top when calculating active sections.
   *
   * @defaultValue 0
   */
  offset?: number;
  /**
   * Whether to use smooth scrolling when clicking on anchors.
   *
   * @defaultValue true
   */
  smooth?: boolean;
  /**
   * The scrollable container to monitor. Omit to spy on the window.
   */
  targetRef?: RefObject<ScrollTarget>;
  /**
   * Called when the active section changes.
   */
  onUpdate?: (id: string) => void;
}
// #endregion

// #region Hooks
function resolveScrollElement(target: ScrollTarget): HTMLElement | null {
  if (target === document) {
    return document.documentElement;
  }

  if (!(target instanceof HTMLElement)) {
    return document.documentElement;
  }

  const viewport = target.querySelector('[data-scope="scroll-area"][data-part="viewport"]');
  if (viewport instanceof HTMLElement) {
    return viewport;
  }

  return target;
}

function resolveScrollTarget(target: ScrollTarget): HTMLElement | Window {
  if (target === document || !target) {
    return window;
  }

  if (target instanceof HTMLElement) {
    const viewport = target.querySelector('[data-scope="scroll-area"][data-part="viewport"]');
    if (viewport instanceof HTMLElement) {
      return viewport;
    }

    return target;
  }

  return window;
}

function getSectionScrollOffset(sectionElement: HTMLElement, scrollElement: HTMLElement): number {
  if (scrollElement === document.documentElement) {
    return sectionElement.getBoundingClientRect().top + window.scrollY;
  }

  const sectionRect = sectionElement.getBoundingClientRect();
  const scrollRect = scrollElement.getBoundingClientRect();

  return sectionRect.top - scrollRect.top + scrollElement.scrollTop;
}
// #endregion

// #region Part
export function Scrollspy({
  children,
  history = true,
  offset = 0,
  smooth = true,
  targetRef,
  onUpdate,
  className,
  ...rest
}: ScrollspyProps) {
  const selfRef = useRef<HTMLDivElement>(null);
  const anchorElementsRef = useRef<Element[] | null>(null);
  const prevIdTracker = useRef<string | null>(null);

  const setActiveSection = useCallback(
    (sectionId: string | null, force = false) => {
      if (!sectionId) {
        return;
      }

      anchorElementsRef.current?.forEach((item) => {
        const id = item.getAttribute(SCROLLSPY_ANCHOR);
        if (id === sectionId) {
          item.setAttribute("data-active", "true");
        } else {
          item.removeAttribute("data-active");
        }
      });

      onUpdate?.(sectionId);

      if (history && (force || prevIdTracker.current !== sectionId)) {
        window.history.replaceState({}, "", `#${sectionId}`);
      }

      prevIdTracker.current = sectionId;
    },
    [history, onUpdate],
  );

  const handleScroll = useCallback(() => {
    if (!anchorElementsRef.current || anchorElementsRef.current.length === 0) {
      return;
    }

    const scrollElement = resolveScrollElement(targetRef?.current);
    if (!scrollElement) {
      return;
    }

    const scrollTop =
      scrollElement === document.documentElement
        ? window.scrollY || document.documentElement.scrollTop
        : scrollElement.scrollTop;

    let activeIdx = 0;
    let minDelta = Number.POSITIVE_INFINITY;

    anchorElementsRef.current.forEach((anchor, idx) => {
      const sectionId = anchor.getAttribute(SCROLLSPY_ANCHOR);
      if (!sectionId) {
        return;
      }

      const sectionElement = document.getElementById(sectionId);
      if (!sectionElement) {
        return;
      }

      let customOffset = offset;
      const dataOffset = anchor.getAttribute(SCROLLSPY_OFFSET);
      if (dataOffset) {
        customOffset = Number.parseInt(dataOffset, 10);
      }

      const sectionOffset = getSectionScrollOffset(sectionElement, scrollElement);
      const delta = Math.abs(sectionOffset - customOffset - scrollTop);

      if (sectionOffset - customOffset <= scrollTop && delta < minDelta) {
        minDelta = delta;
        activeIdx = idx;
      }
    });

    const scrollHeight = scrollElement.scrollHeight;
    const clientHeight = scrollElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight - 2) {
      activeIdx = anchorElementsRef.current.length - 1;
    }

    const activeAnchor = anchorElementsRef.current[activeIdx];
    const sectionId = activeAnchor?.getAttribute(SCROLLSPY_ANCHOR) ?? null;

    setActiveSection(sectionId);
  }, [offset, setActiveSection, targetRef]);

  const scrollTo = useCallback(
    (anchorElement: HTMLElement) => (event?: Event) => {
      event?.preventDefault();

      const sectionId = anchorElement.getAttribute(SCROLLSPY_ANCHOR)?.replace("#", "") ?? null;
      if (!sectionId) {
        return;
      }

      const sectionElement = document.getElementById(sectionId);
      if (!sectionElement) {
        return;
      }

      const scrollToElement = resolveScrollTarget(targetRef?.current);

      let customOffset = offset;
      const dataOffset = anchorElement.getAttribute(SCROLLSPY_OFFSET);
      if (dataOffset) {
        customOffset = Number.parseInt(dataOffset, 10);
      }

      const scrollElement =
        scrollToElement instanceof HTMLElement ? scrollToElement : document.documentElement;
      const sectionOffset = getSectionScrollOffset(sectionElement, scrollElement);
      const scrollTop = sectionOffset - customOffset;

      scrollToElement.scrollTo({
        behavior: smooth ? "smooth" : "auto",
        left: 0,
        top: scrollTop,
      });

      setActiveSection(sectionId, true);
    },
    [offset, smooth, setActiveSection, targetRef],
  );

  const scrollToHashSection = useCallback(() => {
    const hash = CSS.escape(window.location.hash.replace("#", ""));

    if (!hash) {
      return;
    }

    const targetElement = document.querySelector(
      `[${SCROLLSPY_ANCHOR}="${hash}"]`,
    ) as HTMLElement | null;

    if (targetElement) {
      scrollTo(targetElement)();
    }
  }, [scrollTo]);

  useEffect(() => {
    if (selfRef.current) {
      anchorElementsRef.current = Array.from(
        selfRef.current.querySelectorAll(SCROLLSPY_ANCHOR_SELECTOR),
      );
    }

    const currentAnchors = anchorElementsRef.current;
    currentAnchors?.forEach((item) => {
      item.addEventListener("click", scrollTo(item as HTMLElement));
    });

    const onScroll = (event: Event) => {
      const scrollTarget = targetRef?.current ?? document;
      const scrollElement = resolveScrollTarget(scrollTarget);

      if (
        scrollElement === window ||
        (scrollElement instanceof HTMLElement && scrollElement.contains(event.target as Node))
      ) {
        handleScroll();
      }
    };

    window.addEventListener("scroll", onScroll, true);

    const initialTimeout = window.setTimeout(() => {
      scrollToHashSection();
      handleScroll();
    }, 100);

    return () => {
      window.removeEventListener("scroll", onScroll, true);
      currentAnchors?.forEach((item) => {
        item.removeEventListener("click", scrollTo(item as HTMLElement));
      });
      window.clearTimeout(initialTimeout);
    };
  }, [handleScroll, scrollTo, scrollToHashSection, targetRef]);

  return (
    <ark.div
      {...rest}
      className={cn(className)}
      data-part="root"
      data-scope="scrollspy"
      ref={selfRef}
    >
      {children}
    </ark.div>
  );
}
// #endregion

// #region Display Names
Scrollspy.displayName = "Scrollspy";
// #endregion
