import React, { Dispatch, SetStateAction } from 'react';
import { FaPlus } from 'react-icons/fa6';
interface Props {
  times: number;
  setCount: Dispatch<SetStateAction<number>>;
}

const incrementBtn = ({ times, setCount }: Props) => {
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + times);
  };
  return (
    <button type="button" className="text-3xl" onClick={handleIncrement}>
      {times > 1 ? (
        <div className="flex items-center font-medium">
          <FaPlus />
          <p>{times}</p>
        </div>
      ) : (
        <FaPlus />
      )}
    </button>
  );
};

export default incrementBtn;
