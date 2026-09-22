import type { NavbarRecipeFn } from "@pisagor/recipes/navbar";

/** Navbar props. */
export interface NavbarProps {
  /**
   * Style recipe override.
   * @defaultValue navbarRecipe
   */
  recipe?: NavbarRecipeFn;
}
