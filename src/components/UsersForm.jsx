import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import {useForm} from 'react-hook-form';


const UserForm = ({isVisible, changeVisible, userSelected, selectUser, getUsers, changeVisibleConfirmation}) => {
    
    const emptyUser = {first_name: "", last_name: "", email: "", password: "", birthday: ""};

    const { handleSubmit,register, reset} = useForm();


    useEffect(() => {
        if(userSelected !== null){
            reset(userSelected)
        } else{
             reset(emptyUser)
         }
    },[userSelected])

    

    const submit = (data) => {
            if(userSelected){
                reset(userSelected);
                axios.put(`https://users-crud.academlo.tech/users/${userSelected.id}/`, data)
                    .then(() => {
                                getUsers()
                                reset(emptyUser);
                                selectUser(null);
                            });
                
                changeVisibleConfirmation();
                changeVisible();
            }else{
                axios.post('https://users-crud.academlo.tech/users/', data)
                .then(()  =>getUsers());
                reset(emptyUser);
                changeVisibleConfirmation();
                changeVisible();
            }        
    }

    return (
        <div className={`new-user ${isVisible ? []: "hide"}`}>
            <form onSubmit={handleSubmit(submit)} className="new-user-form">
                <div className="close-form" onClick={changeVisible}><box-icon name='x'></box-icon></div>
                <h2 className='new-user-title'>New user</h2>
                <div className="input-container">
                    <label htmlFor="first_name">Name: </label>
                    <input type="text" placeholder='Put here Full name' id='first_name' {...register('first_name')}/>
                </div>

                <div className='input-container'>
                    <label htmlFor="last_name">Last name: </label>
                    <input type="text" placeholder='Put here last name' id='last_name' {...register('last_name')}/>
                </div>

                <div className="input-container">
                    <label htmlFor="email">Email: </label>
                    <input type="email" placeholder='Put here email' id='email' {...register('email')}/>
                </div>

                <div className="input-container">
                    <label htmlFor="password">Password: </label>
                    <input type="password" placeholder='Put here password' id='password' {...register('password')}/>
                </div>

                <div className="input-container">
                    <label htmlFor="birthday">Birthday: </label>
                    <input type="date"  id='birthday' {...register('birthday')}/>
                </div>
                <button className='submit-button'>Submit</button>
            </form>
        </div>
    );
};

export default UserForm;