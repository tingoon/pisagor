import type { NavbarRecipeFn } from "@pisagor/recipes";

/** Navbar props. */
export interface NavbarProps {
  /**
   * Style recipe override.
   * @defaultValue navbarRecipe
   */
  recipe?: NavbarRecipeFn;
}
