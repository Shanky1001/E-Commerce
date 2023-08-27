"use client"

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "@/redux/store";
import CommonModal from "@/components/commonModal";
import Toast from "@/components/Toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "ShopMate",
	description: "Made by Shashank Rai",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ReduxProvider store={store}>
					<NavBar />
					<main className="flex min-h-screen flex-col mt-[80px]">
						{children}
					</main>
					<CommonModal />
					<Toast />
				</ReduxProvider>
			</body>
		</html>
	);
}
