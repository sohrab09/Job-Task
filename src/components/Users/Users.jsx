import React, { useState } from 'react'
import "./Users.scss";
import Pagination from '../Pagination/Pagination';
import { useNavigate } from "react-router-dom";

const Users = ({ users }) => {

    // console.log("users users page ------>>>>>>>", users);

    const userLimit = 6;
    const [paginate, setPaginate] = useState(1 * userLimit);
    const paginateHandler = (value) => setPaginate(value * userLimit);

    const navigate = useNavigate();

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
                                    <div
                                        style={{ cursor: "pointer" }}
                                        className="read-more-btn font-rubik fw-4"
                                        onClick={() => navigate(`/users/${user.id}`, {
                                            state: user
                                        })}
                                    >
                                        Read More
                                    </div>
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