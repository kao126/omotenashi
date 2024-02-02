'use client'
import React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import Creatable from "react-select/creatable";

type FormData = {
  beverageName: string;
  amount: number;
  expirationDate: Date;
  purchaseDate: Date;
};

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
      <form onSubmit={onSubmit}>
        <Controller
          name="beverageName"
          control={control}
          render={({ field }) => (
            <Creatable
              options={beverageOptions}
              formatGroupLabel={(data) => data.label}
              // options={beverageOptions}
              // value={beverageOptions.find((x) => x.value == field.value)}
              // onChange={(newValue) => {
              //   field.onChange(newValue);
              // }}
            />
          )}
        />
        <label>数量</label>
        <input {...register("amount")} type="number" />
        <label>賞味期限</label>
        <input {...register("expirationDate")} type="date" />
        <label>購入日</label>
        <input {...register("purchaseDate")} type="date" />
        <button
          type="button"
          onClick={() => {
            setValue("beverageName", "おーいお茶");
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
}
