import { FormEvent, useState } from 'react'

export function AddTodo() {
  const [newTodo, setNewTodo] = useState('')

  function handleNewTodo(e: FormEvent) {
    e.preventDefault()

    console.log(newTodo)
  }

  return (
    <form onSubmit={handleNewTodo}>
      <input
        type="text"
        placeholder="New task"
        onChange={(e) => setNewTodo(e.target.value)}
        value={newTodo}
      />
      <button type="submit">Add</button>
    </form>
  )
}
