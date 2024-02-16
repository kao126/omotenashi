'use client';
import React, { useState } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import Creatable from 'react-select/creatable';

import Button from '../components/commons/button';

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
    <main className="w-1/2 min-h-screen mx-auto">
      <div className="text-3xl pt-9 text-gray-700 font-bold text-center w-1/5 border-b-2 border-solid border-b-slate-300 mx-auto">
        <span className="inline-block mb-3">在庫追加</span>
      </div>
      <div className="h-96 align-middle bg-slate-100 my-24">
        <form onSubmit={onSubmit} className=" w-10/12 h-full py-12 mx-auto">
          <label>種類</label>
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
          <div>
            <label>数量</label>
            <p>
              <input {...register('amount')} type="number" />
            </p>
          </div>
          <div>
            <label>賞味期限</label>
            <p>
              <input {...register('expirationDate')} type="date" />
            </p>
          </div>
          <div>
            <label>購入日</label>
            <p>
              <input {...register('purchaseDate')} type="date" />
            </p>
          </div>
          <div className="flex justify-evenly mt-10">
            <Button disabled={false}>追加</Button>
            <Button disabled={false}>リセット</Button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Page;
