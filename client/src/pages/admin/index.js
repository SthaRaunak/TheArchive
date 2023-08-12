import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const Admin = () => {
    const handleAddBooks = (values) => {
        fetch('http://localhost:4000/books',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values)
            })
    }

    return (
        <>
            <div className='font-["merriweather"] con pt-20'><h1 className='mb-2'>Add Products</h1>
                <Formik
                    initialValues={{
                        bookName: '',
                        bookPrice: '',
                        genre: '',
                        author: '',
                        bookDescription: '',
                    }}
                    onSubmit={values => {
                        handleAddBooks(values)
                        console.log(values)
                    }}>

                    {({ errors, touched }) => (
                        <Form>
                            <div>
                                <Field placeholder="Book Name" name="bookName" className="ps-2 pe-14 text-lg py-3 mb-4" />
                                {errors.bookName && touched.bookName ? (
                                    <div>{errors.bookName}</div>
                                ) : null}<br />

                                <Field placeholder="Book Price" name="bookPrice" type="bookPrice" className="ps-2 pe-14 text-lg py-3 mb-4" />
                                {errors.bookPrice && touched.bookPrice ?
                                    <div>{errors.bookPrice}</div> : null}<br />

                                <Field placeholder="Genre" name="genre" className="ps-2 pe-14 text-lg py-3 mb-4" />
                                {errors.genre && touched.genre ? (
                                    <div>{errors.genre}</div>
                                ) : null}<br />

                                <Field placeholder="Author" name="author" className="ps-2 pe-14 text-lg py-3 mb-4" />
                                {errors.author && touched.author ? (
                                    <div>{errors.author}</div>
                                ) : null}<br />


                                <Field placeholder="Book Description" name="bookDescription" type="bookDescription" className="ps-2 pe-14 text-lg py-3 mb-4" />
                                {errors.bookDescription && touched.bookDescription ? <div>{errors.bookDescription}</div> : null}<br />

                                <button type="submit" className='py-3 p-28 bg-slate-800 text-white text-lg font-bold'>Submit</button>
                            </div>

                        </Form>
                    )}
                </Formik>
            </div>
        </>
    )
}

export default Admin