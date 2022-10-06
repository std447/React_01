import { Route, Routes } from "react-router-dom"
import ProductCart from "../Components/Products/GetAll";
import HomePage from "../Features/Home"

const Navigation = () => {

  return (
    <>
    <Routes>
      <Route path="/" element={ <ProductCart />} />
      <Route path="/home" element={ <HomePage />} />
      <Route />
    </Routes>
    </>
  )
}

export default Navigation;