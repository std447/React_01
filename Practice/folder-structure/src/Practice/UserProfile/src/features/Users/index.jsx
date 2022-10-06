import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Spinner } from "reactstrap";
import { getAllUsers } from "./GetAll/route";
import './style.css'

const UsersDashBoard = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    (async () => {
      const userResponse = await getAllUsers();
      setUsers(userResponse);
    })();
  }, []);

  if (users === null) {
    return <Spinner>Loading...</Spinner>;
  }

  // console.log("UserDashboard rendering")

  return (
    <>
      <div className="container">
        <h1>Users List</h1>
        <ol>
          {users.map((item) => {
            return (
              <li key={item.id}>
                <Link to={`details/${item.id}`}>{item.name}</Link>
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
};

export default UsersDashBoard;
