import { connect, disconnect } from "@/db/dbConnection";
import { IAttendance } from "@/interfaces/IAttendance";
import { getSchedules } from "@/services/schedule";
import { getDayParam } from "@/utils/getDay";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { cedulaUser, schedules } = await req.json() as IAttendance;

  // Validar días habiles
  const currentDay = new Date();
  const day = getDayParam(currentDay.getDay());

  if(schedules && schedules.length > 0) {
    for (let i = 0; i < schedules.length; i++) {
      
    }
  }

  return NextResponse.json({cedulaUser, schedules}, { status: 200});

  // if(exit_2 === "") {
  //   return NextResponse.json({
  //     message: "La hora de salida de la tarde no puede estar vacia"
  //   }, { status: 401});
  // }

  // await connect();
  // const dayExist = await Schedule.findOne({ day });

  // if(dayExist) {
  //   await disconnect()
  //   return NextResponse.json({
  //     message: "No puedes repetir los días"
  //   }, { status: 401});
  // }

  // const schedule = new Schedule({
  //   day,
  //   entry_1,
  //   entry_2,
  //   exit_1,
  //   exit_2
  // });

  // try {
  //   await schedule.save();
  //   return NextResponse.json({
  //     message: "Horario creado correctamente"
  //   }, { status: 200});
  // } catch (error) {
  //   console.log(error);
  //   return NextResponse.json({
  //     message: "Algo salio mal al intentar crear este horario"
  //   }, { status: 501});
  // }
}