function saveFullNameValidate(userInfo, userFullName) {
    if (userInfo.fullname === userFullName) return false;
    if (userFullName.length > 50) {
        alert('Выйди из консоли разработчика, маленький хакер!');
        return false;
    }
    if (userFullName.length < 1) {
        alert('Имя не может быть меньше 1!');
        return false;
    }
    return true;
}

export async function saveFullName(userInfo, userFullName, setUser) {
    if (!saveFullNameValidate(userInfo, userFullName)) return;

    try {
        const response = await fetch('http://localhost:3000/api/user/changeFN', {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username: userInfo.username, userFullName}),
        })

        if (!response.ok) throw new Error('Ошибка при обновлении имени');
        
        setUser(prev => ({...prev, fullname: userFullName}))

        alert('Имя успешно обновлено!');
        // ПОЗЖЕ СДЕЛАТЬ, ЧТОБЫ НЕ АЛЕРТ, А НА СТРАНИЦЕ ЧЕ-ТО ПОКАЗЫВАЛО.
    } catch (error) {
        console.error('Не удалось обновить имя:', error);
        alert('Не удалось обновить имя')
    }
}