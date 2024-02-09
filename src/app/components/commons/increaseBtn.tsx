import React from 'react';
import { useForm } from 'react-hook-form';

// types
import { FormData } from '../../type/form';

const increaseBtn = () => {
  const { reset } = useForm<FormData>();
  return (
    <button
      type="button"
      onClick={() => {
        reset();
      }}
    >
      +
    </button>
  );
};

export default increaseBtn;
