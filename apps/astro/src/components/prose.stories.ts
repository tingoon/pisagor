import { Prose } from "@pisagor/astro/prose";

export default {
  component: Prose,
  parameters: {
    docs: {
      description: {
        component:
          "Styles long-form HTML content with readable typography defaults.",
      },
    },
  },
  title: "Components/Data Display/Prose",
};

export const Playground = {
  args: {
    slots: {
      default: `
        <h1>Prose</h1>
        <p>Long-form content with sensible typography defaults for headings, paragraphs, and lists.</p>
        <ul>
          <li>First item</li>
          <li>Second item</li>
        </ul>
      `,
    },
  },
  tags: ["autodocs"],
};
