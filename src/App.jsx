import { useMemo, useState } from "react"
import { getVisibleTodos, initialTodos } from "./todos.js"
import AddTodo from "./AddTodo.jsx";
import ListTodo from "./ListTodo.jsx";

function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [isActive, setIsActive] = useState(false);

  const visibleTodos = useMemo(() =>
    getVisibleTodos(todos, isActive), [todos, isActive]
  )

  return (
    <>
      <div>
        <input 
          type="checkbox"
          onChange={(e) => setIsActive(e.target.checked)}
        />
        <label>
          Tampilkan hanya tugas yang aktif
        </label>
      </div>

      <AddTodo 
        onClick={(newTodo) => setTodos([...todos, newTodo])}
      />

      <ListTodo visibleTodos={visibleTodos} />
    </>
  )
}

export default App
