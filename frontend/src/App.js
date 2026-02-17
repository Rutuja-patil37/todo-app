import { useEffect, useState } from "react";
import { fetchTodos, createTodo } from "./services/api";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    const res = await fetchTodos();
    setTodos(res.data);
  };

  const addTodo = async () => {
    await createTodo({ title });
    setTitle("");
    loadTodos();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>To-Do App</h2>
      <TodoForm title={title} setTitle={setTitle} addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
