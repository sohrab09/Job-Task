import React from 'react'
import useUser from '../../Hooks/useUser'
import { useLocation } from 'react-router-dom'

const User = () => {

    const location = useLocation();
    const id = location.state.id
    // console.log("location.state.id ------->>>>>>>", id);
    const user = useUser(id)

    console.log("user ------>>>>>>>", user);

    return (
        <div>
            <h1>
                {id}
            </h1>
        </div>
    )
}

export default User