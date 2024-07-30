/* eslint-disable no-unused-vars */
import Image from "next/image";
import PhoneInput from "react-phone-number-input";

import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { FormikErrors, FormikTouched } from "formik";
import {
  FocusEventHandler,
  KeyboardEventHandler,
  useRef,
  useState,
} from "react";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Label } from "../ui/label";
import { Eye, EyeOff } from "@/constants/icons";

export enum FormFieldType {
  INPUT = "input",
  PHONE_INPUT = "phoneInput",
  CHECKBOX = "checkbox",
  SELECT = "select",
  SKELETON = "skeleton",
}

interface CustomProps {
  name: string;
  field?: {
    value: any;
    type?: string;
    placeholder?: string;
  };
  fieldType: FormFieldType;
  label?: string;
  iconSrc?: string;
  dir?: "left" | "right";
  disabled?: boolean;
  children?: React.ReactNode;
  errors?: FormikErrors<any>;
  touched?: FormikTouched<any>;
  renderSkeleton?: (field: any) => React.ReactNode;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onChange?: any;
  onBlur?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

const RenderInput = ({ props }: { props: CustomProps }) => {
  const [showPassword, setShowPassword] = useState(false);
  const { field, fieldType, name, onBlur, onChange } = props;
  const placeholder = field?.placeholder ?? "";

  const changePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  switch (fieldType) {
    case FormFieldType.INPUT:
      return (
        <>
          <Input
            placeholder={placeholder}
            name={name}
            {...field}
            {...(field?.type === "password" && {
              type: showPassword ? "text" : "password",
            })}
            value={field?.value as string}
            onChange={onChange}
            onBlur={onBlur}
            className={cn(
              "i-reset",
              field?.type === "password" && "text-[1.2rem]",
            )}
          />

          {field?.type === "password" && (
            <span
              className="icon absolute right-3 z-10"
              onClick={changePasswordVisibility}
            >
              {showPassword ? (
                <Eye size={22} className="text-secondary" />
              ) : (
                <EyeOff size={22} className="text-secondary" />
              )}
            </span>
          )}
        </>
      );

    case FormFieldType.PHONE_INPUT:
      return (
        <PhoneInput
          name="phone"
          id="phone"
          placeholder={placeholder}
          international
          withCountryCallingCode
          defaultCountry="NG"
          value={field?.value}
          onChange={onChange}
          className="phone-number-input"
        />
      );
    case FormFieldType.SELECT:
      return (
        <div>
          <Select
            onValueChange={onChange}
            defaultValue={field?.value as string}
          >
            <SelectTrigger className="shad-select-trigger">
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent className="shad-select-content">
              {props.children}
            </SelectContent>
          </Select>
        </div>
      );

    case FormFieldType.SKELETON:
      return props.renderSkeleton ? props.renderSkeleton(field) : null;
    default:
      return null;
  }
};

const CustomFormField = (props: CustomProps) => {
  const { name, label, field, errors, touched } = props;

  const result = (
    <div
      className={cn(
        "row-flex-start relative w-full gap-0.5 overflow-hidden rounded-full border border-border bg-background px-2 shadow-sm",
        errors?.[name] && touched?.[name] && "border-red-400",
      )}
    >
      <RenderInput props={props} />
    </div>
  );

  return (
    <div
      className={cn(
        "group w-full",
        errors?.[name] && touched?.[name] ? "is-error" : "",
      )}
    >
      <Label className="mb-2 ml-1 inline-flex">{label}</Label>
      {result}

      {field?.type !== "password" && (
        <p className="transition-sm invisible ml-2 mt-1.5 block text-xs font-semibold text-red-500 group-[.is-error]:visible group-[.is-error]:animate-in">
          {errors?.[name] as string}
        </p>
      )}
    </div>
  );
};

export default CustomFormField;
