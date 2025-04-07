import React from "react";

const UserCard = (props) => {
    return(
        <div className="employee-card" key={props.data.email}>
            <h5 className="employee-name">{props.data.name}</h5>
            <h5 className="employee-phone">{props.data.phone}</h5>
            <h5 className="employee-email">{props.data.email}</h5>
        </div>
    )
}

export default UserCard;