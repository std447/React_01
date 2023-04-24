import { createContext, useState } from "react";
import B from "./b";

export const nameContext = createContext(null);
export const cityContext = createContext(null);

const NameProvider = nameContext.Provider;
export const NameConsumer = nameContext.Consumer;

const CityProvider = cityContext.Provider;
export const CityConsumer = cityContext.Consumer;

const AComp = () => {
  const [uName, setUName] = useState("");
  return(
    <>
     <CityProvider value="jabalpur">
      <NameProvider value={uName}>
        <p>A</p>
        <input value={uName} onChange={(e) => setUName(e.target.value)} />
        <B />
      </NameProvider>
    </CityProvider>
    </>
  )
}

export default AComp;