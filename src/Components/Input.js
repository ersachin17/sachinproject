import React, { useState } from 'react'

const Input = ({todo, setTodo}) => {
  return (
    <div>
      <form>
        <input type='text' placeholder='New List Name' value={todo} onChange={(e)=> setTodo(e.target.value)} />
        <textarea />
        <select>
            <option>medium</option>
            <option>low</option>
            <option>high</option>
        </select>
        <select>
            <option>added</option>
            <option>added</option>
        </select>
        <button>Add List</button>
      </form>
    </div>
  )
}

export default Input
