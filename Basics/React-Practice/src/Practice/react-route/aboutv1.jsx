import { Link } from 'react-router-dom'

const AboutV1 =  () => {


  const mouseMove = (event) => {
    console.log(event);
}

  useEffect(()=>{
    console.log("Home is rendering")

    return() => {
      console.log("Home is unmounting")
    }

  },[])

  return(
    <>
    <p>About Us</p>
    <Link to={"/"}>Home</Link>
    </>
  )
}

export default AboutV1;