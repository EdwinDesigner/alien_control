import { ISchedule } from "./ISchedule";

export interface IEntry {
  entry_1: string;
  entry_2: string;
}

export interface IExit {
  exit_1: string;
  exit_2: string;
}

export type IExtra = string;

export interface IPermissions {
  start: string;
  finish: string;
}

export interface IObservations {
  time?: string;
  message: string;
}

export interface IAttendance {
  cedulaUser: string;
  entry?: IEntry;
  exit?: IExit;
  extra?: IExtra[];
  permissions?: IPermissions[];
  observations?: IObservations[];
  date?: Date;
  schedules?: ISchedule[];
}