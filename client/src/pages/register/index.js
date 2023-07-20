import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Header from '../../components/Header'
import Link from 'next/link';

const Register = () => {
    const SignupSchema = Yup.object().shape({
        fullName: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required'),
        password: Yup.string()
        .min(5, 'Password Too Short!')
        .required('Required'),
        confirmPassword: Yup.string()
        .min(5, 'Password Too Short!')
        .required('Required')
        .oneOf([Yup.ref('password'), null], 'Passwords must match'),
        email: Yup.string().email('Invalid email').required('Required'),
      });

      const handleRegister = async(values) =>{
        const{confirmPassword,...formFields} = values
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formFields)
      };
       await fetch('http://localhost:4000/register',requestOptions)
      }


    return(
        <>
        <Header/>
      <div className='con flex'> 
      <div className="appRegister">
        <h2>Create an Account</h2>
        <Formik
         initialValues={{
            fullName: '',
            email: '',
            phoneNumber: '',
            password: '',
            confirmPassword: '',
         }}
         validationSchema={SignupSchema}
         onSubmit={values => {
          handleRegister(values)
         }}
       >
         {({ errors, touched }) => (
           <Form>
             <Field name="fullName" placeholder="Full Name" className="form"/>
             {errors.fullName && touched.fullName ? (
               <div>{errors.fullName}</div>
             ) : null}
             
             <Field name="email" type="email" placeholder="Email"  className="form"/>
             {errors.email && touched.email ? <div>{errors.email}</div> : null}
             <Field name="password" type="password" placeholder="Password"  className="form"/>
             {errors.password && touched.password ? <div>{errors.password}</div> : null}
             <Field name="confirmPassword" type="password" placeholder="Confirm Password"  className="form"/>
             {errors.confirmPassword && touched.confirmPassword ? <div>{errors.confirmPassword}</div> : null}
             <Field name="phoneNumber" type="text" placeholder="Phone Number"  className="form"/>
             {errors.phoneNumber && touched.phoneNumber ? <div>{errors.phoneNumber}</div> : null}
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