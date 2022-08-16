import { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { Card, CardBody, CardText, CardTitle, Input, Row } from "reactstrap";

import MyAvatar from "./Components/avatar";
import LikeButton from "./Components/likeButton";
import SearchBar from "./Components/Search";

const baseUrl = "https://jsonplaceholder.typicode.com/users";

export default function UserProfile() {
  const [users, setUsers] = useState([]);
  const [search,setSearch] = useState("");

  // useEffect(() => {
  //   axios
  //     .get(`${baseUrl}`)
  //     .then((response) => {console.log(response.data);setUsers(response.data)})
  //     .catch((err) => console.log("Error: ", err));
  // }, []);

// If 
  useEffect(()=>{
    console.log("Search",search)
    if(search.length==0) {
      axios
      .get(`${baseUrl}`)
      .then((response) => {console.log(response.data);setUsers(response.data)})
      .catch((err) => console.log("Error: ", err));
      return}

    const filteredList = users.filter((user)=>{
      const {name} = user;
      return name.toUpperCase().includes(search.toUpperCase())
      })

      

      setUsers((!search)?users:filteredList)

  },[search])

 

  const container = {
    display: "flex",
    flexFlow: "row wrap",
    gap: "20px",
    margin: "20px",
  };

  return (
    <>
    <Row>
      <Input 
      placeholder="Search Here"
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
      />
    </Row>

      <div style={container}>
        {users.map((user) => {
          const { id, name, username, email, address, company } = user;

          return (
            <Fragment key={id}>
             
              <Card style={{ width: "50%" }}>
                <CardBody>
                  <CardText>{username}</CardText>
                  <CardTitle tag="h5">{name}</CardTitle>
                </CardBody>
                <LikeButton />
              </Card>
              {/* <div key={(id+Math.random()).toString(6)}>User: {username} is {name}</div> */}
            </Fragment>
          );
        })}
      </div>
    </>
  );
}
