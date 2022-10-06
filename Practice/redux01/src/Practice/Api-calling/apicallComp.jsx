import { useDispatch, useSelector } from "react-redux";
import { request } from "./apicallSlice";




const ApiCallComp = () => {

  const data = useSelector((state)=>{
    return state.apicallSlice;
  })
  console.log("@CC Data",data)

  const dispatch = useDispatch()
  const _handleClick = () => {
    dispatch(request());
  }

  return(
    <>
      <button onClick={_handleClick}>Get Data</button>

    </>
  )
}

export default ApiCallComp;