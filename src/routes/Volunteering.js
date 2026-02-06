import { Card, Col, Image, Row } from "react-bootstrap"
import { volunteering } from "../data/volunteering"

const Volunteering = () => {
    return (
        <>
            {volunteering.map(entry => {
                const {organization, logo, roles} = entry
                return (
                    <Card className="border-dark mb-2">
                        <Card.Header>
                            <Row>
                                <Col>
                                    <h4>{organization}</h4>
                                </Col>
                                <Col>
                                    <Image
                                        fluid
                                        src={logo}
                                        alt={`${organization} logo`}
                                        style={{ maxHeight: "50px", maxWidth: "50px" }}
                                        className="float-end"
                                    />
                                </Col>
                            </Row>
                        </Card.Header>
                        <Card.Body>
                            {roles.map(role => {
                                const {title, start, end} = role
                                return (
                                    <Card.Text>
                                        {title}, {(start && end) ? `${start} - ${end}` : (start || end)}
                                    </Card.Text>
                                )
                            })}
                        </Card.Body>
                    </Card>
                )
            })}
        </>
    )
}

export default Volunteering