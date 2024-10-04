"use client";

import { IInput } from "@/src/types";
import { Input } from "@nextui-org/input";
import { useFormContext } from "react-hook-form";

interface IProps extends IInput {}

export default function HTInput({
  variant = "bordered",
  className = "",
  size = "md",
  required = false,
  type = "text",
  label,
  name,
  ...props
}: IProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Input
      {...register(name)}
      className={`${className}`}
      errorMessage={errors[name] ? (errors[name]!.message as string) : ""}
      isInvalid={!!errors[name]}
      label={label}
      required={required}
      size={size}
      type={type}
      variant={variant}
    />
  );
}
