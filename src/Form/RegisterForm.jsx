import React, { useState } from 'react';
import { useAuthForm } from '../hooks/useAuthForm';
import { Form, FormItem, FormInput, FormLabel } from './';
import './RegisterForm.css';

const RegisterForm = () => {

  const { errors, isValid, onChange, values } = useAuthForm()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true)
    if (!isValid()) {
      setIsLoading(false)
      return
    }
    setIsLoading(false)
    alert(JSON.stringify(values));
  }

  return (
    <div className="RegisterForm">
      <h2>Registration form</h2>
      <Form onSubmit={e => handleSubmit(e)}>

        <FormItem>
          <FormLabel for="email" label="Email" />
          <FormInput type="email" name="email" label="email" value={values.email} onChange={e => onChange(e, 'email')} errors={errors?.email} />
        </FormItem>

        <FormItem>
          <FormLabel for="password" label="Password" />
          <FormInput type="password" name="password" label="password" value={values.password} onChange={e => onChange(e, 'password')} errors={errors?.password} />
        </FormItem>

        <FormItem>
          <FormLabel for="confirm" label="Confirm" />
          <FormInput type="password" name="confirm" label="confirm" value={values.confirm} onChange={e => onChange(e, 'confirm')} errors={errors?.confirm} />
        </FormItem>

        <FormItem>
          <FormInput className="btn" disabled={isLoading} type="submit" value="Register !" />
        </FormItem>

      </Form>
    </div>
  )
}

export default RegisterForm;
