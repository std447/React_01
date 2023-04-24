import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Search from "../features/SearchUser/searchpage.layout";
import UserPage from "../features/User/User.layout";
import ErrorPage from "./404.Error";
import OverviewComp from "../features/User/User.Overview";
import RepoPage from "../features/Repo/repopage.layout";
import FollowersPage from "../features/Followers/followers.layout";


const router = createBrowserRouter([
 {
  path:'/',
  element:<Search />,
  errorElement:<ErrorPage />
 },
 {
  path:'/users/:id',
  element:< UserPage />,
  children:[
    {
      path:'overview',
      element:<OverviewComp />
    },
    {
      path:'followers',
      element:<FollowersPage />
    },
    {
      path:'repos',
      element:<RepoPage />
    }
  ]
 }
  ]);


const GithubProfilerNavigator = () => {
  return <RouterProvider router={router} />
}

export default GithubProfilerNavigator;