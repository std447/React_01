import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeV1 from "./Practice/react-route/indexv1";
import AboutV1 from "./Practice/react-route/aboutv1";
import Page404 from "./Practice/react-route/404Page";
import ProfilesPage from "./Practice/Userprofile";
import IndividualUser from "./Practice/Userprofile/user";

import QueryParam01 from "./Practice/queryParam/index"
import Result01 from "./Practice/queryParam/index-v2";
import QueryParamEx from "./Practice/queryParam/1.query-params-ex";
import QueryParamEx03 from "./Practice/queryParam/3.queryParam-ex";


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<ProfilesPage />}></Route>
        <Route path="/:id/:name" element={<IndividualUser />}></Route> */}

        <Route path='/' element={<QueryParam01 />}></Route>
        <Route path='details' element={ <Result01 />}> </Route>
        <Route path='/search' element = {<QueryParamEx />}></Route>
        <Route path='/query' element={<QueryParamEx03 />}></Route>
      </Routes>
    </BrowserRouter>
     
    </>
  );
}

export default App;
