"use client";

import { IRole, IUser } from "@/interfaces/IUser";
import { Button, Input, Select, SelectItem, Spinner } from "@nextui-org/react";
import axios, { AxiosError } from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface IRoleList {
  label: IRole;
  value: IRole;
  description: string;
}

const rolList: IRoleList[] = [
  {
    label: "Administrador",
    value: "Administrador",
    description: "Rol administrativo",
  },
  {
    label: "Backend Dev",
    value: "Backend Dev",
    description: "Desarrollador Backend",
  },
  { label: "Diseñador", value: "Diseñador", description: "Diseñador Gráfico" },
  {
    label: "Frontend Dev",
    value: "Frontend Dev",
    description: "Desarrollador Frontend",
  },
  {
    label: "Full Stack",
    value: "Full Stack",
    description: "Desarrollador de Frontend y Backend",
  },
  {
    label: "Marketing",
    value: "Marketing",
    description: "Gestor de Marketing",
  },
];

export const RegisterUser = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    error: false,
    message: "",
  });
  const [success, setSuccess] = useState({
    success: false,
    message: "",
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IUser>();
  const onSubmit: SubmitHandler<IUser> = async (data) => {
    setLoading(true);
    try {
      await axios.post("/api/auth/register", {
        fullname: data.fullname,
        cedula: data.cedula,
        password: data.password,
        role: data.role,
      });
      setLoading(false);
      setSuccess({
        success: true,
        message: "Usuario creado correctamente"
      });
      setTimeout(() => {
        setSuccess({
          success: false,
          message: ""
        });
      }, 5000);
    } catch (error) {
      console.log(error);
      setLoading(false);
      if (error instanceof AxiosError) {
        setError({
          error: true,
          message: error.response?.data.message,
        });
        setTimeout(() => {
          setError({ error: false, message: "" });
        }, 3000);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-default-50 p-6 border border-default-100 rounded-2xl w-full"
      noValidate
    >
      <h1 className="text-2xl text-default-700 font-semibold">
        Crear un usuario
      </h1>
      <p className="text-base text-default-300">Crear un nuevo usuario</p>
      <section className="flex flex-col gap-6 mt-6">
        <div className="grid grid-cols-12 gap-6">
          <section className="col-span-12 md:col-span-6">
            <label
              htmlFor="fullname"
              className="block text-base text-default-500 font-medium mb-2"
            >
              Nombre completo
            </label>
            <Input
              id="fullname"
              fullWidth
              autoFocus
              type="text"
              variant="faded"
              placeholder="Ej: Juan Ramón Ugas"
              color="primary"
              {...register("fullname", {
                required: "❌ El nombre completo es requerido",
                minLength: {
                  value: 3,
                  message: "❌ El nombre debe tener al menos 3 caracteres",
                },
              })}
            />
            {errors.fullname && (
              <p role="alert" className="text-red-500 text-sm">
                {errors.fullname?.message}
              </p>
            )}
          </section>
          <section className="col-span-12 md:col-span-6">
            <label
              htmlFor="cedula"
              className="block text-base text-default-500 font-medium mb-2"
            >
              Cédula
            </label>
            <Input
              id="cedula"
              fullWidth
              type="number"
              variant="faded"
              placeholder="Ej: 25967834"
              color="primary"
              {...register("cedula", {
                required: "❌ La cédula es obligatoria",
                minLength: {
                  value: 7,
                  message: "❌ La cédula debe tener al menos 7 caracteres",
                },
              })}
            />
            {errors.cedula && (
              <p role="alert" className="text-red-500 text-sm">
                {errors.cedula?.message}
              </p>
            )}
          </section>
        </div>
        <div className="grid grid-cols-12 gap-6">
          <section className="col-span-12 md:col-span-6">
            <label
              htmlFor="password"
              className="block text-base text-default-500 font-medium mb-2"
            >
              Contraseña
            </label>
            <Input
              id="password"
              fullWidth
              type="password"
              variant="faded"
              placeholder="Escribe tu contraseña"
              color="primary"
              {...register("password", {
                required: "❌ La contraseña es obligatoria",
                minLength: {
                  value: 8,
                  message: "❌ La contraseña debe tener al menos 8 caracteres",
                },
              })}
            />
            {errors.password && (
              <p role="alert" className="text-red-500 text-sm">
                {errors.password?.message}
              </p>
            )}
          </section>
          <section className="col-span-12 md:col-span-6">
            <label
              htmlFor="rol"
              className="block text-base text-default-500 font-medium mb-2"
            >
              Ocupación
            </label>
            <Select
              id="rol"
              placeholder="Elije una ocupación"
              fullWidth
              aria-label="Rol"
              {...register("role", {
                required: "❌ La ocupación es obligatoria",
              })}
            >
              {rolList.map((role) => (
                <SelectItem
                  key={role.value}
                  value={role.value}
                >
                  {role.label}
                </SelectItem>
              ))}
            </Select>
            {errors.role && (
              <p role="alert" className="text-red-500 text-sm">
                {errors.role?.message}
              </p>
            )}
          </section>
        </div>

        <section className="flex justify-center">
          {loading ? (
            <Button
              type="submit"
              variant="solid"
              color="default"
              size="lg"
              isDisabled
              startContent={<Spinner color="success" />}
            >
              Creando...
            </Button>
          ) : (
            <Button
              type="submit"
              variant="solid"
              color="primary"
              size="lg"
            >
              Crear usuario
            </Button>
          )}
        </section>
      </section>
      {error.error && (
        <p role="alert" className="text-red-500 text-sm text-center">
          {error.message}
        </p>
      )}
      {success.success && (
        <p role="alert" className="text-green-500 text-sm text-center">
          {success.message}
        </p>
      )}
    </form>
  );
};
