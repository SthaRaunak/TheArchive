import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Header from '../../components/Header';
import Link from 'next/link';
import Image from "next/image"
import banner from "../../images/banner.png"

const SignupSchema = Yup.object().shape({
  userName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required(<div style={{color: "red" , fontSize: "14px"}}>Required</div>),

  email: Yup.string()
  .email('Invalid email')
  .required(<div style={{color: "red" , fontSize: "14px"}}>Required</div>),
  
  password: Yup.string()
    .min(3, 'Too Short!')
    .max(30, 'Too Long!')
    .required(<div style={{color: "red" , fontSize: "14px"}}>Required</div>),
});

export const Login = () => (
  < >
    <Header/>
    <div className="con flex">
    <div className="appRegister ">
    <h2>Welcome Back</h2>
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
    <p>Dont have an account? <Link href="/register">Register Now</Link></p>
  </div>
    
  <Image src={banner} height="750" width="1060"  alt="book1" objectFit='cover'/>
    
  </div>
  </>
);

export default Login