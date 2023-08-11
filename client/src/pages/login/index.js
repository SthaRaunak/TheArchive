import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Header from '../../components/Header';
import Link from 'next/link';
import Image from "next/image"
import banner from "../../images/banner.png"
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { setUserDetails } from '@/redux/reducerSlice/users';
import {Button, message} from 'antd';
import Footer from '../../components/Footer';
const LoginSchema = Yup.object().shape({
  phoneNumber: Yup.string().required('Required'),
  password: Yup.string()
    .min(3, 'Too Short!')
    .max(30, 'Too Long!')
    .required(<div style={{ color: "red", fontSize: "14px" }}>Required</div>),
});

const Login = () => {

  const router = useRouter()
  const [msg, contextHolder] = message.useMessage();
  const dispatch = useDispatch();

  const handleLogin = async(values) => {
    try {
      const requestOptions = {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(values)
      };
      const res = await fetch('http://localhost:4000/login',requestOptions)
      const data = await res.json()
      if(data && data.success && res.status == 200){
        dispatch(setUserDetails(data))
        router.push('/')
        msg.info(data.msg)
      }else{
        msg.info(data.msg);
      }
    } catch (err) {
      msg.info(err)
    }
  }

  
  return (
  <>
  {contextHolder}
    <Header />
    <div className="con flex">
      <div className="appRegister ">
        <h2>Welcome Back</h2>
        <Formik
          initialValues={{
            phoneNumber: '',
            password: '',
          }}
          validationSchema={LoginSchema}
          onSubmit={values => {
            handleLogin(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
               <Field name="phoneNumber"  placeholder="Phone Number" className="form"/>
             {errors.phoneNumber && touched.phoneNumber ? <div>{errors.phoneNumber}</div> : null}
            
              <Field name="password" placeholder="Password" className="form" />
              {errors.password && touched.password ? (
                <div>{errors.password}</div>
              ) : null}

              <button type="submit">Log in</button>
            </Form>
          )}
        </Formik>
        <p>Dont have an account? <Link href="/register">Register Now</Link></p>
      </div>

      <Image src={banner} height="750" width="1060" alt="book1" objectFit='cover' />

    </div>
    <Footer/>
  </>
  )
};

export default Login