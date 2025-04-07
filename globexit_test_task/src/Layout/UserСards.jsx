import React, {useState, useEffect} from "react";
import axios from 'axios'
import UserCard from "./UserCard";
import Header from './Header';

const UserCards = () => {   
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

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

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.phone.includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <Header searchTerm={searchTerm} onSearchChange={setSearchTerm} /> {/* Передаем пропсы в Header */}
            <div className="employee-container">
                {filteredUsers.map((data) => (
                    <UserCard
                        key={data.email} // Добавляем key здесь
                        data={data}
                    />
                ))}
            </div>
        </div>
    );
}

export default UserCards;