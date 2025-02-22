export async function handleSubscribe(userInfo, setUser) {
    const currentUser = localStorage.getItem('username');
    if (!currentUser) {
        console.error('Ошибка: пользователь не авторизован.');
        return;
    }

    const isSubscribed = userInfo.userSubscribers.includes(currentUser);

    try {
        const response = await fetch(`http://localhost:3000/api/user/subscribe`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ currentUser, targetUser: userInfo.username, isSubscribed })
        });

        if (!response.ok) {
            alert('Ошибка подписки!');
            throw new Error('Ошибка подписки!');
        }

        const data = await response.json();
        if (!data.success) {
            alert('Ошибка подписки!');
            throw new Error('Ошибка подписки!');
        }

        setUser(prev => ({
            ...prev,
            userSubscribers: isSubscribed
                ? prev.userSubscribers.filter(sub => sub !== currentUser)
                : [...prev.userSubscribers, currentUser].sort()
        }));
    } catch (error) {
        console.error('Ошибка запроса:', error);
    }
}
