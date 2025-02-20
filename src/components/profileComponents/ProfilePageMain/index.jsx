import './styles.css'
import { FindFolder } from '../FindFolder';
import { ProfilePageHeader } from '../ProfilePageHeader';
import { ProfilePageInfo } from '../profilePageInfo';
import { CategoryAndAddPost } from '../CategoryAndAddPost';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export function ProfilePageMain() {
    const { username } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/api/user/${username}`)
            .then(response => response.ok ? response.json() : Promise.reject(response.status))
            .then(setUser)
            .catch(status => {
                if (status === 404) navigate("/register");
                console.error("Ошибка загрузки пользователя:", status);
            });
    }, [username, navigate]);

    if (!user) return null;

    return (
        <main className='profileMain'>
            <FindFolder />
            <ProfilePageHeader />
            <ProfilePageInfo />
            <CategoryAndAddPost />
        </main>
    )
}