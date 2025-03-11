function validateRegistration(name, password, selMonth, selDay, selYear) {
  if (!name || !password || !selMonth || !selDay || !selYear) {
    alert('Заполните все поля перед отправкой!');
    return false;
  }
  if (!/^(?=(.*[a-zA-Z]){2})[a-zA-Z0-9_\-*.]+$/.test(name)) {
    alert('Имя должно содержать только латиницу либо разрешенные символы, быть от 2 символов и быть без пробелов!');
    return false;
  }
  return true;
}

export async function registerSubmit(name, password, selMonth, selDay, selYear) {
  if (!validateRegistration(name, password, selMonth, selDay, selYear)) return;
  const birthDate = `${selDay}-${selMonth}-${selYear}`;
  const reqData = await apiRequest('register', 'POST', {username: name, password, birthDate});
  localStorage.setItem('username', reqData.username);
  window.location.href = `/profile/${reqData.username}`;
}

export async function loginSubmit(name, password) {
  if (!name || !password) {alert('Введите имя и пароль.'); return;}
  const reqData = await apiRequest('login', 'POST', {username: name, password});
  localStorage.setItem('username', reqData.username);
  window.location.href = `/profile/${reqData.username}`;
}

async function apiRequest(endpoint, method, body) {
  try {
      const response = await fetch(`http://localhost:3000/api/${endpoint}`, {
          method,
          headers: {'Content-Type': 'application/json'},
          body: body ? JSON.stringify(body) : null,
      });
      if (response.status === 204) return null;
      let data;
      try {data = await response.json()} catch (error) {data = null}
      if (!response.ok) throw new Error(data.message || 'Ошибка запроса');
      return data;
  } catch (error) {
      console.error(`Ошибка при запросе на ${endpoint}`, error.message);
      alert(error.message);
      return null;
  }
}