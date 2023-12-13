import Head from "next/head";
import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
    pageTitle?: string;
}

export default function LayoutAdmin({ children, pageTitle }: LayoutProps) {
    return (
        <>
            <Head>
                <title>The Admin Corner - {pageTitle}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex h-[100vh]">
                <main className="p-6 overflow-y-auto">{children}</main>
            </div>
        </>
    );
}
