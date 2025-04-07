import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const UserCard = (props) => {
    return (
        <div className="employee-card" key={props.data.email}>
            <h3 className="employee-name">{props.data.name}</h3>
            <h5 className="employee-phone">
                <FontAwesomeIcon icon={faPhone} className="icon" /> {props.data.phone}
            </h5>
            <h5 className="employee-email">
                <FontAwesomeIcon icon={faEnvelope} className="icon" /> {props.data.email}
            </h5>
        </div>
    )
}

export default UserCard;