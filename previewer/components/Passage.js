import React, { useState, useEffect } from "react";
import "../../scss/eb-scripture-style/eb-scripture-style.scss";
import { apikey } from "../config.json";

const Passage = ({ bibleId, passageId, footnotes = false }) => {
  const [data, setData] = useState({});
  const fetchPassage = async () => {
    const result = await fetch(
      `https://api.scripture.api.bible/v1/bibles/${bibleId}/passages/${passageId}?include-notes=${footnotes}`,
      {
        method: "GET",
        headers: {
          "api-key": apikey
        }
      }
    ).then(response => response.json());
    setData(result.data);
  };

  useEffect(() => {
    fetchPassage();
  });

  return (
    <div
      className="eb-container"
      dangerouslySetInnerHTML={{ __html: data.content }}
    />
  );
};

export default Passage;