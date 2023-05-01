import React, { useEffect, useState } from 'react';

const Clips = () => {
  const [clips, setClips] = useState([]);

/*   useEffect(() => {
    // Retrieving saved data from local storage
    const savedClips = JSON.parse(localStorage.getItem('clips')) || [];
    setClips(savedClips);
  }, []);
 */
  return (
    <div>
      <h1 className='text-gray-100 font-semibold text-xl'>Here's your saved clips-</h1>
      <ul>
        {clips.map((clip, index) => (
          <li key={index}>{clip}</li>
        ))}
      </ul>
    </div>
  );
};

export default Clips;
