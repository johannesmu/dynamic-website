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
    // function to get data
    const getData = async () => {
        const result = await database.listDocuments(
            '6746c6850016def37c78', // database id
            '6746c6dc000611c524fb', // collection id
            []
        )
        setData( result.documents )
        setLoaded( true )
    }

    useEffect( () => { getData() }, [data] )

    const ProductCollection = data.map( (p) => {
        // return each product as a Col
            // get preview of image
        const imgURL = storage.getFileView(
            '6746d5f900370c213333', // bucket ID
            p.image // file ID
        )    
        return (
        <Col md={3}>
            <img className="img-fluid" src={ imgURL } />
            <h3>{ p.name }</h3>
            <h5>{ p.price }</h5>
            <p>{ p.description }</p>
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
            <Row>{ ProductCollection }</Row>
        </Container>
    )
}