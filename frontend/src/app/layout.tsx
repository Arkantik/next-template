import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import "./globals.css";

export const metadata: Metadata = {
	title: "NextJS Template",
	description: "Boiler plate for NextJS with TypeScript, TailwindCSS, ESLint, Prettier & GraphQL",
	creator: "Jérémy Dohin",
	keywords: ["A", "B", "C"],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body suppressHydrationWarning>
				{children}
				<ToastContainer />
			</body>
		</html>
	);
}

