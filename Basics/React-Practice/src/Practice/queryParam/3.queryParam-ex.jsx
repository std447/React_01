import { useSearchParams, Link } from "react-router-dom";
import { useMemo } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

const QueryParamEx03 = () => {
  const [searchParams, setSearchParams] = useSearchParams({});
  const parsedQueries = useMemo(() => {
    const obj = new URLSearchParams(searchParams);

    const result = [];
    obj.forEach((value, key) => {
      result.push({ key, value });
    });

    return result;
  }, []);

  const clear = (e) => {
    parsedQueries.length = 0;
    setSearchParams({});
  }

  console.log("@CC",parsedQueries);

  return (
    <>
      <button onClick={(e)=>setSearchParams({myname:'Chinmay'})}>Chinmay</button>
      <button onClick={(e)=>setSearchParams(...parsedQueries,{city:'Vaijapur'})}>Vaijapur</button>
      <button onClick={(e)=>clear(e)}>Clear</button>

    </>
  );
};

export default QueryParamEx03;
