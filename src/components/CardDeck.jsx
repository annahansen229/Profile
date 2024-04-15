import React from 'react';

import { Card, Col, Row } from 'react-bootstrap';

const CardDeck = ({title, data}) => (
    <>
        <Row>
            <Col>
                <h6>{title}</h6>
            </Col>
        </Row>
        <Row>
            <Col className='d-flex flex-wrap'>
                {data.sort().map((item, index) => (
                    <Card key={index} className='me-2 mt-2'>
                        <div className='p-2'>{item}</div>
                    </Card>
                ))}
            </Col>
        </Row>
    </>
)

export default CardDeck