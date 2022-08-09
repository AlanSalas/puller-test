import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(4).required(),
});

export const signupSchema = Yup.object().shape({
  name: Yup.string().required(),
  lastName: Yup.string().required(),
  username: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(4).required(),
});

export const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email().required(),
});

export const resetPasswordSchema = Yup.object().shape({
  password: Yup.string().min(4).required(),
});

export const createProductSchema = Yup.object().shape({
  title: Yup.string().required(),
  price: Yup.number().required(),
  description: Yup.string(),
});

export const createCategorySchema = Yup.object().shape({
  name: Yup.string().required(),
});
