import { IAttendance } from "@/interfaces/IAttendance";
import axios from "axios";
import { getSchedules } from "./schedule";
import { ISchedule } from "@/interfaces/ISchedule";

// export const getSchedules = async () =>  {
//   try {
//     const response = await axios("/api/schedule");
//     return response;
//   } catch (error) {
//     console.error('Error al crear el horario:', error);
//     throw error;
//   }
// }

export const createAttendance = async (cedula: string) => {

  const schedules = await getSchedules();

  try {
    const response = await axios.post("/api/attendance/create", {
      cedulaUser: cedula,
      schedules
    });
    return response;
  } catch (error) {
    console.error('Error al registrar asistencia:', error);
    throw error;
  }
};

// export const deleteSchedule = async (id: string) => {
//   try {
//     const response = await axios.post("/api/schedule/delete", {id});
//     return response;
//   } catch (error) {
//     console.error('Error al eliminar el horario:', error);
//     throw error;
//   }
// };

// export const editSchedule = async (data: ISchedule) => {
//   try {
//     const response = await axios.post("/api/schedule/edit", data);
//     return response;
//   } catch (error) {
//     console.error('Error al editar el horario:', error);
//     throw error;
//   }
// };