"use client";

import { useState } from "react";
import { useFormik } from "formik";
import { InferType } from "yup";
import { ProfileSchema } from "@/schema";
import { useToast } from "../ui/use-toast";
import { Value } from "react-phone-number-input";
import { toastNotify } from "@/lib/utils";

import FormWrapper from "./FormWrapper";
import CustomFormField, { FormFieldType } from "./CustomFormField";

import "react-phone-number-input/style.css";

const ProfileForm = ({ user }: { user: any }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const onSubmit = async (values: InferType<typeof ProfileSchema>) => {
    setIsLoading(true);

    let fileUrl;
    console.log(values);
    setIsLoading(false);
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    setFieldValue,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      name: user?.name || "",
      email: user?.email || "",
      phone: user?.phone || "",
    },
    validationSchema: ProfileSchema,
    onSubmit,
  });

  return (
    <FormWrapper
      buttonLabel="Update"
      onSubmit={handleSubmit}
      isSubmitting={isLoading}
    >
      <CustomFormField
        fieldType={FormFieldType.INPUT}
        name="name"
        label="Full name"
        field={{ value: values.name, placeholder: "John Doe" }}
        onChange={handleChange}
        onBlur={handleBlur}
        errors={errors}
        touched={touched}
      />

      <CustomFormField
        fieldType={FormFieldType.INPUT}
        name="email"
        label="Email"
        field={{
          value: values.email,
          placeholder: "johndoe@gmail.com",
          type: "email",
        }}
        onChange={handleChange}
        onBlur={handleBlur}
        errors={errors}
        touched={touched}
      />

      <CustomFormField
        fieldType={FormFieldType.PHONE_INPUT}
        name="phone"
        label="Phone number"
        field={{ value: values.phone, placeholder: "(234) 81-68461612" }}
        onChange={(value: Value) => {
          setFieldValue("phone", value);
        }}
        onBlur={handleBlur}
        errors={errors}
        touched={touched}
      />
    </FormWrapper>
  );
};

export default ProfileForm;
