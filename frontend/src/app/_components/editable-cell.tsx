import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import {
  Controller,
  useFormContext,
} from "react-hook-form";

const EditableCell = ({ getValue, row, column, table }) => {
  const initialValue = getValue();
  const [value, setValue] = useState(initialValue);

  const { getValues } = useFormContext();
  if (getValues().people.length === 0) {
    return "invalid";
  }
  console.log(getValues());
  console.log(getValues()["people"][row.index]);

  const defaultValue =
    getValues()["people"][row.index].firstName;

  return (
    <Controller
      name={`test[${row.index}].firstName`}
      defaultValue={defaultValue}
      rules={{
        required: {
          value: true,
          message: "field is required",
        },
      }}
      render={(props) => (
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={onBlur}
          className="border-transparent"
          {...props}
        />
      )}
    />
  );
};
export default EditableCell;
