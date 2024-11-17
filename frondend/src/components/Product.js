import Rating from "./Rating";
import { Link } from "react-router-dom";
import  Card  from "react-bootstrap/Card";
import CardBody from "react-bootstrap/CardBody";
import  Button  from "react-bootstrap/Button";
 function Product(props) {
    const { product } = props;

    return (

        <Card key={product.slug}>
            <Link to={`/product/${product.slug}`}>
                <img src={product.image} alt={product.name} className="card-im-top" />
            </Link>

            <CardBody>
                <Link to={`/product/${product.slug}`}>
                    <Card.Title> <strong>{product.name}</strong></Card.Title>
                </Link>
                <Rating rating={product.rating} numReviews={product.numReviews}/>
                
                <Card.Text><p>${product.price}</p></Card.Text>
                <Button className="bg-warning text-black border-warning">Add to cart</Button>
            </CardBody>
        </Card>

    )
}

export default Product;