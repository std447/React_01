import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  CardGroup,
  CardText,
  CardTitle,
  Container,
  Button,
} from "reactstrap";
import { INCREMENT, DECREMENT } from "./action";

const ProductList = () => {
  const Prodlist = useSelector((state) => {
    // console.log("ProductReducer",state.ProductReducer)
    return state.ProductReducer;
  });

  console.log({Prodlist})

  const dispatch = useDispatch();
  const increment = (id) => {
    dispatch({ type: INCREMENT, param: id });
  };

  const decrement = (id) => {
    dispatch({ type: DECREMENT, param: id });
  };

  return (
    <>
      <h1>Productlist</h1>
      <Container className="container">
        {Prodlist.map((product) => {
          const { id, title, price, qty } = product;
          return (
            <Card key={id}>
              <CardTitle>{title}</CardTitle>
              <CardText>${price}</CardText>
              <CardGroup>
                <Button onClick={() => decrement(id)}>-</Button>
                <CardText>{qty}</CardText>
                <Button onClick={() => increment(id)}>+</Button>
              </CardGroup>
            </Card>
          );
        })}
      </Container>
    </>
  );
};

export default ProductList;
