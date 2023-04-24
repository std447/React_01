import { useEffect, useState } from "react";
import { useParams,Outlet,NavLink } from "react-router-dom";
import { searchUserDetails } from "./User.API";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  CardText,
  Nav,
} from "reactstrap";
import HeaderComponent from "./User.Header";
import {BsFillPeopleFill} from "react-icons/bs";
import {TiMediaRecord} from "react-icons/ti"

const UserPage = () => {
  const [profile, setProfile] = useState({});
  const { id } = useParams();
  useEffect(() => {
    searchUserDetails(id).then((data) => setProfile(data));
    console.log({profile});
  }, [id]);


  const navlinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "",
    };
  }

  return (
    <>
      <div className="container-fluid">
        {/* Header start */}
        <Row>
          <HeaderComponent />
        </Row>
        {/* Header end */}
      </div>

      <Container>
        <Row>
          {/* sidebar start */}
          <Col xs="3" className="border border-black">
            <Card className="my-2" color="light" outline>
              <img
                className="border border-black m-3"
                style={{
                  borderRadius: "50%",
                }}
                alt="Avatar"
                src={profile.avatar_url}
              />
              <CardBody className="mx-1">
                <CardTitle tag="h5">{profile.name}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  {profile.login}
                </CardSubtitle>
                <Button className="w-100">Follow</Button>
                {
                  (profile.bio)?(<CardText>{profile.bio}</CardText>):(<></>)
                }

                <CardText className="d-flex align-items-center" >
                  <BsFillPeopleFill color="grey" />&nbsp;{profile.followers} followers &nbsp;<TiMediaRecord size="5" />&nbsp;{profile.following} following </CardText>
              </CardBody>

            </Card>
          </Col>
          {/* sidebar end */}

          <Col xs="9" className="border border-black">
            <Nav className="d-flex">
             
                <NavLink style={navlinkStyle}  className="mx-3 px-3" to={`overview`}>Overview</NavLink>
             
                <NavLink style={navlinkStyle} className="mx-3 px-3" to={`repos`}>Repositories</NavLink>
             
                <NavLink style={navlinkStyle} className="mx-3 px-3" to={`followers`}>Followers</NavLink>
              
            </Nav>
            <Row>
              <Outlet />
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UserPage;
