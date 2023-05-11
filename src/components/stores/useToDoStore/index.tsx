import { create } from "zustand";

export interface ITask {
  id: number;
  name: string;
}

interface ITaskStore {
  toDoList: ITask[];
  addToDo: (newToDo: ITask) => void;
  removeToDo: (toDoId: number) => void;
}

export const useToDoStore = create<ITaskStore>((set) => ({
  toDoList: [],
  addToDo: (newToDo) =>
    set(({ toDoList }) => {
      const newToDoList = [...toDoList, newToDo];
      return { toDoList: newToDoList };
    }),
  removeToDo: (toDoId) =>
    set(({ toDoList }) => {
      const newToDoList = toDoList.filter((item) => item.id != toDoId);
      return { toDoList: newToDoList };
    }),
}));
