import { defineConfig } from "repomix";

export default defineConfig({
  output: {
    filePath: "artifacts/repomix/output.xml",
    splitOutput: 2 * 1024 * 1024,
  },
});
