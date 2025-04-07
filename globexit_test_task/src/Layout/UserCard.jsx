import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const UserCard = ({data, setModalActive}) => {
    return (
        <div className="employee-card" key={data.email} onClick={() => setModalActive(data)}>
            <h3 className="employee-name">{data.name}</h3>
            <h5 className="employee-phone">
                <FontAwesomeIcon icon={faPhone} className="icon" /> {data.phone}
            </h5>
            <h5 className="employee-email">
                <FontAwesomeIcon icon={faEnvelope} className="icon" /> {data.email}
            </h5>
        </div>
    )
}

export default UserCard;