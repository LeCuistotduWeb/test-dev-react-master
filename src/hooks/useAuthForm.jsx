import { useState } from "react"

const DEFAULT_REGISTER_VALUES = {
  email: '',
  password: '',
  confirm: '',
}

const FORM_ERRORS = {
  invalidEmail: "You have to provide a valid email.",
  passwordLength: "Your password must be between 5 and 16 characters length.",
  passwordMatch: "Your passwords must match.",
}

export const useAuthForm = () => {

  const [errors, setErrors] = useState(null)
  const [values, setValues] = useState(DEFAULT_REGISTER_VALUES)

  const onChange = (e, field) => {
    setValues({ ...values, [field]: e.currentTarget.value })
  }

  const isValidEmail = (email) => {
    return email?.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)
  }

  const isValid = () => {
    let errors = {};
    if (!isValidEmail(values.email)) {
      errors = { ...errors, email: [FORM_ERRORS.invalidEmail] };
    }

    if (values.password.length < 5 || values.password.length > 16) {
      errors = { ...errors, password: [FORM_ERRORS.passwordLength], };
    }

    if (values.confirm.length < 5 || values.confirm.length > 16) {
      errors = { ...errors, confirm: [FORM_ERRORS.passwordLength] };
    }

    if (values.confirm !== values.password) {
      const passwordError = undefined !== errors.password
        ? [...errors.password, FORM_ERRORS.passwordMatch]
        : [FORM_ERRORS.passwordMatch];

      const confirmError = undefined !== errors.confirm
        ? [...errors.confirm, FORM_ERRORS.passwordMatch]
        : [FORM_ERRORS.passwordMatch];
      errors = { ...errors, password: passwordError, confirm: confirmError };
    }

    setErrors(errors)

    return Boolean(Object.keys(errors).length === 0);
  }

  return {
    values,
    errors,
    onChange,
    isValid,
  }
}