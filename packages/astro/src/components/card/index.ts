import CardRoot from "./card.astro";
import CardAction from "./card-action.astro";
import CardContent from "./card-content.astro";
import CardDescription from "./card-description.astro";
import CardFooter from "./card-footer.astro";
import CardHeader from "./card-header.astro";
import CardMedia from "./card-media.astro";
import CardTitle from "./card-title.astro";

export const Card = Object.assign(CardRoot, {
  Action: CardAction,
  Content: CardContent,
  Description: CardDescription,
  Footer: CardFooter,
  Header: CardHeader,
  Media: CardMedia,
  Title: CardTitle,
});
