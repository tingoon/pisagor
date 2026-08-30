import { JsonTreeView } from "@pisagor/vue";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: JsonTreeView,
  parameters: {
    docs: {
      description: {
        component:
          "Explores nested JSON as an expandable tree so structured data is easier to inspect.",
      },
    },
    metadata: {
      api: "closed",
      taxonomy: "pattern",
    },
  },
  title: "Components/Data Display/JSON Tree View",
});

const expandDepthData = {
  user: {
    profile: {
      name: "Jane Doe",
      settings: {
        notifications: true,
        theme: "dark",
      },
    },
  },
};

export const Default = meta.story({
  render: () => ({
    components: { JsonTreeView },
    setup() {
      return {
        data: {
          address: {
            city: "Anytown",
            state: "CA",
            street: "123 Main St",
            zip: "12345",
          },
          age: 30,
          email: "john.doe@example.com",
          name: "John Doe",
        },
      };
    },
    template: '<JsonTreeView :data="data" :default-expanded-depth="1" />',
  }),
});

export const DataTypes = meta.story({
  render: () => ({
    components: { JsonTreeView },
    setup() {
      return {
        data: {
          address: {
            city: "Anytown",
            coordinates: { lat: 37.7749, lng: -122.4194 },
            state: "CA",
            street: "123 Main St",
            zip: 12_345,
          },
          age: 30,
          avatar: null,
          balance: 1234.56,
          createdAt: new Date("2024-01-15T14:22:00.000Z"),
          description: undefined,
          email: "john.doe@example.com",
          isActive: true,
          isVerified: false,
          lastLogin: new Date("2024-01-12T00:00:00.000Z"),
          name: "John Doe",
          score: -42,
          scores: [95, 87, 92, 78, 100],
          tags: ["pattern", "data-display"],
        },
      };
    },
    template: '<JsonTreeView :data="data" :default-expanded-depth="2" />',
  }),
});

export const ExpandDepth = meta.story({
  render: () => ({
    components: { JsonTreeView },
    setup() {
      return { collapsedData: expandDepthData, expandedData: expandDepthData };
    },
    template: `
      <div class="flex flex-col gap-2">
        <div>
          <p class="mb-2 font-medium text-foreground text-sm">
            defaultExpandedDepth=0 (all collapsed)
          </p>
          <JsonTreeView :data="collapsedData" :default-expanded-depth="0" />
        </div>
        <div>
          <p class="mb-2 font-medium text-foreground text-sm">defaultExpandedDepth=2</p>
          <JsonTreeView :data="expandedData" :default-expanded-depth="2" />
        </div>
      </div>
    `,
  }),
});

export const MapSet = meta.story({
  render: () => ({
    components: { JsonTreeView },
    setup() {
      return {
        data: {
          preferences: new Map([
            ["theme", "dark"],
            ["language", "en"],
            ["notifications", "enabled"],
          ]),
          visitedPages: new Set(["/home", "/profile", "/settings"]),
        },
      };
    },
    template: '<JsonTreeView :data="data" :default-expanded-depth="1" />',
  }),
});
