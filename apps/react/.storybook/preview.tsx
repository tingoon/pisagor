import addonA11y from "@storybook/addon-a11y";
import addonDocs from "@storybook/addon-docs";
import { definePreview } from "@storybook/react-vite";
import addonMetadata from "./addons/metadata-addon";
import { AppDecorator } from "./decorators/app-decorator";
import "../src/styles.css";

export { SurfaceDecorator } from "./decorators/surface-decorator";

export default definePreview({
  addons: [addonA11y(), addonDocs(), addonMetadata()],
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
    viewport: { isRotated: false, value: "responsive" },
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
    viewport: {
      options: {
        desktop: { name: "Desktop", styles: { height: "900px", width: "1280px" } },
        mobile: { name: "Mobile", styles: { height: "667px", width: "375px" } },
        tablet: { name: "Tablet", styles: { height: "1024px", width: "768px" } },
      },
    },
  },
  tags: ["autodocs"],
});
