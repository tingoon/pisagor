export function profileTabs() {
  return [
    {
      content: "Make changes to your account here.",
      label: "Account",
      value: "tab-1",
    },
    {
      content: "Change your password here.",
      label: "Password",
      value: "tab-2",
    },
    {
      content: "Update your notification preferences.",
      label: "Notifications",
      value: "tab-3",
    },
  ];
}

export function numberedTabs() {
  return Array.from({ length: 4 }, (_, index) => ({
    content: `Panel content for tab ${index + 1}.`,
    label: `Tab ${index + 1}`,
    value: `tab-${index + 1}`,
  }));
}

export function variantTabs(description = "Tab panel") {
  return [
    { content: `${description} — account.`, label: "Account", value: "tab-1" },
    {
      content: `${description} — password.`,
      label: "Password",
      value: "tab-2",
    },
    {
      content: `${description} — notifications.`,
      label: "Notifications",
      value: "tab-3",
    },
  ];
}
