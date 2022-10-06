import { ADDNOTE,DELETENOTE, EDITNOTE } from "./action";

const initialState = [];

const NoteReducer = (state=initialState,action) => {

 const copyState = [...state];
  console.log("@CC action",action.payload)

  switch(action.type){
    case ADDNOTE:
      return [...state,action.payload]
    case DELETENOTE:
      return action.filteredState
    case EDITNOTE:
      
    default: return state
  }




  return state;

}

export default NoteReducer;