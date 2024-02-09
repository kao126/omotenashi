import React, { Dispatch, SetStateAction } from 'react';
interface Props {
  setCount: Dispatch<SetStateAction<number>>;
}

const resetBtn = ({ setCount }: Props) => {
  const handleReset = () => {
    setCount(0);
  };

  return (
    <button type="button" className="text-3xl" onClick={handleReset}>
      RESET
    </button>
  );
};

export default resetBtn;
