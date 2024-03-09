import React from 'react';
import UserProfile from './components/UserProfile';
import myPhoto from './myPhoto/img.png'; // Путь к вашей фотографии

function App() {
    return (
        <div>
            <h1>Моя страница профиля</h1>
            <UserProfile
                name="Кубанова Айжамал Ырысбековна"
                age={19}
                education="КГТУ им. И.Раззакова"
                photoUrl={myPhoto}
            />
        </div>
    );
}

export default App;

