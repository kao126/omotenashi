import React, { Dispatch, SetStateAction } from 'react';
import { FaMinus } from 'react-icons/fa6';
interface Props {
  setCount: Dispatch<SetStateAction<number>>;
}

const DecrementBtn = ({ setCount }: Props) => {
  const handleDecrement = () => {
    setCount((prevCount) => (prevCount == 0 ? prevCount : prevCount - 1));
  };

  return (
    <button type="button" className="text-3xl" onClick={handleDecrement}>
      <FaMinus />
    </button>
  );
};

export default DecrementBtn;
