import React from 'react'
import { Palette, X} from 'react-bootstrap-icons'

function TodoForm({
    handleSubmit,
    heading = false,
    text, setText,
    projects,
    showButtons =false,
    setShowModal = false
}){

    return(
        <form onSubmit={handleSubmit} className='TodoForm'>
            <div className='text'>
                {
                    heading &&
                    <h3>{heading}</h3>

                }
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
                    {
                        projects.map( project =>
                            <div className='project' key={project.id}>
                                {project.name}
                            </div>
                        )
                    }
                </div>
            </div>
            {
                showButtons &&
                <div>
                    <div className='cancel' onClick={() => setShowModal(false)}>
                        <X size='40px' />
                </div>
                <div className='confirm'>
                    <button> + Add to do </button>
                </div>
                    </div>
            }
            
        </form>



    )



}

export default TodoForm