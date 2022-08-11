import { useState } from "react";
import { Container, Input, Row, Button } from "reactstrap";
import "./Todo.css";

const ToDoApp = () => {
  const [myTask, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    const newTaskElem = {
      id: new Date().getTime(),
      title: newTask,
      timeStamp: new Date(),
    };

    setTask([...myTask, newTaskElem]);
    setNewTask("");
  };

  const _handleDelete = (id) => {
    const taskListAfterDelete = myTask.filter((item) => {
      if (id != item.id) return item;
    });

    setTask(taskListAfterDelete);
  };

  const _handleEdit = (id) => {
    
    console.log('elemKey',elemKey);
    // const editTask = myTask.splice(elemKey,1)
  };

  const _checkList = ()=>{
    
  }

  return (
    <>
      <Container>
        <Row>
          <label id="h1">Task</label> <br />
          <Input
            name="myTask"
            value={newTask}
            placeholder="Enter myTask"
            onChange={(e) => setNewTask(e.target.value)}
          />
          <Button onClick={handleAddTask}>Add Task</Button>
        </Row>

        <Row></Row>

        <h2>Task List</h2>
        <ul>
          {myTask.map((item) => {
            return (
              <>
                <div>
                    <input type="checkbox" name="check" onSelect={()=> _checkList(item.id)} />
                  <li key={item.id}>{item.title}</li>
                </div>
                <Button onClick={() => _handleDelete(item.id)}>Delete</Button>
                <Button onClick={() => _handleEdit(item.id)}>Edit</Button>
              </>
            );
          })}
        </ul>
      </Container>
    </>
  );
};

export default ToDoApp;
