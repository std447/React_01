import { createContext } from "react"


export const theme = {
  light:{
    backgroundColor:"#eee",
    color:"#333"
  },
  dark:{
    backgroundColor:"#333",
    color:"#eee"
  }
}

export const themeContext = createContext(theme.light);
export const ThemeProvider = themeContext.Provider;
export const ThemeConsumer = themeContext.Consumer;


