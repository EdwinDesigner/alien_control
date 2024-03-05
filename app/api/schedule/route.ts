import { connect, disconnect } from "@/db/dbConnection";
import Schedule from "@/models/Schedule";


export async function GET(req: Request) {

  await connect();
  const schedules = await Schedule.find();
  await disconnect();

  if(!schedules) {
    return Response.json({ message: "No hay horarios cargados" });
  }

  try {
    return Response.json(schedules);
  } catch (error) {
    console.log(error);
    return Response.json({ message: "Algo salio mal al intentar recuperar los horarios" });
  }
}