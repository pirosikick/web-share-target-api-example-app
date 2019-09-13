import React, { useState, useEffect } from "react";

const DEFAULT_TEXT = "hoge";

const Home: React.FC = () => {
  const [webShareSupported, setWebShareSupported] = useState(false);
  const [title, setTitle] = useState("");
  const [url, setURL] = useState("");
  const [text, setText] = useState(DEFAULT_TEXT);
  useEffect(() => {
    setWebShareSupported("share" in navigator);
    setTitle(document.title);
    setURL(window.location.href);
  }, []);

  const handleClick = async () => {
    try {
      // @ts-ignore
      await navigator.share({
        title: document.title,
        url: window.location.href,
        text
      });
    } catch (err) {}
  };

  return (
    <div style={{ padding: "10px" }}>
      <h1>Hello. This App is Web Share Target API Example</h1>
      <h2>Web Share API</h2>
      {webShareSupported ? (
        <>
          <h3>Title</h3>
          <p>{title}</p>
          <h3>URL</h3>
          <p>{url}</p>
          <h3>Text</h3>
          <textarea
            value={text}
            onChange={e => setText(e.target.value)}
          ></textarea>
          <button onClick={handleClick}>Share</button>
        </>
      ) : (
        <p>In this browser, Web Share API is not supported.</p>
      )}
    </div>
  );
};

export default Home;
