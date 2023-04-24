import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import HomeV1 from "./Practice/react-route/indexv1";
import AboutV1 from "./Practice/react-route/aboutv1";
import Page404 from "./Practice/react-route/404Page";
import ProfilesPage from "./Practice/Userprofile";
import IndividualUser from "./Practice/Userprofile/user";

import QueryParam01 from "./Practice/queryParam/index";
import Result01 from "./Practice/queryParam/index-v2";
import QueryParamEx from "./Practice/queryParam/1.query-params-ex";
import QueryParamEx03 from "./Practice/queryParam/3.queryParam-ex";
import GithubProfilerNavigator from "./Practice/GithubProfiler/Navigation/Navigation.Layout";
import AComp from "./Practice/Context-Api/a";

function App() {
  return (
    <>
      <GithubProfilerNavigator />
      <ToastContainer />
    </>
  );
}

export default App;
