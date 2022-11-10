import React, { useState } from 'react';
import { useAuthForm } from '../hooks/useAuthForm';
import { Form, FormItem, FormInput, FormLabel } from './';
import './RegisterForm.css';

const Login = () => {

  const { errors, isValid, onChange, values } = useAuthForm()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true)

    //simulate ajax calling
    setTimeout(() => {
      alert(JSON.stringify(values));
      setIsLoading(false)
    }, 2000);
  }

  return (
    <div className="LoginForm">
      <h2>Login form</h2>
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
          <FormInput className="btn" disabled={isLoading} type="submit" value="Register !" />
        </FormItem>

        <FormItem>
          <a className="btn-forgot" href="#forgot-password">Forgot password ?</a>
        </FormItem>

      </Form>
    </div>
  )
}

export default Login;
