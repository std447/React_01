import { Container, Row, Col, Card, CardBody, CardText } from "reactstrap";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { userFollower } from "./userFollower.API";

const FollowersPage = () => {
  const [followers, setFollowers] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    userFollower(id).then((data) => setFollowers(data));
  }, [id]);

  return (
    <>
      <Container>
        <h3 className="my-2 mx-1">Followers</h3>
        <Row xs="1">
          {followers.map((follower) => {
            const { id, login, avatar_url } = follower;
            return (
              <>
                <Col key={id}>
                  <Card className="d-flex flex-row align-items-center">
                    <img
                      width="40"
                      height="40"
                      alt={login}
                      src={avatar_url}
                      className="border border-light mx-2"
                      style={{
                        borderRadius: "50%",
                      }}
                    />
                    <CardBody>
                      <CardText>{login}</CardText>
                      
                    </CardBody>
                  </Card>
                </Col>
              </>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default FollowersPage;
