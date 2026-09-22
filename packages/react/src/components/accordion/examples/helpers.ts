export type FaqItem = {
  content: string;
  title: string;
  value: string;
};

export function faqItems(): FaqItem[] {
  return [
    {
      content: "Our flagship product combines cutting-edge technology with sleek design.",
      title: "Product information",
      value: "item-1",
    },
    {
      content: "We offer worldwide shipping through trusted courier partners.",
      title: "Shipping details",
      value: "item-2",
    },
    {
      content: "We stand behind our products with a comprehensive 30-day return policy.",
      title: "Return policy",
      value: "item-3",
    },
    {
      content: "Reach our support team any time via chat or email.",
      title: "Support",
      value: "item-4",
    },
  ];
}

export function shortFaqItems(): FaqItem[] {
  return faqItems().slice(0, 3);
}
