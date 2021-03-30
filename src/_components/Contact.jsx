import React from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import { ContactStyledWrapper } from './_style_';

export const Contact = ({ data = {} }) => {
    return (
        <ContactStyledWrapper id='contact'>
            <Container>
                <div className='contact-block1'>
                    <Row>
                        <Col log={6}>
                            <div className='contact-contact'>
                                <h2 className='mb-30'>{data?.header}</h2>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <form action='' method='post' role='form' className='email-form'>
                                <Row className='gy-3'>
                                    {
                                        data?.inputs?.map((input, index) => {
                                            let colNum = 12;

                                            if (index < 2) {
                                                colNum = 6;
                                            }

                                            if (input.type !== 'textarea') {
                                                return (
                                                    <Col lg={colNum} key={input?.name}>
                                                        <div className='form-group contact-block1'>
                                                            <input type={input?.type} name={input?.name} className='form-control' id={input?.name} placeholder={input?.placeholder} required />
                                                        </div>
                                                    </Col>
                                                )
                                            }

                                            return (
                                                <Col lg={colNum} key={input?.name}>
                                                    <div className='form-group'>
                                                        <textarea name={input?.name} className='form-control' id={input?.name} placeholder={input?.placeholder} required />
                                                    </div>
                                                </Col>
                                            )
                                        })
                                    }
                                    <Col lg={12}>
                                        <div className='loading'>{data?.loading}</div>
                                        <div className='error-message'>{data?.error}</div>
                                        <div className='sent-message'>{data?.success}</div>
                                    </Col>
                                    <Col lg={12}>
                                        <div className='mt-0'>
                                            {   data?.buttonText &&
                                                <input type='submit' className='btn btn-defeault btn-send' value={data.buttonText} />
                                            }
                                        </div>
                                    </Col>
                                </Row>
                            </form>
                        </Col>
                    </Row>
                </div>
            </Container>
        </ContactStyledWrapper>
    );
}

Contact.propTypes = {
    data: PropTypes.object
}