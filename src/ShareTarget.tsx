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
        <tbody>
          <tr>
            <th>referer</th>
            <td>{info.referer}</td>
          </tr>
          <tr>
            <th>title</th>
            <td>{info.title}</td>
          </tr>
          <tr>
            <th>text</th>
            <td>
              <pre>{info.text}</pre>
            </td>
          </tr>
          <tr>
            <th>url</th>
            <td>{info.url}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ShareTarget;
