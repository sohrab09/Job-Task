import React from 'react'
import "./HomePage.scss";
import { banner_image } from '../../utils/images';

const HomePage = () => {

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


        </div>
    )
}

export default HomePage