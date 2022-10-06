import { Route, Routes } from "react-router-dom";
import UserDashBoard from "../features/Users";
import UserDetails from "../features/Users/GetDetails";

const Navigation = () => {
  // console.log("Navigation Rendering")
  return (
    <>
      <Routes>
        <Route path="/" element={<UserDashBoard />} />
        <Route path="/details/:id" element={<UserDetails />} />
      </Routes>
    </>
  );
};

export default Navigation;
