import { useContext, useState } from "react"
import { Button } from "reactstrap"
import { themeContext } from "../../context"

// const applyTheme = useContext(themeContext)
 const ThemeButton = () => {
  const uTheme = useContext(themeContext)
  const [theme,setTheme] = useState("Light")

  const _handleClick = () => {
    setTheme((theme=="Light")? "Dark":"Light")
    console.log(theme);

  }


  return (
    <>
    <Button  onClick={_handleClick}>{theme}</Button>
    </>
  )
}
export default ThemeButton;