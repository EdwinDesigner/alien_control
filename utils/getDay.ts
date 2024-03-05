export const getDay = () => {
  const currentDate = new Date();
  const day = currentDate.getDay();
  const weekdays = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
  return weekdays[day];
}

export const getDayParam = (day: number) => {
  const weekdays = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
  return weekdays[day];
}