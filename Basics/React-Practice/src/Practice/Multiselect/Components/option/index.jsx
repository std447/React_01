import { useState } from "react";
import {Button} from 'reactstrap'
import { fruits } from "../../data/data";

const OptionMenu01 = () => {
  const [optionList,setOptionList] = useState(fruits);
  const [selected,setSelected] = useState([]);
  const _handleSelect = (id) => {
    const displayopt = optionList.filter((item) => {
      if(!id==item.id) return item;
    })
  }

  return(
      <div className="container">
          {optionList.map((item)=>{
            const {id,fruit} = item;
            return(
              <div key={id}>
                <Button onClick={_handleSelect(id)}>{fruit}</Button>
              </div>
            )            
          })}
      </div>
  )
}

export default OptionMenu01;