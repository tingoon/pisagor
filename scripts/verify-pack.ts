/**
 * CI dry-run: `bun pm pack` every publishable package and fail on workspace:/catalog: leaks.
 */
import {
  findLeakedSpecifiers,
  listPublishablePackages,
  packAndCheck,
} from "./pack-utils.ts";

function main(): void {
  const failures: { name: string; leaks: string[] }[] = [];

  for (const { dir, pkg } of listPublishablePackages()) {
    const { leaks } = packAndCheck(dir);
    if (leaks.length > 0) {
      failures.push({ name: pkg.name ?? dir, leaks });
    }
  }

  if (failures.length > 0) {
    console.error("Unresolved workspace:/catalog: specifiers in bun pm pack manifests:");
    for (const failure of failures) {
      console.error(`  ${failure.name}:`);
      for (const leak of failure.leaks) {
        console.error(`    - ${leak}`);
      }
    }
    process.exit(1);
  }

  console.log("All publishable packages pass bun pm pack specifier verification.");
}

main();

export { findLeakedSpecifiers };
