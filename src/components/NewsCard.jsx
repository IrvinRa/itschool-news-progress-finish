import { Card } from "react-bootstrap";

export function NewsCard(props) {
  const { newsItem } = props;
  const { id, image, title, description } = newsItem;
  return (
    <Card className='h-100'>
      <Card.Img variant='top' src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}
