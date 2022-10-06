import axios from "axios";
import { useMemo, useEffect, useState } from "react";
import { Card, CardSubtitle, Container, Input } from "reactstrap";
import LikeButton2 from "./Components/likeButton2";

const baseUrl = "https://jsonplaceholder.typicode.com/users";

const UserProfile02 = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadData();
  }, []);

  function loadData() {
    axios.get(`${baseUrl}`).then(({ data }) => {
      console.log(data);
      setUsers(data);
    });
  }

  const userFilter = useMemo(() => {
    console.log("Inside Handle function");
    const _handleFilter = users.filter(({ name }) => {
      return name.toLowerCase().includes(search.toLowerCase());
    });

    return _handleFilter;
  }, [search, users]);

  return (
    <>
      <Container>
        <Input
          type="search"
          value={search}
          placeholder="Search Here"
          onChange={(e) => setSearch(e.target.value)}
        />
      </Container>

      <Container className="users">
        {userFilter.map((item) => {
          const { name, id } = item;

          return (
            <>
              <Card key={id}>
                <CardSubtitle>{name}</CardSubtitle>
                <LikeButton2 />
              </Card>
            </>
          );
        })}
      </Container>
    </>
  );
};

export default UserProfile02;
