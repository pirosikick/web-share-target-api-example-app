import React, { useState, useEffect } from "react";

interface Info {
  referer: string | null;
  title: string | null;
  text: string | null;
  url: string | null;
}

const Empty = () => <span style={{ color: "gray" }}>empty</span>;

const ShareTarget: React.FC = () => {
  const [info, setInfo] = useState<Info>({
    referer: "",
    title: "",
    text: "",
    url: ""
  });
  useEffect(() => {
    const parsedUrl = new URL(window.location.href);
    setInfo({
      referer: document.referrer,
      title: parsedUrl.searchParams.get("title"),
      text: parsedUrl.searchParams.get("text"),
      url: parsedUrl.searchParams.get("url")
    });
  }, []);

  return (
    <div style={{ padding: "10px" }}>
      <h1>Web Share Target API</h1>
      <h2>Shared Data</h2>
      <h3>title</h3>
      <p>{info.title || <Empty />}</p>
      <h3>text</h3>
      <p>{info.text || <Empty />}</p>
      <h3>url</h3>
      <p>{info.url || <Empty />}</p>
      <h2>document.referer</h2>
      <p>{info.referer || <Empty />}</p>
    </div>
  );
};

export default ShareTarget;
