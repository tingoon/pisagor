import addonA11y from "@storybook/addon-a11y";
import { definePreview } from "@storybook/vue3-vite";
import { AppDecorator } from "./decorators/app-decorator";
import "../src/styles.css";

export default definePreview({
  addons: [addonA11y()],
  decorators: [AppDecorator],
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
        order: ["Components", "Forms", "Recipes"],
      },
    },
  },
  tags: ["autodocs"],
});
