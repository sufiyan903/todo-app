import { useState } from "react";

export default function TodoForm({ addTodo }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a task..."
        className="text-black border px-4 py-2 rounded w-64"
      />
      <button
        type="submit"
        className="bg-white text-indigo-600 px-4 py-2 rounded hover:bg-gray-100"
      >
        Add
      </button>
    </form>
  );
}
