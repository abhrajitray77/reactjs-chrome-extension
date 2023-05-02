import React, { useEffect, useState } from 'react';

const Clips = () => {
  const [clips, setClips] = useState([]);

  useEffect(() => {
    // Retrieving saved data from local storage
    chrome.storage.local.get({ clips: [] }, ({ clips }) => {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError);
      } else {
        setClips(clips);
      }
    });
  
    // Listening for changes to the local storage and updating the state
    chrome.storage.onChanged.addListener((changes, areaName) => {
      if (areaName === "local" && changes.clips) {
        setClips(changes.clips.newValue);
      }
    });
  }, []);
  

  return (
    <div>
      <h1 className='text-gray-100 font-semibold text-xl'>Here's your saved clips-</h1>
      {clips.length === 0 ? (
        <p className='text-white'>You don't have any saved clips yet.</p>
      ) : (
        <ul className='text-white'>
          {clips.map((clip, index) => (
            <li key={index}>{clip}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Clips;
