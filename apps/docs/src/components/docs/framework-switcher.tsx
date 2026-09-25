import type { Framework } from "../../lib/nav";
import { frameworks, swapFrameworkPath } from "../../lib/nav";
import {
  AstroBrandIcon,
  ReactBrandIcon,
  SolidBrandIcon,
  SvelteBrandIcon,
  VueBrandIcon,
} from "./brand-icons";

const frameworkIcons = {
  astro: AstroBrandIcon,
  react: ReactBrandIcon,
  solid: SolidBrandIcon,
  svelte: SvelteBrandIcon,
  vue: VueBrandIcon,
} as const;

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
        const Icon = frameworkIcons[item.id];
        return (
          <a
            aria-current={active ? "page" : undefined}
            className={
              active
                ? "docs-press inline-flex items-center gap-1.5 rounded-full bg-background px-2.5 py-1 text-xs font-semibold text-foreground shadow-xs"
                : "docs-press inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium text-muted-foreground hover:text-foreground"
            }
            href={swapFrameworkPath(pathname, item.id)}
            key={item.id}
          >
            <Icon className="opacity-90" size={13} />
            {item.label}
          </a>
        );
      })}
    </fieldset>
  );
}
