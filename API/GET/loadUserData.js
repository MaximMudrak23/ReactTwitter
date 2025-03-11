import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export function loadUserData() {
    const { username } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/api/user/${username}`)
            .then(res => res.ok ? res.json() : Promise.reject(res.status))
            .then(setUser)
            .catch(status => {
                if (status === 404) navigate("/register");
                console.error("Ошибка загрузки:", status);
            });
    }, [username]);

    const isOwner = localStorage.getItem('username') === username;
    return {userInfo: user, isOwner, setUser};
}