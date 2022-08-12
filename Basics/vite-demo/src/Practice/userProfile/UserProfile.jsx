import { useState, useEffect, Fragment } from "react"
import axios from "axios";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";

import MyAvatar from "./Components/avatar";
import LikeButton from "./Components/likeButton";



const baseUrl = "https://jsonplaceholder.typicode.com/users";


export default function UserProfile() {
  const [users,setUsers] = useState([]);

  useEffect(()=>{
    axios.get(`${baseUrl}`)
    .then(response=>setUsers(response.data))
    .catch(err=>console.log("Error: ",err))

   
  },[ {

    
  }])

  const container = {
    display:"flex",
    flexFlow:"row wrap",
    gap:"20px",
    margin:"20px"
  }

  return(
  <>

    

<div style={container}>

      {users.map((user)=>{
        
        const {id,name,username,email, address,company,} = user;

        return (
          <Fragment key={id}>
          <Card style={{width:"16rem"}}>
          <CardBody>
            <CardText>{username}</CardText>
            <CardTitle tag="h5">{name}</CardTitle>
    
          </CardBody>
          <LikeButton />
    
        </Card>
        {/* <div key={(id+Math.random()).toString(6)}>User: {username} is {name}</div> */}
          </Fragment>
          )
        
      })}

     
      
    </div>
  
  </>
  )

}