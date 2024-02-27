import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'

import { add } from '../store'

export function AddTodo() {
  const [newTodo, setNewTodo] = useState('')

  const dispatch = useDispatch()

  function handleNewTodo(e: FormEvent) {
    e.preventDefault()

    dispatch(add({ newTodo }))

    setNewTodo('')
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
