import React, { useState } from 'react'
import "./Users.scss";
import { Link } from 'react-router-dom';
import Pagination from '../Pagination/Pagination';

const Users = ({ users }) => {

    // console.log("users users page ------>>>>>>>", users);

    const userLimit = 6;
    const [paginate, setPaginate] = useState(1 * userLimit);
    const paginateHandler = (value) => setPaginate(value * userLimit);



    return (
        <>
            <div className="blog-items grid my-6">

                {
                    users?.slice(paginate - 6, paginate).map((user, index) => {
                        return (
                            <div className="blog-item" key={index}>
                                <img src={user.image} alt="userImage" className='user-image' />
                                <div className='blog-item-id fw-5 font-rubik'>{user.id}</div>
                                <div className='blog-item-title fw-5 fs-18 font-rubik'>{user.firstName} {user.lastName}</div>
                                <div className='blog-item-id fs-18 font-rubik'>{user.company.title}</div>
                                <div className='blog-item-id fs-18 font-rubik'>{user.company.name}</div>
                                <div className='blog-item-id fs-18 font-rubik'>{user.company.department}</div>
                                <div className='blog-item-id'>{user.email}</div>
                                <div className='blog-item-id'>{user.phone}</div>
                                <div className='blog-item-id'>B.G: {user.bloodGroup}</div>
                                <div className='blog-item-btn'>
                                    <Link
                                        className="read-more-btn font-rubik fw-4"
                                        to={`/users/${user.id}`}
                                    >
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <Pagination noOfBlogs={users.length} paginateHandler={paginateHandler} />

        </>
    )
}

export default Users