import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import {
  Container,
  Input,
  Row,
} from "reactstrap";
import LikeButton2 from "./Components/likeButton2";
import LikeButton from "./Components/likeButton";

const baseUrl = "https://jsonplaceholder.typicode.com/users";

const UserProfile2 = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [searchFilter, setSearchFilter] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    axios.get(`${baseUrl}`).then((response) => {
      console.log(response.data);
      setUsers(response.data);
      setSearchFilter(response.data);
    });
  };

  const handleSearch = ({ target: { value } }) => {
      const filteredUsers = users.filter(({name}) => {
       return name.toLowerCase().includes(value.toLowerCase());
      });
      console.log("Users",users)
      console.log("filter",filteredUsers)
      setSearch(value);
      setSearchFilter(filteredUsers)
    };
  

  console.log("Render")

  return (
    <>
      <Input
        type="search"
        value={search}
        placeholder="Search Here"
        onChange={handleSearch}
      />

      <Container>
        {searchFilter.map((user) => {
          const { id, name, username, email, address } = user;
          const {} = address;
          return (
            <>
              <Container key={id}>
                <Row>{name}</Row>
                <LikeButton2 />
              </Container>
                
              
            </>
          );
        })}
        
      </Container>
    </>
  );
};

export default UserProfile2;
