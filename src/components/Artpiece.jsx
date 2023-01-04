import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

export default function Artpiece({ artpieces, search }) {

    return (
        <Row xs={1} md={2} className="g-4 d-flex justify-content-around">
            {artpieces.filter((artwork) => {
                return search.toLowerCase() === '' ? artwork : artwork.title.toLowerCase().includes(search)
            }).map(artwork =>
                <Card key={artwork.id} style={{ width: '50vh' }} className='p-0'>
                    <Card.Img
                        variant="top"
                        src={artwork.primaryimageurl} />
                    <Card.Body>
                        <Card.Title>{artwork.title}</Card.Title>
                        <Card.Text>
                            {artwork.medium}
                        </Card.Text>
                        <Button variant="primary">I like it!</Button>
                    </Card.Body>
                </Card>
            )}
        </Row>
    );
}
