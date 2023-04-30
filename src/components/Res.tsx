import React from 'react';

//Response component
type ResProps = {
  response: string;
};

const Res = ({ response }: ResProps) => {
  return (
    <div className='space-y-2'>
      <h1 className='pt-2 text-base font-medium text-gray-200'>Response: </h1>
   {/*    conditional rendering of response */}
      {response ? (
        <div className="p-5 text-gray-100 bg-gray-800 rounded-lg">
          <p>{response}</p>
        </div>
      ) : null}
    </div>
  );
};

export default Res;
