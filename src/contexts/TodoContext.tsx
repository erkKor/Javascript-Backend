import { createContext, useState, useContext } from "react";
import { Todo } from "../models/todoModel";

export interface TodoContextType{
    todo: string
    todos: Todo[]
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleSubmit: (e: React.FormEvent ) => void
}


export const TodoContext = createContext<TodoContextType | null>(null);

export const useTodoContext = () => {
    return useContext(TodoContext)
}

const TodoProvider = ({children} : any) => {
    const [todo, setTodo] = useState<string>('')
    const [todos, setTodos] = useState<Todo[]>([])

    const handleSubmit = (e: React.FormEvent ) => {
        e.preventDefault()

        setTodos(currentTodos => [...currentTodos, {id:Date.now(), text: todo, isCompleteed: false}])
        setTodo('')
    }

    return (
        <TodoContext.Provider value={{todo, setTodo, todos, handleSubmit}}>
            {children}
        </TodoContext.Provider>
    )

}

export default TodoProvider;