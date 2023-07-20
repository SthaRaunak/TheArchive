import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Header from '../../components/Header';
import Link from 'next/link';
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
  <div >
    <Header/>
    <div className="con ">
    <div className="appRegister ">
    <h2>Log In</h2>
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
          <Field name="userName" placeholder="Username" className="form" />
          {errors.userName && touched.userName ? (
            <div>{errors.userName}</div>
          ) : null}
          <Field name="email" type="email" placeholder="Email" className="form" />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
          <Field name="password" placeholder="Password" className="form" />
          {errors.password && touched.password ? (
            <div>{errors.password}</div>
          ) : null}
          
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
    <p>Dont have an account? <Link href="/register">Sign Up</Link></p>
  </div>
  </div>
  </div>
);

export default Login