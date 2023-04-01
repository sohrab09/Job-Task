import React from 'react'
import "./Users.scss";
import { Link } from 'react-router-dom';

const Users = () => {
    return (
        <>
            <div className="blog-items grid my-6">

                <div className="blog-item" >
                    <span className='blog-item-id fw-5 font-rubik'>ID</span>
                    <div className='blog-item-title fw-5 fs-18 font-rubik'>First Name & Last Name</div>
                    <div className='blog-item-id'>Company</div>
                    <div className='blog-item-id'>Email</div>

                    <div className='blog-item-tags'>
                        <span className='blog-item-tags-single fs-13 font-rubik text-uppercase'>Tags</span>
                    </div>

                    <div className='blog-item-btn'>
                        <Link className="read-more-btn font-rubik fw-4">Read More</Link>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Users