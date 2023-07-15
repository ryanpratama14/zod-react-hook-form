import { FieldError, UseFormRegister } from "react-hook-form";

type Props = {
  name: string;
  register: UseFormRegister<any>;
  error?: FieldError;
  type: React.HTMLInputTypeAttribute;
  label: string;
  required?: boolean;
};

export default function Input({
  name,
  error,
  type,
  label,
  required = false,
  register,
}: Props): React.JSX.Element {
  return (
    <section className="flex flex-col">
      <label htmlFor={name} className="ml-1">
        {label}
      </label>
      <input
        {...register(name, { required: required })}
        id={name}
        name={name}
        type={type}
      />
      {error ? (
        <small className="text-red-500">
          {label} field is required {error.message}
        </small>
      ) : null}
    </section>
  );
}
