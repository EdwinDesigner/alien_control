export const formatDate = (time: string) => {
  const [hours, minutes] = time.split(":").map(Number);

  const ampm = hours >= 12 ? "PM" : "AM";

  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;

  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  const formattedTime = `${formattedHours}:${formattedMinutes} ${ampm}`;

  return formattedTime;
};
