import { useState } from "react";

export default function TodoItem({ todo, index, toggleTodo, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const saveEdit = () => {
    if (!editText.trim()) return;
    editTodo(index, editText);
    setIsEditing(false);
  };

  return (
    <li className="flex justify-between items-center bg-white text-black shadow p-3 mb-2 rounded">
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={saveEdit}
          onKeyDown={(e) => e.key === "Enter" && saveEdit()}
          className="flex-1 mr-4 border rounded px-2 py-1"
          autoFocus
        />
      ) : (
        <span
          onClick={() => toggleTodo(index)}
          className={`flex-1 cursor-pointer ${
            todo.completed ? "line-through text-gray-500" : ""
          }`}
        >
          {todo.text}
        </span>
      )}

      <div className="flex gap-2">
        <button onClick={() => setIsEditing(!isEditing)} className="text-blue-500 hover:text-blue-700">
          ✏️
        </button>
        <button onClick={() => deleteTodo(index)} className="text-red-500 hover:text-red-700">
          ❌
        </button>
      </div>
    </li>
  );
}
