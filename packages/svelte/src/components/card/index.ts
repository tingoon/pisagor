import CardAction from "./card-action.svelte";
import CardContent from "./card-content.svelte";
import CardDescription from "./card-description.svelte";
import CardFooter from "./card-footer.svelte";
import CardHeader from "./card-header.svelte";
import CardMedia from "./card-media.svelte";
import CardRoot from "./card-root.svelte";
import CardTitle from "./card-title.svelte";

export const Card = Object.assign(CardRoot, {
  Action: CardAction,
  Content: CardContent,
  Description: CardDescription,
  Footer: CardFooter,
  Header: CardHeader,
  Media: CardMedia,
  Title: CardTitle,
});
