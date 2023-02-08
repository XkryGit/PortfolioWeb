import {
  Validators,
  createFormValidation,
  ValidationSchema,
} from "@lemoncode/fonk";

const validationSchema: ValidationSchema = {
  field: {
    name: [Validators.required],
    email: [Validators.required],
    subject: [Validators.required],
    message: [Validators.required],
  },
};

export const formValidation = createFormValidation(validationSchema);
