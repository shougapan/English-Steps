export const usePrettyDate = () => {
  const current = new Date();
  const options = { year: "numeric", month: "2-digit", day: "2-digit" };
  const prettyDate = current
    .toLocaleString("ja-JP", options)
    .replace(/\//g, "/");

  return prettyDate;
};
