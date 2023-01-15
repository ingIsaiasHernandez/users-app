import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {useForm} from 'react-hook-form';


const UserForm = ({isVisible, changeVisible, userSelected, selectUser, getUsers}) => {
    
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
            console.log(data);

            if(userSelected){

                axios.put(`https://users-crud.academlo.tech/users/${userSelected.id}/`,data)
                    .then(() => 
                        {
                            getUsers()
                            selectUser(null);
                        }
                    );

            }else{
                axios.post('https://users-crud.academlo.tech/users/', data)
                .then(()  => {
                    getUsers()
                    reset(emptyUser);
                });
            }

          
    }

    return (
        <div className={`new-user ${isVisible ? []: "hide"}`}>
            <form onSubmit={handleSubmit(submit)} className="new-user-form">
                <div className="close-form" onClick={changeVisible}><box-icon name='x'></box-icon></div>
                <h2 className='new-user-title'>Nuevo Usuario</h2>
                <div className="input-container">
                    <label htmlFor="first_name">Nombre: </label>
                    <input type="text" placeholder='first name' id='first_name' {...register('first_name')}/>
                </div>

                <div className='input-container'>
                    <label htmlFor="last_name">Apellido: </label>
                    <input type="text" placeholder='last name' id='last_name' {...register('last_name')}/>
                </div>

                <div className="input-container">
                    <label htmlFor="email">Correo electronico: </label>
                    <input type="email" placeholder='email' id='email' {...register('email')}/>
                </div>

                <div className="input-container">
                    <label htmlFor="password">Contraseña: </label>
                    <input type="password" placeholder='password' id='password' {...register('password')}/>
                </div>

                <div className="input-container">
                    <label htmlFor="birthday">Fecha de nacimiento: </label>
                    <input type="date" placeholder='mm/dd/yyyy' id='birthday' {...register('birthday')}/>
                </div>
                <button className='submit-button'>Submit</button>
            </form>
        </div>
    );
};

export default UserForm;