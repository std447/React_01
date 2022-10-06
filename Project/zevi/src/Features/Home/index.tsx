import { useState } from "react";
import { Input } from "reactstrap";
import DropDown from "../Dropdown";
import './style.css'


const HomePage = (props:any) => {
  const {} = props;

  const [show,setShow] = useState(false);

  const handleClick = () => {
    show === false? setShow(true):setShow(false);
  }

  return (
    <>
      <Input
      id="exampleSearch"
      name="search"
      placeholder="search placeholder"
      type="search"
      onClick={handleClick}
    />

    <DropDown />



    </>
  )
}
export default HomePage;