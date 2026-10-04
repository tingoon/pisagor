import type { Framework } from "#/lib/nav";
import { frameworks, swapFrameworkPath } from "#/lib/nav";
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
      className="m-0 inline-flex items-center rounded-full border border-border/70 bg-muted/40 p-0.5"
    >
      {frameworks.map((item) => {
        const active = item.id === framework;
        const Icon = frameworkIcons[item.id];
        return (
          <a
            aria-current={active ? "page" : undefined}
            className={
              active
                ? "docs-press inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-background px-2.5 py-1 font-semibold text-foreground text-xs shadow-sm"
                : "docs-press inline-flex items-center gap-1.5 rounded-full border border-transparent px-2.5 py-1 font-medium text-muted-foreground text-xs hover:text-foreground"
            }
            href={swapFrameworkPath(pathname, item.id)}
            key={item.id}
          >
            <Icon className={active ? "opacity-100" : "opacity-70"} size={13} />
            {item.label}
          </a>
        );
      })}
    </fieldset>
  );
}
