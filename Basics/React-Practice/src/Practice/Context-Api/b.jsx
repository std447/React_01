import C from "./c";
import { useContext } from "react";
import { nameContext,cityContext } from "./a";
const B = () => {
  const uName = useContext(nameContext);
  const uCity = useContext(cityContext);
  return(
    <>
    <h3>B:{uName} City:{uCity}</h3>
    <C />
    </>
  )
}

export default B;