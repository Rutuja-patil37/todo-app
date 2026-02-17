async function addTodo() {
  const title = document.getElementById("todoInput").value;

  await fetch("http://localhost:5000/api/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title })
  });

  alert("Todo Added");
}
