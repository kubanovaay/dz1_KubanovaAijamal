import React from 'react';

function UserProfile(props) {
    const { name, age, photoUrl, education } = props;

    return (
        <div>
            <h2>{name}</h2>
            <p>Возраст: {age}</p>
            {education && <p>Место учебы: {education}</p>}
            <img src={photoUrl} alt={name} style={{ maxWidth: '200px', borderRadius: '50%' }} />
        </div>
    );
}

export default UserProfile;
