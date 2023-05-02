import { TrashIcon, XMarkIcon } from "@heroicons/react/24/outline";
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

  const handleClearStorage = () => {
    chrome.storage.local.clear(() => {
      setElements([]);
    });
  };

  const handleRemoveItem = (id) => {
    chrome.storage.local.remove(id, () => {
      setElements((prevState) => prevState.filter((elem) => elem.id !== id));
    });
  };

  return (
    <div>
      <h1 className="text-gray-100 font-semibold text-xl">
        Here's your saved clips-
      </h1>
      {elements.length === 0 && (
        <p className="text-gray-100 mt-2">
          Press Ctrl+Shift+Y to trigger the extension and click on an element to
          save it!
        </p>
      )}
      {elements.length > 0 && (
        <div>
          <button
            className="absolute top-4 right-4 text-red-500 hover:text-red-600 bg-gray-200
          w-6 h-6 p-1 hover:scale-105 transition-all duration-300 rounded-md cursor-pointer
          "
            onClick={handleClearStorage}
          >
            <TrashIcon />
          </button>
          <ul className="text-gray-100">
            {elements.map((element) => (
              <li key={element.id} className=" hover:bg-black/20 m-1 p-[2px] truncate">
                <p>Text: {element.text}</p>
                <p>URL: {element.url}</p>
                <button onClick={() => handleRemoveItem(element.id)} className="text-red-500 w-6 h-6">
                  <XMarkIcon />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Clips;
