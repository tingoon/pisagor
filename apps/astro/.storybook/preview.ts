import addonA11y from "@storybook/addon-a11y";
import addonDocs from "@storybook/addon-docs";
import { definePreview } from "@storybook-astro/framework";
import AppWrapper from "./decorators/app-wrapper.astro";
import "../src/styles.css";

const wrapAstroStory = (
  Story: () => unknown,
  context: {
    parameters?: { renderer?: string };
    globals?: Record<string, string>;
  },
) => {
  if (context.parameters?.renderer && context.parameters.renderer !== "astro") {
    return Story();
  }

  return {
    component: AppWrapper,
    props: {
      direction: context.globals?.direction ?? "ltr",
      theme: context.globals?.theme ?? "system",
    },
  };
};

export default definePreview({
  addons: [addonA11y(), addonDocs()],
  decorators: [wrapAstroStory],
  globalTypes: {
    direction: {
      description: "Direction value",
      toolbar: {
        icon: "globe",
        items: [
          { title: "Left-to-right", value: "ltr" },
          { title: "Right-to-left", value: "rtl" },
        ],
      },
    },
    theme: {
      description: "Theme",
      toolbar: {
        dynamicTitle: true,
        icon: "circlehollow",
        items: [
          { title: "Light", value: "light" },
          { title: "Dark", value: "dark" },
          { title: "System", value: "system" },
        ],
        title: "Theme",
      },
    },
  },
  initialGlobals: {
    direction: "ltr",
    theme: "system",
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ["Components"],
      },
    },
  },
});
