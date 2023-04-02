import React from 'react'
import useUser from '../../Hooks/useUser'
import { useLocation } from 'react-router-dom'
import { banner_image } from '../../utils/images';
import Title from '../Title/Title';
import SingleUser from '../../pages/SingleUser/SingleUser';

const User = () => {

    const location = useLocation();
    const id = location.state.id
    // console.log("location.state.id ------->>>>>>>", id);
    const user = useUser(id)

    // console.log("user ------>>>>>>>", user);

    return (
        <div className="main-holder bg-light-blue">
            <header className='header' style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)), url(${banner_image}) center/cover no-repeat`
            }}>
                <div className='container'>
                    <div className='header-content text-center flex align-center justify-center flex-column text-white'>
                        <Title title="Blog Details" color={`#fff`} />
                    </div>
                </div>
            </header>
            <section className='section py-7'>
                <div className='container'>
                    <div className='section-content'>
                        <SingleUser user={user} />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default User