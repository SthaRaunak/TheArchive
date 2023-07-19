import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Header from '@/components/header';

const SignupSchema = Yup.object().shape({
  userName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),

  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(3, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
});

export const Login = () => (
  <div>
    <Header/>
    <h1>Log In</h1>
    <Formik
      initialValues={{
        userName: '',
        email: '',
        password: '',

      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="userName" placeholder="Username" />
          {errors.userName && touched.userName ? (
            <div>{errors.userName}</div>
          ) : null}
          <Field name="email" type="email" placeholder="Email" />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
          <Field name="password" placeholder="Password" />
          {errors.password && touched.password ? (
            <div>{errors.password}</div>
          ) : null}
          
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Login