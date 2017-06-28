import React from 'react';

export default function Person() {
    const name = 'CryptoCoinUser';
    const imageUrl = 'https://avatars3.githubusercontent.com/u/6550474?v=3&s=460';  
    const job = 'user of crypto coins';
    return (
        <div className="person">
            <div className="person-name">{name}</div>
            <img className="person-img" src={imageUrl} />
            <div className="person-job">
                {job}
            </div>
        </div>
    );
}