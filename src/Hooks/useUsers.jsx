import axios from 'axios';
import { useState, useEffect } from 'react';

const useUsers = () => {
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        setLoading(true);
        const getUsers = async () => {
            try {
                axios.get("https://dummyjson.com/users")
                    .then((res) => {
                        // console.log("res", res.data.users);
                        setUsers(res.data.users);
                        setLoading(false);
                    })
            } catch (error) {
                console.error("Fetch users error -------->>>>> ", error);
            } finally {
                setLoading(false);
            }
        };
        getUsers();
    }, []);

    return users;
};

export default useUsers;
