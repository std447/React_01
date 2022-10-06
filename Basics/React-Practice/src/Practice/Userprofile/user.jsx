import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "reactstrap";

const url = "https://jsonplaceholder.typicode.com/users";

const IndividualUser = () => {
  const { id, name } = useParams();

  const [user, setuser] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    axios.get(`${url}/${id}`).then(({ data }) => {
      console.log(data);
      setuser(data);
      setIsLoaded(true);
    });
  }, []);

  // const {name: uname, email } = user;
  /**
   * State -
   */

  return (
    <>
      {isLoaded ? (
        <div>
          <p>User id is {id}</p>
          <p>User name is {user.name}</p>
          <p>Email: {user.email} </p>
        </div>
      ) : (
        <Spinner>Loading...</Spinner>
      )}
    </>
  );
};
export default IndividualUser;
