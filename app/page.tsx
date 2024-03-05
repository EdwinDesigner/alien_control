import { Attendance } from "@/components/Attendance";
import HistorialTable from "@/components/HistorialTable";
import { LayoutNavigation } from "@/components/layout/LayoutNavigation";
import { signIn } from "next-auth/react";

export default async function HomePage() {

	return (
		<LayoutNavigation>
			<section className="container mx-auto mt-10">
				<Attendance />
				<HistorialTable />
			</section>
		</LayoutNavigation>
	);
}
