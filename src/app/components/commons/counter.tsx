import React, { useState } from 'react';

import ResetBtn from './resetBtn';
import IncrementBtn from './incrementBtn';
import DecrementBtn from './decrementBtn';

const counter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="w-1/3 mx-auto my-28">
      <div className="flex justify-center items-end gap-3 mb-12">
        <div className="text-3xl">count</div>
        <div className="text-9xl">{count}</div>
      </div>
      <div className="w-full flex justify-evenly items-center">
        <ResetBtn setCount={setCount} />
        <DecrementBtn setCount={setCount} />
        <IncrementBtn times={1} setCount={setCount} />
        <IncrementBtn times={5} setCount={setCount} />
      </div>
    </div>
  );
};

export default counter;
