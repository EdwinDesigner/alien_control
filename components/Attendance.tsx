"use client";

import { Button } from "@nextui-org/button";
import {
  AddTimeIcon,
  ExitTimeIcon,
  PlusIcon,
  StartTimeIcon,
  StopTimeIcon,
} from "./icons";
import { Tooltip, divider } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import { createAttendance } from "@/services/attendance";

export const Attendance = () => {

  const { data: session } = useSession();

  const setAttendance = async () => {
    const test = await createAttendance(session?.user.cedula!);

    console.log(test)
  }

  return (
    <div className="mb-10 py-6 px-4 bg-default-50 rounded-xl">
      <h1 className="text-2xl text-default-500 font-medium text-center">
        Control de asistencias <span className="font-bold">Alien Studio</span>
      </h1>
      <div className="grid grid-cols-4 gap-2 mt-6">
        <Tooltip
          showArrow
          content={
            <div className="p-2 max-w-xs">
              <p className="text-default-500">
                Marcar tu asistencia de entrada,{" "}
                <span className="text-danger-500 font-semibold">
                  este botón se bloqueara hasta la siguiente hora de asistencia
                </span>
              </p>
            </div>
          }
        >
          <Button
            className="group p-2 h-60 bg-default-100 hover:bg-default-200/75 border border-default-200 hover:border-default-300 rounded-2xl flex justify-center items-center"
            onClick={setAttendance}
          >
            <div className="flex flex-col items-center gap-2">
              <StartTimeIcon className="w-8 h-8 text-default-500 group-hover:text-white" />
              <h3 className="text-xl text-default-500 group-hover:text-white font-semibold">
                Asistencia
              </h3>
            </div>
          </Button>
        </Tooltip>
        <Tooltip
          showArrow
          content={
            <div className="p-2 max-w-xs">
              <p className="text-default-500">
                Marcar tu salida.{" "}
                <span className="text-danger-500 font-semibold">
                  Despues de 15 minutos se marcara la salida en automatico.
                </span>
              </p>
            </div>
          }
        >
          <Button className="group p-2 h-60 bg-default-100 hover:bg-default-200/75 border border-default-200 hover:border-default-300 rounded-2xl flex justify-center items-center">
            <div className="flex flex-col items-center gap-2">
              <ExitTimeIcon className="w-8 h-8 text-default-500 group-hover:text-white" />
              <h3 className="text-xl text-default-500 group-hover:text-white font-semibold">
                Salida
              </h3>
            </div>
          </Button>
        </Tooltip>
        <Tooltip
          showArrow
          content={
            <div className="p-2 max-w-xs">
              <p className="text-default-500">
                Inicia tiempo extra.{" "}
                <span className="text-danger-500 font-semibold">
                  Despues de terminar tu jornada puedes iniciar un tiempo extra.
                </span>
              </p>
            </div>
          }
        >
          <Button className="group p-2 h-60 bg-default-100 hover:bg-default-200/75 border border-default-200 hover:border-default-300 rounded-2xl flex justify-center items-center">
            <div className="flex flex-col items-center gap-2">
              <AddTimeIcon className="w-8 h-8 text-default-500 group-hover:text-white" />
              <h3 className="text-xl text-default-500 group-hover:text-white font-semibold">
                Extra
              </h3>
            </div>
          </Button>
        </Tooltip>
        <Tooltip
          showArrow
          content={
            <div className="p-2 max-w-xs">
              <p className="text-default-500">
                Pide un permiso temporal.{" "}
                <span className="text-danger-500 font-semibold">
                  Al finalizar el permiso recuerda volver a precionar este botón, los permisos se extenderan máximo 2 horas. Para otro tipo de permiso debes hablar directamente con el administrador.
                </span>
              </p>
            </div>
          }
        >
          <Button className="group p-2 h-60 bg-default-100 hover:bg-default-200/75 border border-default-200 hover:border-default-300 rounded-2xl flex justify-center items-center">
            <div className="flex flex-col items-center gap-2">
              <StopTimeIcon className="w-8 h-8 text-default-500 group-hover:text-white" />
              <h3 className="text-xl text-default-500 group-hover:text-white font-semibold">
                Permiso
              </h3>
            </div>
          </Button>
        </Tooltip>
      </div>
    </div>
  );
};
