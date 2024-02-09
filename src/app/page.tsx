'use client'
import React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import Creatable from "react-select/creatable";
import ResetBtn from './components/commons/resetBtn';
import IncreaseBtn from './components/commons/increaseBtn';
import DecreaseBtn from './components/commons/decreaseBtn';
import Link from 'next/link';

// types
import { FormData } from "./type/form";

type OptionType = {
  value: string;
  label: string;
};

type BeverageOptionType = {
  label: string;
  options: OptionType[];
  
};

export default function Home() {
  const { register, setValue, reset, control, handleSubmit, formState: { errors } } = useForm<FormData>();
  const onSubmit = handleSubmit(data => console.log(data));


  const greenTeaOptions: OptionType[] = [
    { value: "お～いお茶", label: "お～いお茶" },
    { value: "綾鷹", label: "綾鷹" },
  ];

  const teaOptions: OptionType[] = [
    { value: "午後の紅茶", label: "午後の紅茶" },
    { value: "リプトン", label: "リプトン" },
  ];

  const beverageOptions: BeverageOptionType[] = [
    {
      label: "お茶",
      options: greenTeaOptions
    },
    {
      label: "紅茶",
      options: teaOptions
    }
  ];

  return (
    <main className="min-h-screen">
      <div className="flex items-center justify-between p-24">  
        <div>緑茶 2</div>
        <div>紅茶 4</div>
        <div>コーヒー 5</div>
        <div>水 6</div> 
      </div>
      <Link href="/new_lots">
        <div className="text-3xl text-center">在庫登録</div>
      </Link>
    </main>
  );
}
