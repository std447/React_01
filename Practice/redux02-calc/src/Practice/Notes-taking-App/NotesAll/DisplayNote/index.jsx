import { useDispatch, useSelector } from "react-redux";
import { Card, CardGroup, CardText, CardTitle } from "reactstrap";
import { DELETENOTE, EDITNOTE } from "../AddNote/action";
import React from "react";

const DisplayNotes = () => {
  const notes = useSelector((state) => {
    return state.NoteReducer;
  });

  
  const dispatch = useDispatch();
 
  const _handleChange = () => {

  }
  const editTodo = (id) => {
    const editedTodo = notes.filter((todo)=>{
      return todo.id === id
    })

    setDisplay()
    

    // const titleLabel = React.createElement("label",{},"Title");
    // const title = React.createElement("input",{name:"title", value:editedTodo[0].title,onChange:_handleChange})
    // const descLabel = React.createElement("label",{},"Description");
    // const desc = React.createElement("input",{name:"desc", value:editedTodo[0].desc,onChange:_handleChange})
    // const createDiv = React.createElement("div",{},[titleLabel,title,descLabel,desc])
    
  };

  const deleteTodo = (id) => {
    const filteredTodo = notes.filter((todo) => {
      return todo.id !== id;
    });

    console.log("@CC ln17",filteredTodo);
    dispatch({type:DELETENOTE,filteredState:filteredTodo})
  };

  return (
    <>
      <h1>Notes</h1>
      {notes.map((note) => {
        const { id, title, desc } = note;
        return (
          <Card key={id}>
            <CardTitle>{title}</CardTitle>
            <CardText>{desc}</CardText>
            <CardGroup>
              <button onClick={() => editTodo(id)}>Edit</button>
              <button onClick={() => deleteTodo(id)}>Delete</button>
            </CardGroup>
            <div className="display" >
            <form onSubmit={updateNote}>
      <label htmlFor="title">Title</label>
      <input
        id="title"
        name="title"
        type="text"
        value={notes.title}
        onChange={_handleChange}
      />
      <br />
      <label htmlFor="desc">Description</label>
      <input
        id="desc"
        name="desc"
        type="text"
        value={notes.desc}
        onChange={_handleChange}
      />
      <button>Submit</button>
    </form>
            </div>
          </Card>
        );
      })}
    </>
  );
};

export default DisplayNotes;
