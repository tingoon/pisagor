import { Item } from "..";

export function Image() {
  const images = [
    {
      alt: "Midnight City Lights",
      description: "Electric Nights · Neon Dreams · 3:45",
      src: "https://picsum.photos/seed/1/500/300",
    },
    {
      alt: "Coffee Shop Conversations",
      description: "Urban Stories · The Morning Brew · 4:05",
      src: "https://picsum.photos/seed/2/500/300",
    },
    {
      alt: "Digital Rain",
      description: "Binary Beats · Cyber Symphony · 3:30",
      src: "https://picsum.photos/seed/3/500/300",
    },
  ];
  return (
    <Item.Group className="gap-2" variant="outline">
      {images.map((image) => (
        <Item key={image.src}>
          <Item.Media variant="image">
            <img
              alt={image.alt}
              className="aspect-square w-full object-cover grayscale"
              height={80}
              src={image.src}
              width={80}
            />
          </Item.Media>
          <Item.Content>
            <Item.Title>{image.alt}</Item.Title>
            <Item.Description>{image.description}</Item.Description>
          </Item.Content>
        </Item>
      ))}
    </Item.Group>
  );
}
