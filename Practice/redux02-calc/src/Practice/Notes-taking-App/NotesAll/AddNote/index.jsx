import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ADDNOTE,DELETENOTE,EDITNOTE } from "./action";
import { Card, CardGroup, CardText, CardTitle } from "reactstrap";


const AddNotes = () => {
  const [notes, setNotes] = useState({
    title: "",
    desc: "",
  });

  const [editing,setEditing] = useState(false)

  const notesList = useSelector((state) => {
    return state.NoteReducer;
  });


  const _handleChange = (e) => {
    const { name, value } = e.target;
    setNotes((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const dispatch = useDispatch();

  const AddTodo = (e) => {
    e.preventDefault();
    const { title, desc } = e.target;
    console.log(title.value, desc.value);
    console.log(notes);
    dispatch({
      type: ADDNOTE,
      payload: { id: new Date().getTime(), ...notes },
    });
    setNotes({
      title: "",
      desc: "",
    });
  };

  const deleteTodo = (id) => {
    const filteredTodo = notesList.filter((todo) => {
      return todo.id !== id;
    });

    console.log("@CC ln17",filteredTodo);
    dispatch({type:DELETENOTE,filteredState:filteredTodo})
  };

  const editTodo = (id) => {
    const editTodoObj = notesList.filter((todo)=>{
      return todo.id === id
    });
    
    setNotes({...notes,title:editTodoObj[0].title,desc:editTodoObj[0].desc})
  }

 

  return (
    <>
    <form onSubmit={AddTodo}>
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
      <button>Add Note</button>

    </form>

    <h1>Notes</h1>
      {notesList.map((note) => {
        const { id, title, desc } = note;
        return (
          <Card key={id}>
            <CardTitle>{title}</CardTitle>
            <CardText>{desc}</CardText>
            <CardGroup>
              <button onClick={() => editTodo(id)}>Edit</button>
              <button onClick={() => deleteTodo(id)}>Delete</button>
            </CardGroup>
          </Card>
        );
      })}
    </>

    

  );
};

export default AddNotes;
