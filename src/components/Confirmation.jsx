import React from 'react';

const Confirmation = ({isVisibleConfirmation, changeVisibleConfirmation, action}) => {
    console.log(isVisibleConfirmation);
    return (
        <div className={`confirmation-form ${isVisibleConfirmation ? []: "hide"}`}>
            <div className={`confirmation-card ${isVisibleConfirmation ? []: "hide"}`}>
                <div className='confirmation-icon'><i class='bx bxs-check-circle' style={{color:"#98ff64"}}></i></div>
                <p>Usuario {action} con exito!</p>
                <button className="new-user-button" onClick={changeVisibleConfirmation}>Cerrar</button>
            </div>
        </div>
    );
};

export default Confirmation;