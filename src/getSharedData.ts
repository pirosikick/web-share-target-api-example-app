const getSharedData = (href: URL) => {
  const text = href.searchParams.get("text") || "";
  const title = href.searchParams.get("title") || "";
  const url = href.searchParams.get("url") || "";
  if (url) {
    return { text, title, url };
  }

  const lastSpace = text.lastIndexOf(" ");
  return lastSpace === -1
    ? // from Native App
      {
        title: title,
        url: text,
        text: ""
      }
    : // from Web Share API
      {
        title: title,
        url: text.slice(lastSpace + 1),
        text: text.slice(0, lastSpace)
      };
};

export default getSharedData;
