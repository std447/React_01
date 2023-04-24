import {Row,Col} from "reactstrap";
import { Link,useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return(
    <>
    <Row className="container w-50 mx-auto mt-5">
    <Col className="d-flex flex-column align-items-center">
      <h1>Oops!<br/>404 Page Not available</h1>
      <p>Error:
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/">Back to Search</Link>
    </Col>
    </Row>
    </>
  )
}

export default ErrorPage;