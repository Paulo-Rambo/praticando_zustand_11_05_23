import "./App.css";
import ToDoList from "./components/ToDoList";
import TodoCreateForm from "./components/TodoCreateForm";

function App() {
  return (
    <div className="App">
      <TodoCreateForm />
      <ToDoList />
    </div>
  );
}

export default App;
