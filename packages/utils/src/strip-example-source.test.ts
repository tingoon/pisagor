import { describe, expect, test } from "bun:test";
import {
  stripAstroExample,
  stripSvelteExample,
  stripTsxExample,
  stripVueExample,
} from "./strip-example-source";

describe("stripTsxExample", () => {
  test("unwraps a named-export return", () => {
    const raw = `import { Button } from "..";

export function Default() {
  return <Button>Button</Button>;
}
`;
    expect(stripTsxExample(raw)).toBe("<Button>Button</Button>");
  });

  test("dedents a nested wrapped return without uneven indent", () => {
    const raw = `import { Button } from "..";

export function AsChild() {
  return (
    <Button asChild>
      <a href="/login">Login</a>
    </Button>
  );
}
`;
    expect(stripTsxExample(raw)).toBe(`<Button asChild>
  <a href="/login">Login</a>
</Button>`);
  });

  test("still unwraps default export", () => {
    const raw = `import { Button } from "..";

export default function Default() {
  return <Button>Button</Button>;
}
`;
    expect(stripTsxExample(raw)).toBe("<Button>Button</Button>");
  });
});

describe("stripVueExample", () => {
  test("returns template body dedented", () => {
    const raw = `<script setup lang="ts">
import { Button } from "..";
</script>

<template>
  <Button as-child>
    <a href="/login">Login</a>
  </Button>
</template>
`;
    expect(stripVueExample(raw)).toBe(`<Button as-child>
  <a href="/login">Login</a>
</Button>`);
  });
});

describe("stripAstroExample", () => {
  test("strips frontmatter", () => {
    const raw = `---
import Button from "../button.astro";
---

<Button>Button</Button>
`;
    expect(stripAstroExample(raw)).toBe("<Button>Button</Button>");
  });
});

describe("stripSvelteExample", () => {
  test("removes script and returns markup", () => {
    const raw = `<script lang="ts">
import { Button } from "..";
</script>

<Button>Button</Button>
`;
    expect(stripSvelteExample(raw)).toBe("<Button>Button</Button>");
  });
});
