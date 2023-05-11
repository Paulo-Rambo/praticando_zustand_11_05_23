import { useState } from "react";
import { useToDoStore } from "../stores/useToDoStore";

export default function TodoCreateForm() {
  const [newValue, setNewValue] = useState("");
  const { addToDo, toDoList } = useToDoStore(({ addToDo, toDoList }) => ({
    addToDo,
    toDoList,
  }));
  const handleChange = (event: any) => {
    setNewValue(event.target.value);
  };
  function formHandleSubmit(event: any) {
    event.preventDefault();
    let newId = 0;
    if (toDoList.length === 0) {
      newId = 1;
    } else {
      newId = toDoList[toDoList.length - 1].id + 1;
    }
    addToDo({ id: newId, name: newValue });
    setNewValue("");
  }
  return (
    <div>
      <form onSubmit={formHandleSubmit}>
        <input type="text" value={newValue} onChange={handleChange} id="task" />
        <button type="submit">Criar tarefa</button>
      </form>
    </div>
  );
}
