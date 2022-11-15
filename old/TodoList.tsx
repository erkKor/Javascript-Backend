import React from 'react'
import { TodoContext, TodoContextType} from '../contexts/TodoContext'
import { Todo } from '../models/todoModel'

const TodoList: React.FC = () => {
    const {todos} = React.useContext(TodoContext) as TodoContextType
 
  return (
    <div className="mt-3">
        <div className="text-muted mb-2"><small>Todo Items:</small></div>
        <div>
           {
           todos.map((item: Todo)=>(<div key={item.id} className="mb-3">{item.text} ({ item.isCompleteed ? "Completed": "Not Completed"})</div>))
           }
        </div>
    </div>
  )
}

export default TodoList