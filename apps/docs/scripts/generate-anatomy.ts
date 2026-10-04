/**
 * Recipe-accurate transparent anatomy SVGs for docs.
 * Stage 800×450 (Apple 784/441 ratio). CSS supplies the gradient.
 *
 *   bun apps/docs/scripts/generate-anatomy.ts
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const W = 800;
const H = 450;
const OUT = join(import.meta.dir, "../public/images/anatomy");
const SKIP = new Set(["action-bar"]);

/** Hero scale — keeps relative recipe ratios; enlarges for the 800-wide stage. */
const S = 2;

/** Pisagor tokens (--radius = 0.75rem = 12). */
const R = 12;
const RX = {
  "2xl": R * 1.8,
  "3xl": R * 2.2,
  full: 999,
  lg: R,
  md: R * 0.8,
  sm: R * 0.6,
  xl: R * 1.4,
  xs: R * 0.6,
} as const;

const FONT =
  'font-family="ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"';

type Draw = () => string;

function alias(id: string): Draw {
  return () => {
    const draw = draws[id];
    if (!draw) {
      throw new Error(`Missing anatomy draw: ${id}`);
    }
    return draw();
  };
}

function s(n: number) {
  return Math.round(n * S * 100) / 100;
}

function titleCase(id: string) {
  return id
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function wrap(title: string, body: string) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 ${W} ${H}" role="img" aria-label="${title} anatomy">
  <title>${title} anatomy</title>
  <defs>
    <linearGradient id="glass" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stop-color="#000" stop-opacity="0.42"/>
      <stop offset="100%" stop-color="#000" stop-opacity="0.56"/>
    </linearGradient>
    <linearGradient id="well" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stop-color="#fff" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#fff" stop-opacity="0.1"/>
    </linearGradient>
    <filter id="lift" x="-48" y="-48" width="${W + 96}" height="${H + 96}" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#000" flood-opacity="0.28"/>
    </filter>
  </defs>
  ${body}
</svg>
`;
}

function glass(
  x: number,
  y: number,
  w: number,
  h: number,
  rx: number,
  lift = true,
) {
  return `<rect ${lift ? 'filter="url(#lift)" ' : ""}fill="url(#glass)" x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" stroke="#fff" stroke-opacity="0.28" stroke-width="1.2"/>`;
}

function well(
  x: number,
  y: number,
  w: number,
  h: number,
  rx: number,
  lift = false,
) {
  return `<rect ${lift ? 'filter="url(#lift)" ' : ""}fill="url(#well)" x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" stroke="#fff" stroke-opacity="0.35" stroke-width="1.2"/>`;
}

function text(
  value: string,
  x: number,
  y: number,
  size: number,
  weight = 500,
  anchor: "start" | "middle" | "end" = "start",
  opacity = 1,
) {
  return `<text fill="#fff" fill-opacity="${opacity}" ${FONT} font-size="${size}" font-weight="${weight}" text-anchor="${anchor}" x="${x}" y="${y}">${value}</text>`;
}

function center(w: number, h: number) {
  return { x: (W - w) / 2, y: (H - h) / 2 };
}

/** Button md: h-8, px-3, gap-2, text-sm, rounded-lg, icon size-4 */
function button(
  label: string,
  x: number,
  y: number,
  opts?: { icon?: boolean; w?: number },
) {
  const h = s(32);
  const padX = s(12);
  const icon = s(16);
  const gap = s(8);
  const font = s(14);
  const textW = label.length * font * 0.56;
  const w = opts?.w ?? padX * 2 + (opts?.icon ? icon + gap : 0) + textW;
  const rx = s(RX.lg);
  let body = `${glass(x, y, w, h, rx)}${text(label, x + (opts?.icon ? padX + icon + gap : w / 2), y + h * 0.66, font, 500, opts?.icon ? "start" : "middle")}`;
  if (opts?.icon) {
    body += `<g stroke="#fff" stroke-width="${1.4 * S}" stroke-linecap="round" transform="translate(${x + padX} ${y + (h - icon) / 2})">
      <path d="M${icon * 0.15} ${icon * 0.7} L${icon * 0.65} ${icon * 0.2} l${icon * 0.15} ${icon * 0.15} L${icon * 0.3} ${icon * 0.85} H${icon * 0.15} Z" fill="none"/>
    </g>`;
  }
  return { h, svg: body, w };
}

/** Input md: h-8, px-3, text-sm, rounded-lg */
function input(x: number, y: number, w: number, placeholder: string) {
  const h = s(32);
  const rx = s(RX.lg);
  const font = s(14);
  return `${well(x, y, w, h, rx, true)}${text(placeholder, x + s(12), y + h * 0.66, font, 400, "start", 0.7)}`;
}

/** Field: Label + control + description */
function fieldStack(
  x: number,
  y: number,
  w: number,
  label: string,
  placeholder: string,
  description?: string,
) {
  const labelSize = s(14);
  let svg = text(label, x, y + labelSize, labelSize, 500);
  let cy = y + labelSize + s(8);
  svg += input(x, cy, w, placeholder);
  cy += s(32);
  if (description) {
    cy += s(8);
    svg += text(description, x, cy + s(12), s(13), 400, "start", 0.65);
    cy += s(16);
  }
  return { h: cy - y, svg };
}

const draws: Record<string, Draw> = {
  accordion: () => {
    const w = s(320);
    const row = s(40);
    const open = s(72);
    const { x, y } = center(w, row * 2 + open + s(8));
    return wrap(
      "Accordion",
      `${glass(x, y, w, row, s(RX.lg))}
      ${text("Section one", x + s(14), y + row * 0.66, s(14), 500)}
      ${text("▾", x + w - s(18), y + row * 0.66, s(12), 500, "middle", 0.7)}
      ${well(x, y + row + s(4), w, open, s(RX.lg))}
      ${text("Content for the first section.", x + s(14), y + row + s(28), s(13), 400, "start", 0.7)}
      ${glass(x, y + row + open + s(8), w, row, s(RX.lg), false)}
      ${text("Section two", x + s(14), y + row + open + s(8) + row * 0.66, s(14), 500)}`,
    );
  },

  alert: () => {
    const w = s(360);
    const h = s(64); // py-3 + content
    const { x, y } = center(w, h);
    return wrap(
      "Alert",
      `${glass(x, y, w, h, s(RX["2xl"]))}
      <circle fill="#fff" fill-opacity="0.25" cx="${x + s(22)}" cy="${y + h / 2}" r="${s(8)}"/>
      ${text("Something needs attention", x + s(40), y + s(26), s(14), 500)}
      ${text("Check your connection and try again.", x + s(40), y + s(46), s(13), 400, "start", 0.65)}`,
    );
  },

  "alert-dialog": () => {
    const w = s(260);
    const h = s(132);
    const { x, y } = center(w, h);
    const pad = s(24);
    const confirm = button("Delete", 0, 0);
    const cancel = button("Cancel", 0, 0);
    const footerY = y + h - pad - confirm.h;
    return wrap(
      "Alert Dialog",
      `<rect fill="#000" fill-opacity="0.22" x="0" y="0" width="${W}" height="${H}"/>
      ${glass(x, y, w, h, s(RX["3xl"]))}
      ${text("Delete project?", x + pad, y + pad + s(18), s(20), 600)}
      ${text("This action cannot be undone.", x + pad, y + pad + s(42), s(14), 400, "start", 0.65)}
      ${button("Cancel", x + w - pad - confirm.w - cancel.w - s(8), footerY).svg}
      ${button("Delete", x + w - pad - confirm.w, footerY).svg}`,
    );
  },

  announcement: () => {
    const w = s(340);
    const h = s(40);
    const { x, y } = center(w, h);
    return wrap(
      "Announcement",
      `${glass(x, y, w, h, s(RX.full))}
      ${text("New release available →", x + w / 2, y + h * 0.66, s(13), 500, "middle")}`,
    );
  },

  "app-shell": () => {
    const w = s(420);
    const h = s(240);
    const { x, y } = center(w, h);
    return wrap(
      "App Shell",
      `${glass(x, y, s(120), h, s(RX.lg))}
      ${glass(x + s(128), y, w - s(128), s(40), s(RX.lg))}
      ${well(x + s(128), y + s(48), w - s(128), h - s(48), s(RX.lg))}
      ${text("Nav", x + s(20), y + s(32), s(13), 500, "start", 0.7)}
      ${text("Header", x + s(148), y + s(26), s(13), 500, "start", 0.7)}`,
    );
  },

  "aspect-ratio": () => {
    const w = s(240);
    const h = s(135); // 16:9
    const { x, y } = center(w, h);
    return wrap(
      "Aspect Ratio",
      `${glass(x, y, w, h, s(RX.lg))}
      ${well(x + s(12), y + s(12), w - s(24), h - s(24), s(RX.md))}
      ${text("16:9", x + w / 2, y + h / 2 + s(5), s(14), 600, "middle")}`,
    );
  },
  autocomplete: alias("select"),

  avatar: () => {
    const size = s(48); // common md-ish
    const { x, y } = center(size, size);
    return wrap(
      "Avatar",
      `<circle filter="url(#lift)" fill="url(#glass)" cx="${x + size / 2}" cy="${y + size / 2}" r="${size / 2}" stroke="#fff" stroke-opacity="0.3"/>
      ${text("AL", x + size / 2, y + size * 0.62, s(14), 600, "middle")}`,
    );
  },

  badge: () => {
    const h = s(22); // h-5.5
    const w = s(52);
    const { x, y } = center(w, h);
    return wrap(
      "Badge",
      `${glass(x, y, w, h, s(RX.lg))}
      ${text("New", x + w / 2, y + h * 0.7, s(12), 500, "middle")}`,
    );
  },

  "bottom-navigation": () => {
    const h = s(56);
    const w = s(320);
    const x = (W - w) / 2;
    const y = H - h - s(32);
    const items = ["Home", "Search", "Create", "Inbox"];
    return wrap(
      "Bottom Navigation",
      `${glass(x, y, w, h, s(RX["2xl"]))}
      ${items
        .map((t, i) => {
          const cx = x + s(40) + i * s(80);
          return `<circle fill="#fff" fill-opacity="${i === 0 ? 0.9 : 0.3}" cx="${cx}" cy="${y + s(20)}" r="${s(5)}"/>
          ${text(t, cx, y + s(42), s(11), 500, "middle", i === 0 ? 1 : 0.65)}`;
        })
        .join("\n")}`,
    );
  },

  breadcrumb: () => {
    const h = s(32);
    const w = s(280);
    const { x, y } = center(w, h);
    return wrap(
      "Breadcrumb",
      `${text("Home", x, y + h * 0.66, s(14), 400, "start", 0.7)}
      ${text("/", x + s(48), y + h * 0.66, s(14), 400, "start", 0.45)}
      ${text("Projects", x + s(64), y + h * 0.66, s(14), 400, "start", 0.7)}
      ${text("/", x + s(140), y + h * 0.66, s(14), 400, "start", 0.45)}
      ${text("Pisagor", x + s(156), y + h * 0.66, s(14), 500)}`,
    );
  },
  button: () => {
    const b = button("Button", 0, 0);
    const { x, y } = center(b.w, b.h);
    return wrap("Button", button("Button", x, y).svg);
  },

  "button-group": () => {
    const labels = ["Left", "Center", "Right"];
    const h = s(32);
    const rx = s(RX.lg);
    const parts = labels.map((l) => {
      const font = s(14);
      return { l, w: s(12) * 2 + l.length * font * 0.56 };
    });
    const total = parts.reduce((a, p) => a + p.w, 0);
    const { x, y } = center(total, h);
    let cx = x;
    let dividers = "";
    const labelsSvg = parts
      .map((p, i) => {
        if (i > 0) {
          dividers += `<line stroke="#fff" stroke-opacity="0.22" x1="${cx}" x2="${cx}" y1="${y + s(6)}" y2="${y + h - s(6)}" stroke-width="${S}"/>`;
        }
        const node = text(
          p.l,
          cx + p.w / 2,
          y + h * 0.66,
          s(14),
          500,
          "middle",
        );
        cx += p.w;
        return node;
      })
      .join("\n");
    return wrap(
      "Button Group",
      `${glass(x, y, total, h, rx)}
      ${dividers}
      ${labelsSvg}`,
    );
  },

  calendar: () => {
    const cell = s(32);
    const pad = s(16);
    const w = pad * 2 + cell * 7;
    const h = pad * 2 + s(28) + cell * 5;
    const { x, y } = center(w, h);
    const days = Array.from({ length: 35 }, (_, i) => {
      const col = i % 7;
      const row = Math.floor(i / 7);
      const cx = x + pad + col * cell + cell / 2;
      const cy = y + pad + s(28) + row * cell + cell / 2;
      const d = i - 2;
      if (d < 1 || d > 31) return "";
      const selected = d === 15;
      return selected
        ? `<circle fill="#fff" cx="${cx}" cy="${cy}" r="${s(14)}"/><text fill="#000" ${FONT} font-size="${s(12)}" font-weight="600" text-anchor="middle" x="${cx}" y="${cy + s(4)}">${d}</text>`
        : text(String(d), cx, cy + s(4), s(12), 500, "middle", 0.85);
    }).join("\n");
    return wrap(
      "Calendar",
      `${glass(x, y, w, h, s(RX["2xl"]))}
      ${text("October 2026", x + w / 2, y + pad + s(14), s(14), 600, "middle")}
      ${days}`,
    );
  },

  card: () => {
    const w = s(280);
    const h = s(180);
    const { x, y } = center(w, h);
    return wrap(
      "Card",
      `${glass(x, y, w, h, s(RX["2xl"]))}
      ${well(x + s(16), y + s(16), w - s(32), s(88), s(RX.lg))}
      ${text("Card title", x + s(16), y + s(128), s(16), 600)}
      ${text("Supporting description goes here.", x + s(16), y + s(150), s(13), 400, "start", 0.65)}`,
    );
  },

  carousel: () => {
    const w = s(320);
    const h = s(180);
    const { x, y } = center(w, h);
    return wrap(
      "Carousel",
      `${glass(x, y, w, h, s(RX["2xl"]))}
      ${well(x + s(16), y + s(16), w - s(32), h - s(48), s(RX.lg))}
      <circle fill="#fff" fill-opacity="0.35" cx="${W / 2 - s(16)}" cy="${y + h - s(16)}" r="${s(3)}"/>
      <circle fill="#fff" cx="${W / 2}" cy="${y + h - s(16)}" r="${s(3)}"/>
      <circle fill="#fff" fill-opacity="0.35" cx="${W / 2 + s(16)}" cy="${y + h - s(16)}" r="${s(3)}"/>`,
    );
  },

  checkbox: () => {
    const box = s(16);
    const gap = s(8);
    const rowH = s(24);
    const items = ["Notifications", "Marketing", "Security"];
    const w = s(200);
    const h = items.length * rowH + s(16);
    const { x, y } = center(w, h);
    const rows = items
      .map((label, i) => {
        const yy = y + s(8) + i * rowH;
        const on = i < 2;
        return `<rect fill="${on ? "#fff" : "transparent"}" stroke="#fff" stroke-opacity="0.7" x="${x}" y="${yy}" width="${box}" height="${box}" rx="${s(RX.xs)}"/>
        ${on ? `<path d="M${x + s(3.5)} ${yy + s(8)}l${s(3)} ${s(3)} ${s(6)}-${s(7)}" stroke="#000" stroke-width="${1.6 * S}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>` : ""}
        ${text(label, x + box + gap, yy + s(13), s(14), 500)}`;
      })
      .join("\n");
    return wrap("Checkbox", rows);
  },

  "circular-progress": () => {
    const r = s(36);
    const cx = W / 2;
    const cy = H / 2;
    return wrap(
      "Circular Progress",
      `<circle stroke="#fff" stroke-opacity="0.2" stroke-width="${s(6)}" cx="${cx}" cy="${cy}" r="${r}" fill="none"/>
      <circle stroke="#fff" stroke-width="${s(6)}" stroke-linecap="round" cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke-dasharray="${r * 3.2} ${r * 6.3}" transform="rotate(-90 ${cx} ${cy})"/>
      ${text("68%", cx, cy + s(5), s(14), 600, "middle")}`,
    );
  },

  "circular-slider": alias("circular-progress"),
  "client-only": alias("presence"),

  clipboard: () => {
    const w = s(280);
    const h = s(32);
    const { x, y } = center(w, h);
    return wrap(
      "Clipboard",
      `${well(x, y, w, h, s(RX.lg), true)}
      ${text("npm i @pisagor/react", x + s(12), y + h * 0.66, s(13), 500)}
      ${well(x + w - s(36), y + s(2), s(28), s(28), s(RX.md))}
      <g stroke="#fff" stroke-width="${1.4 * S}" fill="none" transform="translate(${x + w - s(30)} ${y + s(8)})">
        <rect x="0" y="${s(3)}" width="${s(12)}" height="${s(14)}" rx="${s(2)}"/>
        <rect x="${s(4)}" y="0" width="${s(12)}" height="${s(14)}" rx="${s(2)}"/>
      </g>`,
    );
  },

  collapsible: alias("accordion"),

  "color-picker": () => {
    const w = s(220);
    const h = s(180);
    const { x, y } = center(w, h);
    return wrap(
      "Color Picker",
      `${glass(x, y, w, h, s(RX["2xl"]))}
      ${well(x + s(12), y + s(12), w - s(24), s(96), s(RX.lg))}
      <rect fill="#fff" fill-opacity="0.35" x="${x + s(12)}" y="${y + s(120)}" width="${w - s(24)}" height="${s(10)}" rx="${s(5)}"/>
      <circle fill="#fff" cx="${x + s(140)}" cy="${y + s(125)}" r="${s(7)}"/>
      ${[0, 1, 2, 3, 4]
        .map(
          (i) =>
            `<circle fill="#fff" fill-opacity="${0.35 + i * 0.12}" cx="${x + s(28) + i * s(36)}" cy="${y + s(156)}" r="${s(10)}"/>`,
        )
        .join("")}`,
    );
  },

  combobox: alias("select"),

  command: () => {
    const w = s(360);
    const h = s(220);
    const { x, y } = center(w, h);
    return wrap(
      "Command",
      `<rect fill="#000" fill-opacity="0.18" x="0" y="0" width="${W}" height="${H}"/>
      ${glass(x, y, w, h, s(RX["2xl"]))}
      ${well(x + s(12), y + s(12), w - s(24), s(32), s(RX.lg))}
      ${text("Type a command…", x + s(24), y + s(34), s(14), 400, "start", 0.65)}
      ${["Open file", "Search docs", "Toggle theme"]
        .map(
          (t, i) =>
            `${i === 0 ? `<rect fill="#fff" fill-opacity="0.12" x="${x + s(12)}" y="${y + s(60) + i * s(36)}" width="${w - s(24)}" height="${s(32)}" rx="${s(RX.md)}"/>` : ""}
         ${text(t, x + s(24), y + s(82) + i * s(36), s(14), 500)}`,
        )
        .join("\n")}`,
    );
  },
  "context-menu": alias("menu"),
  "data-grid": alias("table"),
  "data-list": () => {
    const w = s(280);
    const row = s(44);
    const { x, y } = center(w, row * 3 + s(16));
    return wrap(
      "Data List",
      [0, 1, 2]
        .map((i) => {
          const yy = y + i * (row + s(8));
          return `${glass(x, yy, w, row, s(RX.lg), i === 0)}
          <circle fill="#fff" fill-opacity="0.25" cx="${x + s(22)}" cy="${yy + row / 2}" r="${s(12)}"/>
          ${text(["Nova", "Orion", "Lyra"][i], x + s(44), yy + row * 0.45, s(14), 500)}
          ${text(["Design", "Eng", "Product"][i], x + s(44), yy + row * 0.75, s(12), 400, "start", 0.6)}`;
        })
        .join("\n"),
    );
  },

  "data-table": alias("table"),

  "date-picker": alias("calendar"),

  dialog: () => {
    // content: rounded-3xl, p-6, title text-xl, description text-sm, footer h-8 buttons
    const w = s(280);
    const h = s(168);
    const { x, y } = center(w, h);
    const pad = s(24);
    const save = button("Save", 0, 0);
    const cancel = button("Cancel", 0, 0);
    const footerY = y + h - pad - save.h;
    return wrap(
      "Dialog",
      `<rect fill="#000" fill-opacity="0.22" x="0" y="0" width="${W}" height="${H}"/>
      ${glass(x, y, w, h, s(RX["3xl"]))}
      ${text("Edit project", x + pad, y + pad + s(18), s(20), 600)}
      ${text("Update your project settings.", x + pad, y + pad + s(40), s(14), 400, "start", 0.65)}
      ${input(x + pad, y + pad + s(56), w - pad * 2, "Project name")}
      ${button("Cancel", x + w - pad - save.w - cancel.w - s(8), footerY).svg}
      ${button("Save", x + w - pad - save.w, footerY).svg}`,
    );
  },

  "download-trigger": () => {
    const b = button("Download", 0, 0, { icon: false });
    const { x, y } = center(b.w, b.h);
    return wrap("Download Trigger", button("Download", x, y).svg);
  },
  drawer: alias("sheet"),

  "dropdown-menu": alias("menu"),

  editable: () => {
    const w = s(200);
    const h = s(32);
    const { x, y } = center(w, h);
    return wrap(
      "Editable",
      `${text("Project name", x, y + h * 0.66, s(16), 500)}
      <rect fill="#fff" x="${x + s(118)}" y="${y + s(6)}" width="${s(2)}" height="${s(20)}"/>`,
    );
  },

  "empty-state": () => {
    const w = s(280);
    const h = s(160);
    const { x, y } = center(w, h);
    return wrap(
      "Empty State",
      `${text("No results", x + w / 2, y + s(48), s(18), 600, "middle")}
      ${text("Try adjusting your filters.", x + w / 2, y + s(76), s(13), 400, "middle", 0.65)}
      ${button("Reset filters", x + (w - button("Reset filters", 0, 0).w) / 2, y + s(100)).svg}`,
    );
  },

  field: () => {
    const w = s(280);
    const stackH = s(14 + 8 + 32 + 8 + 16);
    const { x, y } = center(w, stackH);
    return wrap(
      "Field",
      fieldStack(
        x,
        y,
        w,
        "Username",
        "Enter username",
        "Choose a unique username for your account.",
      ).svg,
    );
  },
  file: () => {
    const w = s(200);
    const h = s(64);
    const { x, y } = center(w, h);
    return wrap(
      "File",
      `${glass(x, y, w, h, s(RX.lg))}
      ${well(x + s(12), y + s(12), s(40), s(40), s(RX.md))}
      ${text("brief.pdf", x + s(64), y + s(28), s(14), 500)}
      ${text("240 KB", x + s(64), y + s(48), s(12), 400, "start", 0.6)}`,
    );
  },

  "file-input": alias("file-upload"),

  "file-upload": () => {
    const w = s(320);
    const h = s(140);
    const { x, y } = center(w, h);
    return wrap(
      "File Upload",
      `${well(x, y, w, h, s(RX["2xl"]), true)}
      ${text("Drop files to upload", x + w / 2, y + s(64), s(14), 500, "middle")}
      ${text("PNG, JPG up to 10MB", x + w / 2, y + s(88), s(12), 400, "middle", 0.6)}`,
    );
  },

  floating: () => {
    const w = s(240);
    const h = s(120);
    const { x, y } = center(w, h);
    return wrap(
      "Floating Panel",
      `${glass(x, y, w, h, s(RX["2xl"]))}
      ${text("Floating panel", x + s(16), y + s(32), s(14), 600)}
      ${text("Draggable surface content.", x + s(16), y + s(56), s(13), 400, "start", 0.65)}`,
    );
  },

  "floating-panel": alias("floating"),

  format: () => {
    const { x, y } = center(s(160), s(40));
    return wrap(
      "Format",
      `${text("$1,280.00", x + s(80), y + s(28), s(28), 600, "middle")}`,
    );
  },

  frame: alias("aspect-ratio"),

  highlight: () => {
    const w = s(320);
    const h = s(40);
    const { x, y } = center(w, h);
    return wrap(
      "Highlight",
      `${text("Search for ", x, y + h * 0.7, s(16), 500)}
      <rect fill="#fff" fill-opacity="0.22" x="${x + s(92)}" y="${y + s(4)}" width="${s(64)}" height="${s(32)}" rx="${s(RX.sm)}"/>
      ${text("action", x + s(100), y + h * 0.7, s(16), 600)}
      ${text(" bars", x + s(160), y + h * 0.7, s(16), 500)}`,
    );
  },

  "hover-card": alias("tooltip"),
  "image-cropper": () => {
    const w = s(240);
    const h = s(180);
    const { x, y } = center(w, h);
    return wrap(
      "Image Cropper",
      `${glass(x, y, w, h, s(RX.lg))}
      ${well(x + s(12), y + s(12), w - s(24), h - s(24), s(RX.md))}
      <rect stroke="#fff" stroke-dasharray="${s(4)} ${s(3)}" x="${x + s(48)}" y="${y + s(40)}" width="${s(140)}" height="${s(100)}" rx="${s(2)}" fill="none"/>`,
    );
  },

  input: () => {
    const w = s(280);
    const h = s(32);
    const { x, y } = center(w, h);
    return wrap("Input", input(x, y, w, "Enter your message"));
  },

  "input-group": () => {
    const w = s(280);
    const h = s(32);
    const { x, y } = center(w, h);
    return wrap(
      "Input Group",
      `${well(x, y, w, h, s(RX.lg), true)}
      ${text("https://", x + s(12), y + h * 0.66, s(14), 400, "start", 0.55)}
      ${text("pisagor.dev", x + s(72), y + h * 0.66, s(14), 500)}`,
    );
  },

  "input-otp": () => {
    const box = s(40);
    const gap = s(8);
    const n = 6;
    const total = n * box + (n - 1) * gap;
    const { x, y } = center(total, box);
    const cells = Array.from({ length: n }, (_, i) => {
      const cx = x + i * (box + gap);
      const filled = i < 4;
      return `${well(cx, y, box, box, s(RX.lg), i === 0)}
      ${filled ? text(String((i + 1) % 10), cx + box / 2, y + box * 0.66, s(16), 600, "middle") : ""}`;
    }).join("\n");
    return wrap("Input OTP", cells);
  },

  item: alias("data-list"),
  "json-tree-view": alias("tree"),

  kbd: () => {
    const h = s(22);
    const w = s(44);
    const { x, y } = center(w, h);
    return wrap(
      "Kbd",
      `${well(x, y, w, h, s(RX.md), true)}
      ${text("⌘K", x + w / 2, y + h * 0.72, s(12), 500, "middle")}`,
    );
  },

  link: () => {
    const w = s(260);
    const h = s(100);
    const { x, y } = center(w, h);
    return wrap(
      "Link Box",
      `${glass(x, y, w, h, s(RX.lg))}
      ${text("Documentation", x + s(16), y + s(36), s(14), 600)}
      ${text("Read the guides →", x + s(16), y + s(64), s(13), 400, "start", 0.7)}`,
    );
  },
  "link-box": alias("link"),
  listbox: () => {
    const w = s(220);
    const h = s(160);
    const { x, y } = center(w, h);
    const items = ["North", "South", "East", "West"];
    return wrap(
      "Listbox",
      `${glass(x, y, w, h, s(RX.lg))}
      ${items
        .map(
          (t, i) =>
            `${i === 2 ? `<rect fill="#fff" fill-opacity="0.14" x="${x + s(4)}" y="${y + s(10) + i * s(36)}" width="${w - s(8)}" height="${s(32)}" rx="${s(RX.md)}"/>` : ""}
         ${text(t, x + s(16), y + s(32) + i * s(36), s(14), 500)}`,
        )
        .join("\n")}`,
    );
  },

  marquee: () => {
    const h = s(40);
    const w = s(420);
    const { x, y } = center(w, h);
    return wrap(
      "Marquee",
      `${glass(x, y, w, h, s(RX.lg))}
      ${text("Pisagor · Components · Blocks · Forms", x + s(16), y + h * 0.66, s(14), 500)}`,
    );
  },

  menu: () => {
    const w = s(200);
    const h = s(168);
    const { x, y } = center(w, h);
    const items = ["Open", "Share", "Duplicate", "Delete"];
    return wrap(
      "Menu",
      `${glass(x, y, w, h, s(RX.lg))}
      ${items
        .map((t, i) => {
          const yy = y + s(20) + i * s(36);
          return `${i === 3 ? `<rect fill="#fff" fill-opacity="0.12" x="${x + s(12)}" y="${yy - s(14)}" width="${w - s(24)}" height="1"/>` : ""}
          ${text(t, x + s(16), yy, s(14), 500, "start", i === 3 ? 0.85 : 1)}`;
        })
        .join("\n")}`,
    );
  },

  navbar: () => {
    const h = s(48);
    const w = s(520);
    const { x, y } = center(w, h);
    return wrap(
      "Navbar",
      `${glass(x, y, w, h, s(RX.lg))}
      ${text("Pisagor", x + s(16), y + h * 0.66, s(14), 600)}
      ${text("Docs", x + s(120), y + h * 0.66, s(14), 500, "start", 0.75)}
      ${text("Components", x + s(180), y + h * 0.66, s(14), 500)}
      ${button("Sign in", x + w - s(16) - button("Sign in", 0, 0).w, y + (h - s(32)) / 2).svg}`,
    );
  },

  "navigation-menu": alias("navbar"),

  "number-input": () => {
    const w = s(140);
    const h = s(32);
    const { x, y } = center(w, h);
    return wrap(
      "Number Input",
      `${well(x, y, w, h, s(RX.lg), true)}
      ${text("42", x + s(12), y + h * 0.66, s(14), 500)}
      ${text("↕", x + w - s(18), y + h * 0.66, s(12), 500, "middle", 0.7)}`,
    );
  },

  pagination: () => {
    const size = s(32);
    const gap = s(4);
    const n = 5;
    const total = n * size + (n - 1) * gap;
    const { x, y } = center(total, size);
    return wrap(
      "Pagination",
      Array.from({ length: n }, (_, i) => {
        const cx = x + i * (size + gap);
        return `${i === 1 ? glass(cx, y, size, size, s(RX.lg)) : well(cx, y, size, size, s(RX.lg))}
        ${text(String(i + 1), cx + size / 2, y + size * 0.66, s(14), 500, "middle")}`;
      }).join("\n"),
    );
  },

  "password-input": () => {
    const w = s(280);
    const h = s(32);
    const { x, y } = center(w, h);
    return wrap(
      "Password Input",
      `${well(x, y, w, h, s(RX.lg), true)}
      ${text("••••••••••", x + s(12), y + h * 0.66, s(14), 500)}
      <g stroke="#fff" stroke-opacity="0.85" stroke-width="${1.5 * S}" fill="none" transform="translate(${x + w - s(28)} ${y + s(8)})">
        <circle cx="${s(8)}" cy="${s(8)}" r="${s(3)}"/>
        <path d="M${s(1)} ${s(8)}c${s(3)}-${s(5)} ${s(11)}-${s(5)} ${s(14)} 0c-${s(3)} ${s(5)}-${s(11)} ${s(5)}-${s(14)} 0z"/>
      </g>`,
    );
  },

  "phone-input": () => {
    const w = s(280);
    const h = s(32);
    const { x, y } = center(w, h);
    return wrap(
      "Phone Input",
      `${well(x, y, w, h, s(RX.lg), true)}
      ${text("+1", x + s(12), y + h * 0.66, s(14), 500, "start", 0.75)}
      ${text("(555) 010-0192", x + s(44), y + h * 0.66, s(14), 500)}`,
    );
  },
  popover: () => {
    const w = s(240);
    const h = s(120);
    const { x, y } = center(w, h + s(48));
    return wrap(
      "Popover",
      `${button("Open", x + (w - button("Open", 0, 0).w) / 2, y + h + s(16)).svg}
      ${glass(x, y, w, h, s(RX.lg))}
      ${text("Dimensions", x + s(16), y + s(28), s(14), 600)}
      ${text("Set the width and height.", x + s(16), y + s(50), s(13), 400, "start", 0.65)}`,
    );
  },

  presence: () => {
    const b = button("Mounted", 0, 0);
    const { x, y } = center(b.w, b.h);
    return wrap("Presence", button("Mounted", x, y).svg);
  },

  progress: () => {
    const w = s(280);
    const h = s(8);
    const { x, y } = center(w, h + s(28));
    return wrap(
      "Progress",
      `${text("Uploading…", x, y + s(12), s(13), 500, "start", 0.75)}
      <rect fill="#fff" fill-opacity="0.2" x="${x}" y="${y + s(24)}" width="${w}" height="${h}" rx="${h / 2}"/>
      <rect fill="#fff" fill-opacity="0.9" x="${x}" y="${y + s(24)}" width="${w * 0.64}" height="${h}" rx="${h / 2}"/>`,
    );
  },

  prose: () => {
    const w = s(320);
    const h = s(160);
    const { x, y } = center(w, h);
    return wrap(
      "Prose",
      `${text("Heading", x, y + s(20), s(20), 600)}
      ${text("Body text supports comfortable reading", x, y + s(52), s(14), 400, "start", 0.75)}
      ${text("with clear hierarchy and spacing.", x, y + s(76), s(14), 400, "start", 0.75)}`,
    );
  },
  provider: () => {
    const w = s(280);
    const h = s(100);
    const { x, y } = center(w, h);
    return wrap(
      "Provider",
      `${glass(x, y, w, h, s(RX["2xl"]))}
      ${text("PisagorProvider", x + w / 2, y + h * 0.55, s(16), 600, "middle")}
      ${text("Theme · Toast · Direction", x + w / 2, y + h * 0.78, s(12), 400, "middle", 0.65)}`,
    );
  },

  "qr-code": () => {
    const size = s(140);
    const { x, y } = center(size, size);
    const cells = Array.from({ length: 7 }, (_, r) =>
      Array.from({ length: 7 }, (_, c) => {
        if ((r + c) % 2 === 0) return "";
        const cs = s(14);
        return `<rect fill="#fff" x="${x + s(16) + c * cs}" y="${y + s(16) + r * cs}" width="${cs - s(2)}" height="${cs - s(2)}" rx="${s(1)}"/>`;
      }).join(""),
    ).join("");
    return wrap("QR Code", `${glass(x, y, size, size, s(RX.lg))}${cells}`);
  },

  "radio-group": () => {
    const items = ["Email", "SMS", "Push"];
    const rowH = s(28);
    const w = s(160);
    const h = items.length * rowH;
    const { x, y } = center(w, h);
    const rows = items
      .map((label, i) => {
        const yy = y + i * rowH + s(10);
        const on = i === 0;
        return `<circle stroke="#fff" stroke-opacity="0.75" stroke-width="${1.5 * S}" cx="${x + s(8)}" cy="${yy}" r="${s(8)}" fill="none"/>
        ${on ? `<circle fill="#fff" cx="${x + s(8)}" cy="${yy}" r="${s(4)}"/>` : ""}
        ${text(label, x + s(24), yy + s(5), s(14), 500)}`;
      })
      .join("\n");
    return wrap("Radio Group", rows);
  },

  rating: () => {
    const star = s(28);
    const gap = s(6);
    const total = 5 * star + 4 * gap;
    const { x, y } = center(total, star);
    return wrap(
      "Rating",
      Array.from({ length: 5 }, (_, i) => {
        const cx = x + i * (star + gap);
        const on = i < 4;
        return `<path fill="${on ? "#fff" : "transparent"}" fill-opacity="${on ? 0.95 : 1}" stroke="#fff" stroke-width="${1.2 * S}" d="M${cx + star / 2} ${y}l${s(5)} ${s(10)} ${s(11)} ${s(1.5)}-${s(8)} ${s(8)} ${s(2)} ${s(11)}-${s(10)}-${s(5)}-${s(10)} ${s(5)} ${s(2)}-${s(11)}-${s(8)}-${s(8)} ${s(11)}-${s(1.5)}z"/>`;
      }).join("\n"),
    );
  },

  resizable: () => {
    const w = s(360);
    const h = s(180);
    const { x, y } = center(w, h);
    return wrap(
      "Resizable",
      `${glass(x, y, s(170), h, s(RX.lg))}
      ${glass(x + s(190), y, s(170), h, s(RX.lg))}
      <rect fill="#fff" fill-opacity="0.45" x="${x + s(174)}" y="${y + s(40)}" width="${s(6)}" height="${s(100)}" rx="${s(3)}"/>`,
    );
  },

  "rich-text-editor": () => {
    const w = s(360);
    const h = s(200);
    const { x, y } = center(w, h);
    return wrap(
      "Rich Text Editor",
      `${glass(x, y, w, h, s(RX.lg))}
      ${well(x + s(8), y + s(8), w - s(16), s(32), s(RX.md))}
      ${["B", "I", "U"]
        .map((t, i) =>
          text(t, x + s(28) + i * s(28), y + s(30), s(13), 600, "middle"),
        )
        .join("")}
      ${text("Start writing…", x + s(16), y + s(72), s(14), 400, "start", 0.6)}`,
    );
  },

  "scroll-area": () => {
    const w = s(240);
    const h = s(200);
    const { x, y } = center(w, h);
    return wrap(
      "Scroll Area",
      `${glass(x, y, w, h, s(RX.lg))}
      ${[0, 1, 2, 3, 4, 5]
        .map((i) =>
          text(
            `Row item ${i + 1}`,
            x + s(16),
            y + s(28) + i * s(28),
            s(13),
            500,
            "start",
            0.8,
          ),
        )
        .join("\n")}
      <rect fill="#fff" fill-opacity="0.4" x="${x + w - s(10)}" y="${y + s(24)}" width="${s(4)}" height="${s(64)}" rx="${s(2)}"/>`,
    );
  },

  scrollspy: alias("tabs"),

  "segment-group": () => {
    const labels = ["Day", "Week", "Month"];
    const h = s(32);
    const tw = s(72);
    const total = tw * 3;
    const { x, y } = center(total, h);
    return wrap(
      "Segment Group",
      `${glass(x, y, total, h, s(RX.lg))}
      ${labels
        .map(
          (l, i) =>
            `${i === 1 ? `<rect fill="#fff" fill-opacity="0.16" x="${x + i * tw + s(2)}" y="${y + s(2)}" width="${tw - s(4)}" height="${h - s(4)}" rx="${s(RX.md)}"/>` : ""}
         ${text(l, x + i * tw + tw / 2, y + h * 0.66, s(14), 500, "middle")}`,
        )
        .join("\n")}`,
    );
  },

  select: () => {
    const w = s(240);
    const h = s(32);
    const { x, y } = center(w, h + s(120));
    return wrap(
      "Select",
      `${well(x, y, w, h, s(RX.lg), true)}
      ${text("Select a fruit…", x + s(12), y + h * 0.66, s(14), 400, "start", 0.7)}
      ${text("▾", x + w - s(16), y + h * 0.66, s(12), 500, "middle", 0.7)}
      ${glass(x, y + h + s(6), w, s(112), s(RX.lg))}
      ${["Apple", "Banana", "Cherry"]
        .map(
          (t, i) =>
            `${i === 1 ? `<rect fill="#fff" fill-opacity="0.12" x="${x + s(4)}" y="${y + h + s(14) + i * s(32)}" width="${w - s(8)}" height="${s(28)}" rx="${s(RX.md)}"/>` : ""}
         ${text(t, x + s(12), y + h + s(34) + i * s(32), s(14), 500)}`,
        )
        .join("\n")}`,
    );
  },

  separator: () =>
    wrap(
      "Separator",
      `${text("Content above", W / 2, H / 2 - s(24), s(14), 500, "middle", 0.75)}
      <line stroke="#fff" stroke-opacity="0.35" x1="${s(160)}" x2="${W - s(160)}" y1="${H / 2}" y2="${H / 2}" stroke-width="${S}"/>
      ${text("Content below", W / 2, H / 2 + s(32), s(14), 500, "middle", 0.75)}`,
    ),

  sheet: () => {
    const w = s(300);
    const h = s(200);
    const x = (W - w) / 2;
    const y = H - h - s(24);
    const apply = button("Apply", 0, 0);
    return wrap(
      "Sheet",
      `<rect fill="#000" fill-opacity="0.22" x="0" y="0" width="${W}" height="${H}"/>
      ${glass(x, y, w, h, s(RX["3xl"]))}
      ${text("Filters", x + s(24), y + s(36), s(20), 600)}
      ${text("Narrow results by status.", x + s(24), y + s(60), s(14), 400, "start", 0.65)}
      ${input(x + s(24), y + s(84), w - s(48), "Status")}
      ${button("Apply", x + w - s(24) - apply.w, y + h - s(24) - apply.h).svg}`,
    );
  },

  sidebar: () => {
    const w = s(200);
    const h = s(280);
    const { x, y } = center(w + s(240), h);
    return wrap(
      "Sidebar",
      `${glass(x, y, w, h, s(RX["2xl"]))}
      ${text("Workspace", x + s(16), y + s(28), s(13), 500, "start", 0.65)}
      ${[0, 1, 2, 3, 4]
        .map(
          (i) =>
            `${i === 1 ? `<rect fill="#fff" fill-opacity="0.14" x="${x + s(8)}" y="${y + s(48) + i * s(36)}" width="${w - s(16)}" height="${s(32)}" rx="${s(RX.md)}"/>` : ""}
         ${text(["Home", "Projects", "Settings", "Team", "Billing"][i], x + s(20), y + s(68) + i * s(36), s(14), 500)}`,
        )
        .join("\n")}
      ${well(x + w + s(16), y, s(220), h, s(RX["2xl"]))}`,
    );
  },

  "signature-pad": () => {
    const w = s(320);
    const h = s(140);
    const { x, y } = center(w, h);
    return wrap(
      "Signature Pad",
      `${well(x, y, w, h, s(RX.lg), true)}
      <path d="M${x + s(40)} ${y + s(80)}c${s(40)}-${s(40)} ${s(80)} ${s(40)} ${s(120)} 0s${s(80)}-${s(30)} ${s(120)} ${s(10)}" stroke="#fff" stroke-opacity="0.75" stroke-width="${2 * S}" fill="none" stroke-linecap="round"/>
      <line stroke="#fff" stroke-opacity="0.25" x1="${x + s(24)}" x2="${x + w - s(24)}" y1="${y + h - s(28)}" y2="${y + h - s(28)}"/>`,
    );
  },

  skeleton: () => {
    const w = s(280);
    const { x, y } = center(w, s(96));
    return wrap(
      "Skeleton",
      `${well(x, y, w, s(16), s(6))}
      ${well(x, y + s(28), s(220), s(16), s(6))}
      ${well(x, y + s(56), s(180), s(16), s(6))}
      ${well(x, y + s(84), s(200), s(16), s(6))}`,
    );
  },

  "skip-nav": () => {
    const b = button("Skip to content", 0, 0);
    const { x, y } = center(b.w, b.h);
    return wrap("Skip Nav", button("Skip to content", x, y).svg);
  },

  slider: () => {
    const w = s(240);
    const { x, y } = center(w, s(20));
    const t = 0.6;
    return wrap(
      "Slider",
      `<rect fill="#fff" fill-opacity="0.22" x="${x}" y="${y + s(6)}" width="${w}" height="${s(6)}" rx="${s(3)}"/>
      <rect fill="#fff" fill-opacity="0.9" x="${x}" y="${y + s(6)}" width="${w * t}" height="${s(6)}" rx="${s(3)}"/>
      <circle fill="#fff" filter="url(#lift)" cx="${x + w * t}" cy="${y + s(9)}" r="${s(10)}"/>`,
    );
  },

  sortable: () => {
    const w = s(260);
    const row = s(40);
    const { x, y } = center(w, row * 3 + s(16));
    return wrap(
      "Sortable",
      [0, 1, 2]
        .map((i) => {
          const yy = y + i * (row + s(8));
          const lift = i === 1;
          return `${glass(x + (lift ? s(6) : 0), yy - (lift ? s(4) : 0), w, row, s(RX.lg), lift)}
          ${text("⋮⋮", x + s(12) + (lift ? s(6) : 0), yy + row * 0.65 - (lift ? s(4) : 0), s(12), 500, "start", 0.5)}
          ${text(["First", "Second", "Third"][i], x + s(36) + (lift ? s(6) : 0), yy + row * 0.65 - (lift ? s(4) : 0), s(14), 500)}`;
        })
        .join("\n"),
    );
  },

  spinner: () => {
    const r = s(18);
    const cx = W / 2;
    const cy = H / 2;
    return wrap(
      "Spinner",
      `<circle stroke="#fff" stroke-opacity="0.2" stroke-width="${s(4)}" r="${r}" cx="${cx}" cy="${cy}" fill="none"/>
      <path d="M${cx} ${cy - r}a${r} ${r} 0 0 1 ${r} ${r}" stroke="#fff" stroke-width="${s(4)}" stroke-linecap="round" fill="none"/>`,
    );
  },

  stat: () => {
    const w = s(200);
    const h = s(100);
    const { x, y } = center(w, h);
    return wrap(
      "Stat",
      `${glass(x, y, w, h, s(RX["2xl"]))}
      ${text("Revenue", x + s(16), y + s(28), s(13), 400, "start", 0.7)}
      ${text("$48.2k", x + s(16), y + s(58), s(28), 600)}
      ${text("+12.4%", x + s(16), y + s(82), s(13), 500, "start", 0.75)}`,
    );
  },

  status: () => {
    const h = s(22);
    const w = s(72);
    const { x, y } = center(w, h);
    return wrap(
      "Status",
      `${glass(x, y, w, h, s(RX.full))}
      <circle fill="#fff" cx="${x + s(12)}" cy="${y + h / 2}" r="${s(4)}"/>
      ${text("Active", x + s(42), y + h * 0.7, s(12), 500, "middle")}`,
    );
  },

  steps: () => {
    const labels = ["Details", "Review", "Done"];
    const total = s(360);
    const { x, y } = center(total, s(56));
    return wrap(
      "Steps",
      labels
        .map((l, i) => {
          const cx = x + s(40) + i * s(140);
          return `<circle fill="${i < 2 ? "#fff" : "transparent"}" stroke="#fff" stroke-opacity="0.75" cx="${cx}" cy="${y + s(12)}" r="${s(12)}"/>
          ${i < 2 ? text(String(i + 1), cx, y + s(16), s(12), 600, "middle") : ""}
          ${i < 2 ? `<line stroke="#fff" stroke-opacity="0.35" x1="${cx + s(14)}" x2="${cx + s(126)}" y1="${y + s(12)}" y2="${y + s(12)}" stroke-width="${2 * S}"/>` : ""}
          ${text(l, cx, y + s(44), s(12), 500, "middle", 0.8)}`;
        })
        .join("\n"),
    );
  },

  surface: () => {
    const w = s(320);
    const h = s(160);
    const { x, y } = center(w, h);
    return wrap(
      "Surface",
      `${glass(x, y, w, h, s(RX["2xl"]))}
      ${text("Surface", x + s(20), y + s(40), s(16), 600)}
      ${text("Elevated content container.", x + s(20), y + s(68), s(13), 400, "start", 0.65)}`,
    );
  },

  swap: () => {
    const w = s(100);
    const h = s(64);
    const { x, y } = center(w * 2 + s(40), h);
    return wrap(
      "Swap",
      `${glass(x, y, w, h, s(RX.lg))}
      ${text("A", x + w / 2, y + h * 0.65, s(20), 600, "middle")}
      ${glass(x + w + s(40), y, w, h, s(RX.lg))}
      ${text("B", x + w + s(40) + w / 2, y + h * 0.65, s(20), 600, "middle")}`,
    );
  },

  switch: () => {
    // thumb 16 (sm), track h=18, w=30 → scaled
    const thumb = s(16);
    const h = thumb + s(2);
    const w = thumb * 2 - s(2);
    const { x, y } = center(w + s(40), h);
    return wrap(
      "Switch",
      `${glass(x, y, w, h, h / 2)}
      <circle fill="#fff" cx="${x + w - h / 2}" cy="${y + h / 2}" r="${thumb / 2 - s(1)}"/>
      ${text("On", x + w + s(12), y + h * 0.7, s(14), 500)}`,
    );
  },

  table: () => {
    const w = s(360);
    const h = s(180);
    const { x, y } = center(w, h);
    const rowH = s(32);
    return wrap(
      "Table",
      `${glass(x, y, w, h, s(RX.lg))}
      ${text("Name", x + s(16), y + s(22), s(12), 500, "start", 0.65)}
      ${text("Status", x + s(180), y + s(22), s(12), 500, "start", 0.65)}
      ${[0, 1, 2, 3]
        .map(
          (i) =>
            `<rect fill="#fff" fill-opacity="0.06" x="${x}" y="${y + s(32) + i * rowH}" width="${w}" height="${rowH}"/>
         ${text(["Alpha", "Beta", "Gamma", "Delta"][i], x + s(16), y + s(52) + i * rowH, s(13), 500)}
         ${text(["Active", "Active", "Paused", "Active"][i], x + s(180), y + s(52) + i * rowH, s(13), 400, "start", 0.7)}`,
        )
        .join("\n")}`,
    );
  },

  tabs: () => {
    const labels = ["Overview", "Analytics", "Settings"];
    const h = s(32); // sm:h-8
    const pad = s(10);
    const font = s(14);
    const widths = labels.map((l) => pad * 2 + l.length * font * 0.55);
    const total = widths.reduce((a, b) => a + b, 0) + s(2);
    const { x, y } = center(total, h);
    let cx = x + s(1);
    const triggers = labels
      .map((l, i) => {
        const tw = widths[i];
        const node = `${i === 0 ? `<rect fill="#fff" fill-opacity="0.16" x="${cx}" y="${y}" width="${tw}" height="${h}" rx="${s(RX.lg)}"/>` : ""}
        ${text(l, cx + tw / 2, y + h * 0.66, font, 500, "middle", i === 0 ? 1 : 0.7)}`;
        cx += tw;
        return node;
      })
      .join("\n");
    return wrap(
      "Tabs",
      `${glass(x, y, total, h, s(RX.lg))}
      ${triggers}`,
    );
  },

  "tags-input": () => {
    const h = s(36);
    const w = s(320);
    const { x, y } = center(w, h);
    return wrap(
      "Tags Input",
      `${well(x, y, w, h, s(RX.lg), true)}
      ${glass(x + s(6), y + s(4), s(64), s(28), s(RX.full), false)}
      ${text("React", x + s(38), y + s(23), s(12), 500, "middle")}
      ${glass(x + s(76), y + s(4), s(52), s(28), s(RX.full), false)}
      ${text("Vue", x + s(102), y + s(23), s(12), 500, "middle")}
      ${text("Add tag…", x + s(140), y + h * 0.66, s(13), 400, "start", 0.55)}`,
    );
  },

  textarea: () => {
    const w = s(320);
    const h = s(96);
    const { x, y } = center(w, h);
    return wrap(
      "Textarea",
      `${well(x, y, w, h, s(RX.lg), true)}
      ${text("Write a message…", x + s(12), y + s(22), s(14), 400, "start", 0.7)}`,
    );
  },

  timeline: () => {
    const items = ["Shipped", "In transit", "Delivered"];
    const { x, y } = center(s(200), s(160));
    return wrap(
      "Timeline",
      `<line stroke="#fff" stroke-opacity="0.3" x1="${x + s(8)}" x2="${x + s(8)}" y1="${y}" y2="${y + s(140)}" stroke-width="${2 * S}"/>
      ${items
        .map((t, i) => {
          const yy = y + i * s(52);
          return `<circle fill="#fff" cx="${x + s(8)}" cy="${yy}" r="${s(5)}"/>
          ${text(t, x + s(28), yy + s(4), s(14), 500)}`;
        })
        .join("\n")}`,
    );
  },

  timer: () => {
    const w = s(160);
    const h = s(64);
    const { x, y } = center(w, h);
    return wrap(
      "Timer",
      `${glass(x, y, w, h, s(RX["2xl"]))}
      ${text("02:45", x + w / 2, y + h * 0.65, s(28), 600, "middle")}`,
    );
  },

  toast: () => {
    const w = s(320);
    const h = s(56);
    const x = (W - w) / 2;
    const y = H - h - s(40);
    return wrap(
      "Toast",
      `${glass(x, y, w, h, s(RX["2xl"]))}
      ${text("Saved successfully", x + s(20), y + h * 0.62, s(14), 500)}`,
    );
  },

  toggle: () => {
    const b = button("Bold", 0, 0);
    const { x, y } = center(b.w, b.h);
    return wrap(
      "Toggle",
      `${glass(x, y, b.w, b.h, s(RX.lg))}
      ${text("Bold", x + b.w / 2, y + b.h * 0.66, s(14), 500, "middle")}`,
    );
  },

  "toggle-group": alias("segment-group"),
  toolbar: () => {
    const h = s(40);
    const w = s(320);
    const { x, y } = center(w, h);
    return wrap(
      "Toolbar",
      `${glass(x, y, w, h, s(RX.lg))}
      ${["B", "I", "U", "H"]
        .map(
          (t, i) =>
            `${well(x + s(8) + i * s(36), y + s(4), s(32), s(32), s(RX.md))}
         ${text(t, x + s(24) + i * s(36), y + h * 0.68, s(13), 600, "middle")}`,
        )
        .join("\n")}`,
    );
  },

  tooltip: () => {
    const tipW = s(120);
    const tipH = s(32);
    const btn = button("Hover", 0, 0);
    const { x, y } = center(btn.w, btn.h + tipH + s(12));
    return wrap(
      "Tooltip",
      `${glass(x + (btn.w - tipW) / 2, y, tipW, tipH, s(RX.md))}
      ${text("More info", x + btn.w / 2, y + tipH * 0.66, s(12), 500, "middle")}
      ${button("Hover", x, y + tipH + s(12)).svg}`,
    );
  },

  tour: () => {
    const w = s(220);
    const h = s(110);
    const { x, y } = center(w, h);
    return wrap(
      "Tour",
      `${glass(x, y, w, h, s(RX.lg))}
      ${text("Step 2 of 4", x + s(16), y + s(28), s(12), 400, "start", 0.7)}
      ${text("Customize your bar", x + s(16), y + s(52), s(14), 600)}
      ${button("Next", x + w - s(16) - button("Next", 0, 0).w, y + h - s(44)).svg}`,
    );
  },

  tree: () => {
    const w = s(240);
    const h = s(180);
    const { x, y } = center(w, h);
    const lines = [
      "src",
      "  components",
      "    button.tsx",
      "  lib",
      "    utils.ts",
    ];
    return wrap(
      "Tree View",
      `${glass(x, y, w, h, s(RX.lg))}
      ${lines.map((t, i) => text(t, x + s(16), y + s(32) + i * s(28), s(13), 500)).join("\n")}`,
    );
  },

  "tree-view": alias("tree"),
  "visually-hidden": () =>
    wrap(
      "Visually Hidden",
      `${text("sr-only", W / 2, H / 2, s(14), 500, "middle", 0.5)}`,
    ),
};

function generic(id: string): Draw {
  return () => {
    const title = titleCase(id);
    const b = button(
      title.length > 18 ? `${title.slice(0, 16)}…` : title,
      0,
      0,
    );
    const { x, y } = center(Math.min(b.w, s(280)), b.h);
    const w = Math.min(Math.max(b.w, s(120)), s(280));
    return wrap(
      title,
      `${glass(x, y, w, b.h, s(RX.lg))}
      ${text(title, x + w / 2, y + b.h * 0.66, s(14), 500, "middle")}`,
    );
  };
}

function componentIds(): string[] {
  const nav = readFileSync(join(import.meta.dir, "../src/lib/nav.ts"), "utf8");
  return [
    ...new Set(
      [...nav.matchAll(/slug:\s*"components\/([^"]+)"/g)].map((m) => m[1]),
    ),
  ].sort();
}

mkdirSync(OUT, { recursive: true });
const ids = componentIds();
let written = 0;
let skipped = 0;

for (const id of ids) {
  if (SKIP.has(id) && existsSync(join(OUT, `${id}.svg`))) {
    skipped++;
    continue;
  }
  const draw = draws[id] ?? generic(id);
  writeFileSync(join(OUT, `${id}.svg`), draw());
  written++;
}

console.log(
  `Anatomy: wrote ${written}, kept ${skipped} (${ids.length} total) @ scale ${S}× recipe`,
);
