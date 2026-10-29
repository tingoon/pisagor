/**
 * Custom Changesets publish: bun pm pack → verify tarball → npm publish
 * (provenance) → changeset tag.
 */
import { execSync } from "node:child_process";
import { rmSync } from "node:fs";
import {
  isVersionOnNpm,
  packAndCheck,
  sortPublishOrder,
  listPublishablePackages,
} from "./pack-utils.ts";

function main(): void {
  const packages = sortPublishOrder(listPublishablePackages());
  let publishedCount = 0;

  for (const { dir, pkg } of packages) {
    const name = pkg.name as string;
    const version = pkg.version as string;

    if (isVersionOnNpm(name, version)) {
      console.log(`Skip ${name}@${version} (already on npm)`);
      continue;
    }

    console.log(`Pack ${name}@${version}…`);
    const { tgzPath, leaks } = packAndCheck(dir);
    if (leaks.length > 0) {
      console.error(
        `Refusing to publish ${name}@${version} — tarball still contains:`,
      );
      for (const leak of leaks) console.error(`  - ${leak}`);
      process.exit(1);
    }

    console.log(`Publish ${tgzPath}…`);
    execSync(
      `npm publish ${JSON.stringify(tgzPath)} --access public --provenance`,
      {
        stdio: "inherit",
        env: process.env,
      },
    );
    rmSync(tgzPath, { force: true });
    publishedCount += 1;
  }

  if (publishedCount === 0) {
    console.log("No new package versions to publish.");
  } else {
    console.log(`Published ${publishedCount} package(s).`);
  }

  console.log("Creating git tags (changeset tag)…");
  execSync("bunx changeset tag", { stdio: "inherit" });
}

main();
