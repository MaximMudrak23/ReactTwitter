function getDaysInMonth(year, month){
  if (!year || !month) return [];
  return Array.from({ length: new Date(year, month, 0).getDate() }, (_, index) => index + 1);
}

export function getDataInfo(option,info) {
  switch (option) {
    case 'month':
      return ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];
    case 'day':
      return getDaysInMonth(info[0],info[1]);
    case 'year':
      return {currentYear: new Date().getFullYear(), years: Array.from({ length: 100 }, (_, index) => new Date().getFullYear() - index)}
    default:
      alert('Такого значения не существует!')
      break;
  }
}