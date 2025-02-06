// name, password, selMonth, selDay, selYear
export function handleSubmit(...args) {
  if (!args.every(el => el)) {
    alert('Заполните все поля перед отправкой.');
    return;
  }
  if (!/^(?=(.*[a-zA-Z]){2})[a-zA-Z0-9_\-*.]+$/.test(args[0])) {
    alert('Имя должно содержать только латиницу либо разрешенные символы и быть без пробелов!');
    return;
  }
  return [args[0],args[1],[args[2],args[3],args[4]]];
}
// Мб допилить под ситуацию когда есть акк чтобы ничего не возвращало
// или как нужно будет