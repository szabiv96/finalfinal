import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import AddToFavouritePics from './AddToFavouritePics';

export default function Artpiece({ artpieces, search, favPics }) {
    

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
                        <AddToFavouritePics favPics={favPics} artwork={artwork} />
                    </Card.Body>
                </Card>
            )}
        </Row>
    );
}
