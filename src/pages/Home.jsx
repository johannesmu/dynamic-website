import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { Query } from 'appwrite'
import { useState, useEffect } from 'react'

export function Home( props ) {
    const [ data, setData ] = useState([])
    const [ loaded, setLoaded ] = useState( false )

    document.title = "The best drinks in town"

    const database = props.db
    const storage = props.str

    const getData = async () => {
        if( loaded ) { return }
        const result = await database.listDocuments(
           '6746c6850016def37c78',
           '6746c6dc000611c524fb',
           []
        )
        setData( result.documents )
        setLoaded( true )
    }

    useEffect( () => {
        getData()
    },[ data ])

    const Collection = data.map( ( wine ) => {
        // get the file view
        return (
            <Col md={4}>
                <h3>{ wine.name }</h3>
                <p>{ wine.description }</p>
            </Col>
        )
    } )

    return(
        <Container>
            <Row>
                <Col>
                    <h2>Home</h2>
                </Col>
            </Row>
            <Row>
                { Collection }
            </Row>
        </Container>
    )
}