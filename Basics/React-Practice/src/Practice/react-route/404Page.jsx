import { Link } from 'react-router-dom'

const Page404 = () => {
  return(
    <>
    <p>
     Error 404:Page Not found.  
    </p>

    <Link to={"/"}>Return to Home</Link>
    </>
  )
}

export default Page404;