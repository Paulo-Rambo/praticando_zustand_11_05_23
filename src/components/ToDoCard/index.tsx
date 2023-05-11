import { ITask, useToDoStore } from "../stores/useToDoStore";
interface ITaskCardProps {
  task: ITask;
}

export default function ToDoCard({ task }: ITaskCardProps) {
  const removeTask = useToDoStore((store) => store.removeToDo);
  return (
    <div>
      <span>{task.name}</span>
      <button onClick={() => removeTask(task.id)}>Remover</button>
    </div>
  );
}
