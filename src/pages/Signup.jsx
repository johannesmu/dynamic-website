import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export function Signup( props ) {
    document.title = "Sign up for an account"
    return(
        <Container>
            <Row>
                <Col md={{ span: 4, offset:4 }}>
                    <Form>
                        <h2>Sign up</h2>
                        <Form.Group>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control 
                                name="email"
                                type="email"
                                placeholder="user@domain.com"
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                name="password"
                                type="password"
                                placeholder="minimum 8 characters"
                                required
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Sign up
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}