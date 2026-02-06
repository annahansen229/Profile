
import { Card, Col, Row } from 'react-bootstrap';

function compareFn(a, b) {
    if (typeof a === 'string') {
        return a.localeCompare(b)
    } else {
        if (a.priority < b.priority) {
            return -1
        }

        if (a.priority > b.priority) {
            return 1
        }
        
        return a.skill.localeCompare(b.skill)
    }

}

const CardDeck = ({title, data}) => (
    <>
        <Row>
            <Col>
                <h6>{title}</h6>
            </Col>
        </Row>
        <Row>
            <Col className='d-flex flex-wrap'>
                {data.sort(compareFn).map((data, index) => (
                    <Card key={index} className='me-2 mt-2'>
                        <div className='p-2'>{data.skill ?? data}</div>
                    </Card>
                ))}
            </Col>
        </Row>
    </>
)

export default CardDeck