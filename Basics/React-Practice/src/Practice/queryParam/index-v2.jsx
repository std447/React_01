import { useSearchParams } from "react-router-dom";

const Result01 = () => {
  const [searchParams] = useSearchParams();
  console.log("Query", searchParams.get("query"));


  return(
    <>
      {searchParams.get("query")}

    </>
  )
}

export default Result01;