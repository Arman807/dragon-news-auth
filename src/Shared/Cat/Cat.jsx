import React from 'react';

const Cat = ({cat}) => {
    const {name}=cat;
    return (
        <div>
            <p>{name}</p>
        </div>
    );
};

export default Cat;