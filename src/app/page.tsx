'use client';
import React, { useState } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import Creatable from 'react-select/creatable';
import Link from 'next/link';

import Counter from './components/commons/counter';
import Button from './components/commons/button';

// types
import { FormData } from './types/form';

type OptionType = {
  value: string;
  label: string;
};

type BeverageOptionType = {
  label: string;
  options: OptionType[];
};

export default function Home() {
  const {
    register,
    setValue,
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit((data) => console.log(data));

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
        <span className="inline-block mb-3">在庫数</span>
      </div>
      <div className="flex items-center justify-evenly p-12">
        {beverageOptions.map((beverage, i) => (
          <div key={i} className="w-full text-center">
            <div className="text-3xl">{beverage.label}</div>
            <div className="flex gap-1">
              {beverage.options.map((option, idx) => (
                <div key={idx} className="w-full text-2xl">
                  <div>{option.label}</div>
                  <div>{option.value}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Counter />

      <Link href="/new_lots">
        <div className="text-3xl text-center">在庫登録</div>
      </Link>
    </main>
        <div className="text-3xl text-gray-700 font-bold text-center">
          <Button disabled={false}>登録</Button>
        </div>
  );
}
