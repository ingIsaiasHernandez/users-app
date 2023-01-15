import React from 'react';

const UsersList = ({userslist, selectUser, changeVisible, deleteUser}) => {
    return (
        <div className='main-page-body'>
            {userslist.map(user =>(
                <div key={user.id} className="user-container">
                    <h4 className='user-container-title'>{user.first_name} {user.last_name}</h4>
                    <div className='user-container-item'>
                        <p className='user-subtitle'>CORREO</p>
                        {user.email}
                    </div>
                    <div className='user-container-item'>
                        <p className='user-subtitle birthday-icon'>CUMPLEAÑOS</p>
                        <i class='bx bx-gift' ></i>  {user.birthday}
                    </div>
                    <div className='user-container-icons'>
                        <div className='user-icon-edit' onClick={() => selectUser(user)}><i class='bx bx-pencil bx-sm'></i></div>
                        <div className='user-icon-delete' onClick={() => deleteUser(user)}><i class='bx bx-trash bx-sm user-icon-delete' ></i></div>
                    </div>
                </div>
            ))}
            
        </div>
    );
};

export default UsersList;