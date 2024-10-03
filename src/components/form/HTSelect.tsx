import { IInput } from "@/src/types";
import { Select, SelectItem } from "@nextui-org/select";
import { useFormContext } from "react-hook-form";

interface IItem {
  key: string;
  label: string;
}

interface IProps extends IInput {
  options: IItem[];
}

const HTSelect = ({
  options,
  label,
  name,
  disabled,
  variant = "bordered",
}: IProps) => {
  const { register, formState } = useFormContext();

  return (
    <section>
      <Select
        isDisabled={disabled}
        {...register(name)}
        label={label}
        variant={variant}
        className="max-w-xs"
      >
        {options.map((option: IItem) => (
          <SelectItem key={option.key}>{option.label}</SelectItem>
        ))}
      </Select>
    </section>
  );
};

export default HTSelect;
