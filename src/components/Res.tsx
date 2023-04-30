import React from 'react';

type ResProps = {
  response: string;
};

const Res = ({ response }: ResProps) => {
  return (
    <div>
   {/*    conditional rendering of response */}
      {response ? (
        <div className="p-5 text-gray-100">
          <p>{response}</p>
        </div>
      ) : null}
    </div>
  );
};

export default Res;
