import React, { useState } from 'react'
import Header from '../../components/Header'
import { useSelector } from 'react-redux'
import { Col, Row, Card, Image, Button, Space, Modal, message } from 'antd'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

const ChangepassSchema = Yup.object().shape({
    currentPassword: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    newPassword: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .min(5, 'Password Too Short!')
        .required('Required'),
    confirmNewPassword: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .min(5, 'Password Too Short!')
        .required('Required')
        .oneOf([Yup.ref('newPassword'), null], 'Passwords must match'),
});

const ChangePassForm = ({ handleChangePassword }) => {
    return (
        <>
            <div>
                <Formik
                    initialValues={{
                        currentPassword: '',
                        newPassword: '',
                        confirmNewPassword: '',
                    }}
                    validationSchema={ChangepassSchema}
                    onSubmit={values => {
                        handleChangePassword(values);
                    }}>
                    {({ errors, touched }) => (
                        <Form>
                            <Field name="currentPassword" type="password" placeholder="Current password" className="block w-[100%] py-2 text-[17px] px-2 border-[1px] rounded-lg border-gray-400 mt-5" />
                            {errors.currentPassword && touched.currentPassword ? (
                                <div className='text-red-600 mt-1'>{errors.currentPassword}</div>
                            ) : null}
                            <Field name="newPassword" type="password" placeholder="New password" className="block w-[100%]  py-2 text-[17px] px-2 border-[1px] rounded-lg border-gray-400 mt-5" />
                            {errors.newPassword && touched.newPassword ? (
                                <div className='text-red-600 mt-1'>{errors.newPassword}</div>
                            ) : null}
                            <Field name="confirmNewPassword" type="password" placeholder="New password" className="block w-[100%]  py-2 text-[17px] px-2 border-[1px] rounded-lg border-gray-400 mt-5" />
                            {errors.confirmNewPassword && touched.confirmNewPassword ? <div className='text-red-600 mt-1'>{errors.confirmNewPassword}</div> : null}
                            <button type="submit" className='mt-4 w-[100%] text-center py-2 rounded-md border-none text-boldest font-["poppins"] text-[16px] cursor-pointer bg-gray-200 hover:bg-gray-100'>SAVE</button>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    )
}

export default function Account() {
    const { userDetails } = useSelector(state => state.users)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleSubmit = () => {
        alert("submit to backend")
    }
    const [msg, contextHolder] = message.useMessage();
    const handleChangePassword = async (values) => {
        const userId = userDetails._id;
        const { confirmNewPassword, ...formFields } = values;
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formFields)
        }
        const res = await fetch(`http://localhost:4000/change-password/${userId}`, requestOptions)
        const data = await res.json();
        if (data && res.status == 200) {
            setIsModalOpen(false)
            msg.info(data.msg)
        } else if (data && res.status == 401) {
            msg.info(data.msg)
        }
    }

    return (
        <>
            {contextHolder}
            <Header />
            <section className='pt-36'>
                <div className='con mx-auto pl-6'>
                    <h2 style={{ fontFamily: 'poppins' }} className="text-gray-800 text-3xl font-normal mb-2">Account Settings</h2>
                    <p style={{ fontFamily: 'poppins' }} className='font-light text-grey-700 mb-10 text-sx'>Change your profile and account Settings</p>
                    <Row>
                        <Col span={7}>
                            <Card
                                bordered={true}
                                style={{
                                    width: '300px',

                                }}
                            >
                                <Image
                                    width={'100%'}
                                    src="https://th.bing.com/th/id/OIP.K7x8_dL7iqvfjji2O_4PRgHaHa?pid=ImgDet&w=1000&h=1000&rs=1"
                                    className='rounded-full'
                                />
                                <Space
                                    direction="vertical"
                                    style={{
                                        width: '100%',
                                        marginTop: '15px'
                                    }}
                                >
                                    <Button type="dashed" block>
                                        Change Avatar
                                    </Button>
                                </Space>
                            </Card>
                        </Col>
                        <Col span={17}>
                            <Card className="pb-4"
                                title="Account Details"
                                bordered={false}
                                style={{
                                    width: '100%',
                                }}
                            >
                                <p ><span className='font-bold pe-2'>Full Name: </span>{userDetails.fullName}</p>
                                <p><span className='font-bold pe-2'>Email: </span><a href={`mailto:${userDetails.email}`}>{userDetails.email}</a></p>
                                <p><span className='font-bold pe-2'>Phone: </span>{userDetails.phoneNumber}</p>
                            </Card>
                            <Card className="mt-1"
                                title="Account Settings"
                                bordered={true}
                                style={{
                                    width: '100%',
                                }}
                            >
                                <Space

                                    style={{
                                        width: '50%',
                                        marginTop: '20px'
                                    }}
                                >
                                    <Button type="primary" onClick={() => setIsModalOpen(true)}>
                                        Change Password
                                    </Button>
                                    <Modal
                                        footer={null}
                                        title="Change Password" open={isModalOpen} onOk={handleSubmit} onCancel={() => setIsModalOpen(false)} >
                                        <ChangePassForm handleChangePassword={handleChangePassword} />
                                    </Modal>
                                </Space>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </section>
        </>

    )

}