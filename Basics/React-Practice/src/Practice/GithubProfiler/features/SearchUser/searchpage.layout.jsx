import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { InputGroup, Input,Button, Row } from "reactstrap";


const Search = () => {
  const [search,setSearch] = useState("");
  const navigate = useNavigate();
  const onSearch = () =>{
    if(!search){
      toast.warn("Please enter a user name to search!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }
    navigate(`/users/${search}`);
  }

  return(
    <>
    <Row className="container my-5 py-5"></Row>
    <Row className="container w-50 mx-auto my-5 pt-5 ">
      <InputGroup size="lg" >
        <Input placeholder="Search User Here" value={search} onChange={(e)=>setSearch(e.target.value)}/>
        <Button onClick={onSearch} >Search</Button>
      </InputGroup>
    </Row>

    </>
  )
};

export default Search;
