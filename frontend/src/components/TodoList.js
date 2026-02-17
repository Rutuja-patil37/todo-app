export default function TodoList({ todos }) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo._id}>
          {todo.title} - {todo.status}
        </li>
      ))}
    </ul>
  );
}
