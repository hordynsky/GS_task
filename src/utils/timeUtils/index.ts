const defaultFormatOptions: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: true,
};

enum LOCALES {
  "US" = "en-US",
}

export const formatDate = (timestamp: number): string => {
  const date = new Date(timestamp);

  return date.toLocaleString(LOCALES.US, defaultFormatOptions);
};
