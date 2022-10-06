import { themeContext } from "../../context"
import {useContext} from "react"
import ThemeButton from "./themeButton";

export default function MyName(){

  const userTheme = useContext(themeContext);
  
  return(
  <>
    <p style={userTheme}>My name is Chinmay</p>
    <ThemeButton />

  </>
  )
}