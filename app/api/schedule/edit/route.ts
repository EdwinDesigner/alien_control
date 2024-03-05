import { connect, disconnect } from "@/db/dbConnection";
import { IDay } from "@/interfaces/ISchedule";
import Schedule from "@/models/Schedule";
import { NextResponse } from "next/server";

const avalibleDays:IDay[] = [
  "lunes", "martes", "miercoles", "jueves", "viernes", "sábado", "domingo"
];

export async function POST(req: Request) {
  const { _id, day, entry_1, entry_2, exit_1, exit_2 } = await req.json();

  console.log({ _id, day, entry_1, entry_2, exit_1, exit_2 })

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
  const dayExist = await Schedule.findById(_id);

  if(!dayExist) {
    await disconnect()
    return NextResponse.json({
      message: "No se encontro el horario que quieres editar"
    }, { status: 401});
  }

  dayExist.day = day;
  dayExist.entry_1 = entry_1;
  dayExist.entry_2 = entry_2;
  dayExist.exit_1 = exit_1;
  dayExist.exit_2 = exit_2;

  try {
    await dayExist.save();
    return NextResponse.json({
      message: "Horario editado correctamente"
    }, { status: 200});
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Algo salio mal al intentar editar este horario"
    }, { status: 501});
  }
}