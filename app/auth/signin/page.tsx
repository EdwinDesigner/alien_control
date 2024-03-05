"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { Spinner } from "@nextui-org/react";

interface User {
	cedula: string;
	password: string;
}

export default function LoginPage() {

	const router = useRouter();

	const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    error: false,
    message: "",
  });

	const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<User>();
  const onSubmit: SubmitHandler<User> = async (data) => {
    setLoading(true);

    const res = await signIn("credentials", {
      cedula: data.cedula,
      password: data.password,
      redirect: false,
    });

    if (res?.error) {
      setLoading(false);
      setError({
        error: true,
        message: res.error,
      });
      setTimeout(() => {
        setError({
          error: false,
          message: "",
        });
      }, 3000);
      return;
    }

    if (res?.ok) return router.push("/");
  };

	return (
		<section className="grid grid-cols-12 min-h-screen">
			<section className="col-span-6 min-h-screen">
				<section className="flex flex-col justify-center items-center min-h-screen">
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="bg-default-50 p-6 border border-default-100 rounded-2xl max-w-sm w-full"
						noValidate
					>
						<h1 className="text-2xl text-default-700 font-semibold">Sign In</h1>
						<p className="text-base text-default-300">Control de asistencias</p>
						<section className="flex flex-col gap-6 mt-6">
							<section>
								<label htmlFor="cedula" className="block text-base text-default-500 font-medium mb-2">Cédula</label>
								<Input
									id="cedula"
									fullWidth
									autoFocus
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
							<section>
								<label htmlFor="password" className="block text-base text-default-500 font-medium mb-2">Contraseña</label>
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
							
							{
								loading ? (
									<Button
										type="submit"
										fullWidth
										variant="solid"
										color="default"
										size="lg"
										isDisabled
										startContent={
											<Spinner color="success" />
										}
									>Cargando...</Button>
								) : (
									<Button
										type="submit"
										fullWidth
										variant="solid"
										color="primary"
										size="lg"
									>Sign In</Button>
								)
							}
						</section>
						{error.error && (
							<p role="alert" className="text-red-500 text-sm text-center">
								{error.message}
							</p>
						)}
					</form>
					<section className="max-w-xs mx-auto mt-2">
						<p className="text-sm text-default-400 text-center">Para obtener una cuenta de acceso debes solicitarla al administrador</p>
					</section>
				</section>
			</section>
			<section
				className="col-span-6 min-h-screen"
				style={{
					backgroundImage: "url(/img/alien-bg.jpg)",
					backgroundPosition: "top center",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover"
				}}
			>
				<section className="p-6">
					<Image width={64} height={64} src="/img/logo-alien.png" alt="Alien Studio Logo" className="w-16 h-16" />
				</section>
			</section>
		</section>
	);
}
