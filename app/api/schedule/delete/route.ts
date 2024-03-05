import { connect, disconnect } from "@/db/dbConnection";
import Schedule from "@/models/Schedule";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { id } = await req.json();

  await connect();
  const dayExist = await Schedule.findById(id);

  if(!dayExist) {
    await disconnect()
    return NextResponse.json({
      message: "Estan intentando eliminar un horario que no existe"
    }, { status: 401});
  }


  try {
    await dayExist.deleteOne();
    return NextResponse.json({
      message: "Horario eliminado correctamente"
    }, { status: 200});
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Algo salio mal al intentar crear este horario"
    }, { status: 501});
  }
}