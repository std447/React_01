import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getUserDetails } from './route'

import { Spinner } from 'reactstrap';
 
const UserDetails = () => {

  const [user,setUser] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    (async ()=>{
      const usersResponse = await getUserDetails(id);
      setUser(usersResponse);
      console.log(usersResponse)
    })();
  },[])

  if (user===null){
    return(
      <Spinner>Loading...</Spinner>
    )
  }
  const {name,email} = user;
  // console.log("UserDetails Rendering")
  return (
    <>
      <p>{name}</p>
      <p>{email}</p>
      <p></p>
    </>
  )
}

export default UserDetails;