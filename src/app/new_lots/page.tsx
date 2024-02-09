'use client';
import React, { useState } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import Creatable from 'react-select/creatable';

// types
import { FormData } from '../types/form';

type OptionType = {
  value: string;
  label: string;
};

type BeverageOptionType = {
  label: string;
  options: OptionType[];
};

const Page = () => {
  const {
    register,
    setValue,
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit((data) => console.log(data));

  const [count, setCount] = useState<number>(0);

  const greenTeaOptions: OptionType[] = [
    { value: '0', label: 'お～いお茶' },
    { value: '0', label: '綾鷹' },
  ];

  const teaOptions: OptionType[] = [
    { value: '1', label: '午後の紅茶' },
    { value: '2', label: 'リプトン' },
  ];

  const beverageOptions: BeverageOptionType[] = [
    {
      label: 'お茶',
      options: greenTeaOptions,
    },
    {
      label: '紅茶',
      options: teaOptions,
    },
  ];
  return (
    <main className="min-h-screen">
      <div className="text-3xl my-9 text-gray-700 font-bold text-center w-1/5 border-b-2 border-solid border-b-slate-300 mx-auto">
        <span className="inline-block mb-3">在庫追加</span>
      </div>
      <form onSubmit={onSubmit}>
        <Controller
          name="beverageName"
          control={control}
          render={() => (
            <Creatable
              options={beverageOptions}
              formatGroupLabel={(data) => data.label}
            />
          )}
        />
        <label>数量</label>
        <input {...register('amount')} type="number" />
        <label>賞味期限</label>
        <input {...register('expirationDate')} type="date" />
        <label>購入日</label>
        <input {...register('purchaseDate')} type="date" />
        <button
          type="button"
          onClick={() => {
            setValue('beverageName', 'おーいお茶');
          }}
        >
          SetValue
        </button>
        <button
          type="button"
          onClick={() => {
            reset();
          }}
        >
          reset
        </button>
      </form>
    </main>
  );
};

export default Page;
