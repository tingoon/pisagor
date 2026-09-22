import type { Framework } from "../../lib/nav";
import { frameworks, swapFrameworkPath } from "../../lib/nav";

export default function FrameworkSwitcher({
  framework,
  pathname,
}: {
  framework: Framework;
  pathname: string;
}) {
  return (
    <fieldset
      aria-label="Framework"
      className="m-0 inline-flex items-center rounded-full border border-border/70 bg-card/70 p-0.5 shadow-xs backdrop-blur"
    >
      {frameworks.map((item) => {
        const active = item.id === framework;
        return (
          <a
            aria-current={active ? "page" : undefined}
            className={
              active
                ? "rounded-full bg-background px-2.5 py-1 text-xs font-semibold text-foreground shadow-xs"
                : "rounded-full px-2.5 py-1 text-xs font-medium text-muted-foreground transition hover:text-foreground"
            }
            href={swapFrameworkPath(pathname, item.id)}
            key={item.id}
          >
            {item.label}
          </a>
        );
      })}
    </fieldset>
  );
}
