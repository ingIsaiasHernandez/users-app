import React from 'react';

const UserForm = () => {

    return (
        <form>

            <div className="input-container">
                <input type="text" placeholder='first name' id='first-name'/>
                <input type="text" placeholder='last name' id='last-name'/>
            </div>

            <div className="input-container">
                <input type="email" placeholder='email' id='email'/>
            </div>

            <div className="input-container">
                <input type="password" placeholder='password' id='password'/>
            </div>

            <div className="input-container">
                <input type="number" placeholder='mm/dd/yyyy' id='year'/>
            </div>
            <button>Submit</button>

        </form>
    );
};

export default UserForm;