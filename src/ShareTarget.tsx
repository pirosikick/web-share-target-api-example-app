import React, { useState, useEffect } from "react";

interface Info {
  referer: string | null;
  title: string | null;
  text: string | null;
  url: string | null;
}

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
  }, [setInfo]);

  return (
    <div>
      <h1>Web Share Target API</h1>
      <table>
        <thead>
          <th>document.referer</th>
          <th>title</th>
          <th>text</th>
          <th>url</th>
        </thead>
        <tbody>
          <td>{info.referer}</td>
          <td>{info.title}</td>
          <td>{info.text}</td>
          <td>{info.url}</td>
        </tbody>
      </table>
    </div>
  );
};

export default ShareTarget;
