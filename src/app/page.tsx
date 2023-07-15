"use client";

import Input from "@/components/Input";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const registerSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "Too short").max(50, "Too long"),
  date: z.string().min(1, "Date is required"),
  agreed: z.boolean().refine((value) => value === true, {
    message: "You must agree to the terms and conditions",
  }),
});

type Inputs = z.infer<typeof registerSchema>;

export default function Home(): React.JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(registerSchema),
  });

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
          register={register}
          error={errors.email}
        />
        <Input
          label="Password"
          type="password"
          name="password"
          register={register}
          error={errors.password}
        />
        <Input
          label="Date"
          type="date"
          name="date"
          register={register}
          error={errors.date}
        />
        <Input
          label="I agree on terms"
          type="checkbox"
          name="agreed"
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
