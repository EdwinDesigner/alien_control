export type IRole = "Frontend Dev" | "Backend Dev" | "Full Stack" | "Diseñador" | "Marketing" | "Administrador";

export interface IUser {
  fullname: string;
  cedula: string;
  password: string;
  role: IRole;
  isAdmin: boolean;
}