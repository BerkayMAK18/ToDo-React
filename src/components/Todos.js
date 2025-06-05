import React from 'react'
import Todo from './Todo'
import Next7days from './Next7Days'

function Todos({}){

    const selectedProject = 'PLACEHOLDER'

    const todos = [
        {
            id : 'd54sd4',
            text : 'Go for a run',
            checked : false,
            color : '#000000',
            project : 'personal'
        },
        {
            id : 'd54fdf',
            text : 'Meeting',
            checked : true,
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
                    <Todo todo={todo} key={todo.key} />
                )
            }

            </div>
        </div>

    )



}

export default Todos