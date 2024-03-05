import { connect, disconnect } from "@/db/dbConnection";
import User from "@/models/User";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  const { fullname, cedula, password, role } = await req.json();

  await connect();
  const userExist = await User.findOne({ cedula });

  if(userExist) {
    await disconnect()
    return Response.json({ message: "Ya existe un usuario con esta cédula" });
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = new User({
    fullname,
    cedula,
    password: hashedPassword,
    role,
    isAdmin: role === "Administrador" ? true : false
  });

  try {
    await user.save();
    return Response.json({ message: "Usuario creado correctamente" });
  } catch (error) {
    console.log(error);
    return Response.json({ message: "Algo salio mal al intentar crear este usuario" });
  }
}