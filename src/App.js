import React, { useState } from 'react'
 import Input from './Components/Input'
const App = () => {
  const [todo, setTodo] = useState("")
  return (
    <div>
      <Input todo={todo} setTodo={setTodo} />
      hii Lavi my Baby
    </div>
  )
}

export default App
