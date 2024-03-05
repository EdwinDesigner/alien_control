import { ISchedule } from "@/interfaces/ISchedule";
import axios from "axios";

export const getSchedules = async (): Promise<ISchedule[]> => {
  try {
    const { data } = await axios<ISchedule[]>("/api/schedule");
    return data as ISchedule[];
  } catch (error) {
    console.error('Error al crear el horario:', error);
    throw error;
  }
}

export const createSchedule = async (data: ISchedule) => {
  try {
    const response = await axios.post("/api/schedule/create", data);
    return response;
  } catch (error) {
    console.error('Error al crear el horario:', error);
    throw error;
  }
};

export const deleteSchedule = async (id: string) => {
  try {
    const response = await axios.post("/api/schedule/delete", {id});
    return response;
  } catch (error) {
    console.error('Error al eliminar el horario:', error);
    throw error;
  }
};

export const editSchedule = async (data: ISchedule) => {
  try {
    const response = await axios.post("/api/schedule/edit", data);
    return response;
  } catch (error) {
    console.error('Error al editar el horario:', error);
    throw error;
  }
};