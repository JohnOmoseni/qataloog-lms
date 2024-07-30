import * as yup from "yup";

// Define the file validation schema
const FILE_SIZE = 4 * 1024 * 1024; // 4MB
export const SUPPORTED_FORMATS = ["image/jpeg", "image/png", "image/svg+xml"];

export const ProfileSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters")
    .required("Field is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Field is required"),
  phone: yup
    .string()
    .matches(/^\+\d{10,15}$/, "Invalid phone number")
    .required("Field is required"),
});

export const PasswordSchema = yup.object().shape({
  current_password: yup.string().required("Current password is required"),
  new_password: yup
    .string()
    .min(8, "New password must be at least 8 characters")
    .required("New password is required"),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("new_password"), undefined], "Passwords must match")
    .required("Please confirm your new password"),
});
