import React, {useState} from 'react'
import Modal from './Modal'
import { Palette, X} from 'react-bootstrap-icons'

function AddNewTodo({}){
    const [showModal, setShowModal] = useState(false)
    const [text, setText] = useState('')



    return(
        <div className='AddNewTodo'>
            <div className='btn'>
                <button onClick={() => setShowModal(true)}>
                    + New Todo
                </button>
            </div>
            <Modal showModal={showModal} setShowModal={setShowModal}>
                <form>
                    <div className='text'>
                        <h3> Add new to do!</h3>
                        <input
                            type='text'
                            value={text}
                            onChange={e => setText(e.target.value)}
                            placeholder='To do...'
                            autoFocus
                        />
                    </div>
                    <div className='pick-project'>
                        <div className='title'>
                            <Palette/>
                            <p>Choose a project</p>
                        </div>
                        <div className='projects'>
                            <div className='project active'>
                                personal
                            </div>
                            <div className='project'>
                                work
                            </div>
                        </div>
                    </div>
                    <div className='cancel'>
                        <X size='40px' />
                    </div>
                    <div className='confirm'>
                        <button> + Add to do </button>
                    </div>
                </form>
            </Modal>
        </div>

    )



}

export default AddNewTodo