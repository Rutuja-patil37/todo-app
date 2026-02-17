export default function TodoForm({ title, setTitle, addTodo }) {
  return (
    <div>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
}
