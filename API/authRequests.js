function validateRegistration(name, password, selMonth, selDay, selYear) {
  if (!name || !password || !selMonth || !selDay || !selYear) {
    alert('Заполните все поля перед отправкой!');
    return false;
  }
  if (!/^(?=(.*[a-zA-Z]){2})[a-zA-Z0-9_\-*.]+$/.test(name)) {
    alert('Имя должно содержать только латиницу либо разрешенные символы и быть без пробелов!');
    return false;
  }
  return true;
}

export async function registerSubmit(name, password, selMonth, selDay, selYear) {
  if (!validateRegistration(name, password, selMonth, selDay, selYear)) return;
  const birthDate = `${selDay}-${selMonth}-${selYear}`;

  try {
    const response = await fetch('http://localhost:3000/api/register', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({username: name, password, birthDate}),
    });

    const data = await response.json();

    if (response.ok) {
      window.location.href = `/profile/${name}`;
    } else {
      alert(`Ошибка регистрации: ${data.message || 'Неизвестная ошибка'}`);
    }
  } catch (error) {
    console.error('Ошибка при регистрации!', error);
    alert('Ошибка при регистрации!');
  }
}

export async function loginSubmit(name, password) {
  if (!name || !password) {
    alert('Введите имя и пароль.');
    return;
  }

  try {
    const response = await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({username: name, password}),
    });

    const data = await response.json();

    if (response.ok) {
      window.location.href = `/profile/${name}`;
    } else {
      alert(`Ошибка входа: ${data.message || 'Неверные данные'}`);
    }
  } catch (error) {
    console.error('Ошибка при входе!', error);
    alert('Ошибка при входе!');
  }
}