import Head from "next/head";
import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
    pageTitle?: string;
}

export default function Layout({ children, pageTitle }: LayoutProps) {
    return (
        <>
            <Head>
                <title>The Good Corner - {pageTitle}</title>
                <meta name="description" content="ads website" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="main-content">{children}</main>
        </>
    );
}
