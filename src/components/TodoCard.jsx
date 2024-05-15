import React from 'react'

export default function TodoCard(props) {
    const {children, handleDeleteTodo, index, handleEditTodo} = props
    return (
        <li className='todoItem'>
            {children}
            <div className='actionsContainer'>
                <button onClick={() => handleEditTodo(index)}>
                    <i className="fa-regular fa-pen-to-square"></i> {/*https://fontawesome.com/icons/pen-to-square?f=classic&s=regular*/}
                </button>
                <button onClick={() => handleDeleteTodo(index)}>
                    <i className="fa-solid fa-trash-can"></i>
                </button>
            </div>
        </li>
    )
}
