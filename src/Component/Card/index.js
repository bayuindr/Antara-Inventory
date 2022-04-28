import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

function Commit({data}) {
    let oldDate = data.commit.committer.date.substring(0, 10)
    // console.log(data)

    return (
        <div>
            <Container className='mt-5'>
                <Row>
                    <Col>
                        <Card border="dark" style={{ width: '17rem' }}>
                            <Card.Img variant="top" src={data.author.avatar_url} />
                            <Card.Body>
                                <Card.Title>{data.commit.author.name}</Card.Title>
                                <Card.Text>
                                {data.commit.author.email}
                                </Card.Text>
                                <Card.Text>
                                Commit Date : {oldDate}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Commit