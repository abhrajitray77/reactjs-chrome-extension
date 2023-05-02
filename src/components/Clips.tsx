import React, { useEffect, useState } from "react";

const Clips = () => {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    chrome.storage.local.get(null, (data) => {
      setElements(Object.values(data));
    });

    chrome.storage.onChanged.addListener((changes, namespace) => {
      if (namespace === "local") {
        chrome.storage.local.get(null, (data) => {
          setElements(Object.values(data));
        });
      }
    });
  }, []);

  return (
    <div>
      <h1 className="text-gray-100 font-semibold text-xl">
        Here's your saved clips-
      </h1>
      {elements.length === 0 && (
        <p className="text-gray-100">No clips saved yet!</p>
      )}
      <ul className="text-gray-100">
        {elements.map((element) => (
          <li key={element.id} className=" hover:bg-black/20 m-1">
            <p>Text: {element.text}</p>
            <p>URL: {element.url}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Clips;
