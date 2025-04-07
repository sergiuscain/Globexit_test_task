import React, {useState, useEffect} from "react";
import axios from 'axios'
import UserCard from "./UserCard";

const UserCards = () => {   
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadData = async () =>{
            try{
                const response = await axios.get('http://localhost:3000/');
                setUsers(response.data);
            }
            catch(error){
                setError(error);
            }
            finally {
                setLoading(false);
            }
        };

        loadData();
    }, [])
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    return(
        <div>
            <div className="employee-container">
                {users.map((data, index) => (
                    <UserCard
                        data={data}
                    />
                ))}
            </div>
        </div>
    )
}

export default UserCards;