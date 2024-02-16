import React from 'react';

type Props = {
  disabled: boolean;
  children: string;
};

const Button = ({ disabled, children }: Props) => {
  return (
    <button
      type="button"
      className="w-1/4 border-2 border-slate-400 rounded-lg hover:bg-amber-300 hover:opacity-90 px-6 py-3"
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
