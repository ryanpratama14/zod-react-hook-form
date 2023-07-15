"use client";

import Input from "@/components/Input";
import { useForm, SubmitHandler } from "react-hook-form";

export default function Home(): React.JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <main className="p-24 flex min-h-screen items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-[50%]"
      >
        <Input
          label="Email"
          type="email"
          name="email"
          required
          register={register}
          error={errors.email}
        />
        <Input
          label="Password"
          type="password"
          name="password"
          required
          register={register}
          error={errors.password}
        />
        <Input
          label="Date"
          type="date"
          name="date"
          required
          register={register}
          error={errors.date}
        />
        <Input
          label="I agree on terms"
          type="checkbox"
          name="agreed"
          required
          register={register}
          error={errors.agreed}
        />
        <button
          type="submit"
          className="mt-2 text-white bg-green-600 hover:bg-green-800"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
