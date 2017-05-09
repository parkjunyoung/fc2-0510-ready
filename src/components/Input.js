import React from 'react';

const Input = (props) => {
    return (
        <input name={ props.name } type="text" 
        className="form-control" />
    );
}

export default Input;