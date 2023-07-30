import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Button, message } from 'antd';
import { useRouter } from 'next/navigation'
import Header from '../../components/Header'
import Link from 'next/link';
import Image from "next/image"
import banner from "../../images/banner.png"
import { setUserDetails } from '@/redux/reducerSlice/users';
import { useDispatch } from 'react-redux';
const Register = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const [msg, contextHolder] = message.useMessage();   
    const SignupSchema = Yup.object().shape({
        fullName: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required(<div style={{color: "red" , fontSize: "14px"}}>Required</div>),
        password: Yup.string()
        .min(5, 'Password Too Short!')
        .required(<div style={{color: "red" , fontSize: "14px"}}>Required</div>),
        confirmPassword: Yup.string()
        .min(5, 'Password Too Short!')
        .required(<div style={{color: "red" , fontSize: "14px"}}>Required</div>)
        .oneOf([Yup.ref('password'), null], 'Passwords must match'),
        email: Yup.string().email('Invalid email').required(<div style={{color: "red" , fontSize: "14px"}}>Required</div>),
      });

      const handleRegister = async(values) =>{
        const{confirmPassword,...formFields} = values
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formFields)
      };
       const res = await fetch('http://localhost:4000/register',requestOptions)
       const data = await res.json()
       if(data && res.status==200) {
        debugger;
        dispatch(setUserDetails(data))
        router.push('/')
        setTimeout(() => {
          msg.info(data.msg);
        }, 2000);

       }else{
        msg.info(res.statusText)
       }  
      }


    return(
        <div>
        {contextHolder}
        <Header/>
      <div className='con flex '> 
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
      <Image src={banner} height="750" width="1060"  alt="book1" objectFit='cover'/>
      </div> 
             
      </div>
    )
  }

export default Register;