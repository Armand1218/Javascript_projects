import React from 'react';

const Person = (props) => {
    const {firstName,lastName, hColor} = props;
    return(
        <div>
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {props.age}</p>
            <p>Hair Color: {hColor}</p>
        </div>
    );
    }

export default Person;