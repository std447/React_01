import MyNav from "./Comp/Nav-bar";
import {theme, ThemeProvider} from "../context"
import MyName from "./Comp/funcComp01";
import { Container } from "reactstrap";

export default function PracticeContext() {

  return(
    <>

    <ThemeProvider value={theme.light}>
    <Container className="mx-3">
    <MyNav />
    <MyName />


    </Container>

    </ThemeProvider>
   
    </>
  )
}