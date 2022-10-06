import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "reactstrap";
import IndividualUser from "./user";

const url = "https://jsonplaceholder.typicode.com/users";

const ProfilesPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    axios
      .get(url)
      .then(({ data }) => {
        setUsers(data);
        console.log(data);
      })
      .catch((err) => console.log("Error", err));
  };

  return (
    <>
      <Container>
        {users.map((item) => {
          const { id, name, details } = item;
          return (
            <div key={id}>
              <Link to={`${id}/${name}`}>{name}</Link>
            </div>
          );
        })}
      </Container>
    </>
  );
};

export default ProfilesPage;
