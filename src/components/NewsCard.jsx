import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { newsCard } from "./NewsCard.module.css";

export function NewsCard(props) {
  const { newsItem } = props;
  const { id, image, title, description } = newsItem;
  return (
    <Card className={"h-100 " + newsCard}>
      <Link to={`/news/${id}`} className='text-dark'>
        <Card.Img variant='top' src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Link>
      <Button variant='light'>
        <span className='material-icons text-dark'>close</span>
      </Button>
    </Card>
  );
}
