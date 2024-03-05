import { connect, disconnect } from "@/db/dbConnection";
import { IDay } from "@/interfaces/ISchedule";
import Schedule from "@/models/Schedule";
import { NextResponse } from "next/server";

const avalibleDays:IDay[] = [
  "lunes", "martes", "miercoles", "jueves", "viernes", "sábado", "domingo"
];

export async function POST(req: Request) {
  const { day, entry_1, entry_2, exit_1, exit_2 } = await req.json();

  if(day === "") {
    return NextResponse.json({
      message: "El día no puede estar vacio"
    }, { status: 401});
  }

  if(!avalibleDays.includes(day)) {
    return NextResponse.json({
      message: "Debes elegir un día de la semana correcto"
    }, { status: 401});
  }

  if(entry_1 === "") {
    return NextResponse.json({
      message: "La hora de entrada de la mañana no puede estar vacia"
    }, { status: 401});
  }

  if(entry_2 === "") {
    return NextResponse.json({
      message: "La hora de entrada de la tarde no puede estar vacia"
    }, { status: 401});
  }

  if(exit_1 === "") {
    return NextResponse.json({
      message: "La hora de salida de la mañana no puede estar vacia"
    }, { status: 401});
  }

  if(exit_2 === "") {
    return NextResponse.json({
      message: "La hora de salida de la tarde no puede estar vacia"
    }, { status: 401});
  }

  await connect();
  const dayExist = await Schedule.findOne({ day });

  if(dayExist) {
    await disconnect()
    return NextResponse.json({
      message: "No puedes repetir los días"
    }, { status: 401});
  }

  const schedule = new Schedule({
    day,
    entry_1,
    entry_2,
    exit_1,
    exit_2
  });

  try {
    await schedule.save();
    return NextResponse.json({
      message: "Horario creado correctamente"
    }, { status: 200});
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Algo salio mal al intentar crear este horario"
    }, { status: 501});
  }
}