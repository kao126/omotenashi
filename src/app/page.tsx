'use client';
import React, { useState } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { NextUIProvider } from '@nextui-org/react';
import Creatable from 'react-select/creatable';

import Counter from './components/commons/counter';
import Button from './components/commons/button';
import Footer from './components/commons/footer';

// types
import { FormData } from './types/form';

import ocha from '../../public/ocha.jpeg';

import {
  Spacer,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
} from '@nextui-org/react';

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
    <NextUIProvider>
      <main className="min-h-screen">
        <div className="text-3xl pt-9 text-gray-700 font-bold text-center w-1/5 border-b-2 border-solid border-b-slate-300 mx-auto">
          <span className="inline-block mb-3">在庫数</span>
        </div>
        <div className="flex items-center justify-evenly p-12">
          {beverageOptions.map((beverage, i) => (
            <>
              <div key={i} className="w-full text-center">
                <div className="text-3xl">{beverage.label}</div>
                <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
                  {beverage.options.map((option, idx) => (
                    <Card
                      key={idx}
                      shadow="sm"
                      isPressable
                      onPress={() => console.log('item pressed')}
                    >
                      <CardBody className="overflow-visible p-0">
                        <Image
                          shadow="sm"
                          radius="lg"
                          width="100%"
                          alt={option.label}
                          className="w-full object-contain h-[160px]"
                          src={ocha.src}
                        />
                      </CardBody>
                      <CardFooter className="text-small justify-between">
                        <b>{option.label}</b>
                        <p className="text-default-500">{option.value}</p>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
              <Spacer x={4} />
            </>
          ))}
        </div>
        <Counter />

        <div className="text-3xl text-gray-700 font-bold text-center">
          <Button disabled={false}>登録</Button>
        </div>
      </main>
      <Footer />
    </NextUIProvider>
  );
}
