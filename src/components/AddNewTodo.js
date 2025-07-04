import React, {useState} from 'react'
import Modal from './Modal'
import { Palette, X} from 'react-bootstrap-icons'
import TodoForm from '../TodoForm'

function AddNewTodo({}){
    const [showModal, setShowModal] = useState(false)
    const [text, setText] = useState('')

    const projects = [
        {id : 1, name : "personal", numOfTodos : 0},
        {id : 2, name : "work", numOfTodos : 1},
        {id : 3, name : "other", numOfTodos : 2},
    ]

    function handleSubmit(e){

    }
    return(
        <div className='AddNewTodo'>
            <div className='btn'>
                <button onClick={() => setShowModal(true)}>
                    + New Todo
                </button>
            </div>
            <Modal showModal={showModal} setShowModal={setShowModal}>
                <TodoForm 
                    handleSubmit={handleSubmit}
                    heading='Add new to do!'
                    text={text}
                    setText={setText}
                    projects={projects}
                    showButtons={true}
                    setShowModal={setShowModal}
                />
            </Modal>
        </div>

    )



}

export default AddNewTodo