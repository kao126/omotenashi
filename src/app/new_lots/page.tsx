'use client';
import React, { useState } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import Creatable from 'react-select/creatable';

// import Button from '../components/commons/button';

import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  Button,
  Autocomplete,
  AutocompleteItem,
  AutocompleteSection,
  Input,
  Spacer,
  Card,
  CardBody,
} from '@nextui-org/react';

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
  const headingClasses =
    'flex w-full sticky top-1 z-20 py-1.5 px-2 bg-default-100 shadow-small rounded-small';
  const size = 'sm';
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
    { value: '1', label: 'お～いお茶' },
    { value: '2', label: '綾鷹' },
  ];

  const teaOptions: OptionType[] = [
    { value: '3', label: '午後の紅茶' },
    { value: '4', label: 'リプトン' },
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
    <main className="flex w-full min-h-screen">
      <div className="w-2/3">
        <div className="text-3xl pt-9 text-gray-700 font-bold text-center w-1/5 border-b-2 border-solid border-b-slate-300 mx-auto">
          <span className="inline-block mb-3">在庫追加</span>
        </div>
        <Card className="w-5/6 align-middle bg-slate-100 my-24 mx-auto">
          <form onSubmit={onSubmit} className=" w-10/12 h-full py-12 mx-auto">
            <Controller
              name="beverageName"
              control={control}
              render={() => (
                <Autocomplete
                  label="種類"
                  placeholder="飲み物を選択してください"
                  variant="bordered"
                  size={size}
                  defaultItems={beverageOptions}
                >
                  {(item) => (
                    <AutocompleteSection
                      title={item.label}
                      key={item.label}
                      classNames={{
                        heading: headingClasses,
                      }}
                    >
                      {item.options.map((option) => (
                        <AutocompleteItem key={option.value}>
                          {option.label}
                        </AutocompleteItem>
                      ))}
                    </AutocompleteSection>
                  )}
                </Autocomplete>
              )}
            />
            <Spacer y={4} />
            {/* <Autocomplete
            label="種類"
            placeholder="飲み物を選択してください"
            className="max-w-xs"
            variant="bordered"
            defaultItems={beverageOptions}
          >
            {(item) => (
              <AutocompleteSection
                title={item.label}
                key={item.label}
                classNames={{
                  heading: headingClasses,
                }}
              >
                {item.options.map((option) => (
                  <AutocompleteItem key={option.value}>
                    {option.label}
                  </AutocompleteItem>
                ))}
              </AutocompleteSection>
            )}
          </Autocomplete> */}
            <div className="flex">
              <Input
                {...register('amount')}
                type="number"
                label="数量"
                variant="bordered"
                size={size}
                placeholder="数量を入力してください"
              />
              <Spacer x={2} />
              <Input
                {...register('expirationDate')}
                type="date"
                label="賞味期限"
                variant="bordered"
                size={size}
                placeholder="2024/11/23"
              />
            </div>
            <Spacer y={4} />
            <div className="flex">
              <Input
                {...register('purchasePrice')}
                type="number"
                label="購入金額"
                variant="bordered"
                size={size}
                placeholder="0"
                endContent={
                  <div className="pointer-events-none flex items-center">
                    <span className="text-default-400 text-small">円</span>
                  </div>
                }
              />
              <Spacer x={2} />
              <Input
                {...register('purchaseDate')}
                type="date"
                label="購入日"
                variant="bordered"
                size={size}
                placeholder="2024/11/23"
              />
            </div>

            {/* <label>種類</label>
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
          </div> */}
            <div className="flex justify-evenly mt-10">
              {/* <Button disabled={false}>追加</Button>
            <Button disabled={false}>リセット</Button> */}
              <Button variant="ghost" size="lg">
                追加
              </Button>
              <Button variant="ghost" size="lg">
                リセット
              </Button>
            </div>
          </form>
        </Card>
      </div>
      <Spacer x={8} />
      <Card className="w-1/3">
        <div className="text-3xl pt-9 text-gray-700 font-bold text-center w-1/5 border-b-2 border-solid border-b-slate-300 mx-auto">
          <span className="inline-block mb-3">追加履歴</span>
        </div>
        <Table removeWrapper className="w-11/12 mt-8 mx-auto">
          <TableHeader>
            <TableColumn>分類</TableColumn>
            <TableColumn>ブランド</TableColumn>
            <TableColumn>数量</TableColumn>
            <TableColumn>賞味期限</TableColumn>
            <TableColumn>購入金額</TableColumn>
            <TableColumn>購入日</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>お茶</TableCell>
              <TableCell>お～いお茶</TableCell>
              <TableCell>24</TableCell>
              <TableCell>2025/12/31</TableCell>
              <TableCell>2,400円</TableCell>
              <TableCell>2024/01/01</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </main>
  );
};

export default Page;
