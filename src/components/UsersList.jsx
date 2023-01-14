import React from 'react';

const UsersList = ({userslist}) => {
    return (
        <div>
            {userslist.map(user =>(
                <li key={user.id}>
                    <h4>{user.first_name}{user.last_name}</h4>
                    <ul>
                        <li>{user.email}</li>
                        <li>{user.birthday}</li>

                    </ul>
                </li>
            ))}
            
        </div>
    );
};

export default UsersList;