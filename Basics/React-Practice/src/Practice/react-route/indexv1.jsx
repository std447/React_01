import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const HomeV1 = () => {

  useEffect(()=>{
    console.log("Home is rendering")

    return() => {
      console.log("Home is unmounting")
    }

  },[])

  return(
    <>
    <p>Welcome to home Screen</p>
    <Link to={"/about"}>About</Link>
    </>
  )
}

export default HomeV1;