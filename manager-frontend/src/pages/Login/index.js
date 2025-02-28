import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';

import Logo from '../../assets/logo_horizontal.jpg';

import { Footer, Container } from './styles';
import { Button, Input, ErrorText } from '../../global-styles';

import { signIn } from '../../utils/auth';
import api from '../../services/api';

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
  password: Yup.string().required("Password is required")
});

export default function Login({ history }) {
  let invalidCredentials = false;
  async function handleSubmit(values, {
    setSubmitting,
    setFieldError
  }) {
    try {
      const response = await api.post('/manager/sessions', values);
      const restaurant = JSON.stringify(response.data.user);
      signIn(response.data.token, restaurant);
      setSubmitting(false);
      history.push('/dashboard');

    } catch(err) {
        setFieldError('password', 'Verify your credentials')
        setFieldError('email', 'Verify your credentials')
        invalidCredentials = true;
        setSubmitting(false)
    }
  }

  return (
    <>
    <Container>
        <img  src={Logo} alt=""/>
        <div className="form-container">
          <h2>Welcome back</h2>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            validate={() => {
              let errors = {}
              if (invalidCredentials) {
                errors.password = 'Verify your credentials'
                invalidCredentials = false;
              }
              return errors;
            }}
          >
            {({ handleSubmit, handleChange, values, errors, touched, isSubmitting }) => (
              <form onSubmit={handleSubmit}>
              <Input 
                name="email"
                type="email" 
                placeholder="Email"
                onChange={handleChange}
                value={values.email}
              />
              {errors.email && touched.email && <ErrorText>{errors.email}</ErrorText>}
              <Input 
                name="password"
                type="password"
                placeholder="Password"
                onChange={handleChange}
                value={values.password}
              />
              {errors.password && touched.password && <ErrorText>{errors.password}</ErrorText>}
              <Button type="submit">{isSubmitting ? "Wait while login in" : "Login"}</Button>
              </form>
            )}
          </Formik>
          <a href="/">Create an account</a>
        </div>  
    </Container>

    <Footer>
      <span>© 2020 by <a target="_blank" rel="noopener noreferrer" href="https://github.com/marcosbaima">Marcos Baima</a></span>
      <span>
        <a href="/session">this site has no official relationship with eats, and was made for study purposes only.</a> | 
      </span>
    </Footer>
    </>
  )
}