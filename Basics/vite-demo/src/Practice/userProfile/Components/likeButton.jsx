import { Button } from "reactstrap"
import { useState } from "react"


export default function LikeButton() {
  const [fav,setfav] = useState({
    label:"Unfav",
    color:"danger"
  })

  const {label,color} = fav;

  const handleFavorate = () =>{
    if(label!="Fav"){
      setfav(prevValues=>{return {...prevValues,label:"Fav",color:"success"}})}
      else{
        setfav(prevValues=>{return {...prevValues,label:"UnFav",color:"danger"}})}
      }
  

  return(
    <>
    
    <Button style={{maxWidth:"100px"}}color={color} onClick={handleFavorate}>{label}</Button>
    

    </>
  )
}