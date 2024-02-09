import React from 'react';
import { useForm } from 'react-hook-form';

// types
import { FormData } from "../../type/form";

const resetBtn = () => {
  const { reset } = useForm<FormData>();
  return (
    <button
      type="button"
      onClick={() => {
        reset();
      }}
    >
      reset
    </button>
  );
};

export default resetBtn;
