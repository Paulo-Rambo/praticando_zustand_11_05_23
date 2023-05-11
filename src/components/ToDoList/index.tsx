import ToDoCard from "../ToDoCard";
import { useToDoStore } from "../stores/useToDoStore";

export default function ToDoList() {
  const taskList = useToDoStore((store) => store.toDoList);
  return (
    <div>
      {taskList.length <= 0 ? (
        <></>
      ) : (
        taskList.map((task) => <ToDoCard task={task} />)
      )}
    </div>
  );
}
