import { useState } from "react";
import { Input, Row } from "reactstrap";


export default function SearchBar(){

  const [search,setSearch] = useState("");

  return(
    <>
    <Row>
      <Input 
      placeholder="Search Here"
      value={search}
      onChange={e=>setSearch(e.target.value)}
      
      />
    </Row>
   

    
    </>
  )
}