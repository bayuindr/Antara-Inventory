import React, { useState } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import './style.css'
import axios from 'axios'
import List from '../../Component/List'

function Home() {
    const [dataOrganisasion, setdataOrganisasion] = useState({ org: '' })
    const [organisasion, setOrganisasion] = useState([])

    const fetchOrganisasion = (e) => {
        // console.log('masuk')
        e.preventDefault()
        axios({
            url: `http://api.github.com/orgs/${dataOrganisasion.org}/repos`,
            method: 'GET',
        })
            .then(async (data) => {
                let sortData = await data.data.sort(function (a, b) {
                    return b.stargazers_count - a.stargazers_count;
                });
                // console.log(data.data)
                setOrganisasion(sortData)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleSubmit = (e) => {
        const { name, value } = e.target
        setdataOrganisasion({ ...dataOrganisasion, [name]: value })
    }




    return (
        <div>
            <Container>
                <Row className='tab'>
                    <h1 className='mb-5'>Organization List</h1>
                    <Col>
                    
                        <Form onSubmit={(e) => fetchOrganisasion(e)} className='formOr'>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                {/* <Form.Label className='left'>Enter Organisasion</Form.Label> */}
                                <Form.Control name='org' onChange={(e) => handleSubmit(e)} type="text" placeholder="Enter Organisasion" />
                            </Form.Group>
                            {/* <Button variant="primary" type="submit">
                                Submit
                            </Button> */}
                        </Form>

                        <List orgs={organisasion}></List>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home