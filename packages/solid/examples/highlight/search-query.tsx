/** @jsxImportSource solid-js */

import { Highlight, Input } from "@pisagor/solid";
import { createSignal } from "solid-js";
export function SearchQuery() {
  const searchResults = ["Spotlight bulb", "Spot cleaner", "Spot ceiling"];
  const [query, setQuery] = createSignal("spot");

  return (
    <div class="flex flex-col gap-2">
      <Input
        aria-label="Search"
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        value={query()}
      />
      <div class="space-y-2">
        <p class="text-muted-foreground text-sm">
          Search result for: {query() || "(empty)"}
        </p>
        <ul class="space-y-1">
          {searchResults.map((item) => (
            <li class="text-base text-foreground">
              {query() ? (
                <Highlight ignoreCase query={query()} text={item} />
              ) : (
                item
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
