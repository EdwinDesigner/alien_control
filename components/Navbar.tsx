"use client";

import { ThemeSwitch } from "@/components/theme-switch";
import {
  Navbar as NavbarNextUi,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import {
  Dropdown,
  DropdownTrigger,
  User,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { signOut, signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const Navbar = () => {

  const router = useRouter();

  const { data: session } = useSession();

  return (
    <NavbarNextUi isBordered className="py-2">
      <NavbarBrand>
        <Link href="/">
          <Image
            width={64}
            height={64}
            src="/img/logo-alien.png"
            alt="Logo Alien"
            priority
            className="w-16 h-16"
          />
        </Link>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem>
          <Dropdown placement="bottom-start">
            <DropdownTrigger>
              <User
                as="button"
                avatarProps={{
                  isBordered: true,
                  src: "",
                }}
                className="transition-transform"
                description={session?.user.role}
                name={session?.user.fullname}
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Navigation" variant="flat">
              <DropdownItem key="perfil">Perfil</DropdownItem>
              {
                session?.user.isAdmin as any && <DropdownItem key="dashboard" onClick={() => router.push("/dashboard")}>Dashboard</DropdownItem>
              }
              <DropdownItem key="logout" color="danger" onClick={() => signOut()}>
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>
    </NavbarNextUi>
  );
};
