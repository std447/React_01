import { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { Card, CardBody, CardImg, CardText, CardTitle, Input, Row } from "reactstrap";

import MyAvatar from "./Components/avatar";
import LikeButton from "./Components/likeButton";
import SearchBar from "./Components/Search";
import LikeButton2 from "./Components/likeButton2";
import { useCallback } from "react";

const baseUrl = "https://jsonplaceholder.typicode.com/users";

export default function UserProfile() {
  const [users, setUsers] = useState([]);
  const [search,setSearch] = useState("");
  const[searchList,setSearchList]=useState([]);

  useEffect(() => {
    axios
      .get(`${baseUrl}`)
      .then((response) => {console.log(response.data);setUsers(response.data);setSearchList(response.data)})
      .catch((err) => console.log("Error: ", err));
  }, []);

// If 


  useEffect(()=>{
    console.log("Search",search)
    // if(search.length==0) {
      // axios
      // .get(`${baseUrl}`)
      // .then((response) => {console.log(response.data);setUsers(response.data);setSearchList(response.data)})
      // .catch((err) => console.log("Error: ", err));
      // return}

    const filteredList = searchList.filter((user)=>{
      const {name} = user;
      return name.toUpperCase().includes(search.toUpperCase())
      })

      setUsers(filteredList)

  },[search])

  const blankFun = useCallback(()=> {
    
  },[])

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
                <CardImg></CardImg>
                <CardBody>
                  <CardText>{username}</CardText>
                  <CardTitle tag="h5">{name}</CardTitle>
                </CardBody>
                <LikeButton2 onclick={blankFun}/>
              </Card>
            </Fragment>
          );
        })}
      </div>
    </>
  );
}
