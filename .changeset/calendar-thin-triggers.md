---
"@pisagor/react": minor
---

`Calendar.PrevTrigger` / `Calendar.NextTrigger` are now thin parts (localized `aria-label` only) and no longer render a built-in ghost button and caret icon. Pass your own: `<Calendar.PrevTrigger asChild><Button size="icon-md" variant="ghost"><CaretLeftIcon className="rtl:rotate-180" /></Button></Calendar.PrevTrigger>`. `DatePicker`'s default calendar still renders them.
