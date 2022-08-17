import { Button } from "reactstrap"
import { useState, memo } from "react"


function LikeButton2() {
  const [fav,setfav] = useState({
    label:"Unfav",
    color:"danger"
  })
  console.log("LikeButton")
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

export default memo(LikeButton2)