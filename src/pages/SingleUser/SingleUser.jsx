import React from 'react'
import "./SingleUser.scss";
import { MdOutlineAddReaction } from "react-icons/md";
import { BiUser } from 'react-icons/bi';


const SingleUser = ({ user }) => {
    console.log("user ------>>>>>>>", user);
    return (
        <div className='blog-single mt-5'>
            <div className='blog-single-l'>
                {
                    user?.map((user, index) => {
                        return (
                            <div className='blog-details mt-5 bg-white p-5' key={index}>
                                <div className='blog-info flex align-center'>
                                    <div className='blog-info-item flex align-center'>
                                        <BiUser className='text-mid-blue' />
                                        <span className='blog-info-item-text font-rubik fw-5'>{user.userId}</span>
                                    </div>
                                    <div className='blog-info-item flex align-center'>
                                        <MdOutlineAddReaction className='text-mid-blue' />
                                        <span className='blog-info-item-text font-rubik fw-5'>{user.reactions}</span>
                                    </div>
                                </div>

                                <h2 className='blog-title text-dark-blue'>{user?.title}</h2>
                                <h4 className='blog-text'>{user?.body}</h4>
                                <div className='blog-tags flex align-item my-4'>
                                    <h4 className='blog-tags-title'>Popular Tags:</h4>
                                    <div className='blog-tags-list flex align-center'>
                                        {
                                            user?.tags?.map((tag, idx) => (
                                                <span className='blog-tags-item fs-13 font-rubik text-uppercase text-white ls-1' key={idx}>{tag}</span>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SingleUser;