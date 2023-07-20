import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Header from '../../components/Header'
import Link from 'next/link';
const Register = () => {
    const SignupSchema = Yup.object().shape({
        firstName: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required'),
        lastName: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required'),
        address: Yup.string()
        .min(5, 'Address Too Short!')
        .max(10, 'Address Too Long!')
        .required('Required'),
        password: Yup.string()
        .min(5, 'Password Too Short!')
        .required('Required'),
        confirmpassword: Yup.string()
        .min(5, 'Password Too Short!')
        .required('Required')
        .oneOf([Yup.ref('password'), null], 'Passwords must match'),
        email: Yup.string().email('Invalid email').required('Required'),
      });
    return(
        <>
        <Header/>
      <div className='con'> 
      <div className="appRegister">
        <h2>Create an Account</h2>
        <Formik
         initialValues={{
            fullname: '',
            email: '',
            phone: ''
         }}
         validationSchema={SignupSchema}
         onSubmit={values => {
           // same shape as initial values
           console.log(values);
         }}
       >
         {({ errors, touched }) => (
           <Form>
             <Field name="fullname" placeholder="Full Name" className="form"/>
             {errors.fullname && touched.fullname ? (
               <div>{errors.fullname}</div>
             ) : null}
             
             <Field name="email" type="email" placeholder="Email"  className="form"/>
             {errors.email && touched.email ? <div>{errors.email}</div> : null}
             <Field name="password" type="password" placeholder="Password"  className="form"/>
             {errors.password && touched.password ? <div>{errors.password}</div> : null}
             <Field name="confirmpassword" type="password" placeholder="Confirm Password"  className="form"/>
             {errors.confirmpassword && touched.confirmpassword ? <div>{errors.confirmpassword}</div> : null}
             <Field name="phone" type="text" placeholder="Phone Number"  className="form"/>
             {errors.phone && touched.phone ? <div>{errors.phone}</div> : null}
             <button type="submit">Signup</button>
           </Form>
         )}
       </Formik>
        <p>Already have an account? <Link href="/login">Sign in</Link></p>
      </div>
      </div>
  
      </>
    )
  }

export default Register;