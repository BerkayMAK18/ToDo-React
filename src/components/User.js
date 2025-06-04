import React from 'react'
import logo from '../images/bill.gif'

function User({}){



    return(
        <div className='User'>
            <div className='logo'>
                <img src={logo} alt="logo" />
            </div>
            <div className='info'>
                <p>TestUser</p>
                <a href='#'>Logout</a>
            </div>

        </div>

    )



}

export default User