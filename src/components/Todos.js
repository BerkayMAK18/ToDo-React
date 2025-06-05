import React, { useContext } from 'react'
import Todo from './Todo'
import Next7days from './Next7Days'
import { TodoContext } from '../context'

function Todos({}){

    const { selectedProject } = useContext(TodoContext)

    const todos = [
        {
            id : 'd54sd4',
            text : 'Go for a run',
            checked : true,
            color : '#000000',
            project : 'personal'
        },
        {
            id : 'd54fdf',
            text : 'Meeting',
            checked : false,
            color : '#00ff00',
            project : 'work'
        },
    ]

    return(
        <div className='Todos'>
            <div className='selected-project'>
                {selectedProject}
            </div>
            <div className='todos'>
            {
                selectedProject === 'next 7 days' ?
                <Next7days todos={todos} />
                :
                todos.map( todo =>
                    <Todo todo={todo} key={todo.id} />
                )
            }

            </div>
        </div>

    )



}

export default Todos