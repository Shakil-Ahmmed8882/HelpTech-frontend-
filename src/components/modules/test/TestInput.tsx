import { Input } from "@nextui-org/input";
import { useFormContext } from "react-hook-form";

const TestInput = ({name, label}:{name:string, label:string}) => {

    const {register, formState:{errors}} = useFormContext()

  return (
    <Input label={label} {...register(name)}
     errorMessage={errors[name] ? (errors[name].message as string) : ""}
     isInvalid= {!!errors[name]}
    />
  );
};

export default TestInput;