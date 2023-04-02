import axios from 'axios';
import { useState, useEffect } from 'react';

const useUser = (id) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState([]);

    useEffect(() => {
        setLoading(true);
        const getUsers = async () => {
            try {
                axios.get(`https://dummyjson.com/users/${id}/posts`)
                    .then((res) => {
                        // console.log("res", res.data.users);
                        setUser(res.data.posts);
                        setLoading(false);
                    })
            } catch (error) {
                console.error("Fetch users error -------->>>>> ", error);
            } finally {
                setLoading(false);
            }
        };
        getUsers();
    }, [id]);

    return user;
};

export default useUser;