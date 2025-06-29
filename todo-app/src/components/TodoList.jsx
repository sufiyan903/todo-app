import TodoItem from "./TodoItem";

export default function TodoList({ todos, toggleTodo, deleteTodo, editTodo }) {
  return (
    <ul className="w-full max-w-md">
      {todos.length === 0 ? (
        <li className="text-center italic text-white">No tasks found.</li>
      ) : (
        todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            index={index}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        ))
      )}
    </ul>
  );
}
