// import React from 'react'
// import { TodoContext, TodoContextType } from '../contexts/TodoContext'

// // interface Props{
// //     todo: string
// //     setTodo: React.Dispatch<React.SetStateAction<string>>
// //     handleSubmit: (event: React.FormEvent) => void
// // }

// const InputForm: React.FC = () => {
//     const {todo, setTodo, handleSubmit} = React.useContext(TodoContext) as TodoContextType;

//   return (
//     <form onSubmit={handleSubmit} className="d-grid mb-5">
//         <input value={todo} onChange={(e) => setTodo(e.target.value)} type="text" className="form-control py-2 mb-3" placeholder="Enter todo..."/>
//         <button type="submit" className="btn btn-success">ADD TODO</button>
//     </form>
//   )
// }

// export default InputForm