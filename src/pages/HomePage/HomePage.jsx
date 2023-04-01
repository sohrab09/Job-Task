import React from 'react'
import "./HomePage.scss";
import { banner_image } from '../../utils/images';
import Title from '../../components/Title/Title';
import Users from '../../components/Users/Users';
import useUsers from '../../Hooks/useUsers';

const HomePage = () => {

    const users = useUsers();
    // console.log("users home page ------>>>>>>>", users);

    return (
        <div className="main-holder bg-light-blue">
            <header className='header' style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)), url(${banner_image}) center/cover no-repeat`
            }}>
                <div className='container'>
                    <div className='header-content text-center flex align-center justify-center flex-column text-white'>
                        <h1 className='text-uppercase header-title ls-2'>Beautiful Blog Site</h1>

                    </div>
                </div>
            </header>

            <section className='section py-7'>
                <div className='container'>
                    <div className='section-content'>
                        <Title title="Blogs" color={"#0D1741"} />
                        {<Users users={users} />}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomePage