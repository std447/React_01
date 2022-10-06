
import { useEffect } from 'react'
import {Link, useNavigate} from 'react-router-dom'

const QueryParam01 = () => {

  const navigate = useNavigate()
  // useEffect(()=>{
  //   navigate('/details')
  // },[])
  

  return(
    <>
    <h1>"Practice Query Params"</h1>

    <Link to="/details">Details</Link><br />
    <Link to="/details?query=10">Number</Link><br />
    <Link to="/details?query=IPhone">Mobile</Link><br />
    <Link to="/details?query=Monday">Day</Link><br />

    </>
  )

}

export default QueryParam01;