import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        
        addTodo(value)
    }
    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type='text' className='todo-input' placeholder='Digite o item aqui...' 
            onChange={(event) => setValue(event.target.value)}/>
                <button type='submit' className='todo-btn'>Adicionar item</button>
        </form>
    )
}
