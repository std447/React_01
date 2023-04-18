import { useMemo } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

const QueryParamsExample = () => {
  //const { search } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const parsedQueries = useMemo(() => {
    const obj = new URLSearchParams(searchParams);

    const result = [];
    obj.forEach((value, key) => {
      result.push({ key, value });
    });

    return result;
  }, []);

  console.log(parsedQueries);

  /* const obj2 = () =>
    useMemo(() => {
      return Object.fromEntries(new URLSearchParams(searchParams));
    }, []); */

  return (
    <>
      <p>Query params example page</p>
      {parsedQueries.map((item) => {
        return (
          <p key={item.key}>
            {item.key}: {item.value}
          </p>
        );
      })}
    </>
  );
};

export default QueryParamsExample;
