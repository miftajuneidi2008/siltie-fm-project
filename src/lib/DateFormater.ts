export default function formatDate(date: Date | undefined, locale: string = "en-US"): string {
  const formatter = new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long", // 'long' for "March", 'short' for "Mar"
    day: "numeric",
  });
  return formatter.format(date);
}