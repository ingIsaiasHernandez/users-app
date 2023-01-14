import axios from 'axios';
import React from 'react';
import {useForm} from 'react-hook-form';


const UserForm = () => {

    const { handleSubmit,register} = useForm();

    const submit = (data) => {
            console.log(data);

            axios.post('https://users-crud.academlo.tech/users/', data)
                .then(res  => console.log(res.data));
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <h2>Users app</h2>
            <div className="input-container">
                <input type="text" placeholder='first name' id='first-name' {...register('first-name')}/>
                <input type="text" placeholder='last name' id='last-name' {...register('last-name')}/>
            </div>

            <div className="input-container">
                <input type="email" placeholder='email' id='email' {...register('email')}/>
            </div>

            <div className="input-container">
                <input type="password" placeholder='password' id='password' {...register('password')}/>
            </div>

            <div className="input-container">
                <input type="number" placeholder='mm/dd/yyyy' id='year' {...register('year')}/>
            </div>
            <button>Submit</button>

        </form>
    );
};

export default UserForm;