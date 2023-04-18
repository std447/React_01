import { useMemo } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

const QueryParamEx = () => {

  const {search} = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const uName = new URLSearchParams(search).get("name");
  const uCity = new URLSearchParams(search).get("city");
  const uState = new URLSearchParams(search).get("state");

  // console.log({ uName, uCity, uState });
  const obj2 = () => useMemo(() => {
    return Object.fromEntries(new URLSearchParams(searchParams));
  },[]);

  const keysArray = () => useMemo(()=>{},[obj2]);
   

  
    
    for (let i in obj2){
      console.log(`${[i]}:${obj2[i]}`)
    }
  
  


  console.log(obj2);
  return (
    <>
    <p>React Query Param example</p>
      {
        Object.keys(obj2).map((item) =>{
          return(
            <p id={item}>
              {item}:{obj2[item]}
            </p>
          )
        })
      }
    </>
  )
};

export default QueryParamEx;

/**
 * explore - react-router-dom
 * using use memo
 */

/** Task : 
 *  
 */