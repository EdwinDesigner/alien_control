"use client";

import {
  Tabs,
  Tab,
  Button,
  Spinner,
} from "@nextui-org/react";
import {
  AddUserIcon,
  HomeIcon,
  TimeIcon,
  UsersIcon,
} from "@/components/icons";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import AllUsers from "@/components/AllUsers";
import { RegisterUser } from "@/components/RegisterUser";
import { Shedule } from "@/components/Shedule";

export default function DashboardPage() {
  const router = useRouter();

  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="w-full flex justify-center items-center mt-8">
        <Spinner color="success" />
      </div>
    );
  }

  if (!session?.user.isAdmin) {
    return (
      <div className="min-h-screen w-full h-full flex justify-center items-center">
        <div className="max-w-sm">
          <h2 className="text-2xl text-default-500 font-semibold text-center">
            No tienes autorización para acceder a esta vista.
          </h2>
          <div className="flex justify-center mt-8">
            <Button
              size="lg"
              variant="shadow"
              color="primary"
              onClick={() => router.push("/")}
            >
              Volver al inicio
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      
      <div className="flex flex-col w-full">
        <Tabs
          fullWidth
          aria-label="Opciones"
          color="primary"
          variant="underlined"
          classNames={{
            tabList:
              "gap-6 w-full relative rounded-none p-0 border-b border-divider flex justify-center",
            cursor: "w-full bg-emerald-500",
            tab: "max-w-fit px-0 h-12",
            tabContent: "group-data-[selected=true]:text-emerald-500",
          }}
        >
          <Tab
            key="inicio"
            title={
              <div className="flex items-center space-x-2">
                <HomeIcon />
                <span>Inicio</span>
              </div>
            }
          >
            <div className="bg-default-50 rounded-2xl p-4">asd</div>
          </Tab>
          <Tab
            key="asistencias"
            title={
              <div className="flex items-center space-x-2">
                <TimeIcon />
                <span>Asistencias</span>
              </div>
            }
          >
            <Shedule />
          </Tab>
          <Tab
            key="usuarios"
            title={
              <div className="flex items-center space-x-2">
                <UsersIcon />
                <span>Usuarios</span>
              </div>
            }
          >
            <div className="bg-default-50 rounded-2xl p-4">
              <Tabs
                fullWidth
                aria-label="Opciones"
                color="primary"
                variant="underlined"
                classNames={{
                  tabList:
                    "gap-6 w-full relative rounded-none p-0 border-b border-divider flex justify-center",
                  cursor: "w-full bg-emerald-500",
                  tab: "max-w-fit px-0 h-12",
                  tabContent: "group-data-[selected=true]:text-emerald-500",
                }}
              >
                <Tab
                  key="allusers"
                  title={
                    <div className="flex items-center space-x-2">
                      <UsersIcon />
                      <span>Todos los usuarios</span>
                    </div>
                  }
                >
                  <div className="bg-default-50 rounded-2xl p-4">
                    <AllUsers />
                  </div>
                </Tab>
                <Tab
                  key="createuser"
                  title={
                    <div className="flex items-center space-x-2">
                      <AddUserIcon />
                      <span>Crear nuevo usuario</span>
                    </div>
                  }
                >
                  <div className="bg-default-50 rounded-2xl py-4">
                    <RegisterUser />
                  </div>
                </Tab>
              </Tabs>
            </div>
          </Tab>
        </Tabs>
      </div>
    </>
  );
}
