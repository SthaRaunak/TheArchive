import React, { useState } from 'react'
import Header from '../../components/Header'
import { useSelector } from 'react-redux'
import { Col, Row, Card, Image, Button, Space, Modal } from 'antd'



export default function Account() {
    const { userDetails } = useSelector(state => state.users)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleSubmit = () => {
        alert("submit to backend")
    }
    return (
        <>
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