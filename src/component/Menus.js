import { Col, Card, } from 'react-bootstrap'

const Menus = ({ menu }) => {
    return (
        <Col md={4} xs={6} className="mb-4">
            <Card >
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{menu.nama}</Card.Title>
                    <Card.Text>
                        Rp. {menu.harga}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Menus
