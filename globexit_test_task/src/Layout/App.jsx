import React, { useState } from "react";
import UserCards from '../Layout/UserСards';
import UserDetailsModal from '../Layout/UserDetailsModal';

const App = () => {
    const [modalActive, setModalActive] = useState(false)
    const [selectedUser, setSelectedUser] = useState(null);

    const handleCardClick = (user) => {
        setSelectedUser(user);
        setModalActive(true);
    };
    return(
        <div>
            <UserCards setModalActive={handleCardClick} active={modalActive}/>
            <UserDetailsModal active={modalActive} setModalActive={setModalActive}>
                {selectedUser && (
                    <div className="user-details">
                    <h4>{selectedUser.name}</h4>
                    <table>
                        <tbody>
                            <tr>
                                <td><strong>Телефон:</strong></td>
                                <td className="data">{selectedUser.phone}</td>
                            </tr>
                            <tr>
                                <td><strong>Почта:</strong></td>
                                <td className="data">{selectedUser.email}</td>
                            </tr>
                            <tr>
                                <td><strong>Дата приема:</strong></td>
                                <td className="data">{selectedUser.hire_date}</td>
                            </tr>
                            <tr>
                                <td><strong>Должность:</strong></td>
                                <td className="data">{selectedUser.position_name}</td>
                            </tr>
                            <tr>
                                <td><strong>Подразделение:</strong></td>
                                <td className="data">{selectedUser.department}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="additional-info">
                        <h4 className="additional-title">Дополнительная информация:</h4>
                        <p className="additional-text">Разработчики используют текст в качестве заполнителя макета страницы. Разработчики используют текст в качестве заполнителя макета страницы.</p>
                    </div>
                    <button className="close-button" onClick={() => setModalActive(false)}>X</button>
                </div>
                )}
            </UserDetailsModal>
        </div>
    )
}

export default App;