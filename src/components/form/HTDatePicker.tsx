import { IInput } from "@/src/types";
import { DatePicker } from "@nextui-org/date-picker";
import { Controller } from "react-hook-form";
interface IProps extends IInput {}
export default function HTDatePicker({ label,name }: IProps) {
  return <Controller
        name={name}
        render={({field: {value, ...fields}}) => <DatePicker {...{label}} {...fields} className="max-w-[284px]" />}
  />
}
