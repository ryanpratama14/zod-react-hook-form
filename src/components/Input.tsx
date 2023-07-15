import { useId } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

type Props = {
  name: string;
  register: UseFormRegister<any>;
  error?: FieldError;
  type: React.HTMLInputTypeAttribute;
  label: string;
};

export default function Input({
  name,
  error,
  type,
  label,
  register,
}: Props): React.JSX.Element {
  const id = useId();

  return (
    <section className="flex flex-col">
      <label htmlFor={id} className="ml-1">
        {label}
      </label>
      <input {...register(name)} id={id} name={name} type={type} />
      {error ? <small className="text-red-500">{error.message}</small> : null}
    </section>
  );
}
