import { useSelector } from "react-redux";
import { Container, Card, CardTitle, CardGroup, CardText } from "reactstrap";

const Summary = () => {
  const select = useSelector((state) => {
    return state.ProductReducer;
  });

  // console.log("@CC select:", select);

  let result = 0;
  for (let i = 0; i < select.length; i++) {
    const { qty, price } = select[i];
    result += qty * price;
  }

  return (
    <Container>
      <h1>Summary</h1>
      {select.map((item) => {
        const { id, title, qty, price } = item;
        return (
          <div key={id}>
            <h2>{title}</h2>
            <div>
              <span>Qty:{qty}</span>
              <span>Price: ${qty * price}/-</span>
            </div>
          </div>
        );
      })}
      <hr />
      <h1>Total: {result}</h1>
    </Container>
  );
};

export default Summary;
