import React from 'react';

function Validation(props){
    let validationMessage='Text too long';
    if (props.inputLength<=5){
        validationMessage='Text too short'
    }
    return(
        <div>
            <p>{validationMessage}</p>
        </div>
    )
}
export default Validation;