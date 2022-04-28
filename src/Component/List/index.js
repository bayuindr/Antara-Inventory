import React, { useState } from 'react'
import { Button, Row, Table, Col } from 'react-bootstrap'
import Commit from '../Card'
import axios from 'axios'

function List({ orgs }) {
    const [commit, setCommit] = useState([])
    console.log(commit, 'aaaaaaaaaaaa')


    const fetchCommit = (e, name, owner) => {
        // console.log('masuk')
        e.preventDefault()
        axios({
            url: `https://api.github.com/repos/${owner}/${name}/commits`,
            method: 'GET',
        })
            .then((data) => {
                // console.log(data.data)
                setCommit(data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }



    return (
        <div>
            <Table className='mt-5' striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Organization Name</th>
                        <th>Language</th>
                        <th>Star</th>
                        <th>Commits</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        orgs.map((el, i) => (
                            // console.log(el.noInvoice)
                            <tr key={i}>
                                <td>{el.name}</td>
                                <td>{el.owner.login}</td>
                                <td>{el.language}</td>
                                <td>{el.stargazers_count}</td>
                                <td><Button repo={el.name} variant="secondary" onClick={(e) => fetchCommit(e, el.name, el.owner.login)}>Commit</Button></td>
                            </tr>
                        ))
                    }

                </tbody>
            </Table>
            <Row>
                {
                    commit.map(el => {

                        return <Col md={3}>
                            <Commit key={el.id} data={el}></Commit>
                        </Col>
                    })
                }
            </Row>

        </div>
    )
}

export default List