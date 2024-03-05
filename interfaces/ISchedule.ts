export type IDay = 'domingo' | 'lunes' | 'martes' | 'miércoles' | 'jueves' | 'viernes' | 'sábado';

export interface ISchedule {
  _id?: string;
  day: IDay;
  entry_1: string;
  entry_2: string;
  exit_1: string;
  exit_2: string;
}